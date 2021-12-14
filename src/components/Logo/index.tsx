import React from "react";

import { LogoProps } from "./types";
import { LogoStyles } from "./styles";

export const Logo: React.FC<LogoProps> = (props) =>
  "wrapper" in props ? (
    <>{props.wrapper}</>
  ) : (
    <LogoStyles.Container id="logo" href={props.logoUrl}>
      <props.svgFullLogo id="full-logo" />
      <props.svgCompactLogo id="compact-logo" />
    </LogoStyles.Container>
  );
