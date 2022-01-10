import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../App/App.styles';
import {
  HeaderInner,
  HeaderWrapper,
  Menu,
  MenuItem,
  Navigation,
} from './Header.styles';

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Navigation>
            <Menu>
              <MenuItem>
                <Link to="/salads">Салаты</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/create"> Собрать свой салат</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order"> Оформить заказ</Link>
              </MenuItem>
            </Menu>
          </Navigation>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
