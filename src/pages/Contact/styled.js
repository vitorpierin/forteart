import styled from 'styled-components/macro';


export const Area = styled.section`
 
  
`;
export const Wrapper = styled.div`
  position: absolute;
  height: 300px;
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
    background: linear-gradient(0deg, rgba(109,13,19,0.7) 0%,  rgba(11,56,83,0.7) 50%,  rgba(109,13,19,0.7) 100%);
    
  }

  
  h1{
    color: #fff;
    font-weight: bold;
    z-index: 90;
    text-shadow: 1px 1px 5px #000;
  }  
`;


export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%,  rgba(0,0,0,0.6) 50%,  rgba(0,0,0,0.6) 100%);

`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin: auto;
  padding: 50px;
  
  p{
    text-indent: 15px;
   
  }
  img{
    width: 450px;
    
  }
  form{
  background-color: rgba(195,195,195,0.3);
  max-width: 460px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  padding:30px 50px;
  border-radius: 15px;
 
  color: #262626;
  box-shadow: 0px 0px 10px #000;
  h4{
    text-align: center;
    font-size: 25px;
  }
  p{
    text-align: center;
    font-size: 15px;
  }
  input{
    border-radius: 5px;
    &:focus{
      outline-style: solid;
      outline-color: #262626;
      outline-width: 1px;
    }
    &:last-child{
      border: none;
      margin-top: 20px;
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
    border-radius: 5px;
    outline: none;
    &:focus{
      outline-style: solid;
      outline-color: #262626;
      outline-width: 1px;
    }
  }
 
  label{
    align-self: flex-start;
    margin-top: 15px;
  }

};

`;

  