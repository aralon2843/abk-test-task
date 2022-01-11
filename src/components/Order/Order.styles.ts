import styled from 'styled-components';

export const OrderWrapper = styled.div`
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const OrderInner = styled.div`
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 400px;
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const OrderFooter = styled.footer`
  flex: 0 0 auto;
`;
