import styled from 'styled-components';

export const HeaderArea = styled.div`
  height: 80px;
  z-index: 100;
  width: 100%;

  
  

  .container{
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  
  img{
    
    width: 120px;
  }

  .button{
    text-decoration: none;
    background-color: #6D0D13;
    border: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 2px 0 5px #000;
    cursor: pointer;
  &:hover{
    background-color: #F45B69;
  }
  }
`;



export const NavBar = styled.nav`
  

  a{
    margin: 15px;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 10px #000;
    font-weight: 600 !important;
    font-family: 'Work Sans', sans-serif !important;
    font-weight: bold;
  }
  a:hover{
    font-size: 18px;
    text-shadow: 0 0 1px #666;
  }
}
`;