"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");exports.default=({children:t,size:a="md",appearance:r="primary",className:s,onClick:c,shape:l="default",isDarkMode:o=!1,...i})=>e.createElement("button",{type:"button",className:`button ${a} ${r} ${l} ${!0===o&&"dark"} ${s}`,onClick:c,...i},t);
