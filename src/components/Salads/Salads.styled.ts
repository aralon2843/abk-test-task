import styled from 'styled-components';

export const SaladsWrapper = styled.div`
  display: flex;
`;

export const SaladWrapper = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.coral};
  border-radius: 10px;
  padding: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
