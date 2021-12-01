import React, { CSSProperties } from "react";
import "./styles.css";
import "./responsive.css";

import { LogoContent } from "./LogoContent";
import { MenuComponent } from "./components/Menu";
import { LogoContentProps } from "./LogoContent/types";
import { MenuProps } from "./components/Menu/types";
import { UserMenu } from "./UserMenu";

interface Props extends LogoContentProps, MenuProps {
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

        <MenuComponent menu={menu} />

        <UserMenu />
      </div>
    </div>
  );
};
