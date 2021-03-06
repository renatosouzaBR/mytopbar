import React from "react";

interface SvgLogo {
  svgFullLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  svgCompactLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  logoUrl: string;
}

interface LogoComponent {
  wrapper: React.ReactNode;
}

export type LogoProps = SvgLogo | LogoComponent | null;
