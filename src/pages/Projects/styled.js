import styled from 'styled-components';

export const Area = styled.section`
  
  
`;
export const Wrapper = styled.div`
  position: absolute;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  
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
    background: linear-gradient(0deg, rgba(109,13,19,0.6) 0%,  rgba(11,56,83,0.6) 50%,  rgba(109,13,19,0.6) 100%);
    
  }

  
  h1{
    color: #fff;
    font-weight: bold;
    z-index: 90;
    text-shadow: 1px 1px 5px #000;
    text-align: center;
  }  
  @media(max-width:600px){
    &{
      height: 200px;
    }
   h1{
     font-size: 35px;
   } 
  }
`;


export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%,  rgba(0,0,0,0.6) 50%,  rgba(0,0,0,0.6) 100%);

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
  margin-top: 40px;
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
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:1000;
  }
  &:hover{
    box-shadow: 0 0 15px #999;
    h1{
     text-shadow:1px 1px 2px #999;
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
  }
  h1{
    position: relative;
    z-index: 1000;
    color: #fff;
    font-size: 40px;
    text-shadow: 1px 1px 2px #000;
  }
  
`;




