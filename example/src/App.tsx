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
      /* Configuração do menu opções de avatar */
      userMenuOptions={{
        avatarStyle: {
          buttonColor: "#00C4DF",
          buttonBorderColor: "#C4C4C4",
        },
        menuStyle: {
          bgColor: "#FFF",
          hoverColor: "rgba(0, 0, 0, 0.05)",
          hoverBorderLeftColor: "#00C4DF",
          textColor: "#363636",
          fontSize: "12px",
          fontWeight: "400",
        },
        items: [
          { label: "Configurações", onClick: () => console.log("clicou") },
          { label: "Perfil", onClick: () => console.log("clicou") },
          { label: "Sair", onClick: () => console.log("clicou") },
        ],
      }}
    />
  );
};
