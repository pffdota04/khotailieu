import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  Avatar,
  Drawer,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import PaidIcon from "@mui/icons-material/Paid";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import "../../services/firebase";
import Link from "next/link";
import Router from "next/router";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ShareIcon from "@mui/icons-material/Share";

const pages = ["Tài liệu", "Đề thi", "Đồ án", "Tiểu luận", "Donate"];
export default function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const [user, setUser] = React.useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
  }, [auth]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
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
    signOut(auth)
      .then(() => {
        alert("OUT");
      })
      .catch((error) => {
        alert("EOROROrr");
      });
  };
  const appbarItemClick = (index) => {
    index == 0
      ? Router.push("/type/docs")
      : index == 1
      ? Router.push("/type/exam")
      : index == 2
      ? Router.push("/type/project")
      : index == 3
      ? Router.push("/type/report")
      : Router.push("/donate");
  };
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      disablePadding
    >
      <List>
        {/* {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => appbarItemClick(index)}>
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
        ))} */}
        <ListItem key={"4e423"} disablePadding>
          <ListItemButton onClick={() => Router.push("/share")}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={"Chia sẻ tài liệu"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <AutoStoriesSharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 0,
            }}
          >
            <Link href="/">
                <Typography
                  sx={{
                    color: "grey.light",
                  }}
                  id="logo-text"
                >
                  KhoTaiLieu
                </Typography>
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* {pages.map((page, i) => (
                <Button
                  key={page}
                  onClick={() => {
                    appbarItemClick(i);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}

            {/* <Button
              key={"xvxc"}
              onClick={() => {
                Router.push("/share");
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "inherit",
                marginLeft: "10px",
              }}
            >
              Chia sẻ tài liệu
            </Button> */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                marginLeft: "20px",
              }}
            >
              <Link href="/share">
                  <Typography
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "inherit",
                      alignItems: "center",
                    }}
                  >
                    Chia sẻ tài liệu
                  </Typography>
              </Link>
            </Typography>
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
              <IconButton
                onClick={() => handleOpenUserMenu(true)}
                sx={{ p: 0 }}
              >
                <Avatar alt={user.displayName} src={user.photoURL} />
              </IconButton>
            )}
          </Box>

          {/* MOBLIE */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar2"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuSharpIcon />
            </IconButton>
            <Menu
              id="menu-appbar2"
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
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Link href="/">
                <Typography
                  sx={{
                    color: "grey.light",
                  }}
                  id="logo-text"
                >
                  KhoTaiLieu
                </Typography>
            </Link>
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
          </Box>

          {user && (
            <Menu
              sx={{ mt: "45px", rigth: "50px" }}
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
              <MenuItem>
                <Typography textAlign="center">{user.displayName}</Typography>
              </MenuItem>
              <Link href="/share">
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "grey.dark",
                      }}
                    >
                      Chia sẻ tài liệu
                    </Typography>
                  </MenuItem>
              </Link>
              <MenuItem onClick={() => Logout()}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </Container>
      <Drawer open={drawer} variant="temporary" onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
}
