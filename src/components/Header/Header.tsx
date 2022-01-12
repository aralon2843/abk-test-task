import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FlexContainer } from '../App/App.styles';
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
              <FlexContainer>
                <MenuItem>
                  <Link to="/">Салаты</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/create"> Собрать салат</Link>
                </MenuItem>
              </FlexContainer>
              <MenuItem>
                <Link to="/order"> Корзина</Link>
              </MenuItem>
            </Menu>
          </Navigation>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
