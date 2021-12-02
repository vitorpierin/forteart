import styled from 'styled-components/macro';


export const Area = styled.section`
 display: flex;
 flex-direction: column;
 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin-top: 50px;
  margin-bottom: 0px;
  padding: 20px;
  
  p{
    text-indent: 15px;
   
  }
  img{
    width: 450px;
    
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  margin-bottom: 0px;
  .label{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#6D0D13;
    margin-bottom: -18px;
    p{
      font-size: 25px;
    }
  }
  .formIcon{
    font-size: 22px;
    color:#6D0D13;   
  }
  form{
    display: flex;
    flex-direction: column;
    width: 800px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 15px;
    color: #262626;
  }
  input{
    border: 1px solid #c3c3c3;
    box-shadow: 0px 0px 5px #c3c3c3;
    width: 100%;
    border-radius: 5px;
    &:focus{
      outline-style: solid;
      outline-color: #777;
      outline-width: 1px;
      box-shadow: 0px 0px 5px #555;
    }
    &:last-child{
      border: none;
      margin-top: 50px;
      color: #fff;
      border-radius: 5px;
      font-weight: bold;
      box-shadow: 1px 0 2px #000;
      cursor: pointer;
      background-color: #6D0D13;
      &:hover{
        background-color: #F45B69;
  }
    }
  }
  textarea{
    border: 1px solid #c3c3c3;
    box-shadow: 0px 0px 5px #c3c3c3;
    width: 100%;
    border-radius: 5px;
    outline: none;
    &:focus{
      outline-style: solid;
      outline-color: #777;
      outline-width: 1px;
      box-shadow: 0px 0px 5px #555;
    }
  }
  label{
    color: #666;
    text-shadow: 1px 1px 1px #c3c3c3;
    align-self: flex-start;
    margin-top: 15px;
    p{
      margin-left: -8px;
    }
  }
  a{
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 50px;
  color: #6D0D13;
  margin-top: 0px;
  margin-bottom: 0px;

  
    p{
    color: #666;
    text-shadow: 2px 2px 35px #555;
    font-weight: bold;
    font-size:35px;
    color: #6D0D13;
    letter-spacing: 2px;
  }
 
 
}
  @media(max-width: 800px){
    form{
    width: 350px;
   }
  .label{
    
    p{
      font-size: 20px;
    }
  }  
  div{
  a{
  font-size: 35px;
  p{
    
    font-size:22px;
    
  }
}
}
}
`;

  