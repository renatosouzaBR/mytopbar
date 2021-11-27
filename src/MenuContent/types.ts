interface Submenu {
  label: string;
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

export interface MenuContentProps {
  menu: Menu[];
}
