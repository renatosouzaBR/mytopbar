import React from "react";
import "./style.css";
export var MyTopbar = function (_a) {
    var backgroundColor = _a.backgroundColor, height = _a.height, maxWidth = _a.maxWidth;
    console.log(backgroundColor);
    console.log(height);
    console.log(maxWidth);
    return (React.createElement("div", { id: "container" },
        React.createElement("div", null, "Topbar")));
};
