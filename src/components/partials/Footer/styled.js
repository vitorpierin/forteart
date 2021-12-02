import styled from 'styled-components';

export const FooterArea = styled.div`
  margin-top: 30px;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #262626;
  border-top: 1px solid #666 ;
  
  .socialName{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      letter-spacing: 5px;
      h3{
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        font-family:'Lato', sans-serif;
        margin-bottom: 0px;
      } 
      p{
        margin-top: 0px;
      }     
    }
    
  }
 
  p{
    font-size: 8px;
    color: #fff;
    letter-spacing: 2px;
    font-family:'Lato', sans-serif!important;
  }
  
 
    
  @media (max-width:800px){
    .socialName{
      
      h3{
        font-size: 14px;
        
      } 
      p{
        font-size: 10px;
        margin-top: 5px;
      }     
    }
    p{
      font-size: 8px;
    }
   
  }
`;