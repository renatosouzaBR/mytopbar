var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Styles = {
    Container: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    height: ", "px;\n\n    display: flex;\n    justify-content: center;\n  "], ["\n    background-color: ", ";\n    height: ", "px;\n\n    display: flex;\n    justify-content: center;\n  "])), function (props) { return props.bgColor; }, function (props) { return props.height; }),
    Content: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    max-width: ", "px;\n  "], ["\n    width: 100%;\n    height: 100%;\n    max-width: ", "px;\n  "])), function (props) { return props.maxWidth; }),
};
var templateObject_1, templateObject_2;
