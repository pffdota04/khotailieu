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

const Search = (props) => {
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
          remove state <strong>'{JSON.stringify(props)}'</strong>
        </Typography>
      </Box>

      <Container
        sx={{
          opacity: 1,
          padding: "10px",
          borderRadius: "10px",
        }}
      ></Container>
    </div>
  );
};
export default Search;

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
