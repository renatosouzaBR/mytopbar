import styled from "styled-components";

export const MyTopbarStyles = {
  Container: styled.div<{ bgColor: string; height: number }>`
    background-color: ${(props) => props.bgColor};
    height: ${(props) => props.height}px;

    display: flex;
    justify-content: center;
    position: relative;

    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 960px) {
      ul#menu {
        order: 0;
      }

      div#logo {
        order: 1;
      }

      div#options {
        order: 3;
      }
    }
  `,

  Content: styled.div<{ maxWidth: number }>`
    background-color: transparent;
    width: 96%;
    max-width: ${(props) => props.maxWidth}px;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
