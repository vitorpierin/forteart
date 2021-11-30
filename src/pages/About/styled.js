import styled from 'styled-components/macro';

export const Area = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
`;

export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding: 50px;
  p{
    margin-top: 0px;
    text-indent: 15px;
    color: #555;
    line-height: 30px;
   
  }
  img{
    width: 550px;
    margin-top: 50px;
    margin-bottom: 0px;
    :after{
      content: '';
      background-color: #000;
      width: 100%;
      
    }
  }


  @media(max-width:600px){
    img{
      width: 300px;
      padding: 15px;
    }
  }
`;




