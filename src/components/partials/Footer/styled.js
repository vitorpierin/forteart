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
  }
  
  .grid{
    display: flex;
    align-items: center;
    justify-content: center;
   
    .space{
     
     display: flex;
     align-items: center;
     justify-content: center;
      .bar{
      width: 1px;
      height: 30px;
      background-color: #f1f1f1;
   }
    }
   
    .socialMedia{
     display: flex;
     justify-content: center;
     align-items: center;
     color: #fff;
      
      .socialIcon.face{
        color: rgba(66,103,178, 0.8);
      }
      .socialIcon.insta{
        color:  rgba(188, 42, 141,0.65);
        
      }
      .socialIcon.whats{
        color: rgba(18,140,126, 0.8);
      }
     a{
      font-size:30px;
       text-decoration: none;
       color: #fff;
       margin-right: 10px;
       &:last-child{
         margin-right: 15px;
       }
       &:hover{
         color: #F45B69;
       }
     }
     
     
    }
    .socialName{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      
     
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