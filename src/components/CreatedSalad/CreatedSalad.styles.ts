import styled from 'styled-components';

export const CreatedSaladWrapper = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.coral};
  border-radius: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
