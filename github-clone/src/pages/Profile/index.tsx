import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import RandomCalendar from '../../components/RandomCalendar'
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon/>
      <span className="label">Repositories</span>
      <span className="number">25</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent/>
        </div>
        

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
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
        </LeftSide>
          
        <RightSide>
          <Tab className="mobile">
            <TabContent/>
            <span className="line"/>
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'JoaoLeonello'}
                  reponame={'Petfinder'}
                  description={'TCC Project'}
                  language={'Javascript'}
                  stars={9}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar/>
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;