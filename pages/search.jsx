import dynamic from "next/dynamic";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
import { Container } from "@mui/system";
import style from "./../styles/Search.module.scss";
import CardItem from "../components/CardItem/Card";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import Hori1 from "./../assets/images/hori.png";
import Image from "next/image";
const LetSearch = (props) => {
  const router = useRouter();
  const [searchParams, SerearchParams] = useState({
    keyword: undefined,
    type: undefined,
    category: undefined,
  });

  const [selectType, setType] = useState();
  const [searchText, setSearchText] = useState();
  const [selectCategory, setCategory] = useState();
  const [searchFor, setSearchFor] = useState();

  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (router.isReady) searchFirst();
  }, [router.isReady]);

  const searchFirst = async () => {
    const URLSearch = new URLSearchParams(window.location.search);
    let nowParams = {
      keyword: URLSearch.get("keyword"),
      type: URLSearch.get("type"),
      category: URLSearch.get("category"),
    };
    setType(nowParams.type);
    setCategory(nowParams.category);
    setSearchFor(nowParams.keyword);
    SerearchParams(nowParams);

    if (
      nowParams.keyword == "" ||
      nowParams.keyword == " " ||
      nowParams.keyword == null ||
      nowParams.keyword == undefined
    )
      // router.push("404");
      alert("Không tìm thấy kết quả nào");
    else {
      try {
        const url =
          `https://hcmute.netlify.app/api/search?keyword=` +
          encodeURIComponent(nowParams.keyword) +
          `&type=` +
          encodeURIComponent(nowParams.type) +
          `&category=` +
          encodeURIComponent(nowParams.category);
        const searchResulf = await axios.get(url);
        setData(searchResulf.data);
        if (searchResulf.data.length < 6) setHasMore(false);
        let infoResult = [];
        Promise.all(
          searchResulf.data.slice(0, 6).map(async (e) => {
            infoResult.push(
              (await axios.get(window.location.origin + `/api/info/` + e.id))
                .data
            );
          })
        )
          .then(() => {
            setDataInfo(infoResult);
            setLoadingInfo(false);
          })
          .catch(() => setLoadingInfo(false));
      } catch (error) {
        console.error(error);
        setDataInfo([]);
        setData([]);
        setLoadingInfo(false);
      }
    }
  };

  useEffect(() => {
    if (!init) {
      searching(searchText);
    }
  }, [selectCategory, selectType]);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const searchHanlder = (event) => {
    if (event.key === "Enter") {
      searching(event.target.value);
    }
  };

  const searching = async (value) => {
    if (value == "") alert("Nhập vào trống!");
    else
      try {
        setLoadingInfo(true);
        Router.push(
          {
            pathname: "/search",
            query: {
              keyword: value,
              type: selectType,
              category: selectCategory,
            },
          },
          undefined,
          { shallow: true }
        );
        const searchResulf = await axios.get(
          window.location.origin +
            `/api/search?keyword=` +
            encodeURIComponent(value) +
            `&type=` +
            encodeURIComponent(selectType) +
            `&category=` +
            encodeURIComponent(selectCategory)
        );
        if (searchResulf.length < 6) setHasMore(false);
        else setHasMore(true);
        setData(searchResulf.data);
        let infoResult = [];
        await Promise.all(
          searchResulf.data.slice(0, 6).map(async (e) => {
            infoResult.push(
              (await axios.get(window.location.origin + `/api/info/` + e.id))
                .data
            );
          })
        );
        setLoadingInfo(false);
        setDataInfo(infoResult);
      } catch (error) {
        console.error(error);
        setDataInfo([]);
        setData([]);
        setLoadingInfo(false);
      }
    setSearchFor(value);
    setInit(false);

  };

  const fetchMoreData = async () => {
    let nunber = 6;
    console.log("FETCHHHHHH   ");
    let infoResult = [];
    await Promise.all(
      data.slice(dataInfo.length, dataInfo.length + nunber).map(async (e) => {
        infoResult.push(
          (await axios.get(window.location.origin + `/api/info/` + e.id)).data
        );
      })
    )
      .then(() => {
        console.log("MORELENGT: " + infoResult.length);
        setDataInfo((prev) => [...prev].concat(infoResult));
        if (infoResult.length < 6) setHasMore(false);
        return;
      })
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ paddingTop: "66px" }} className={style.search}>
      <Head>
        <title key="title">Tìm tài liệu tại UTEshare </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google" content="notranslate" />
        <meta name="description" content={"Tìm kiếm tài liệu tại UTEshare"} />
        <meta
          property="og:description"
          content={"Tìm kiếm tài liệu tại UTEshare"}
        />
      </Head>
      <Box textAlign="center">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          alignItems="center"
          p={1}
        >
          Kết quả tìm kiếm cho <strong>{searchFor}</strong>
        </Typography>
      </Box>

      <Container
        sx={{
          opacity: 1,
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item sm={6} xs={12} textAlign="center">
            <TextField
              label="Tìm tài liệu"
              variant="outlined"
              id="validation-outlined-input"
              color="primary"
              type="search"
              fullWidth
              onKeyDown={(e) => searchHanlder(e)}
              sx={{ backgroundColor: "grey.light" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoComplete="off"
            />
          </Grid>
          <Grid item sm={3} xs={6}>
            <TextField
              sx={{ backgroundColor: "grey.light" }}
              fullWidth
              size="normal"
              id="outlined-select-currency-native"
              label="Loại"
              select
              value={selectType}
              onChange={handleChangeType}
            >
              <MenuItem value="all" selected={selectType === "all"}>
                <em>All </em>
              </MenuItem>
              <MenuItem value="docs" selected={selectType === "docs"}>
                Tài liệu
              </MenuItem>
              <MenuItem value="project" selected={selectType === "project"}>
                Đồ án
              </MenuItem>
              <MenuItem value="exam" selected={selectType === "exam"}>
                Đề thi
              </MenuItem>
              <MenuItem value="report" selected={selectType === "project"}>
                Tiểu luận
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item sm={3} xs={6}>
            <TextField
              fullWidth
              size="normal"
              id="outlined-select-currency-native"
              label="Lĩnh vực"
              select
              value={selectCategory}
              onChange={handleChangeCategory}
              sx={{ backgroundColor: "grey.light" }}
            >
              <MenuItem value="all">
                <em>All </em>
              </MenuItem>
              <MenuItem value="Công nghệ thông tin">
                Công nghệ thông tin
              </MenuItem>
              <MenuItem value="Cơ khí">Cơ khí</MenuItem>
              <MenuItem value="Điện - Điện tử">Điện - Điện tử</MenuItem>
              <MenuItem value="In và Truyền thông">In và Truyền thông</MenuItem>
              <MenuItem value="Kinh tế">Kinh tế</MenuItem>
              <MenuItem value="Khoa học ứng dụng">Khoa học ứng dụng</MenuItem>
              <MenuItem value="Lý luận Chính trị">Lý luận Chính trị</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" disableGutters sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            alignItems="center"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              alt="Vercel logo"
              src={Hori1}
              sx={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                {loadingInfo ? (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </Box>
                ) : dataInfo.length > 0 ? (
                  <>
                    <Typography
                      variant="h6"
                      gutterBottom={false}
                      component="div"
                      textAlign="center"
                      backgroundColor="primary"
                    >
                      Tìm thấy {data.length} kết quả
                    </Typography>
                    <InfiniteScroll
                      dataLength={dataInfo.length} //This is important field to render the next data
                      next={fetchMoreData}
                      hasMore={hasMore}
                      loader={
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <CircularProgress />
                        </Box>
                      }
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                    >
                      {dataInfo.map((e, i) => (
                        <CardItem item={e} key={i} />
                      ))}
                    </InfiniteScroll>
                  </>
                ) : (
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    textAlign="center"
                    backgroundColor="primary"
                  >
                    Không tìm thấy
                  </Typography>
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            alignItems="center"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              alt="Vercel logo"
              src={Hori1}
              sx={{
                maxWidth: "100%",
                height: "auto",
              }}
              style={{ transform: "scaleX(-1)" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default LetSearch;
