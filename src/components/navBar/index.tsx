import React, { FC,useState, useEffect} from 'react'
import { Menu,Button } from 'antd'
import { Link} from 'react-router-dom'
import { HOME,PLAYER,LIBRARY,PROFILE, AUTH, getSelectedKey} from '../../app/routing/config'
import apiClient from "../../spotify";

const defaultImageUrl = "https://avatars.githubusercontent.com/u/113677480?v=4";

const NavBar: FC = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [image, setImage] = useState(defaultImageUrl);
    useEffect(() => {
      const token = window.localStorage.getItem('token');
      setIsAuth(!!token);
      apiClient.get("me").then((response) => {
        setImage(response.data.images[0].url);
      });
    }, []);
  
    const handleLogout = () => {
      window.localStorage.removeItem('token');
      setIsAuth(false);
    };

    const items = [

        {
            label: <Link to={HOME}>Home</Link>,
            key: 'home',
        },
        {
            label: <Link to={PLAYER}>Player</Link>,
            key: 'player',
        },
        {
            label: <Link to={LIBRARY}>Playlist Library</Link>,
            key: 'library',
        },
        {
            label: <Link to={PROFILE}><img src={image} alt="" style={{ objectFit: 'cover', borderRadius: '20px', width: '40px', height: '40px' }} /></Link>,
            key: 'profile',
        },
        {
            label: isAuth ? (
              <Button type="link" onClick={handleLogout}>
                Выйти
              </Button>
            ) : (
              <Link to={AUTH}>Войти</Link>
            ),
            key: 'auth',
          },
        
    ]
    
    return (
      <div>
          <Menu style={{
              marginBottom: '20px',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
          }} mode="horizontal"  defaultSelectedKeys={["home"]}  selectedKeys={[getSelectedKey()]} items={items} />
      </div>
    )
}


export default NavBar
