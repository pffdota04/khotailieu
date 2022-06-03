import { useRouter } from "next/router";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import LinkIcon from "@mui/icons-material/Link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
const Detail = (props) => {
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ paddingTop: "66px" }}>
      <p>Lorem</p>
      <p>ID: {props.data.id}</p>
      <Container>
        {props.data.data.map((e, i) => (
          <Accordion
            expanded={expanded === "panel" + i}
            onChange={handleChange("panel" + i)}
            sx={{
              ...(expanded === "panel" + i && { backgroundColor: "grey.main" }),
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {e.type == "drive" ? <AddToDriveIcon/> : e.type == "youtube" ? <YouTubeIcon/> : e.type == "github" ? <GitHubIcon/> : <ShareIcon/>}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Trạng thái:{" "}
                {e.status ? (
                  <GppGoodIcon color="primary" />
                ) : (
                  <GppBadIcon color="danger" />
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography>Mô tả: {e.desc}</Typography>
                <Typography>
                  Link:
                  <a target="_blank" href={e.link}>
                    <Button variant="contained">
                      Click here <LinkIcon />
                    </Button>
                  </a>
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};
export default Detail;

export async function getServerSideProps(context) {
  const a = context.query;
  try {
    const data = await axios.get(`https://hcmute.netlify.app/api/detail/` + a.id);
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
