import styled from "styled-components";

export const Styles = {
  Container: styled.div<{ bgColor: string; height: number }>`
    background-color: ${(props) => props.bgColor};
    height: ${(props) => props.height}px;

    display: flex;
    justify-content: center;
  `,
  Content: styled.div<{ maxWidth: number }>`
    width: 100%;
    height: 100%;
    max-width: ${(props) => props.maxWidth}px;
  `,
};
