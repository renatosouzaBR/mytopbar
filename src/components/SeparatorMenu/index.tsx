import React from "react";

import { SeparatorMenuStyles } from "./styles";

const { Container } = SeparatorMenuStyles;

export const SeparatorMenu = (props: { color?: string }) => {
  return <Container className="separator-menu" {...props} />;
};
