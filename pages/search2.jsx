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
  const { keyword, type, category } = useRouter().query;
  const [selectType, setType] = useState(type);
  const [searchText, setSearchText] = useState(keyword);
  const [selectCategory, setCategory] = useState(category);
  const [searchFor, setSearchFor] = useState(keyword);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);

  return (
    <div style={{ paddingTop: "66px" }} className={style.search}>
      <Head>
        <title key="title">Tìm tài liệu "{keyword}" tại KhoTaiLieu </title>
        <meta name="description" content="Some Page Description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content={
            "Tìm kiếm '" +
            keyword +
            "': " +
            (props.searchResulf
              ? props.searchResulf[0].keyword + "..."
              : "Không tìm thấy!")
          }
        />
        <meta
          property="og:description"
          content={
            "Kết quả tìm kiếm cho '" +
            keyword +
            "': " +
            (props.searchResulf
              ? props.searchResulf[0].keyword + "..."
              : "Không tìm thấy!")
          }
        />
      </Head>

      <Container
        sx={{
          opacity: 1,
          padding: "10px",
          borderRadius: "10px",
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
        <hr/>
        {JSON.stringify(props)}
      </Container>
    </div>
  );
};
export default Search;

export async function getServerSideProps(context) {
  try {
    console.log("START SEARCH: ");
    const a = context.query;
    const searchResulf = await axios.get(
      `https://hcmute.netlify.app/api/search?keyword=` +
        a.keyword.toLowerCase() +
        `&type=` +
        a.type +
        `&category=` +
        a.category
    );
    console.log("Search SSR COMPALTE");
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
