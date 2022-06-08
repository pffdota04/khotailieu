import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Router from "next/router";
import { alpha } from "@mui/material";
import axios from "axios";

export default function TypePage(props) {
  const [data, setData] = useState(props.searchResulf);
  const [filtered, setFiltered] = useState({
    all: [],
    sci: [],
    theo: [],
    elec: [],
    mech: [],
    it: [],
    eco: [],
    print: [],
  });
  useEffect(() => {
    if (data == null) {
      alert("Đã xảy ra lỗi");
      Router.push("/");
    } else {
      let all0 = [],
        sci0 = [],
        theo0 = [],
        elec0 = [],
        mech0 = [],
        it0 = [],
        eco0 = [],
        print0 = [];

      data.forEach((element) => {
        switch (element.major) {
          case "Khoa học ứng dụng": {
            sci0.push(element);
            break;
          }
          case "Lý luận Chính trị": {
            theo0.push(element);
            break;
          }
          case "Điện - Điện tử": {
            elec0.push(element);
            break;
          }
          case "Cơ khí": {
            mech0.push(element);
            break;
          }
          case "Công nghệ thông tin": {
            it0.push(element);
            break;
          }
          case "Kinh tế": {
            eco0.push(element);
            break;
          }
          case "In và Truyền thông": {
            print0.push(element);
            break;
          }
          default:
            break;
        }
      });
    }
  }, []);

  return (
    <Container sx={{ paddingTop: "65px" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        textAlign="center"
      >
        <Box textAlign="center" gridColumn="span 12">
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            alignItems="center"
            p={1}
          >
            TOP TÀI LIỆU
          </Typography>
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              alignItems="center"
              p={1}
            >
              Tất cả
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>Khoa học ứng dụng</Box>
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}> Lý luận Chính trị</Box>
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>Điện - Điện tử</Box>
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>Cơ khí</Box>
        </Box>{" "}
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}> Công nghệ thông tin</Box>
        </Box>{" "}
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>Kinh tế</Box>
        </Box>{" "}
        <Box gridColumn="span 6">
          <Box sx={{ backgroundColor: "grey.main" }}>In và Truyền thông</Box>
        </Box>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const a = context.query;
  try {
    const searchResulf = await axios.get(
      `http://localhost:3000/api/type/` + a.type
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
