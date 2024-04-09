import { useLocation } from "react-router-dom";

export const HOME = "/";
export const PROFILE = "/profile";
export const LIBRARY = "/library";
export const PLAYER = "/player";
export const AUTH = "/auth";

export const getSelectedKey = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case HOME:
      return "home";
    case PLAYER:
      return "player";
    case LIBRARY:
      return "library";
    case PROFILE:
      return "profile";
    case AUTH:
      return "auth";
    default:
      return "";
  }
};
