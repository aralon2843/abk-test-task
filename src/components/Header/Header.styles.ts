import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 12px 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.pink};
`;

export const HeaderInner = styled.div`
  width: 100%;
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`;

export const MenuItem = styled.li`
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s ease all;
  &:last-child {
    text-transform: uppercase;
    margin-right: 0;
    padding: 6px 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.coral};
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.light};
    }
  }
  &:not(:last-child):hover {
    color: ${({ theme }) => theme.colors.coral};
  }
`;
