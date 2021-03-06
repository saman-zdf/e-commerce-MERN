import styled from 'styled-components';
import { mobile } from './Responsive';
export const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h2``;

export const Desc = styled.p`
  margin: 20px 0px;
  max-width: 350px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: grid;
  place-items: center;
  margin-right: 15px;
  background-color: #${(props) => props.bg};
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: 'none',
  })}
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: '#e9e9e9',
  })}
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 100%;
`;
