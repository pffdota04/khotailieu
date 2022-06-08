import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import PhotoIcon from "@mui/icons-material/Photo";
import { Chip } from "@mui/material";

export default function MyChip({ type, sx, key }) {
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
  return <Chip icon={renderTypeIcon(type)} label={type} sx={sx} />;
}
