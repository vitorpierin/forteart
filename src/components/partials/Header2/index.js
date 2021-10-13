import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderArea} from './styled';
import {NavBar} from './styled';
import Logo from '../../../images/logofort.png';



const Header2 = () => {
  return(
    <HeaderArea>
      <div className="container">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <NavBar>
    	    <Link to='/quem-somos'>Quem Somos</Link>
          <Link to='/projetos'>Empreendimentos</Link>
        </NavBar>
        <Link to='/contato' className='button'>Contato</Link>
      </div>
    </HeaderArea>
  );
}

export default Header2;