import React from 'react';
import Feed from '../Feed';

import { 
  Container,
  Banner,
  ProfileImageContainer,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <ProfileImageContainer>
          <img src="https://github.com/LucasReinaldo.png" alt="Avatar" />
        </ProfileImageContainer>
      </Banner>

      <ProfileData>
        <EditButton outlined >Edit Profile</EditButton>

        <h1>Lucas Reinaldo</h1>
        <h2>@lreinaldodemelo</h2>

        <p>
          <a href="https://github.com/LucasReinaldo">Open to work!</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Dublin, Ireland
          </li>
          <li>
            <CakeIcon />
            Born 7 June 1993
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>876</strong>
          </span>
          <span>
            <strong>987</strong> followers
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage;