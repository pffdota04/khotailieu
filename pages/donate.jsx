import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Free from "./../assets/images/freeforeve.png";
import Forever from "./../assets/images/forever.png";

export default function Donate() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        textAlign="center"
      >
        <Box gridColumn="span 8">
          <Box gridColumn="span 12">
            ALWAYS
            <Image
              alt="Vercel logo"
              src={Free}
              sx={{ maxWidth: "100%", height: "auto" }}
            />{" "}
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box sx={{ backgroundColor: "grey.main" }}> 4</Box>
        </Box>
        <Box gridColumn="span 4">
          <Box sx={{ backgroundColor: "grey.main" }}> 4</Box>
        </Box>
        <Box gridColumn="span 8">
          <Box sx={{ backgroundColor: "grey.main" }}> 4</Box>
        </Box>
      </Box>
    </div>
  );
}
