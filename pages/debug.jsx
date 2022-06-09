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

const Searchx = (props) => {
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
    console.log("USEEFFECTTTTTTE");
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
      <Box textAlign="center">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          alignItems="center"
          p={1}
        >
          just jsx + state + api <strong>'{props}'</strong>
        </Typography>
      </Box>


    </div>
  );
};
export default Searchx;

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
