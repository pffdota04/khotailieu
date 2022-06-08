import { useRouter } from "next/router";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import LinkIcon from "@mui/icons-material/Link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import MyChip from "../../components/Chip/Chip";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import ListItemIcon from "@mui/material/ListItemIcon";
import style from "./../../styles/Detail.module.scss";
import Link from "next/link";

import share from "./../../assets/images/share.png";
import Image from "next/image";
const Detail = (props) => {
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const renderIcon = (icon) => {
    return (
      <ListItemIcon sx={{ minWidth: 28 }}>
        {icon == 0 ? (
          <StickyNote2Icon color="primary" />
        ) : icon == 1 ? (
          <QuizIcon color="primary" />
        ) : icon == 2 ? (
          <AccountTreeIcon color="primary" />
        ) : (
          <ArticleIcon color="primary" />
        )}
      </ListItemIcon>
    );
  };
  const convertType = {
    project: "Đồ án",
    exam: "Đề thi",
    docs: "Tài liệu",
    report: "Tiểu luận",
  };
  return (
    <div style={{ paddingTop: "66px" }} className={style.detail}>
      <Container>
        <Typography variant="h3" textAlign="center">
          {props.info.name}
        </Typography>

        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box>
                  {renderIcon(
                    Object.keys(convertType).indexOf(props.info.type)
                  )}{" "}
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    display="inline-block"
                  >
                    {convertType[props.info.type]}
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Uploadby: {props.info.author}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Date: {props.info.date}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Chuyên mục: {props.info.major}
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  View: {props.info.view}
                </Typography>
                <Box sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Bao gồm:{" "}
                  {props.info.include.map((e, i) => (
                    <MyChip type={e} sx={{ m: "1px" }} key={i} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            {props.data.data.map((e, i) => (
              <Accordion
                expanded={expanded === "panel" + i}
                onChange={handleChange("panel" + i)}
                sx={{
                  ...(expanded === "panel" + i && {
                    backgroundColor: "grey.main",
                  }),
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ width: "33%", flexShrink: 0 }}>
                    {e.type == "drive" ? (
                      <AddToDriveIcon />
                    ) : e.type == "youtube" ? (
                      <YouTubeIcon />
                    ) : e.type == "github" ? (
                      <GitHubIcon />
                    ) : (
                      <ShareIcon />
                    )}
                  </Box>
                  <Box sx={{ color: "text.secondary" }}>
                    Trạng thái:{" "}
                    {e.status ? (
                      <GppGoodIcon color="primary" />
                    ) : (
                      <GppBadIcon color="danger" />
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Typography>Mô tả: {e.desc}</Typography>
                    <Box>
                      Link:
                      <Button
                        variant="contained"
                        onClick={() => window.open(e.link)}
                      >
                        Click here <LinkIcon />
                      </Button>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
        <Box m={1}>
          <Link href="/share">
            <a href="/share">
              <Image src={share} alt="qc" />
            </a>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
export default Detail;

export async function getServerSideProps(context) {
  const a = context.query;
  try {
    const data = await axios.get(`https://hcmute.netlify.app/api/detail/` + a.id);
    const info = await axios.get(`https://hcmute.netlify.app/api/info/` + a.id);

    return {
      props: {
        data: data.data,
        info: info.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        info: null,
        data: null,
      },
    };
  }
}
