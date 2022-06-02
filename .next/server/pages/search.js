(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 7801:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Search_search__cq85m"
};


/***/ }),

/***/ 6164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5063);
;// CONCATENATED MODULE: external "@mui/icons-material/Face"
const Face_namespaceObject = require("@mui/icons-material/Face");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
// EXTERNAL MODULE: ./styles/Search.module.scss
var Search_module = __webpack_require__(7801);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: external "@mui/icons-material/StickyNote2"
var StickyNote2_ = __webpack_require__(5542);
var StickyNote2_default = /*#__PURE__*/__webpack_require__.n(StickyNote2_);
// EXTERNAL MODULE: external "@mui/icons-material/Quiz"
var Quiz_ = __webpack_require__(3407);
var Quiz_default = /*#__PURE__*/__webpack_require__.n(Quiz_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountTree"
var AccountTree_ = __webpack_require__(6464);
var AccountTree_default = /*#__PURE__*/__webpack_require__.n(AccountTree_);
// EXTERNAL MODULE: external "@mui/icons-material/Article"
var Article_ = __webpack_require__(1664);
var Article_default = /*#__PURE__*/__webpack_require__.n(Article_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
;// CONCATENATED MODULE: external "@mui/icons-material/ChromeReaderMode"
const ChromeReaderMode_namespaceObject = require("@mui/icons-material/ChromeReaderMode");
var ChromeReaderMode_default = /*#__PURE__*/__webpack_require__.n(ChromeReaderMode_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/OndemandVideo"
const OndemandVideo_namespaceObject = require("@mui/icons-material/OndemandVideo");
var OndemandVideo_default = /*#__PURE__*/__webpack_require__.n(OndemandVideo_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Slideshow"
const Slideshow_namespaceObject = require("@mui/icons-material/Slideshow");
var Slideshow_default = /*#__PURE__*/__webpack_require__.n(Slideshow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/PictureAsPdf"
const PictureAsPdf_namespaceObject = require("@mui/icons-material/PictureAsPdf");
var PictureAsPdf_default = /*#__PURE__*/__webpack_require__.n(PictureAsPdf_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/FilePresent"
const FilePresent_namespaceObject = require("@mui/icons-material/FilePresent");
var FilePresent_default = /*#__PURE__*/__webpack_require__.n(FilePresent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Photo"
const Photo_namespaceObject = require("@mui/icons-material/Photo");
var Photo_default = /*#__PURE__*/__webpack_require__.n(Photo_namespaceObject);
;// CONCATENATED MODULE: ./pages/search.jsx






















async function getServerSideProps(context) {
    const a = context.query;
    console.log(a);
    try {
        const searchResulf = await external_axios_default().get(`http://localhost:3000/api/search?keyword=` + a.keyword.toLowerCase() + `&type=` + a.type + `&category=` + a.category);
        return {
            props: {
                searchResulf: searchResulf.data
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                searchResulf: null
            }
        };
    }
}
const convertType = {
    project: "\u0110\u1ED3 \xe1n",
    exam: "\u0110\u1EC1 thi",
    docs: "T\xe0i li\u1EC7u",
    report: "Ti\u1EC3u lu\u1EADn"
};
function Search(props) {
    const { keyword , type , category  } = (0,router_.useRouter)().query;
    const { 0: selectType , 1: setType  } = (0,external_react_.useState)(type);
    const { 0: searchText , 1: setSearchText  } = (0,external_react_.useState)(keyword);
    const { 0: selectCategory , 1: setCategory  } = (0,external_react_.useState)(category);
    const { 0: data , 1: setData  } = (0,external_react_.useState)([]);
    const { 0: searchFor , 1: setSearchFor  } = (0,external_react_.useState)(keyword);
    (0,external_react_.useEffect)(()=>{
        console.log(props);
        if (props.searchResulf == null) {
            alert("Kh\xf4ng t\xecm th\u1EA5y");
        //   Router.push({
        //     pathname: "/",
        //   });
        } else {
            setData(props.searchResulf);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        searching(searchText);
    }, [
        selectCategory,
        selectType
    ]);
    const handleChangeType = (event)=>{
        setType(event.target.value);
    };
    const handleChangeCategory = (event)=>{
        setCategory(event.target.value);
    };
    const searchHanlder = (event)=>{
        if (event.key === "Enter") {
            searching(event.target.value);
        }
    };
    const searching = async (value)=>{
        if (value == "") alert("Nh\u1EADp v\xe0o tr\u1ED1ng!");
        else try {
            const searchResulf = await external_axios_default().get(`http://localhost:3000/api/search?keyword=` + value.toLowerCase() + `&type=` + selectType + `&category=` + selectCategory);
            setData(searchResulf.data);
        } catch (error) {
            console.error(error);
            setData([]);
        }
        setSearchFor(value);
    };
    const renderIcon = (icon)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
            sx: {
                minWidth: 28
            },
            children: icon == 0 ? /*#__PURE__*/ jsx_runtime_.jsx((StickyNote2_default()), {
                color: "primary"
            }) : icon == 1 ? /*#__PURE__*/ jsx_runtime_.jsx((Quiz_default()), {
                color: "primary"
            }) : icon == 2 ? /*#__PURE__*/ jsx_runtime_.jsx((AccountTree_default()), {
                color: "primary"
            }) : /*#__PURE__*/ jsx_runtime_.jsx((Article_default()), {
                color: "primary"
            })
        });
    };
    const renderTypeIcon = (icon)=>{
        return icon.includes("word") ? /*#__PURE__*/ jsx_runtime_.jsx((ChromeReaderMode_default()), {}) : icon.includes("powerpoint") ? /*#__PURE__*/ jsx_runtime_.jsx((Slideshow_default()), {}) : icon.includes("demo") ? /*#__PURE__*/ jsx_runtime_.jsx((OndemandVideo_default()), {}) : icon.includes("Github") ? /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {}) : icon.includes("pdf") ? /*#__PURE__*/ jsx_runtime_.jsx((PictureAsPdf_default()), {}) : icon.includes("nh ch\u1EE5p") ? /*#__PURE__*/ jsx_runtime_.jsx((Photo_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((FilePresent_default()), {});
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            paddingTop: "66px"
        },
        className: (Search_module_default()).search,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                textAlign: "center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    variant: "h4",
                    component: "div",
                    gutterBottom: true,
                    alignItems: "center",
                    p: 1,
                    children: [
                        "K\u1EBFt qu\u1EA3 t\xecm ki\u1EBFm cho ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            children: [
                                "'",
                                searchFor,
                                "'"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(system_namespaceObject.Container, {
                sx: {
                    opacity: 1,
                    padding: "10px",
                    borderRadius: "10px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sm: 6,
                            xs: 12,
                            textAlign: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                label: "T\xecm t\xe0i li\u1EC7u",
                                variant: "outlined",
                                id: "validation-outlined-input",
                                color: "primary",
                                type: "search",
                                fullWidth: true,
                                onKeyDown: (e)=>searchHanlder(e)
                                ,
                                sx: {
                                    backgroundColor: "grey.light"
                                },
                                value: searchText,
                                onChange: (e)=>setSearchText(e.target.value)
                                ,
                                autoComplete: "off"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sm: 3,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TextField, {
                                sx: {
                                    backgroundColor: "grey.light"
                                },
                                fullWidth: true,
                                size: "normal",
                                id: "outlined-select-currency-native",
                                label: "Lo\u1EA1i",
                                select: true,
                                labelId: "demo-select-small",
                                value: selectType,
                                onChange: handleChangeType,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "all",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                            children: "All "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "docs",
                                        children: "T\xe0i li\u1EC7u"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "project",
                                        children: "\u0110\u1ED3 \xe1n"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "exam",
                                        children: "\u0110\u1EC1 thi"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "report",
                                        children: "Ti\u1EC3u lu\u1EADn"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sm: 3,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TextField, {
                                fullWidth: true,
                                size: "normal",
                                id: "outlined-select-currency-native",
                                label: "L\u0129nh v\u1EF1c",
                                select: true,
                                labelId: "demo-select-small",
                                value: selectCategory,
                                onChange: handleChangeCategory,
                                sx: {
                                    backgroundColor: "grey.light"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "all",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                            children: "All "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "C\xf4ng ngh\u1EC7 th\xf4ng tin",
                                        children: "C\xf4ng ngh\u1EC7 th\xf4ng tin"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "C\u01A1 kh\xed",
                                        children: "C\u01A1 kh\xed"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "\u0110i\u1EC7n - \u0110i\u1EC7n t\u1EED",
                                        children: "\u0110i\u1EC7n - \u0110i\u1EC7n t\u1EED"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "In v\xe0 Truy\u1EC1n th\xf4ng",
                                        children: "In v\xe0 Truy\u1EC1n th\xf4ng"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "Kinh t\u1EBF",
                                        children: "Kinh t\u1EBF"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "Khoa h\u1ECDc \u1EE9ng d\u1EE5ng",
                                        children: "Khoa h\u1ECDc \u1EE9ng d\u1EE5ng"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: "L\xfd lu\u1EADn Ch\xednh tr\u1ECB",
                                        children: "L\xfd lu\u1EADn Ch\xednh tr\u1ECB"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(system_namespaceObject.Container, {
                maxWidth: "xl",
                disableGutters: true,
                sx: {
                    p: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        width: "100%"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                        spacing: 2,
                        children: data.length > 0 ? data.map((e1)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                                variant: "elevation",
                                color: "primary",
                                sx: {
                                    opacity: 0.85,
                                    boxShadow: 3,
                                    "&:hover": {
                                        opacity: 1,
                                        backgroundColor: "#e8e8e8"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActionArea, {
                                    onClick: ()=>{
                                        router_default().push({
                                            pathname: "/detail/" + e1.id
                                        });
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                                direction: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                        sx: {
                                                            fontSize: 14
                                                        },
                                                        gutterBottom: true,
                                                        color: "primary",
                                                        children: [
                                                            renderIcon(Object.keys(convertType).indexOf(e1.type)),
                                                            convertType[e1.type]
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            mb: 1.5
                                                        },
                                                        color: "text.secondary",
                                                        children: e1.major
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                variant: "h5",
                                                component: "div",
                                                children: e1.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                sx: {
                                                    fontSize: 15
                                                },
                                                component: "div",
                                                children: [
                                                    "Upload by: ",
                                                    e1.author,
                                                    " | Upload day: ",
                                                    e1.date
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                variant: "body2",
                                                children: [
                                                    "Bao g\u1ED3m:",
                                                    " ",
                                                    e1.include.map((e)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                            icon: renderTypeIcon(e),
                                                            label: e
                                                        })
                                                    )
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h4",
                            gutterBottom: true,
                            component: "div",
                            textAlign: "center",
                            backgroundColor: "primary",
                            children: "Kh\xf4ng t\xecm th\u1EA5y"
                        })
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 6464:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountTree");

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Article");

/***/ }),

/***/ 3407:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Quiz");

/***/ }),

/***/ 5542:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/StickyNote2");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(6164)));
module.exports = __webpack_exports__;

})();