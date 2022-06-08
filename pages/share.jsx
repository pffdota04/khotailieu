// firebase

import { useEffect, useState } from "react";
import {
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Box,
  TextField,
  Typography,
  Divider,
  Fab,
  Modal,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Router from "next/router";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import axios from "axios";

const includeNames = [
  "Word",
  "PDF",
  "Powerpoint",
  "Ảnh",
  "Video",
  "PSD",
  "Github",
  "Source Code",
  "ESP",
  "DWG",
  "Khác...",
];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Share = () => {
  const [info, setInfo] = useState({ name: "", author: "" });
  const [includes, setIncludes] = useState([]);
  const [category, setCategory] = useState("Công nghệ thông tin");
  const [type, setType] = useState("exam");

  const [openModal, setOpenModal] = useState(false);
  const [links, setLinks] = useState([{ type: "drive", desc: "", link: "" }]);

  const [countCheck, setCountCheck] = useState(0);
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIncludes(typeof value === "string" ? value.split(",") : value);
  };

  const send = () => {
    if (info.name == "" || info.author == "" || includes.length === 0)
      alert("Thông tin chung không được để trống");
    else {
      links.map((e, i) => {
        if (e.link == "") {
          alert("Link thứ " + (i + 1) + " trống!");
          return;
        }
      });
      axios({
        method: "post",
        url: `https://hcmute.netlify.app/api/pending`,
        data: {
          info: { ...info, type: type, category: category, include: includes },
          detail: links,
        },
      })
        .then((response) => {
          setCountCheck(-1);
        })
        .catch((e) => {
          setCountCheck(-2);
        });
    }
  };

  useEffect(() => {});

  return (
    <Container sx={{ paddingTop: "65px" }}>
      <Grid container columns={24} m={0} alignItems="flex-start">
        <Grid
          container
          md={6}
          xs={12}
          m={0}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} p={1}>
            <Typography variant="h5" textAlign="center">
              Thông tin chung
            </Typography>
          </Grid>
          <Grid item xs={12} p={1}>
            <TextField
              label="Quý danh"
              helperText="Không muốn để tên thật? Hãy để lại một nghệ danh thật ngầu"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, author: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={12} p={1}>
            <TextField
              label="Tên tài liệu muốn chia sẻ"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={6} p={1}>
            <TextField
              id="outlined-select-currency-native"
              label="Loại"
              select
              fullWidth
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="docs">Tài liệu</MenuItem>
              <MenuItem value="project">Đồ án</MenuItem>
              <MenuItem value="exam">Đề thi</MenuItem>
              <MenuItem value="report">Tiểu luận</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6} p={1}>
            <TextField
              id="outlined-select-currency-native"
              label="Lĩnh vực"
              fullWidth
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Công nghệ thông tin">
                Công nghệ thông tin
              </MenuItem>
              <MenuItem value="Cơ khí">Cơ khí</MenuItem>
              <MenuItem value="Điện - Điện tử">Điện - Điện tử</MenuItem>
              <MenuItem value="In và Truyền thông">In và Truyền thông</MenuItem>
              <MenuItem value="Kinh tế">Kinh tế</MenuItem>
              <MenuItem value="Khoa học ứng dụng">Khoa học ứng dụng</MenuItem>
              <MenuItem value="Lý luận Chính trị">Lý luận Chính trị</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }} p={1}>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Bao gồm</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={includes}
                  onChange={handleChange}
                  variant="outlined"
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {includeNames.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, includes, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {includes.length > 0 && (
              <Box alignItems="center" display="flex">
                <ClearIcon onClick={() => setIncludes([])} />
              </Box>
            )}
          </Grid>
        </Grid>
        <Grid container md={6} xs={12} m={0} justifyContent="center">
          <Grid item xs={12} p={1}>
            <Typography variant="h5" textAlign="center">
              Thông tin Link
            </Typography>
          </Grid>
          {links.map((e, i) => (
            <>
              <Grid
                item
                xs={12}
                p={1}
                sx={{
                  display: "flex",
                  backgroundColor: "grey.main",
                  marginBottom: 1,
                }}
              >
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{ flexGrow: 0, display: "flex" }}
                >
                  Link thứ {i + 1}
                </Typography>
                {i !== 0 && (
                  <Box
                    alignItems="center"
                    sx={{ flexGrow: 1, display: "flex" }}
                  >
                    <ClearIcon
                      onClick={() => {
                        const copy = [...links];
                        copy.splice(i, 1);
                        setLinks(copy);
                      }}
                      sx={{ marginLeft: "auto" }}
                    />
                  </Box>
                )}
              </Grid>
              <Grid item xs={6} p={1}>
                <TextField
                  id="outlined-select-currency-native"
                  label="Đây là link gì?"
                  select
                  fullWidth
                  value={links[i].type}
                  onChange={(e) => {
                    let a = [...links];
                    a[i].type = e.target.value;
                    setLinks(a);
                  }}
                >
                  <MenuItem value="drive">Google Drive</MenuItem>
                  <MenuItem value="youtube">Youtube</MenuItem>
                  <MenuItem value="web">Link trang web</MenuItem>
                  <MenuItem value="github">Github</MenuItem>
                  <MenuItem value="imgur">Imgur</MenuItem>
                  <MenuItem value="1drive">One Drive</MenuItem>
                  <MenuItem value="dropBox">DropBox</MenuItem>
                  <MenuItem value="orther">Khác...</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6} p={1}>
                <TextField
                  label="Mô tả ngắn"
                  fullWidth
                  onChange={(e) => {
                    let a = [...links];
                    a[i].desc = e.target.value;
                    setLinks(a);
                  }}
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  label="Link"
                  fullWidth
                  onChange={(e) => {
                    let a = [...links];
                    a[i].link = e.target.value;
                    setLinks(a);
                  }}
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <Divider variant="middle" />
              </Grid>
            </>
          ))}

          <Grid
            item
            xs={12}
            p={1}
            justifyContent="center"
            display="flex"
            onClick={() =>
              setLinks((prev) => [
                ...prev,
                { type: "drive", desc: "", link: "" },
              ])
            }
          >
            <Button>Thêm link</Button>
          </Grid>
        </Grid>
      </Grid>
      <Fab
        color="primary"
        sx={{ position: "fixed", m: 1, bottom: 0, right: 0 }}
        variant="extended"
        onClick={() => {
          setOpenModal(true);
          setCountCheck(0);
        }}
      >
        Next <NavigateNextIcon />
      </Fab>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            maxWidth: 600,
            minWidth: 300,
            p: 4,
          }}
        >
          {countCheck == -1 ? (
            <>
              <Alert variant="filled" severity="success" m={1} sx={{ m: 1 }}>
                Chia sẽ sẽ được xét duyệt trước khi xuất bản, cảm ơn bạn nhiều!
              </Alert>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  onClick={() => {
                    setOpenModal(false);
                    // clear all state
                  }}
                >
                  Okela
                </Button>
              </Box>
            </>
          ) : countCheck == -2 ? (
            <>
              <Alert variant="filled" severity="danger" m={1} sx={{ m: 1 }}>
                Oppps... Đã xảy ra lỗi, hãy thử lại. Mong bạn thông cảm!
              </Alert>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "danger.main" }}
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  Ok
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nghe đây, người anh em.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        e.target.checked
                          ? setCountCheck((prev) => prev + 1)
                          : setCountCheck((prev) => prev - 1)
                      }
                    />
                  }
                  label="Kiểm tra chắc chắn đã điền đúng link."
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        e.target.checked
                          ? setCountCheck((prev) => prev + 1)
                          : setCountCheck((prev) => prev - 1)
                      }
                    />
                  }
                  label="Nội dung phải sạch sẽ (không virus, không link bậy bạ)."
                />
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        e.target.checked
                          ? setCountCheck((prev) => prev + 1)
                          : setCountCheck((prev) => prev - 1)
                      }
                    />
                  }
                  label="Đừng gửi link pỏn nữa, tôi đuối lắm."
                />
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  disabled={countCheck !== 3}
                  onClick={() => {
                    send();
                  }}
                >
                  Gửi
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Share;
