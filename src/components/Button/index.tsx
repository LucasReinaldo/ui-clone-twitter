import styled, { css } from 'styled-components';

interface IProps {
  outlined?: boolean;
  icon?: boolean;
}

export default styled.button<IProps>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--color-twitter)')};
  color: ${(props) => (props.outlined ? 'var(--color-twitter)' : 'var(--color-white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--color-twitter)' : 'none')};
  padding: ${(props) => (props.icon ? '16px' : '0')};
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;

  ${props => props.icon && css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    > svg {
      width: 24px;
      height: 24px;
      position: absolute; 
    }
  `};
  
  &:hover {
    background: ${(props) => 
      (props.outlined 
        ? 'var(--color-twitter-dark-hover)' 
        : 'var(--color-twitter-light-hover)'
      )};
  }
`;
