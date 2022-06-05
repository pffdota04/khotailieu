import { Box, Grid, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import variables from "./../styles/Home.module.scss";
import { useState } from "react";
import Router from "next/router";

export default function IndexPage() {
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [onActive, setOnActive] = useState(false);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const searchHanlder = (event) => {
    if (event.key === "Enter") {
      if (event.target.value == "") alert("Nhập vào trống!");
      else
        Router.push({
          pathname: "/search",
          query: {
            keyword: event.target.value,
            type: type,
            category: category,
          },
        });
    }
  };

  return (
    <div style={{ background: "#000000" }}>
      <Box
        className={
          variables.home_hero +
          " " +
          (onActive ? variables.home_hero__active : "")
        }
      ></Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={variables.home_centerBox}
      >
        <Box
          sx={{
            backgroundColor: "grey.light",
            opacity: 0.5,
            ...(onActive && { opacity: 1 }),
            "&:hover": {
              opacity: 1,
            },
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
                onFocus={() => setOnActive(true)}
                fullWidth
                onKeyDown={(e) => searchHanlder(e)}
                autoComplete="off"
              />
            </Grid>
            <Grid item sm={3} xs={6}>
              <TextField
                sx={{ p: 1, minWidth: 100 }}
                fullWidth
                size="small"
                id="outlined-select-currency-native"
                label="Loại"
                select
                labelId="demo-select-small"
                value={type}
                onChange={handleChangeType}
                onFocus={() => setOnActive(true)}
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
                sx={{ p: 1 }}
                fullWidth
                size="small"
                id="outlined-select-currency-native"
                label="Lĩnh vực"
                select
                labelId="demo-select-small"
                value={category}
                onChange={handleChangeCategory}
                onFocus={() => setOnActive(true)}
              >
                <MenuItem value="all">
                  <em>All </em>
                </MenuItem>
                <MenuItem value="Công nghệ thông tin">
                  Công nghệ thông tin
                </MenuItem>
                <MenuItem value="Cơ khí">Cơ khí</MenuItem>
                <MenuItem value="Điện - Điện tử">Điện - Điện tử</MenuItem>
                <MenuItem value="In và Truyền thông">
                  In và Truyền thông
                </MenuItem>
                <MenuItem value="Kinh tế">Kinh tế</MenuItem>
                <MenuItem value="Khoa học ứng dụng">Khoa học ứng dụng</MenuItem>
                <MenuItem value="Lý luận Chính trị">Lý luận Chính trị</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
