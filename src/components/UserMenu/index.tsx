import React from "react";

import { ReactComponent as AvatarIcon } from "../../assets/avatar-icon.svg";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-down-icon.svg";
import { useUserMenuStyles } from "./styles";
import { UserMenuProps } from "./types";

export const UserMenuComponent: React.FC<UserMenuProps> = ({
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
          {items.map((item, index) => (
            <ListItem key={index} onClick={item.onClick} {...menuStyle}>
              {item.label}
            </ListItem>
          ))}
        </List>
      </Menus>
    </Container>
  );
};
