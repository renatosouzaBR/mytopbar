import React from "react";

import { ReactComponent as AvatarIcon } from "../../assets/avatar-icon.svg";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-down-icon.svg";
import { useUserMenuStyles } from "./styles";
import { UserMenu } from "./types";

export const UserMenuComponent: React.FC<UserMenu> = ({
  items,
  avatarStyle,
  menuStyle,
}) => {
  const { Container, Button, List, ListItem, Menus, TriangleIcon } =
    useUserMenuStyles();

  return (
    <Container id="options">
      <Button {...avatarStyle}>
        <AvatarIcon />
        <ChevronIcon />
      </Button>

      <Menus id="menu-container">
        <TriangleIcon {...menuStyle} />

        <List {...menuStyle}>
          {items.map((item) => (
            <ListItem {...menuStyle} onClick={item.onClick}>
              {item.label}
            </ListItem>
          ))}
        </List>
      </Menus>
    </Container>
  );
};
