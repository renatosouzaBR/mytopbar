import styled from "styled-components";

export const SeparatorMenuStyles = {
  Container: styled.div<{ color?: string }>`
    height: 1px;
    width: 80%;
    background-color: ${(props) => (props.color ? props.color : "#e2e2e2")};

    margin: 10px auto;
  `,
};
