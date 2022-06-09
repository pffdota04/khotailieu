import { Typography } from "@mui/material";
import style from "./../styles/Search.module.scss";

const RemoveAll = (props) => {
  return (
    <div style={{ paddingTop: "66px" }} className={style.search}>
      <Typography variant="h4" gutterBottom alignItems="center" p={1}>
        remove all <strong>'{JSON.stringify(props)}'</strong>
      </Typography>
    </div>
  );
};
export default RemoveAll;

export async function getServerSideProps(context) {
  try {
    // const query = context.query;
    // const searchResulf = await axios.get(
    //   `https://hcmute.netlify.app/api/search?keyword=` +
    //     query.keyword.toLowerCase() +
    //     `&type=` +
    //     query.type +
    //     `&category=` +
    //     query.category
    // );
    return {
      props: {
        searchResulf: "????",
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
