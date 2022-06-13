import {
  Box,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
import { Container } from "@mui/system";
import style from "./../styles/Search.module.scss";
import CardItem from "../components/CardItem/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import Hori1 from "./../assets/images/hori.png";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";

import { auth } from "../services/firebase";
import { detail } from "./../data/detail";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Admin = () => {
  const [userToken, setUserToken] = useState(null);
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
  const [select, setSelect] = useState(null);
  const [selectKey, setSelectKey] = useState(null);
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (currentUser !== null && currentUser.email == "pffdota04@gmail.com")
        currentUser
          .getIdTokenResult()
          .then((idTokenResult) => {
            console.log(idTokenResult.token);
            setUserToken(idTokenResult.token);
            getPending(idTokenResult.token);
          })
          .catch((error) => {
            console.log(error);
          });
      else router.push("404");
    });
  }, []);

  const getPending = async (idTokenResult) => {
    let a = await axios.get("https://hcmute.netlify.app/api/info", {
      headers: { Authorization: idTokenResult },
    });
    setData(Object.values(a.data));
    setKey(Object.keys(a.data));
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    let a = { ...select.info };
    a.include = typeof value === "string" ? value.split(",") : value;
    setSelect((prev) => ({ ...prev, info: a }));
  };

  const deleteInfo = async () => {
    const res = await axios.delete(
      "https://hcmute.netlify.app/api/info/" + selectKey,
      {
        headers: { Authorization: userToken },
      }
    );
    alert(JSON.stringify(res.data));
  };

  return (
    <div style={{ paddingTop: "66px" }} className={style.search}>
      <Container>
        {data.length !== 0 && (
          <>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">author</TableCell>
                      <TableCell align="right">name</TableCell>
                      <TableCell align="right">major</TableCell>
                      <TableCell align="right">date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, i) => (
                      <TableRow
                        hover
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        onClick={() => {
                          setSelect(row);
                          setSelectKey(key[i]);
                        }}
                      >
                        <TableCell align="right">{row.author}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.major}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            {select !== null && (
              <Paper sx={{ width: "100%", mb: 2 }}>
                <Grid
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} p={1}>
                    <TextField
                      label="Tên tác giả"
                      fullWidth
                      value={select.author}
                    />
                  </Grid>
                  <Grid item xs={6} p={1}>
                    <TextField
                      label="Tên tài liệu"
                      fullWidth
                      value={select.name}
                    />
                  </Grid>
                  <Grid item xs={6} p={1}>
                    <TextField
                      id="outlined-select-currency-native"
                      label="Lĩnh vực"
                      fullWidth
                      select
                      value={select.major}
                    >
                      <MenuItem value="Công nghệ thông tin">
                        Công nghệ thông tin
                      </MenuItem>
                      <MenuItem value="Cơ khí">Cơ khí</MenuItem>
                      <MenuItem value="Điện - Điện tử">Điện - Điện tử</MenuItem>
                      <MenuItem value="In và Truyền thông">
                        In và Truyền thông
                      </MenuItem>
                      <MenuItem value="Kinh tế">Kinh tế</MenuItem>
                      <MenuItem value="Khoa học ứng dụng">
                        Khoa học ứng dụng
                      </MenuItem>
                      <MenuItem value="Lý luận Chính trị">
                        Lý luận Chính trị
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6} sx={{ display: "flex" }} p={1}>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-chip-label">
                          Bao gồm
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={Object.values(select.include)}
                          // onChange={handleChange}
                          variant="outlined"
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
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
                              style={getStyles(
                                name,
                                Object.values(select.include),
                                theme
                              )}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" onClick={() => deleteInfo()}>
                    delete
                  </Button>
                </Box>
                {selectKey} | view:{select.view} | {select.status}
              </Paper>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
export default Admin;
