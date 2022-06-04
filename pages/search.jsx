import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
import { Container } from "@mui/system";
import style from "./../styles/Search.module.scss";
import CardItem from "../components/CardItem/Card";

import Image from "next/image";
import Hori1 from "./../assets/images/hori.png";

export default function Search(props) {
  const { keyword, type, category } = useRouter().query;
  const [selectType, setType] = useState(type);
  const [searchText, setSearchText] = useState(keyword);
  const [selectCategory, setCategory] = useState(category);
  const [data, setData] = useState([]);
  const [searchFor, setSearchFor] = useState(keyword);

  useEffect(() => {
    console.log(props);
    if (props.searchResulf == null) {
      alert("Không tìm thấy");
    } else {
      setData(props.searchResulf);
    }
  }, []);

  useEffect(() => {
    searching(searchText);
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
        const searchResulf = await axios.get(
          `https://hcmute.netlify.app/api/search?keyword=` +
            value.toLowerCase() +
            `&type=` +
            selectType +
            `&category=` +
            selectCategory
        );
        Router.push({
          pathname: "/search",
          query: {
            keyword: value,
            type: selectType,
            category: selectCategory,
          },
        });
        setData(searchResulf.data);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    setSearchFor(value);
  };

  return (
    <div style={{ paddingTop: "66px" }} className={style.search}>
      <Box textAlign="center">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          alignItems="center"
          p={1}
        >
          Kết quả tìm kiếm cho <strong>'{searchFor}'</strong>
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
              labelId="demo-select-small"
              value={selectType}
              onChange={handleChangeType}
            >
              <MenuItem value="all">
                <em>All </em>
              </MenuItem>
              <MenuItem value="docs">Tài liệu</MenuItem>
              <MenuItem value="project">Đồ án</MenuItem>
              <MenuItem value="exam">Đề thi</MenuItem>
              <MenuItem value="report">Tiểu luận</MenuItem>
            </TextField>
          </Grid>
          <Grid item sm={3} xs={6}>
            <TextField
              fullWidth
              size="normal"
              id="outlined-select-currency-native"
              label="Lĩnh vực"
              select
              labelId="demo-select-small"
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
            <Grid item xs={2} alignItems="center" sx={{
            display: { xs: "none", md: "block" } 
          }}>
            <Image
              alt="Vercel logo"
              src={Hori1}
              sx={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                {data.length > 0 ? (
                  data.map((e) => <CardItem item={e} />)
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
          <Grid item xs={2} alignItems="center" sx={{
            display: { xs: "none", md: "block" } 
          }}>
            <Image
              alt="Vercel logo"
              src={Hori1}
              sx={{
                maxWidth: "100%",
                height: "auto",
                
              }}
              style={{ transform: "scaleX(-1)"}}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const a = context.query;
  try {
    const searchResulf = await axios.get(
      `https://hcmute.netlify.app/api/search?keyword=` +
        a.keyword.toLowerCase() +
        `&type=` +
        a.type +
        `&category=` +
        a.category
    );
    return {
      props: {
        searchResulf: searchResulf.data,
      },
    };
  } catch (error) {
    console.error("error");
    return {
      props: {
        searchResulf: null,
      },
    };
  }
}
