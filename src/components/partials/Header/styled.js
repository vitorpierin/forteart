import styled from 'styled-components';

export const HeaderArea = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  background: linear-gradient( 10deg,  #823623 0, #79251b 25%, #6d0c12 50%, #610007 75%, #570000 100% );
  

  .container{
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 10px 15px;
  }

  
  img{

    width: 120px;
  }

  .buttonContact{
    text-decoration: none;
    background: #6D0D13;
    border: 1px solid #c3c3c3;
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 2px 0 5px #000;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.3s;
  &:hover{
    box-shadow: 2px 0 5px #999;
    background: #F45B69;
   
  }
  
}
@media(max-width: 800px) {
  
  align-items: center;
  img{
    width: 100px;
  }
 }
}

`;


export const NavBar = styled.nav`
  

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
  @media(max-width: 800px) {
    display: none;
}

`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .button{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 2px #262626;
    font-size: 36px;
    outline: none;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin: 10px;
    padding: 20px;
    overflow: hidden;
  }
 
  .icon{
    position: relative;
    color: #999;
    padding: 3px;
    z-index: 2;
    transition: 0.4s color, 0.4s transform;
  }
  .button:hover .icon{
    color: white;
    transform: rotate(360deg)
  }
  .facebook::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3b5999;
    top: 100%;
    left: 0;
    transition: 0.4s top;
}

.facebook:hover::before {
    top: 0;
}
.instagram::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient( #405DE6 10%, #5851DB 20%, #833AB4 30%, #C13584 40%, #E1306C 50%,  #FD1D1D 60%, #F56040 70%, #F77737 80%, #FCAF45 90%, #FFDC80 100%);
    top: 100%;
    left: 0;
    transition: 0.4s top;
}

.instagram:hover::before {
    top: 0;
}
.whats::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(18,140,126, 0.8);
    top: 100%;
    left: 0;
    transition: 0.4s top;
}

.whats:hover::before {
    top: 0;
}

  @media (max-width:800px){
    display: none;
  }

`;

export const Burger = styled.div`
  align-items: center;
  color: #f1f1f1;
  display: none;
  cursor: pointer;
  .icon{
    text-align: center;
    width: 40px;
    height: 40px;
    box-shadow: 1px 1px 2px #262626;
    margin-right: 10px;
  }
  @media (max-width: 800px){
    display: flex;
    .button{
    text-decoration: none;
    background: #6D0D13;
    border: 1px solid #c3c3c3;
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 2px 0 5px #000;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.3s;
  &:hover{
    box-shadow: 2px 0 5px #999;
    background: #F45B69;
   
  }
    
  }
}
`;

export const NavMob = styled.nav`
    
    display: flex;
    flex-flow: row nowrap;
    .button{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 2px #262626;
    font-size: 36px;
    outline: none;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin: 10px;
    padding:18px;
    overflow: hidden;
  }
 
  .icon{
    width: 50px;
    height: 50px;
    box-shadow: 0 0 2px #262626;
    margin-left: 10px;
    position: relative;
    color: #999;
    padding: 10px;
    z-index: 2;
    transition: 0.4s color, 0.4s transform;
  }
  .button:hover .icon{
    color: white;
    transform: rotate(360deg)
  }
  .facebook::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3b5999;
    top: 100%;
    left: 0;
    transition: 0.4s top;
  }

  .facebook:hover::before {
    top: 0;
  }
  .instagram::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient( #405DE6 10%, #5851DB 20%, #833AB4 30%, #C13584 40%, #E1306C 50%,  #FD1D1D 60%, #F56040 70%, #F77737 80%, #FCAF45 90%, #FFDC80 100%);
    top: 100%;
    left: 0;
    transition: 0.4s top;
    }

  .instagram:hover::before {
    top: 0;
  }
  .whats::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(18,140,126, 0.8);
    top: 100%;
    left: 0;
    transition: 0.4s top;
  }

  .whats:hover::before {
    top: 0;
  }
  p{
    align-self: flex-end;
    margin-right: 20px;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    font-weight: 900;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    li {
    padding: 18px 10px;
    list-style: none;
    color: #fff;
      :last-child{
        display: flex;
        
      }
      a{
        text-align: center;
        text-decoration: none;
        color: #fff;
    
 
  }
  
  }
}
  @media (max-width: 800px) {
    z-index: 1000;
    position: relative;
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

