import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME, PLAYER, LIBRARY, PROFILE, AUTH, getSelectedKey } from "../../app/routing/config";
import apiClient from "../../spotify";
import * as S from "./navBarStyle";

const defaultImageUrl = "https://avatars.githubusercontent.com/u/113677480?v=4";

const NavBar: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">((localStorage.getItem("theme") as "dark" | "light") || "light");
  const [image, setImage] = useState(defaultImageUrl);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setIsAuth(!!token);
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const items = [
    {
      label: <Link to={HOME}>Home</Link>,
      key: "home",
    },
    {
      label: <Link to={PLAYER}>Player</Link>,
      key: "player",
    },
    {
      label: <Link to={LIBRARY}>Playlist Library</Link>,
      key: "library",
    },
    {
      label: (
        <Link to={PROFILE}>
          <S.AvatarImage src={image} alt="avatar" />
        </Link>
      ),
      key: "profile",
    },
    {
      label: (
        <>
          <S.CustomSwitch onChange={toggleTheme} data-testid="theme-toggle" checked={theme === "dark"} />
          <S.CustomSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </>
      ),
      key: "theme-toggle",
    },
    {
      label: isAuth ? <S.CustomButton onClick={handleLogout}>Выйти</S.CustomButton> : <Link to={AUTH}>Войти</Link>,
      key: "auth",
    },
  ];

  return (
    <div>
      <S.NavBarContainer>
        <S.CustomMenu mode="horizontal" defaultSelectedKeys={["home"]} selectedKeys={[getSelectedKey()]}>
          {items.map((item) => (
            <S.CustomMenuItem key={item.key}>{item.label}</S.CustomMenuItem>
          ))}
        </S.CustomMenu>
      </S.NavBarContainer>
    </div>
  );
};

export default NavBar;
