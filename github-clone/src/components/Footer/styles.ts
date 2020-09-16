import styled, { css } from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const iconCSS = css`
    fill: var(--border);
    width: 24px;
    height: 24px;
    flex-shrink: none;
    margin-top: 25px;


    &:hover {
        fill: var(--gray);
    }
`;

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 25px 32px;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%

    border-top: 1px solid border;
`;

export const GithubLogo = styled(FaGithub)`
    ${iconCSS}
`;