!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";var r=t(2),o=t.n(r),i=t(3),a=t.n(i)()(o.a);a.push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body{height:100%}body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:\'Pacifico\', Arial, cursive;background-color:#f6f5fa;font-weight:400;font-size:15px;color:#FF3D00;line-height:1.6}.noScroll{overflow:hidden}.wrapper{min-height:100%;display:flex;flex-direction:column;overflow:hidden}.container{margin:0 auto;max-width:1400px;width:93.75%}.container__header{display:flex;justify-content:space-between;align-items:center}.container__footer{display:flex;justify-content:space-between;align-items:center}*,::before,::after{box-sizing:border-box}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}ul{margin:0;padding:0}li{list-style:none}h1,h2,h3,h4,h5,h6,p{margin:0;font-weight:normal}button{padding:0;border:none;background:transparent;cursor:pointer}table{border-collapse:collapse}svg{display:block}.header{margin-bottom:30px;padding-top:25px;color:#FF6E40}.logo__link{font-size:50px;text-shadow:0px 1px 1px #A62800}.menu-icon{z-index:100}.menu-icon__toggle{width:45px;height:31px;position:relative;transform:rotate(0deg);transition:0.5s ease-in-out;cursor:pointer}.menu-icon__toggle span{display:block;position:absolute;height:5px;width:100%;border-radius:10px;opacity:1;left:0;transform:rotate(0deg);transition:0.25s ease-in-out;background-color:#50026E}.menu-icon__toggle span:nth-child(1){top:0}.menu-icon__toggle span:nth-child(2),.menu-icon__toggle span:nth-child(3){top:12px}.menu-icon__toggle span:nth-child(4){top:24px}.menu-icon__toggle--open{z-index:7;transform:translate(270px, 0px);transition:.5s}.menu-icon__toggle--open span{background-color:#fff}.menu-icon__toggle--open span:nth-child(1),.menu-icon__toggle--open span:nth-child(4){top:18px;width:0%;left:50%}.menu-icon__toggle--open span:nth-child(2){transform:rotate(45deg)}.menu-icon__toggle--open span:nth-child(3){transform:rotate(-45deg)}.toggle{position:relative;font-family:Montserrat, Arial, sans-serif;text-transform:uppercase;font-weight:600;color:#fff}.toggle__input{position:absolute;margin-left:-9999px;visibility:hidden}.toggle__label{display:block;position:relative;cursor:pointer;outline:none;user-select:none;width:120px;height:45px;background-color:#dddddd;border-radius:25px}.toggle__label:before,.toggle__label:after{display:block;position:absolute;top:1px;left:1px;bottom:1px;content:""}.toggle__label::before{right:1px;background-color:#B564D4;border-radius:60px;transition:background 0.4s}.toggle__label:after{top:-1px;width:45px;height:45px;background-color:#fff;border-radius:100%;box-shadow:0 2px 5px rgba(0,0,0,0.3);margin-left:75px;transition:margin 0.4s}.toggle__mode{display:inline-block;position:relative;top:50%;transform:translateY(-50%);left:15px;content:"";line-height:1.6;user-select:none}.toggle__mode--play{display:none}.toggle__input:checked+.toggle__label::before{background-color:#FF9473}.toggle__input:checked+.toggle__label::after{margin-left:0px}.toggle__input:checked+.toggle__label .toggle__mode--play{display:inline-block;left:61px}.toggle__input:checked+.toggle__label .toggle__mode--train{display:none}.categories__list{display:flex;flex-wrap:wrap;justify-content:space-evenly}.categories__item{max-width:22%;min-height:250px;margin-bottom:40px}.card{background-color:#fff;border-radius:25px;overflow:hidden;padding-bottom:15px;box-shadow:0px 2px 5px 0 rgba(0,0,0,0.1);transition:all .2s}.card:hover{cursor:pointer;box-shadow:0px 7px 19px 0 rgba(0,0,0,0.3)}.card__image{margin-bottom:15px}.card__img{width:100%;object-fit:cover}.card__title{font-family:Montserrat, Arial, sans-serif;text-transform:uppercase;font-size:22px;font-weight:700;text-align:center;letter-spacing:0.15em}.nav{position:absolute;left:-405px;top:0;width:400px;height:100vh;padding:125px 25px 50px 75px;display:flex;flex-direction:column;align-items:flex-start;transition:left .5s;z-index:5;background-color:#FF9473;text-transform:uppercase;font-family:Montserrat, Arial, sans-serif;font-size:25px;font-weight:700;color:#fff}.nav--visible{left:0}.nav__item{margin-bottom:20px;line-height:1.3;transition:.3s}.nav__item:last-child{margin-bottom:0}.nav__item:hover{transform:scale(1.2)}.nav__item:visited{opacity:.7}.nav__item--active{border-bottom:3px solid #fff}.nav__item--active:hover{transform:scale(1)}.footer{padding:15px 0;background-color:#FF6E40;color:#fff;font-family:Montserrat, Arial, sans-serif}.footer__author{margin-right:10px;font-size:14px}.footer__link{display:flex;align-items:center;transition:.3s}.footer__link:hover{opacity:.7}.footer__link-img{width:25px;height:25px}.footer__link-img--rsschool{width:60px}.overlay{position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.2);display:none}.overlay--visible{display:block}\n',"",{version:3,sources:["webpack://./../node_modules/normalize.css/normalize.css","webpack://./css/base.scss","webpack://./css/main.scss"],names:[],mappings:"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",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"html, body {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  font-family: 'Pacifico', Arial, cursive;\r\n  background-color: rgb(246, 245, 250);\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  color: #FF3D00;\r\n  line-height: 1.6;\r\n}\r\n\r\n.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  max-width: 1400px;\r\n  width: 93.75%;\r\n\r\n  &__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &__footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n*, ::before, ::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, p {\r\n  margin: 0;\r\n  font-weight: normal;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n }\r\n\r\nsvg {\r\n  display: block;\r\n}\r\n",'@import "~normalize.css";\r\n@import "./base.scss";\r\n@import "./media.scss";\r\n\r\n.header {\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n  color: #FF6E40;\r\n}\r\n\r\n.logo__link {\r\n  font-size: 50px;\r\n  text-shadow: 0px 1px 1px #A62800;\r\n}\r\n\r\n.menu-icon {\r\n  z-index: 100;\r\n}\r\n\r\n.menu-icon__toggle {\r\n  width: 45px;\r\n  height: 31px;\r\n  position: relative;\r\n\r\n  transform: rotate(0deg);\r\n  transition: 0.5s ease-in-out;\r\n  cursor: pointer;\r\n\r\n  & span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 5px;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    opacity: 1;\r\n    left: 0;\r\n    transform: rotate(0deg);\r\n    transition: 0.25s ease-in-out;\r\n    background-color: #50026E;\r\n\r\n    &:nth-child(1) {\r\n      top: 0;\r\n    }\r\n\r\n    &:nth-child(2),\r\n    &:nth-child(3) {\r\n      top: 12px;\r\n    }\r\n\r\n    &:nth-child(4) {\r\n      top: 24px;\r\n    }\r\n  }\r\n\r\n  &--open {\r\n    z-index: 7;\r\n    transform: translate(270px, 0px);\r\n    transition: .5s;\r\n\r\n    & span {\r\n      background-color: #fff;\r\n\r\n      &:nth-child(1),\r\n      &:nth-child(4) {\r\n        top: 18px;\r\n        width: 0%;\r\n        left: 50%;\r\n      }\r\n  \r\n      &:nth-child(2) {\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      &:nth-child(3) {\r\n        transform: rotate(-45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.toggle {\r\n  position: relative;\r\n  font-family: Montserrat, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  color: #fff;\r\n}\r\n\r\n.toggle__input {\r\n  position: absolute;\r\n  margin-left: -9999px;\r\n  visibility: hidden;\r\n}\r\n\r\n.toggle__label {\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: none;\r\n  user-select: none;\r\n  width: 120px;\r\n  height: 45px;\r\n  background-color: #dddddd;\r\n  border-radius: 25px;\r\n\r\n  &:before,\r\n  &:after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 1px;\r\n    bottom: 1px;\r\n    content: "";\r\n  }\r\n\r\n  &::before {\r\n    right: 1px;\r\n    background-color: #B564D4;\r\n    border-radius: 60px;\r\n    transition: background 0.4s;\r\n  }\r\n\r\n  &:after {\r\n    top: -1px;\r\n    width: 45px;\r\n    height: 45px;\r\n    background-color: #fff;\r\n    border-radius: 100%;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    margin-left: 75px;\r\n    transition: margin 0.4s;\r\n  }\r\n}\r\n\r\n.toggle__mode {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  left: 15px;\r\n  content: "";\r\n  line-height: 1.6;\r\n  user-select: none;\r\n\r\n  &--play {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.toggle__input:checked + .toggle__label::before {\r\n  background-color: #FF9473;\r\n}\r\n\r\n.toggle__input:checked + .toggle__label::after {\r\n  margin-left: 0px;\r\n}\r\n\r\n.toggle__input:checked + .toggle__label .toggle__mode--play {\r\n  display: inline-block;\r\n  left: 61px;\r\n}\r\n\r\n.toggle__input:checked + .toggle__label .toggle__mode--train {\r\n  display: none;\r\n}\r\n\r\n.categories__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.categories__item {\r\n  max-width: 22%;\r\n  min-height: 250px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #fff;\r\n  border-radius: 25px;\r\n  overflow: hidden;\r\n  padding-bottom: 15px;\r\n  box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.1);\r\n  transition: all .2s;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 7px 19px 0 rgba(0, 0, 0, 0.3);\r\n  }\r\n}\r\n\r\n.card__image {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card__img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card__title {\r\n  font-family: Montserrat, Arial, sans-serif;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  letter-spacing: 0.15em;\r\n}\r\n\r\n.nav {\r\n  position: absolute;\r\n  left: -405px;\r\n  top: 0;\r\n  width: 400px;\r\n  height: 100vh;\r\n  padding: 125px 25px 50px 75px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  transition: left .5s;\r\n  z-index: 5;\r\n\r\n  background-color: #FF9473;\r\n  text-transform: uppercase;\r\n  font-family: Montserrat, Arial, sans-serif;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n\r\n  &--visible {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n.nav__item {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n  transition: .3s;\r\n\r\n  &:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &:hover {\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  &:visited {\r\n    opacity: .7;\r\n  }\r\n\r\n\r\n  &--active {\r\n    border-bottom: 3px solid #fff;\r\n\r\n    &:hover {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n}\r\n\r\n.footer {\r\n  padding: 15px 0;\r\n  background-color: #FF6E40;\r\n  color: #fff;\r\n  font-family: Montserrat, Arial, sans-serif;\r\n  \r\n}\r\n\r\n.footer__author {\r\n  margin-right: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.footer__link {\r\n  display: flex;\r\n  align-items: center;\r\n  transition: .3s;\r\n\r\n  &:hover {\r\n    opacity: .7;\r\n  }\r\n}\r\n\r\n.footer__link-img {\r\n  width: 25px;\r\n  height: 25px;\r\n\r\n  &--rsschool {\r\n    width: 60px;\r\n  }\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, .2);\r\n  display: none;\r\n\r\n  &--visible {\r\n    display: block;\r\n  }\r\n}'],sourceRoot:""}]),e.a=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function A(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],A=e.base?i[0]+e.base:i[0],l=t[A]||0,c="".concat(A," ").concat(l);t[A]=l+1;var d=s(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:u(p,e),references:1}),r.push(c)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function C(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,m=0;function u(n,e){var t,r,o;if(e.singleton){var i=m++;t=g||(g=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=C.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=A(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=A(n,e),l=0;l<t.length;l++){var c=s(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=i}}}},function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */"),A=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(A).concat([s]).join("\n")}return[t].join("\n")}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var A=[].concat(n[s]);r&&o[A[0]]||(t&&(A[2]?A[2]="".concat(t," and ").concat(A[2]):A[2]=t),e.push(A))}},e}},function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),i=t(0),a={insert:"head",singleton:!1};o()(i.a,a),i.a.locals;var s=[[{title:"Action 1",img:"../src/assets/img/draw.jpg"},{title:"Action 2",img:"../src/assets/img/fish.jpg"},{title:"Action 3",img:"../src/assets/img/fly.jpg"},{title:"Animals 1",img:"../src/assets/img/animals1.png"},{title:"Animals 2",img:"../src/assets/img/chick.jpg"},{title:"Clothes",img:"../src/assets/img/blouse.jpg"},{title:"Food 1",img:"../src/assets/img/food1.png"},{title:"Food 2",img:"../src/assets/img/food2.png"}],[{word:"cry",translation:"плакать",image:"../assets/img/cry.jpg",audioSrc:"../assets/audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"../assets/img/dance.jpg",audioSrc:"../assets/audio/dance.mp3"},{word:"dive",translation:"нырять",image:"../assets/img/dive.jpg",audioSrc:"../assets/audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"../assets/img/draw.jpg",audioSrc:"../assets/audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"../assets/img/fish.jpg",audioSrc:"../assets/audio/fish.mp3"},{word:"fly",translation:"летать",image:"../assets/img/fly.jpg",audioSrc:"../assets/audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"../assets/img/hug.jpg",audioSrc:"../assets/audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"../assets/img/jump.jpg",audioSrc:"../assets/audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"../assets/img/open.jpg",audioSrc:"../assets/audio/open.mp3"},{word:"play",translation:"играть",image:"../assets/img/play.jpg",audioSrc:"../assets/audio/play.mp3"},{word:"point",translation:"указывать",image:"../assets/img/point.jpg",audioSrc:"../assets/audio/point.mp3"},{word:"ride",translation:"ездить",image:"../assets/img/ride.jpg",audioSrc:"../assets/audio/ride.mp3"},{word:"run",translation:"бегать",image:"../assets/img/run.jpg",audioSrc:"../assets/audio/run.mp3"},{word:"sing",translation:"петь",image:"../assets/img/sing.jpg",audioSrc:"../assets/audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"../assets/img/skip.jpg",audioSrc:"../assets/audio/skip.mp3"},{word:"swim",translation:"плавать",image:"../assets/img/swim.jpg",audioSrc:"../assets/audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"../assets/img/cat.jpg",audioSrc:"../assets/audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"../assets/img/chick.jpg",audioSrc:"../assets/audio/chick.mp3"},{word:"chicken",translation:"курица",image:"../assets/img/chicken.jpg",audioSrc:"../assets/audio/chicken.mp3"},{word:"dog",translation:"собака",image:"../assets/img/dog.jpg",audioSrc:"../assets/audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"../assets/img/horse.jpg",audioSrc:"../assets/audio/horse.mp3"},{word:"pig",translation:"свинья",image:"../assets/img/pig.jpg",audioSrc:"../assets/audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"../assets/img/rabbit.jpg",audioSrc:"../assets/audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"../assets/img/sheep.jpg",audioSrc:"../assets/audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"../assets/img/bird.jpg",audioSrc:"../assets/audio/bird.mp3"},{word:"fish",translation:"рыба",image:"../assets/img/fish1.jpg",audioSrc:"../assets/audio/fish.mp3"},{word:"frog",translation:"жаба",image:"../assets/img/frog.jpg",audioSrc:"../assets/audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"../assets/img/giraffe.jpg",audioSrc:"../assets/audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"../assets/img/lion.jpg",audioSrc:"../assets/audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"../assets/img/mouse.jpg",audioSrc:"../assets/audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"../assets/img/turtle.jpg",audioSrc:"../assets/audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"../assets/img/dolphin.jpg",audioSrc:"../assets/audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"../assets/img/skirt.jpg",audioSrc:"../assets/audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"../assets/img/pants.jpg",audioSrc:"../assets/audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"../assets/img/blouse.jpg",audioSrc:"../assets/audio/blouse.mp3"},{word:"dress",translation:"платье",image:"../assets/img/dress.jpg",audioSrc:"../assets/audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"../assets/img/boot.jpg",audioSrc:"../assets/audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"../assets/img/shirt.jpg",audioSrc:"../assets/audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"../assets/img/coat.jpg",audioSrc:"../assets/audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"../assets/img/shoe.jpg",audioSrc:"../assets/audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"../assets/img/sad.jpg",audioSrc:"../assets/audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"../assets/img/angry.jpg",audioSrc:"../assets/audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"../assets/img/happy.jpg",audioSrc:"../assets/audio/happy.mp3"},{word:"tired",translation:"уставший",image:"../assets/img/tired.jpg",audioSrc:"../assets/audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"../assets/img/surprised.jpg",audioSrc:"../assets/audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"../assets/img/scared.jpg",audioSrc:"../assets/audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"../assets/img/smile.jpg",audioSrc:"../assets/audio/smile.mp3"},{word:"laugh",translation:"смех",image:"../assets/img/laugh.jpg",audioSrc:"../assets/audio/laugh.mp3"}]];const A=document.querySelector("#categoryTemplate"),l=document.querySelector(".categories__list");s[0].forEach(n=>{const e=document.createElement("li");e.classList.add("categories__item"),e.append(A.content.cloneNode(!0));e.querySelector(".card__img").setAttribute("src",""+n.img);e.querySelector(".card__title").textContent=""+n.title,l.append(e)});const c=document.querySelector(".menu-icon__toggle"),d=document.querySelector("#nav"),p=document.querySelector(".overlay");c.addEventListener("click",()=>{d.classList.toggle("nav--visible"),c.classList.toggle("menu-icon__toggle--open"),p.classList.toggle("overlay--visible"),document.body.classList.toggle("noScroll")})}]);
//# sourceMappingURL=64cdf44752dff7234068.bundle.js.map