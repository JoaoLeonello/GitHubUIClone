import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForksIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/JoaoLeonello'}>
          joaoleonello
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/JoaoLeonello/GitHubUIClone'}>
          GithubUIClone
        </Link>
      </Breadcrumb>

      <p>Github typescript clone</p>

      <Stats>
        <li>
          <StarIcon/>
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/JoaoLeonello/GitHubUIClone'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;