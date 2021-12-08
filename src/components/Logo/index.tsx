import React from "react";

import { LogoProps } from "./types";
import { LogoStyles } from "./styles";

export const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <LogoStyles.Container id="logo">
      <logo.SvgFullLogo id="full-logo" />
      <logo.SvgCompactLogo id="compact-logo" />
    </LogoStyles.Container>
  );
};
