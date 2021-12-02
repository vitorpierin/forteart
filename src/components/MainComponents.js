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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top:160px;
  margin-bottom: 20px;
  height: 40px;
  h1:first-child{
      color: #666;
      text-shadow: 1px 1px 2px #555;
      font-weight: 100;
      margin-bottom: 0px;
      font-size: 40px;
    }
  h1:last-child{
    margin-top: 0px;
    color: #6D0D13;
    font-weight: bolder;
    font-size: 40px;
    text-shadow: 1px 1px 2px #555;
  }
  @media(max-width:800px){
    flex-direction: column;

    h1:first-child{
       font-size: 35px;
       margin-right: 0px;
       margin-bottom: 0px;
  }
    h1:last-child{
        font-size: 35px;
        margin-top: 0px;
        }
  }
`;
