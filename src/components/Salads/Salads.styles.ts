import styled from 'styled-components';

export const SaladsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  padding: 10px;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2vw;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2vw;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 5vw;
  }
`;

export const SaladWrapper = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding-bottom: 15px;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
`;

export const SaladCompositionList = styled.ul`
  flex: 1 1 auto;
  padding: 0px 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const SaladCompositionItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const SaladInner = styled.div`
  flex: 1 1 auto;
`;

export const SaladList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SaladListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.333%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
