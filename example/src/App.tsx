import React from "react";

import { MyTopbar } from "mytopbar";
import { ReactComponent as FullLogo } from "./assets/logo.svg";
import { ReactComponent as CompactLogo } from "./assets/compact-logo.svg";

export const App: React.FC = () => {
  const menuItems = [
    {
      label: "Cadastro",
      submenu: [{ label: "Cliente" }, { label: "Produtos" }],
    },
    {
      label: "Financeiro",
    },
    {
      label: "Produtos",
    },
  ];

  return (
    <MyTopbar
      viewOptions={{ bgColor: "#fff", height: 60, maxWidth: 1366 }}
      logo={{ SvgFullLogo: FullLogo, SvgCompactLogo: CompactLogo }}
      menu={menuItems}
    />
  );
};
