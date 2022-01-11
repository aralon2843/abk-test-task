// <MoleculeWrapper>
// <Image src={`http://test-job.webatom.ru${molecule.image}`} />
// <Title>{molecule.title}</Title>
// <Quantity>{molecule.qty}</Quantity>
// <Price>{molecule.price}</Price>
// <DiscountPrice>{molecule.discount_price}</DiscountPrice>

import styled from 'styled-components';
export const MoleculesWrapper = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-wrap: wrap;
`;

export const MoleculeWrapper = styled.div`
  flex: 0 0 33%;
  border: 1px solid ${({ theme }) => theme.colors.coral};
  padding: 10px;
  border-radius: 10px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Quantity = styled.p`
  font-weight: 50;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Price = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.coral};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const DiscountPrice = styled(Price)``;

export const Button = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.coral};
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  cursor: pointer;
`;
