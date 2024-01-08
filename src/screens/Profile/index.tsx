import React, { useEffect, useState } from 'react';
import apiClient from '../../spotify';
import './profile.css'


interface ProfileData {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
}

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    apiClient.get('me')
      .then(response => setProfileData(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  const { display_name, images, followers, country, external_urls, product } = profileData;

  return (
    <div className="screen-container">
        <div className="wrapper">
            <div className="user-card">
                <div className="user-card-img">
                    <img src={images[0].url} alt="Profile" height={images[0].height} width={images[0].width} />
                </div>
                <div className="user-card-info">
                    <h1>{display_name}</h1>
                    <p>Country: {country}</p>
                    <p>Followers: {followers.total}</p>
                    <p>Spotify URL: <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">{external_urls.spotify}</a></p>
                    <p>Product: {product}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfilePage;