import styled from 'styled-components';

export const CreatedSaladWrapper = styled.div`
  flex: 0 0 50%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 10px;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CreatedSaladInner = styled.div`
  padding: 10px;
  flex: 1 1 auto;
`;

export const CreatedSaladList = styled.ul`
  display: flex;
`;

export const CreatedSaladListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`;
