import React from 'react';

import Button from '../Button';

import { 
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  PencilIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const LeftMenuBar: React.FC = () => {

  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button icon>
          <span>Tweet</span>
          <PencilIcon />
        </Button>

      </TopSide>

      <BottomSide>
        <Avatar>
          <img src="https://github.com/LucasReinaldo.png" alt="Avatar" />
        </Avatar>

        <ProfileData>
          <strong>Lucas Reinaldo</strong>
          <span>@lreinaldodemelo</span>
        </ProfileData>

        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default LeftMenuBar;
