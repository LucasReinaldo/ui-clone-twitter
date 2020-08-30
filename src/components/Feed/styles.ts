import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 11px 0 15px;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  color: var(--color-twitter);
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--color-twitter);

  &:hover {
    background: var(--color-twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

