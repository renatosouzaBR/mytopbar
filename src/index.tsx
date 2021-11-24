import React, { CSSProperties } from "react";
import "./styles.css";

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
}

export const MyTopbar = ({ viewOptions, logo }: Props): JSX.Element => {
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
        <div id="logo">
          <logo.SvgFullLogo id="full-logo" />
          <logo.SvgCompactLogo id="compact-logo" />
        </div>

        <div id="menu">Menu</div>
        <div id="options">Options</div>
      </div>
    </div>
  );
};
