import React from "react";

import { LogoProps } from "./components/Logo/types";
import { MenuProps } from "./components/Menu/types";
import { UserMenuProps } from "./components/UserMenu/types";

import { Logo } from "./components/Logo";
import { MenuComponent } from "./components/Menu";
import { UserMenuComponent } from "./components/UserMenu";
import { MyTopbarStyles } from "./styles";

interface Props extends LogoProps {
  barOptions: {
    bgColor: string;
    height: number;
    maxWidth: number;
  };
  menuOptions: MenuProps;
  userMenuOptions: UserMenuProps;
}

export const MyTopbar = ({
  barOptions,
  logo,
  menuOptions,
  userMenuOptions,
}: Props): JSX.Element => {
  return (
    <MyTopbarStyles.Container {...barOptions}>
      <MyTopbarStyles.Content {...barOptions}>
        <Logo logo={logo} />

        <MenuComponent {...menuOptions} />

        <UserMenuComponent {...userMenuOptions} />
      </MyTopbarStyles.Content>
    </MyTopbarStyles.Container>
  );
};
