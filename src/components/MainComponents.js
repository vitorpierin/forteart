import styled from 'styled-components';


export const Template = styled.div`

`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: auto;
 
`;
export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:180px;
  margin-bottom: 20px;
  height: 40px;
  h1:first-child{
    text-align: center;
    color: #666;
    text-shadow: 1px 1px 2px #555;
    margin-right: 20px;
    font-weight: 100;
    font-size: 40px;
  }
  h1:last-child{
    color: #6D0D13;
    font-weight: bolder;
    font-size: 40px;
    text-shadow: 1px 1px 2px #555;
  }
  @media(max-width:800px){
    h1:first-child{
       font-size: 28px;
  }
    h1:last-child{
      font-size: 29px;
        }
  }
`;
export const ProjectTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 100px;
  h1{
    color: #6D0D13;
    font-weight: bolder;
    font-size: 50px;
    text-shadow: 1px 1px 2px #555;
    margin-bottom: 0px;
  }
  p{
    margin-top: 0px;
    text-align: center;
    color: #999;
    font-weight: 100;
    letter-spacing: 5px;
  }
`;