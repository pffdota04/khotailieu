"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/AutoStoriesSharp"
const AutoStoriesSharp_namespaceObject = require("@mui/icons-material/AutoStoriesSharp");
var AutoStoriesSharp_default = /*#__PURE__*/__webpack_require__.n(AutoStoriesSharp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MenuSharp"
const MenuSharp_namespaceObject = require("@mui/icons-material/MenuSharp");
var MenuSharp_default = /*#__PURE__*/__webpack_require__.n(MenuSharp_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MoveToInbox"
const MoveToInbox_namespaceObject = require("@mui/icons-material/MoveToInbox");
;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
// EXTERNAL MODULE: external "@mui/icons-material/Article"
var Article_ = __webpack_require__(1664);
var Article_default = /*#__PURE__*/__webpack_require__.n(Article_);
// EXTERNAL MODULE: external "@mui/icons-material/Quiz"
var Quiz_ = __webpack_require__(3407);
var Quiz_default = /*#__PURE__*/__webpack_require__.n(Quiz_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountTree"
var AccountTree_ = __webpack_require__(6464);
var AccountTree_default = /*#__PURE__*/__webpack_require__.n(AccountTree_);
// EXTERNAL MODULE: external "@mui/icons-material/StickyNote2"
var StickyNote2_ = __webpack_require__(5542);
var StickyNote2_default = /*#__PURE__*/__webpack_require__.n(StickyNote2_);
;// CONCATENATED MODULE: external "@mui/icons-material/Paid"
const Paid_namespaceObject = require("@mui/icons-material/Paid");
var Paid_default = /*#__PURE__*/__webpack_require__.n(Paid_namespaceObject);
;// CONCATENATED MODULE: ./components/Header/Header.jsx















const pages = [
    "T\xe0i li\u1EC7u",
    "\u0110\u1EC1 thi",
    "\u0110\u1ED3 \xe1n",
    "Ti\u1EC3u lu\u1EADn",
    "Donate"
];
function Header(props) {
    const { 0: anchorElNav , 1: setAnchorElNav  } = (0,external_react_.useState)(null);
    const { 0: anchorElUser , 1: setAnchorElUser  } = (0,external_react_.useState)(null);
    const [drawer, setDrawer] = external_react_.useState(false);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const toggleDrawer = (open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setDrawer(open);
        }
    ;
    const list = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: 250,
            role: "presentation",
            onClick: toggleDrawer(false),
            onKeyDown: toggleDrawer(false),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                    children: pages.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                            disablePadding: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        children: index == 0 ? /*#__PURE__*/ jsx_runtime_.jsx((StickyNote2_default()), {}) : index == 1 ? /*#__PURE__*/ jsx_runtime_.jsx((Quiz_default()), {}) : index == 2 ? /*#__PURE__*/ jsx_runtime_.jsx((AccountTree_default()), {}) : index == 3 ? /*#__PURE__*/ jsx_runtime_.jsx((Article_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Paid_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: text
                                    })
                                ]
                            })
                        }, text)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {})
            ]
        })
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                position: "fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: false,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((AutoStoriesSharp_default()), {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    mr: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h6",
                                noWrap: true,
                                component: "a",
                                href: "/",
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "Apple Color Emoji",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    // color: {variables.primaryColor},
                                    textDecoration: "none"
                                },
                                children: "KhoTaiLieu"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: toggleDrawer(true),
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((MenuSharp_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                                        id: "menu-appbar",
                                        anchorEl: anchorElNav,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        open: Boolean(anchorElNav),
                                        onClose: handleCloseNavMenu,
                                        sx: {
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            }
                                        },
                                        children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    textAlign: "center",
                                                    children: page
                                                })
                                            }, page)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((AutoStoriesSharp_default()), {
                                sx: {
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    },
                                    mr: 1
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h5",
                                noWrap: true,
                                component: "a",
                                href: "",
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    },
                                    flexGrow: 1,
                                    fontFamily: "Apple Color Emoji",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                },
                                children: "KhoTaiLieu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        onClick: handleCloseNavMenu,
                                        sx: {
                                            my: 2,
                                            color: "white",
                                            display: "block"
                                        },
                                        children: page
                                    }, page)
                                )
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                open: drawer,
                onClose: toggleDrawer(false),
                children: list()
            })
        ]
    });
};

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./pages/_app.js




const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            light: "#a255ff",
            main: "#651fff",
            dark: "#0100ca",
            contrastText: "#ffffff"
        },
        secondary: {
            light: "#ffff5a",
            main: "#ffff00",
            dark: "#c7cc00",
            contrastText: "#311b92"
        },
        grey: {
            light: "#fafafa",
            main: "#bdbdbd",
            dark: "#000000",
            contrastText: "#304ffe"
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
};


/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountTree");

/***/ }),

/***/ 1664:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Article");

/***/ }),

/***/ 3407:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Quiz");

/***/ }),

/***/ 5542:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StickyNote2");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5664));
module.exports = __webpack_exports__;

})();