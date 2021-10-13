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
  h3{
    font-size: 18px;
    color: #fff;
    font-weight: 400;

  }
 
  p{
    font-size: 8px;
    color: #fff;
  }
  
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 120px);
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
   
    .space{
     
     display: flex;
     align-items: center;
     justify-content: center;
      .bar{
      width: 1px;
      height: 60px;
      background-color: #f1f1f1;
   }
    }
   
    .socialMedia{
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     text-align: start;
     color: #fff;
      
      .socialIcon.face{
        color: rgba(66,103,178, 0.8);
      }
      .socialIcon.insta{
        color: rgba(228,64,95, 0.8);
      }
      .socialIcon.whats{
        color: rgba(18,140,126, 0.8);
      }
     a{
       text-decoration: none;
       color: #fff;
       margin-right: 5px;
     }
     
     
    }
    .socialName{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;
     
    }
    
  }
  @media (max-width:600px){
    .grid{
      grid-template-columns: repeat(3, 100px);
    span{
      font-size: 14px;
    }
    h3{
      font-size: 14px;
    }  
      
      
    }
  }
`;