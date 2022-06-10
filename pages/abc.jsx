import { Box, Typography } from "@mui/material";
import axios from "axios";

import { Container } from "@mui/system";
import style from "./../styles/Search.module.scss";

const Hehe = (props) => {
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
          just jsx + state + noapi + query{" "}
          <strong>'{JSON.stringify(props)}'</strong>
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
export default Hehe;

export async function getServerSideProps(context) {
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
