import styled from 'styled-components';

export const HeaderArea = styled.div`
  position: absolute;
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
    margin-left: 10px;
  &:hover{
    background-color: #F45B69;
  }
}
@media(max-width: 600px) {
  padding: 5px 10px;
  align-items: center;
 }
}

`;


export const NavBar = styled.nav`
  .align{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul{
    display: flex;
    list-style: none;
  }

  li{
    margin: 15px;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 10px #000;
    font-weight: 600 !important;
    font-family: 'Work Sans', sans-serif !important;
    font-weight: bold;
    
  }
  li:hover{
    font-size: 18px;
    text-shadow: 0 0 1px #666;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  @media(max-width: 600px) {
    display: none;
}

`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .socialIcon{
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    height:40px;
    width: 40px;
    &:hover{
      box-shadow:1px 1px 5px #999;
      color: #F45B69;
    }
  }
  @media (max-width:600px){
    display: none;
  }

`;

export const Burger = styled.div`
  align-items: center;
  color: #f1f1f1;
  display: none;
  cursor: pointer;
  .icon{
    width: 40px;
    height: 40px;
    box-shadow: 1px 1px 2px #262626;
    margin-right: 10px;
  }
  @media (max-width: 600px){
    display: flex;
    
  }
`;

export const NavMob = styled.nav`
    
    display: flex;
    flex-flow: row nowrap;
      p{
        align-self: flex-end;
        margin-right: 20px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 10px;
        font-weight: bold;
      }
      li {
    padding: 18px 10px;
    list-style: none;
    color: #fff;
      a{
    text-decoration: none;
    color: #fff;
    :hover{
      background-color: #F45B69;
    }
    }
    .socialIcon{
      height: 40px;
      width: 40px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #6D0D13;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

