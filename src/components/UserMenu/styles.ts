import styled from "styled-components";

export const useUserMenuStyles = () => {
  const Container = styled.div<{ avatarButtonColor: string }>`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px;

    cursor: pointer;

    svg {
      fill: ${(props) => props.avatarButtonColor};
    }
  `;

  return {
    Container,
  };
};
