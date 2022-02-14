import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
export const Title = styled.h1`
  font-size: 78px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
