import React from "react";

import { ReactComponent as AvatarIcon } from "../../assets/avatar-icon.svg";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-down-icon.svg";
import { useUserMenuStyles } from "./styles";
import { UserMenu } from "./types";

export const UserMenuComponent: React.FC<UserMenu> = ({ style }) => {
  const { Container } = useUserMenuStyles();

  return (
    <Container id="options" {...style}>
      <AvatarIcon />
      <ChevronIcon />
    </Container>
  );
};
