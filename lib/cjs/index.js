"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTopbar = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var MyTopbar = function (_a) {
    var backgroundColor = _a.backgroundColor, height = _a.height, maxWidth = _a.maxWidth;
    return (react_1.default.createElement(styles_1.Styles.Container, { bgColor: backgroundColor, height: height },
        react_1.default.createElement(styles_1.Styles.Content, { maxWidth: maxWidth }, "Topbar")));
};
exports.MyTopbar = MyTopbar;
