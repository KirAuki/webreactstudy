import { FC, useState, useEffect } from "react";
import { setClientToken } from "../../spotify";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { HOME, PROFILE, LIBRARY, PLAYER, AUTH } from "./config";
import { Home, Player, Library, Profile, Auth } from "../../screens";
const MainRouter: FC = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token || "");
      setClientToken(token || "");
    }
    console.log(token);
  }, []);
  const isAuthenticated = !!token;
  const resultPaths: RouteObject[] = [
    { path: HOME, element: <Home /> },
    { path: PROFILE, element: isAuthenticated ? <Profile /> : <Navigate to={AUTH} replace /> },
    { path: LIBRARY, element: isAuthenticated ? <Library /> : <Navigate to={AUTH} replace /> },
    { path: PLAYER, element: isAuthenticated ? <Player /> : <Navigate to={AUTH} replace /> },
    { path: AUTH, element: <Auth /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  return useRoutes(resultPaths);
};

export default MainRouter;
