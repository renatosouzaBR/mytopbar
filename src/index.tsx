import React from "react";
import "./style.css";

interface Props {
  backgroundColor: string;
  height: number;
  maxWidth: number;
}

export const MyTopbar = ({
  backgroundColor,
  height,
  maxWidth,
}: Props): JSX.Element => {
  console.log(backgroundColor);
  console.log(height);
  console.log(maxWidth);

  return (
    <div id="container">
      <div>Topbar</div>
    </div>
  );
};
