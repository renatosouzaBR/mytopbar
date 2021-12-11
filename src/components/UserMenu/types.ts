interface UserMenuItem {
  label: string;
  onClick?: () => void;
}

export interface UserMenu {
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

  items: UserMenuItem[];
}
