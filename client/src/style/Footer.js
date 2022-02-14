import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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
`;

export const Right = styled.div`
  flex: 1;
`;
