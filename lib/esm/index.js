import React from "react";
import { Styles } from "./styles";
export var MyTopbar = function (_a) {
    var backgroundColor = _a.backgroundColor, height = _a.height, maxWidth = _a.maxWidth;
    return (React.createElement(Styles.Container, { bgColor: backgroundColor, height: height },
        React.createElement(Styles.Content, { maxWidth: maxWidth }, "Topbar")));
};
