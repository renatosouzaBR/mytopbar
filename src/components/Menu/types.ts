interface Submenu {
  label: string;
  style?: {
    textColor: string;
    borderColor: string;
  };

  onClick?: () => void;
}

interface Menu {
  label: string;
  submenu?: Submenu[];
  style?: {
    textColor: string;
    borderColor: string;
  };

  onClick?: () => void;
}

export interface MenuProps {
  menu: Menu[];
}
