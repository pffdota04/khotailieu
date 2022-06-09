import { Box, Typography } from "@mui/material";

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
          just jsx + state + noapi + query <strong>'{props}'</strong>
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
    const searchResulf = await axios.get(
      `https://hcmute.netlify.app/api/search?keyword=a&type=all&category=all`
    );
    return {
      props: {
        searchResulf: searchResulf,
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
