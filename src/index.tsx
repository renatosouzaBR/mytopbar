import React from "react";

import { Styles } from "./styles";

interface Props {
  backgroundColor: string;
  height: number;
  maxWidth: number;
}

export const MyTopbar: React.FC<Props> = ({
  backgroundColor,
  height,
  maxWidth,
}) => {
  return (
    <Styles.Container bgColor={backgroundColor} height={height}>
      <Styles.Content maxWidth={maxWidth}>Topbar</Styles.Content>
    </Styles.Container>
  );
};
