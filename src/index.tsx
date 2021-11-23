import React, { CSSProperties } from "react";
import "./styles.css";

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
  const contentStyle = (maxWidth: number): CSSProperties => ({
    maxWidth,
  });

  const containerStyles = (height: number, bg: string): CSSProperties => ({
    backgroundColor: bg,
    height,
  });

  return (
    <div id="container" style={containerStyles(height, backgroundColor)}>
      <div id="content" style={contentStyle(maxWidth)}>
        Topbar
      </div>
    </div>
  );
};
