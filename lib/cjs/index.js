"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTopbar = void 0;
var react_1 = __importDefault(require("react"));
require("./style.css");
var MyTopbar = function (_a) {
    var backgroundColor = _a.backgroundColor, height = _a.height, maxWidth = _a.maxWidth;
    console.log(backgroundColor);
    console.log(height);
    console.log(maxWidth);
    return (react_1.default.createElement("div", { id: "container" },
        react_1.default.createElement("div", null, "Topbar")));
};
exports.MyTopbar = MyTopbar;
