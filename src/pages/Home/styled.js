import styled from 'styled-components';


export const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
  :first-child{
    margin-top: 0px;
    margin-bottom: 0px;
  }
  :last-child{
    margin-top: 0;
    margin-bottom: 10px;
    
  }
 
  h1:first-child{
    text-align: center;
    margin: 60px 0px;
    color: #666;
    text-shadow: 1px 1px 2px #555;
    margin-right: 20px;
    font-weight: 100;
    font-size: 40px;
  }
  h1:last-child{
    color: #6D0D13;
    font-weight: bolder;
  }
  @media(max-width:800px){
    h1:first-child{
      font-size:25px;
      margin-right: 10px;
    }
    h1:last-child{
      font-size: 25px;
  }
  }
  
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 30px;
  border-right: 3px solid #6D0D13;
  border-bottom: 3px solid #6D0D13;
  border-radius: 30%;
  box-shadow: 0px 0px 3px -4px #666;
  @media(max-width:800px){
    &{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
  }
`;
export const Container = styled.div`
  
  max-width: 1000px;
  margin: auto;
 
  .other{
    border-right: none;
    border-left: 3px solid #6D0D13;
    border-bottom: none;
    box-shadow:0px 0px 3px -5px #666 !important;
  }
  @media(max-width: 800px){
    .other{
      
    }
  }
`;
export const Logo = styled.img`
  padding: 30px;
  width: 400px;
  @media(max-width: 800px){
    width: 200px;
  }
`;
export const Content = styled.div`
  max-width: 600px;
  align-self: center;
  margin-right: 30px;
  text-align: justify;
  text-indent: 15px;
  
 
  p{
    color: #555;
  }
  p:last-child{
    margin-left: 30px;
  }
  @media(max-width: 800px){
   &{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100px;
   p{
    width: 300px;
    text-align: justify;
     }
   }
  }
`;
export const Info = styled.div`
 min-height: 400px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin-top: 30px;
 margin-bottom: px;

 @media(max-width:800px){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
`;
export const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;

div{
    border-radius: 50%;
    background-color: #6D0D13;
    padding: 30px;
    box-shadow: 0px 0px 5px #666;
  .icon{
    height: 80px;
    width: 80px;
    color: #fff;
  }
}
h3{
  font-size: 30px;
  color: #666;
  text-shadow: 1px 1px 1px #999;
  margin-top: 10px;
  margin-bottom: 0px;
}
p{
  margin-top: 10px;
  color: #666;
  letter-spacing:4px;
  font-size: 14px;
 
  }
  @media(max-width:800px){
    div{
    border-radius: 50%;
    background-color: #6D0D13;
    padding: 30px;
    box-shadow: 0px 0px 5px #666;
      .icon{
        height: 50px;
        width: 50px;
        color: #fff;
      }
  }
  h3{
    font-size: 25px;
    
}
  p{
    margin-top: 10px;
    color: #666;
    letter-spacing:4px;
    font-size: 12px;
 
  }
}
`;
export const Space = styled.div`
  height: 100px;
  width: 1px;
  background-color: #c3c3c3;
`;
export const Contact = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3{
  font-size: 35px;
  margin-bottom: 0px;
  color: #6D0D13;
  text-shadow: 1px 1px 2px #555;
}
a{
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 50px;
  margin-bottom: 30px;
  color: #6D0D13;
  p{
    margin-left: 15px;
    color: #666;
    text-shadow: 2px 2px 35px #555;
    font-weight: bold;
    font-size:35px;
    color: #6D0D13;
  }
}
p{
  display: flex;
  align-items: center;
  font-size: 20px;
  .contato{
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    margin-left: 5px;
    color: #6D0D13;  
    font-weight: bold;
  }
  
}
@media(max-width:800px){
  a{
  font-size: 35px;
  p{
    
    font-size:22px;
    
  }
}
}
`;
export const Form = styled.div`
  display: flex;
  text-align: center;
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
    margin-right: 5px;

   
  }
  form{
    display: flex;
    flex-direction: column;
    width: 800px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    border-radius: 15px;
    color: #262626;
  }
  input{
    margin-top: 0px;
    width: 100%;
    border-radius: 5px;
    
    &:focus{
      outline-style: solid;
      outline-width: 1px;
    }
    &:last-child{
      border: none;
      margin-top: 40px;
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
    width: 100%;
    border-radius: 5px;
    outline: none;
    &:focus{
      outline-style: solid;
      outline-width: 1px;
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
  .label{
    
    p{
      font-size: 20px;
    }
  }
  }
`;