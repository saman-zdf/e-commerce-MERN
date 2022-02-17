import styled from 'styled-components';
import { mobile } from './Responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h3`
  font-weight: 300;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({ width: '90%' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '90%' })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: grid;
  place-items: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  padding: 15px;
  font-weight: 500;
  transition: all 0.4s ease;
  &:hover {
    background-color: teal;
    color: #fff;
  }
`;
