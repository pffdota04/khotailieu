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

const Searchxxx = (props) => {
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
          Import + No State <strong>{JSON.stringify(props)}</strong>
        </Typography>
      </Box>
    </div>
  );
};
export default Searchxxx;

export async function getServerSideProps(context) {
  console.log("In getServerSideProps asd");
  try {
    var startTime = Date.now();
    const searchResulf = await axios.get(
      `https://hcmute.netlify.app/api/search?keyword=a&type=all&category=all`
    );
    const query = context.query;
    var endTime = Date.now();
    console.log(`Took ${endTime - startTime} milliseconds`);
    return {
      props: {
        searchResulf: searchResulf.data,
        query: query,
        time: endTime - startTime,
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
