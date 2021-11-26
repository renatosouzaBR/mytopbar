import React from "react";
import "./styles.css";

interface Props {
  logo: {
    SvgFullLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    SvgCompactLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };
}

export const LogoContent: React.FC<Props> = ({ logo }) => {
  return (
    <div id="logo">
      <logo.SvgFullLogo id="full-logo" />
      <logo.SvgCompactLogo id="compact-logo" />
    </div>
  );
};
