import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-right: 20px;
  position: relative;
  &.active {
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      height: 2px;
      background-color: white;
      width: 100%;
      top: 22px;
      left: 0;
    }
  }
`;
