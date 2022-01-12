import styled from 'styled-components';
export const MoleculesWrapper = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const MoleculeWrapper = styled.div`
  flex: 0 1 170px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    flex: 0 0 170px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  height: 120px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  flex: 1 1 auto;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Quantity = styled.p`
  flex: 1 1 auto;
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Price = styled.div`
  flex: 1 1 auto;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DiscountPrice = styled(Price)``;

export const Button = styled.button`
  display: block;
  outline: none;
  border: none;
  padding: 5px 5px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  width: 150px;
  transition: 0.3s ease all;
  margin: 0 auto;
  flex: 0 0 auto;
  &:not([disabled]):hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`;
