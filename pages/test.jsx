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
import Image from "next/image";
import Hori1 from "./../assets/images/hori.png";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";

const LetSearch = (props) => {
  const { keyword, type, category } = useRouter().query;
  const [selectType, setType] = useState(type);
  const [searchText, setSearchText] = useState(keyword);
  const [selectCategory, setCategory] = useState(category);
  const [searchFor, setSearchFor] = useState(keyword);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (props.searchResulf == null) setLoadingInfo(false);
    else {
      setData(props.searchResulf);
      if (props.searchResulf.length < 6) setHasMore(false);
      let infoResult = [];
      Promise.all(
        props.searchResulf.slice(0, 6).map(async (e) => {
          infoResult.push(
            (await axios.get(window.location.origin + `/api/info/` + e.id)).data
          );
        })
      )
        .then(() => {
          setDataInfo(infoResult);
          setLoadingInfo(false);
        })
        .catch(() => setLoadingInfo(false));
    }
  }, []);

  useEffect(() => {
    if (!init) {
      searching(searchText);
    }
    setInit(false);
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
    if (value == "") alert("Nh???p v??o tr???ng!");
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
            value.toLowerCase() +
            `&type=` +
            selectType +
            `&category=` +
            selectCategory
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
        <title key="title">T??m t??i li???u t???i UTEshare</title>
        <meta name="description" content="Some Page Description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content={
            "T??m ki???m '" +
            keyword +
            "': " +
            (props.searchResulf
              ? props.searchResulf[0].keyword + "..."
              : "Kh??ng t??m th???y!")
          }
        />
        <meta
          property="og:description"
          content={
            "K???t qu??? t??m ki???m cho '" +
            keyword +
            "': " +
            (props.searchResulf
              ? props.searchResulf[0].keyword + "..."
              : "Kh??ng t??m th???y!")
          }
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
          K???t qu??? t??m ki???m cho <strong>{searchFor}</strong>
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
              label="T??m t??i li???u"
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
              label="Lo???i"
              select
              value={selectType}
              onChange={handleChangeType}
            >
              <MenuItem value="all">
                <em>All </em>
              </MenuItem>
              <MenuItem value="docs">T??i li???u</MenuItem>
              <MenuItem value="project">????? ??n</MenuItem>
              <MenuItem value="exam">????? thi</MenuItem>
              <MenuItem value="report">Ti???u lu???n</MenuItem>
            </TextField>
          </Grid>
          <Grid item sm={3} xs={6}>
            <TextField
              fullWidth
              size="normal"
              id="outlined-select-currency-native"
              label="L??nh v???c"
              select
              value={selectCategory}
              onChange={handleChangeCategory}
              sx={{ backgroundColor: "grey.light" }}
            >
              <MenuItem value="all">
                <em>All </em>
              </MenuItem>
              <MenuItem value="C??ng ngh??? th??ng tin">
                C??ng ngh??? th??ng tin
              </MenuItem>
              <MenuItem value="C?? kh??">C?? kh??</MenuItem>
              <MenuItem value="??i???n - ??i???n t???">??i???n - ??i???n t???</MenuItem>
              <MenuItem value="In v?? Truy???n th??ng">In v?? Truy???n th??ng</MenuItem>
              <MenuItem value="Kinh t???">Kinh t???</MenuItem>
              <MenuItem value="Khoa h???c ???ng d???ng">Khoa h???c ???ng d???ng</MenuItem>
              <MenuItem value="L?? lu???n Ch??nh tr???">L?? lu???n Ch??nh tr???</MenuItem>
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
                <Typography
                  variant="h6"
                  gutterBottom={false}
                  component="div"
                  textAlign="center"
                  backgroundColor="primary"
                >
                  T??m th???y {data.length} k???t qu???
                </Typography>
                {loadingInfo ? (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </Box>
                ) : dataInfo.length > 0 ? (
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
                ) : (
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    textAlign="center"
                    backgroundColor="primary"
                  >
                    Kh??ng t??m th???y
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

export async function getServerSideProps(context) {
  try {
    const query = context.query;
    const searchResulf = await axios.get(
      `https://hcmute.netlify.app/api/search?keyword=` +
        query.keyword.toLowerCase() +
        `&type=` +
        query.type +
        `&category=` +
        query.category
    );
    return {
      props: {
        searchResulf: searchResulf.data,
      },
    };
  } catch (error) {
    console.error("error");
    console.error(error);
    return {
      props: {
        searchResulf: null,
      },
    };
  }
}
