import React from "react";
import "./styles.css";
import "./responsive.css";
import { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <div id="logo">
      <logo.SvgFullLogo id="full-logo" />
      <logo.SvgCompactLogo id="compact-logo" />
    </div>
  );
};
