import styled from "styled-components";
import { Menu, Button, Switch } from "antd";

export const NavBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const CustomMenu = styled(Menu)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0;
  background-color: var(--theme-bg);
  transition: background-color 0.8s;
  &::before,
  &::after {
    display: none;
  }
`;

export const CustomMenuItem = styled(Menu.Item)`
  margin: 0;
  color: var(--theme-first-color);
  & :hover {
    color: var(--theme-accent-color);
  }
  &.ant-menu-item-selected a {
    color: var(--theme-accent-color);
  }
  &::before,
  &::after {
    display: none;
  }
`;
export const CustomButton = styled(Button)`
  background-color: var(--theme-accent-color);
  color: var(--theme-first-color);
  border: none;
  & :hover {
    color: var(--theme-bg);
  }
`;
export const CustomSwitch = styled(Switch)`
  &.ant-switch.ant-switch-checked {
    background: var(--theme-accent-color);
    &:hover {
      background: var(--theme-accent-color);
    }
  }
`;

export const AvatarImage = styled.img`
  object-fit: cover;
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;
