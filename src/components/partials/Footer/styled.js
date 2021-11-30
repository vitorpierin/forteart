import styled from 'styled-components';

export const FooterArea = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #262626;
  padding: 20px 50px;
  border-top: 1px solid #666 ;
  h3{
    font-size: 18px;
    color: #fff;
    font-weight: 400;

  }
 
  p{
    font-size: 8px;
    color: #fff;
    letter-spacing: 2px;
  }
  
 
    .socialName{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      letter-spacing: 5px;
      
     
    }
    
  }
  @media (max-width:600px){
    .grid{
    .socialMedia{
      

     
    }
    span{
      font-size: 14px;
      display: none;
    }
    h3{
      font-size: 10px;
    }  
      
      
    }
  }
`;