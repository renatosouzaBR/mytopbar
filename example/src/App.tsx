import React from "react";

import { MyTopbar } from "mytopbar";
import { ReactComponent as FullLogo } from "./assets/logo.svg";
import { ReactComponent as CompactLogo } from "./assets/compact-logo.svg";

export const App: React.FC = () => {
  const menuItems = [
    {
      label: "Cadastro",
      submenu: [
        { label: "Cliente", style: { textColor: "#5ef", borderColor: "#5ef" } },
        { label: "Produtos", onClick: () => alert("Clicou") },
      ],
      style: {
        textColor: "#ef4",
        borderColor: "#000",
      },
    },
    {
      label: "Financeiro",
      onClick: () => alert("Clicou"),
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
