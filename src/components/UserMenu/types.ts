import { SeparatorProps } from "../SeparatorMenu/types";

interface UserMenuComponent {
  wrapper: React.ReactNode;
}

interface UserMenuItem {
  label: string;
  onClick?: () => void;
}

export interface UserMenuOptions {
  avatarStyle: {
    buttonColor: string;
    buttonBorderColor: string;
  };

  menuStyle: {
    bgColor: string;
    hoverColor: string;
    hoverBorderLeftColor: string;
    textColor: string;
    fontSize: string;
    fontWeight: string;
  };

  items: (UserMenuItem | SeparatorProps)[];
}

export type UserMenuProps = UserMenuOptions | UserMenuComponent | null;
