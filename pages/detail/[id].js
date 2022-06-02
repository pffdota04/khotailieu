import { useRouter } from "next/router";
import axios from 'axios';

const Detail = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ paddingTop: "66px" }}>
      <p>Lorem</p>
      <p>ID: {props.data.id}</p>
      {props.data.data.map(e=> <p>{e.name} ========> {e.link}</p>)}
    </div>
  );
};
export default Detail;

export async function getServerSideProps(context) {
  const a = context.query;
  try {
    const data = await axios.get(
      `http://localhost:3000/api/detail/` + a.id
    );
    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}
