import styled from 'styled-components';

export const CreatedSaladWrapper = styled.div`
  flex: 0 0 50%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 100%;
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const CreateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;
