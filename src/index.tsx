import React from "react";

import { LogoProps } from "./components/Logo/types";
import { MenuProps } from "./components/Menu/types";
import { UserMenu } from "./components/UserMenu/types";

import { Logo } from "./components/Logo";
import { MenuComponent } from "./components/Menu";
import { UserMenuComponent } from "./components/UserMenu";
import { MyTopbarStyles } from "./styles";

interface Props extends LogoProps, MenuProps {
  barOptions: {
    height: number;
    maxWidth: number;
  };
  userMenuOptions: UserMenu;
}

export const MyTopbar = ({
  barOptions,
  logo,
  menu,
  userMenuOptions,
}: Props): JSX.Element => {
  return (
    <MyTopbarStyles.Container bgColor={menu.bgColor} height={barOptions.height}>
      <MyTopbarStyles.Content maxWidth={barOptions.maxWidth}>
        <Logo logo={logo} />

        <MenuComponent menu={menu} />

        <UserMenuComponent {...userMenuOptions} />
      </MyTopbarStyles.Content>
    </MyTopbarStyles.Container>
  );
};
