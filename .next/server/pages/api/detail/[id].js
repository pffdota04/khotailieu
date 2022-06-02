"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 5688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ personHandler)
});

;// CONCATENATED MODULE: ./data/detail.js
const detail = [
    {
        id: "1",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            },
            {
                name: "video demo",
                link: "https://www.youtube.com/watch?v=YQ1vN_91KO0"
            }, 
        ]
    },
    {
        id: "2",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "3",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "4",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "5",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "6",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "7",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            },
            {
                name: "youtube demo",
                link: "https://www.youtube.com/watch?v=YQ1vN_91KO0"
            },
            {
                name: "github",
                link: "https://github.com/NeymarL/ChineseChess-AlphaZero"
            }, 
        ]
    },
    {
        id: "8",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "9",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "10",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "11",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "12",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "13",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    },
    {
        id: "14",
        data: [
            {
                name: "linkdrive",
                link: "https://drive.google.com/file/d/1fX6P9UW-2wD5KTdXNrigKWLGxYT3KGo3/view?usp=sharing"
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./pages/api/detail/[id].js

function personHandler(req, res) {
    const { id  } = req.query;
    let filtered = [];
    filtered = detail.filter((p)=>p.id == id
    );
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({
            message: `Detail info by id: ${id} not found.`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5688));
module.exports = __webpack_exports__;

})();