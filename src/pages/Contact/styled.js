import styled from 'styled-components/macro';


export const Area = styled.section`
 display: flex;
 flex-direction: column;
 height: 100vh;
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
    background: linear-gradient(90deg,  rgba(109,13,19,0.4) 10%, rgba(109,13,19,0.6) 20%, rgba(109,13,19,0.8) 30%, rgba(109,13,19,0.9) 40%, rgba(109,13,19,1) 50%,  rgba(109,13,19,1) 60%, rgba(109,13,19,0.9) 70%, rgba(109,13,19,0.8) 80%, rgba(109,13,19,0.6) 90%, rgba(109,13,19,0.4) 100%);
    
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin-top: 50px;
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
    box-shadow: 0px 0px 4px #999;
    width: 100%;
    border-radius: 5px;
    &:focus{
      outline-style: solid;
      outline-color: #c3c3c3;
      outline-width: 1px;
      box-shadow: 0px 0px 5px #333;
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
    box-shadow: 0px 0px 4px #999;
    width: 100%;
    border-radius: 5px;
    outline: none;
    &:focus{
      outline-style: solid;
      outline-color: #c3c3c3;
      outline-width: 1px;
      box-shadow: 0px 0px 5px #333;
    }
  }
  label{
    color: #666;
    text-shadow: 1px 1px 1px #c3c3c3;
    align-self: flex-start;
    margin-top: 15px;
  }
  @media(max-width: 800px){
    form{
    width: 350px;
   
  }
  }
`;

  