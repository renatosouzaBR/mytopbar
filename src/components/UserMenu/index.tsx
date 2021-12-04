import React from "react";
import { useUserMenuStyles } from "./styles";

export const UserMenu: React.FC = () => {
  const { Container } = useUserMenuStyles();

  return <Container id="options"></Container>;
};
