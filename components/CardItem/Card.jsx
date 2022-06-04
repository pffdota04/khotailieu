import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  CardActionArea,
} from "@mui/material";

import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import ListItemIcon from "@mui/material/ListItemIcon";

import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import PhotoIcon from "@mui/icons-material/Photo";
import Router from "next/router";

const CardItem = ({ item }) => {
  const convertType = {
    project: "Đồ án",
    exam: "Đề thi",
    docs: "Tài liệu",
    report: "Tiểu luận",
  };
  const renderTypeIcon = (icon) => {
    return icon.includes("word") ? (
      <ChromeReaderModeIcon />
    ) : icon.includes("powerpoint") ? (
      <SlideshowIcon />
    ) : icon.includes("demo") ? (
      <OndemandVideoIcon />
    ) : icon.includes("Github") ? (
      <GitHubIcon />
    ) : icon.includes("pdf") ? (
      <PictureAsPdfIcon />
    ) : icon.includes("nh chụp") ? (
      <PhotoIcon />
    ) : (
      <FilePresentIcon />
    );
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
  return (
    <Card
      variant="elevation"
      color="primary"
      sx={{
        opacity: 0.85,
        boxShadow: 3,
        "&:hover": {
          opacity: 1,
          backgroundColor: "#e8e8e8",
        },
      }}
    >
      <CardActionArea
        onClick={() => {
          Router.push({
            pathname: "/detail/" + item.id,
          });
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: 14 }} gutterBottom color="primary">
              {renderIcon(Object.keys(convertType).indexOf(item.type))}
              {convertType[item.type]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.major}
            </Typography>
          </Stack>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }} component="div">
            Upload by: {item.author} | Upload day: {item.date}
          </Typography>

          <Typography variant="body2">
            Bao gồm:{" "}
            {item.include.map((e) => (
              <Chip icon={renderTypeIcon(e)} label={e} />
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
