import React, { CSSProperties } from "react";
import "./styles.css";
import "./responsive.css";

import { LogoContent } from "./LogoContent";
import { MenuContent } from "./MenuContent";

interface Submenu {
  label: string;
}

interface Menu {
  label: string;
  submenu?: Submenu[];
}

interface Props {
  viewOptions: {
    bgColor: string;
    height: number;
    maxWidth: number;
  };

  logo: {
    SvgFullLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    SvgCompactLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };

  menu: Menu[];
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
