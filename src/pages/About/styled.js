import styled from 'styled-components/macro';


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
  }  
  @media(max-width:600px){
    &{
      height: 200px;
    }
   h1{
     font-size: 40px;
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
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin: auto;
  padding: 50px;
  p{
    text-indent: 15px;
   
  }
  img{
    width: 450px;
    
  }


  @media(max-width:600px){
    img{
      width: 300px;
      padding: 15px;
    }
  }
`;




