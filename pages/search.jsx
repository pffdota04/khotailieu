import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  CardActionArea,
  Badge,
} from "@mui/material";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
import { Container } from "@mui/system";
import style from "./../styles/Search.module.scss";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import ListItemIcon from "@mui/material/ListItemIcon";

import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import PhotoIcon from "@mui/icons-material/Photo";

export async function getServerSideProps(context) {
  const a = context.query;
  console.log(a);
  try {
    const searchResulf = await axios.get(
      `http://localhost:3000/api/search?keyword=` +
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
    console.error(error);
    return {
      props: {
        searchResulf: null,
      },
    };
  }
}

const convertType = {
  project: "Đồ án",
  exam: "Đề thi",
  docs: "Tài liệu",
  report: "Tiểu luận",
};
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

      //   Router.push({
      //     pathname: "/",
      //   });
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
          `http://localhost:3000/api/search?keyword=` +
            value.toLowerCase() +
            `&type=` +
            selectType +
            `&category=` +
            selectCategory
        );
        setData(searchResulf.data);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    setSearchFor(value);
  };

  const renderIcon = (icon) => {
    return (
      <ListItemIcon sx={{ minWidth: 28 }}>
        {icon == 0 ? (
          <StickyNote2Icon color="primary" />
        ) : icon == 1 ? (
          <QuizIcon color="primary" />
        ) : icon == 2 ? (
          <AccountTreeIcon color="primary" />
        ) : (
          <ArticleIcon color="primary" />
        )}
      </ListItemIcon>
    );
  };

  const renderTypeIcon = (icon) => {
    return icon.includes("word") ? (
      <ChromeReaderModeIcon />
    ) : icon.includes("powerpoint") ? (
      <SlideshowIcon />
    ) : icon.includes("demo") ? (
      <OndemandVideoIcon />
    ) : icon.includes("Github") ? (
      <GitHubIcon />
    ) : icon.includes("pdf") ? (
      <PictureAsPdfIcon />
    ) : icon.includes("nh chụp") ? (
      <PhotoIcon />
    ) : (
      <FilePresentIcon />
    );
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
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {data.length > 0 ? (
              data.map((e) => (
                <Card
                  variant="elevation"
                  color="primary"
                  sx={{
                    opacity: 0.85,
                    boxShadow: 3,
                    "&:hover": {
                      opacity: 1,
                      backgroundColor: "#e8e8e8",
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      Router.push({
                        pathname: "/detail/" + e.id,
                      });
                    }}
                  >
                    <CardContent>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          color="primary"
                        >
                          {renderIcon(Object.keys(convertType).indexOf(e.type))}
                          {convertType[e.type]}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {e.major}
                        </Typography>
                      </Stack>
                      <Typography variant="h5" component="div">
                        {e.name}
                      </Typography>
                      <Typography sx={{ fontSize: 15 }} component="div">
                        Upload by: {e.author} | Upload day: {e.date}
                      </Typography>

                      <Typography variant="body2">
                        Bao gồm:{" "}
                        {e.include.map((e) => (
                          <Chip icon={renderTypeIcon(e)} label={e} />
                        ))}
                      </Typography>
                    </CardContent>

                    {/* <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button size="small" variant="outlined" color="primary">
                      Xem Chi Tiết
                    </Button>
                  </CardActions> */}
                  </CardActionArea>
                </Card>
              ))
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
      </Container>
    </div>
  );
}
