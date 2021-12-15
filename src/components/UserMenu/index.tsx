import React from "react";

import { ReactComponent as AvatarIcon } from "../../assets/avatar-icon.svg";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-down-icon.svg";
import { SeparatorMenu } from "../SeparatorMenu";
import { useUserMenuStyles } from "./styles";
import { UserMenuOptions, UserMenuProps } from "./types";

const UserMenuContainer: React.FC<UserMenuOptions> = ({
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
          {items.map((item, index) =>
            "separator" in item ? (
              <SeparatorMenu {...item} />
            ) : (
              <ListItem key={index} onClick={item.onClick} {...menuStyle}>
                {item.label}
              </ListItem>
            )
          )}
        </List>
      </Menus>
    </Container>
  );
};

export const UserMenuComponent: React.FC<UserMenuProps> = (props) =>
  "wrapper" in props ? <>{props.wrapper}</> : <UserMenuContainer {...props} />;
