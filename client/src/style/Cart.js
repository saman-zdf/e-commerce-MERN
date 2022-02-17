import styled from 'styled-components';
import { mobile } from './Responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'field' && 'none'};
  background-color: ${(props) =>
    props.type === 'field' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'field' && 'white'};
`;
export const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const ProductName = styled.span`
  margin-bottom: 10px;
`;

export const ProductId = styled.span`
  margin-bottom: 10px;
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span`
  margin-bottom: 10px;
`;

export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: '5px 15px' })}
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
`;
export const SummaryTitle = styled.h2`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
`;
