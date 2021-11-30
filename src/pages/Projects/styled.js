import styled from 'styled-components';

export const Area = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: auto;
 
`;
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 300px);
  justify-content: center;
  align-items: center;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  height: 100%;
  padding-bottom: 40px;
  margin-top: 80px;
  margin-bottom: 30px;
  z-index: 90;
  position: relative;
  @media(max-width:600px){
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(4, 300px);
  }
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  box-shadow: 0 0 5px #666;
  position: relative;
  &::before{
    content:"";
    background:rgba(0,0,0,.3);
    width:100%;
    height:300px;
    position:absolute;  
    z-index:1000;
  }
  }
  .empreendimento{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
  }

  img{
    position: absolute;
    width: 300px;
    height: 300px;
    cursor: pointer;
    box-shadow: 0 0 10px #666;
  }
  h1{
    position: relative;
    z-index: 1000;
    color: #fff;
    font-size: 40px;
    text-shadow: 1px 1px 2px #000;
    ::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      border-radius: 3px;
      background-color: #6D0D13;
      bottom: 0;
      left: 0;
      right: 0;
      transform: scaleX(0);
      transition: transform 0.15s ease-in-out;
    }
    :hover::after{
      transform: scaleX(1);
    }
  }
  
`;




