import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  width: 200px;
  padding: 15px 0px;
  text-align: center;
  background-color: var(--theme-accent-color);
  border-radius: 50px;
  color: var(--theme-first-color);
  font-weight: 600;
  margin-top: 20%;
  cursor: pointer;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
