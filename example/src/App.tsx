import React from "react";

import { MyTopbar } from "mytopbar";
import { ReactComponent as FullLogo } from "./assets/logo.svg";
import { ReactComponent as CompactLogo } from "./assets/compact-logo.svg";

export const App: React.FC = () => {
  return (
    <MyTopbar
      barOptions={{
        height: 60,
        maxWidth: 1366,
      }}
      logo={{ SvgFullLogo: FullLogo, SvgCompactLogo: CompactLogo }}
      menu={{
        bgColor: "#fff",
        textColor: "#8F00C1",
        textSize: "18px",
        closeButtonColor: "#00000080",
        hamburgerIconColor: "#8F00C1",
        borderColor: "#8F00C1",

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
