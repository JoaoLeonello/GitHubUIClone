import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide></LeftSide>
          <ProfileData
            username={'JoaoLeonello'}
            name={'Joao Leonello'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/55457001?s=400&u=911875996ddb2654dfdba7cebbe4dfee71e3b4b8&v=4'}
            followers={887}
            following={7}
            company={'Rocketseat'}
            location={'Londrina, Brazil'}
            email={'jfelipe.pl@gmail.com'}
            blog={undefined}
          />
        <RightSide></RightSide>
      </Main>
    </Container>
  )
}

export default Profile;