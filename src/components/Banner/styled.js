import styled, { css } from 'styled-components/macro';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';


export const Area = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  
`;
export const Wrapper = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
 
`;

export const Slide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  
`;

export const Slider = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
 
  

  &::before{    
    content: '';
    position: absolute;
    z-index:2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%,  rgba(0,0,0,0.8) 50%,  rgba(0,0,0,0.8) 100%);
    
  }
`;
export const Image = styled.img`
      @keyframes autoplay6 {
      0% {opacity: 0.0}
      10% {opacity: 0.8}
      50% {opacity: 1.0}
      60% {opacity: 0.8}
      90% {opacity: 0.2}
      100% {opacity: 0}
    }
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: 10s autoplay6 ease-in-out;
  transition: autoplay6 10s;
  top: 0; 
  left: 0; 
  opacity: 0.0;
`;



export const Content = styled.div`
 
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  text-align: left;
  .button{
    position: absolute;
    width: 170px;
    padding: 10px 20px;
    background: #6D0D13;
    border: none;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 2px 0 5px #999;
    cursor: pointer;
    text-decoration: none;
    margin-top: 200px;
    transition: 0.3s;
    &:hover{
      background:#F45B69;
    }
  }
`;

export const Title = styled.h1`
text-align: center;
  overflow: hidden;
  letter-spacing: 20px;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 1px 1px 15px #000;
  animation-name: slide;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(1, 1.5, 0.3, 0.9);
  ::before{
    content: '';
    position: absolute;
    right: 0px;
    bottom: 0;

  }
  @keyframes slide {
      0% {height: 0px}      
      100% {height:60px}
  }
  @media(max-width:800px){
    animation-name: slide;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(1, 1.5, 0.3, 0.9);
    ::before{
      content: '';
      position: absolute;
      left:0;

  }
  @keyframes slide {
      0% {width: 0px}      
      100% {width:100%}
  }
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

//Arrow Banner
export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #6D0D13;
  border-radius: 50px;
  box-shadow: 1px 0px 3px #999;
  padding: 10px;
  margin-right:10px;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background:#F45B69;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
