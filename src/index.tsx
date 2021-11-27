import React, { CSSProperties } from "react";
import "./styles.css";
import "./responsive.css";

import { LogoContent } from "./LogoContent";
import { MenuContent } from "./MenuContent";
import { LogoContentProps } from "./LogoContent/types";
import { MenuContentProps } from "./MenuContent/types";

interface Props extends LogoContentProps, MenuContentProps {
  viewOptions: {
    bgColor: string;
    height: number;
    maxWidth: number;
  };
}

export const MyTopbar = ({ viewOptions, logo, menu }: Props): JSX.Element => {
  const contentStyle = (maxWidth: number): CSSProperties => ({
    maxWidth,
  });

  const containerStyles = (height: number, bg: string): CSSProperties => ({
    backgroundColor: bg,
    height,
  });

  return (
    <div
      id="container"
      style={containerStyles(viewOptions.height, viewOptions.bgColor)}
    >
      <div id="content" style={contentStyle(viewOptions.maxWidth)}>
        <LogoContent logo={logo} />

        <MenuContent menu={menu} />

        <div id="options">Options</div>
      </div>
    </div>
  );
};
