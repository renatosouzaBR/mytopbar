import React from "react";

import { MyTopbar } from "mytopbar";
import { ReactComponent as FullLogo } from "./assets/logo.svg";
import { ReactComponent as CompactLogo } from "./assets/compact-logo.svg";

export const App: React.FC = () => {
  return (
    <MyTopbar
      viewOptions={{ bgColor: "#37AD8C", height: 60, maxWidth: 1366 }}
      logo={{ SvgFullLogo: FullLogo, SvgCompactLogo: CompactLogo }}
      menu={{
        bgColor: "#37AD8C",
        textColor: "#fff",
        textSize: "18px",
        closeButtonColor: "#fff",
        hamburgerIconColor: "#fff",

        items: [
          {
            label: "Cadastros",
            submenu: [{ label: "Clientes" }, { label: "Produtos" }],
          },
          { label: "Financeiro" },
          { label: "Estoque" },
        ],
      }}
    />
  );
};
