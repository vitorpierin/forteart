import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HeaderArea, SocialMedia, NavBar, Burger, NavMob} from './styled';
import Logo from '../../../images/logofort.png';
import Dropdown from '../../Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,  faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [open, setOpen] = useState(false)


  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return(
   
    <HeaderArea>
      <div className="container">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <Burger open={open} onClick={() => setOpen(!open)}>
           <FontAwesomeIcon className="icon" icon={faBars} />
           <NavMob open={open}> 
              <p>X</p>
             <ul>
               <li>
                <Link to='/quem-somos' >Quem Somos</Link>
               </li>
               <li
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                  <Link to='/projetos' >Empreendimentos</Link>
            
                {dropdown && <Dropdown className="align"/>}
         
              </li>
               <li>
                <Link to='/contato' >Contato</Link>
               </li>
               <li>
                <a href="https://www.facebook.com/Forteart-Empreendimentos-Imobili%C3%A1rios-113521507067456" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="socialIcon" icon={faFacebookSquare}/> </a>
                <a href="https://www.instagram.com/forteartempreendimentos/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon" icon={faInstagramSquare}/> </a>
                <a href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon whats" icon={faWhatsappSquare}/></a>
               </li>
             </ul>
           </NavMob>
           <Link to='/contato' className='button'>Contato</Link>
        </Burger>
        <NavBar>
          <div className='menu-icon' onClick={handleClick}>
           
            <i className={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/quem-somos' >Quem Somos</Link></li>
            <li
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
            >
              <Link to='/projetos' >Empreendimentos</Link>
            
             {dropdown && <Dropdown className="align"/>}
         
             </li>
          </ul>
        </NavBar>
        
        <SocialMedia>
          
          <a href="https://www.facebook.com/Forteart-Empreendimentos-Imobili%C3%A1rios-113521507067456" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="socialIcon" icon={faFacebookSquare}/> </a>

          <a href="https://www.instagram.com/forteartempreendimentos/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon" icon={faInstagramSquare}/> </a>
          
          <a href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon whats" icon={faWhatsappSquare}/></a>
          <Link to='/contato' className='button'>Contato</Link>
          
        </SocialMedia>
        
      </div>
    </HeaderArea>
  );
}

export default Header;