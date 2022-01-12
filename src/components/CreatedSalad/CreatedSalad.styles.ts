import styled from 'styled-components';

export const CreatedSaladWrapper = styled.div`
  flex: 0 0 50%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: block;
  }
`;
