export interface Submenu {
  label: string;
  style?: {
    textColor: string;
    borderColor: string;
  };

  onClick?: () => void;
}
