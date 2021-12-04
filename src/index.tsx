import React, { CSSProperties } from "react";
import "./styles.css";
import "./responsive.css";

import { Logo } from "./components/Logo";
import { MenuComponent } from "./components/Menu";
import { LogoProps } from "./components/Logo/types";
import { MenuProps } from "./components/Menu/types";
import { UserMenu } from "./components/UserMenu";

interface Props extends LogoProps, MenuProps {
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
        <Logo logo={logo} />

        <MenuComponent menu={menu} />

        <UserMenu />
      </div>
    </div>
  );
};
