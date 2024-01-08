import React,{FC ,useState, useEffect }  from 'react';
import { setClientToken } from "../../spotify";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { HOME,PROFILE,LIBRARY,PLAYER,AUTH } from './config';
import { HomePage,PlayerPage,LibraryPage,ProfilePage,AuthPage } from '../../pages'


const MainRouter : FC = () => {
    const [token, setToken] = useState('');

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
        setToken(token || '');
        setClientToken(token || '');
        }
        console.log(token)
    }, []);
    const isAuthenticated = !!token;
    const resultPaths: RouteObject[] = [
      { path: HOME, element: <HomePage />,},
      { path: PROFILE, element: isAuthenticated ? <ProfilePage /> : <Navigate to={AUTH} replace />,},
      { path: LIBRARY, element: isAuthenticated ?  <LibraryPage />: <Navigate to={AUTH} replace />},
      { path: PLAYER, element: isAuthenticated ?  <PlayerPage />: <Navigate to={AUTH} replace />},
      { path: AUTH, element: <AuthPage />,},
      { path: "*", element: <Navigate to={'/'} replace />},
    ]
  
   
    return useRoutes(resultPaths);
  }
  
  export default MainRouter;