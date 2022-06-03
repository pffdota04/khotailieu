import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  Tooltip,
  Avatar,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import PaidIcon from "@mui/icons-material/Paid";
import { getAuth, signOut } from "firebase/auth";
import "../../services/firebase";
import Link from "next/link";
import Router from "next/router";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const pages = ["Tài liệu", "Đề thi", "Đồ án", "Tiểu luận", "Donate"];
const getauth = getAuth();
export default function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const [user, setUser] = React.useState(undefined);

  useEffect(() => {
    getauth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      // currentUser
      //   .getIdTokenResult()
      //   .then((idTokenResult) => {
      //     console.log(idTokenResult);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    });
  }, [getauth]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const Logout = () => {
    signOut(getauth)
      .then(() => {
        alert("OUT");
      })
      .catch((error) => {
        alert("EOROROrr");
      });
  };

  const list = () => (
    <Box
      sx={250}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index == 0 ? (
                  <StickyNote2Icon />
                ) : index == 1 ? (
                  <QuizIcon />
                ) : index == 2 ? (
                  <AccountTreeIcon />
                ) : index == 3 ? (
                  <ArticleIcon />
                ) : (
                  <PaidIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <AutoStoriesSharpIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Apple Color Emoji",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <div
                onClick={() =>
                  Router.push({
                    pathname: "/",
                  })
                }
              >
                KhoTaiLieux
              </div>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {user === undefined ? (
                <HourglassBottomIcon />
              ) : user === null ? (
                <Typography
                  textAlign="center"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    Router.push({
                      pathname: "/login",
                    })
                  }
                >
                  Login
                </Typography>
              ) : (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
              )}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user === undefined ? (
                  ""
                ) : user === null ? (
                  ""
                ) : (
                  <>
                    <MenuItem>
                      <Typography textAlign="center">
                        {user.displayName}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => Logout()}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>

            {/* MOBLIE */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuSharpIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AutoStoriesSharpIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Apple Color Emoji",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div
                onClick={() =>
                  Router.push({
                    pathname: "/",
                  })
                }
              >
                KhoTaiLieux
              </div>
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              {user === undefined ? (
                <HourglassBottomIcon />
              ) : user === null ? (
                <Typography
                  textAlign="center"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    Router.push({
                      pathname: "/login",
                    })
                  }
                >
                  Login
                </Typography>
              ) : (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
              )}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user === undefined ? (
                  ""
                ) : user === null ? (
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      onClick={() =>
                        Router.push({
                          pathname: "/login",
                        })
                      }
                    >
                      Login
                    </Typography>
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem>
                      <Typography textAlign="center">
                        {user.displayName}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => Logout()}>
                      <Typography textAlign="center" >
                        Logout
                      </Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
