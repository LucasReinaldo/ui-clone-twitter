import styled, { css } from 'styled-components';
import { ArrowLeft,
  Home,
  Search,
  Bell,
  Mail,
} from '../../styles/icons';


const iconStyle = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--color-gray);

  &:hover, &.active {
    fill: var(--color-twitter);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* não vai passar de 601px, caso menor, vai ser o tamanho da tela */
  width: min(601px, 100%);

  @media(min-width: 500px) {
    border-left: 1px solid var(--color-outline);
    border-right: 1px solid var(--color-outline);
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--color-outline);

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--color-twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--color-twitter);
  color: red;
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--color-gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--color-primary);
  width: 100%;
  border-top: 1px solid var(--color-outline);

  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media(min-width: 500px) {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconStyle};
`;

export const SearchIcon = styled(Search)`
  ${iconStyle};
`;

export const BellIcon = styled(Bell)`
  ${iconStyle};
`;

export const EmailIcon = styled(Mail)`
  ${iconStyle};
`;
