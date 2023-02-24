"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const products = [
    {
        id: 1,
        name: "photovoltaiques",
        href: "../produits/photovoltaiques",
        imageSrc: "/photovoltaiques.png",
        imageAlt: "photovoltaiques",
        details: "Chez Nous, nous croyons que l'\xe9nergie solaire est la voie \xe0 suivre pour alimenter les maisons et les entreprises de mani\xe8re efficace et durable. Nous sommes convaincus que cette technologie offre de nombreux avantages pour nos clients"
    },
    {
        id: 2,
        name: "Pompe \xe0 chaleur",
        href: "../produits/pompe",
        imageSrc: "/pompe.jpg",
        imageAlt: "Pompe \xe0 chaleur",
        details: "Chez Nous, nous sommes fiers de proposer des solutions de chauffage efficaces et \xe9cologiques pour les maisons et les entreprises. Les pompes \xe0 chaleur sont un excellent choix pour les propri\xe9taires soucieux de r\xe9duire leur"
    },
    // {
    //   id: 3,
    //   name: 'Chauffage solaire / chauffe-eau solaire',
    //   href: '../produits/chauffage_solaire',
    //   imageSrc: '/chauffage_solaire.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    // },
    {
        id: 4,
        name: "Chauffe-eau thermodynamique",
        href: "../produits/chauffe_eau",
        imageSrc: "/chauffe-eau.jpg",
        imageAlt: "Chauffe-eau thermodynamique",
        details: "Si vous \xeates \xe0 la recherche d'une solution de chauffage de l'eau efficace et rentable pour votre maison, notre syst\xe8me de chauffe-eau thermodynamique est peut-\xeatre la solution id\xe9ale pour vous. Chez Nous, nous avons une grande "
    }
];
function Cards() {
    return(//   <div claassName="flex justify-center">    
    //   <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    //   <img
    //     className="w-full" 
    //     src={'/cellule-solaire.png'} 
    //     alt="Sunset in the mountains" 
    //     />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //   </div>
    // </div>
    // </div>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl font-bold tracking-tight text-gray-900",
                        children: "Nos Produits"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8",
                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "group relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "min-h-80 h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: product.imageSrc,
                                            alt: product.imageAlt,
                                            className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 flex justify-between",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-xl text-gray-700",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: product.href,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                className: "absolute inset-0 "
                                                            }),
                                                            product.name
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-1 text-sm text-gray-500",
                                                    children: product.details
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "",
                                                    color: "bleu",
                                                    children: "En savoir plus..."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, product.id))
                    })
                ]
            })
        })
    }));
}


/***/ })

};
;