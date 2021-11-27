import React from "react";
import "./styles.css";
import "./responsive.css";
import { LogoContentProps } from "./types";

export const LogoContent: React.FC<LogoContentProps> = ({ logo }) => {
  return (
    <div id="logo">
      <logo.SvgFullLogo id="full-logo" />
      <logo.SvgCompactLogo id="compact-logo" />
    </div>
  );
};
