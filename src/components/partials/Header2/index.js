import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HeaderArea, SocialMedia, NavBar, Burger, NavMob} from './styled';
import Logo from '../../../images/logofort.png';
import Dropdown from '../../Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,  faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [open, setOpen] = useState(false)


  const [click, setClick] = useState(false);
  const [navbar,setNavBar] = useState(false);
  const [buttonContact,setButtonContact] = useState(false);
  const handleClick = () => setClick(!click);
 

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavBar(true);
    }else {
      setNavBar(false);
    }
 }
  window.addEventListener('scroll', changeBackground); 

  return(
   
    <HeaderArea >
      <nav className={navbar ? 'active' : ''}>
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
                <li>
                    <Link to='/projetos' >Empreendimentos</Link>
                </li>
                <li>
                  <Link to='/contato' >Contato</Link>
                </li>
                <li>
                  <a className='button facebook' href="https://www.facebook.com/Forteart-Empreendimentos-Imobili%C3%A1rios-113521507067456" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faFacebookF}/> </a>

                  <a className='button instagram' href="https://www.instagram.com/forteartempreendimentos/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram}/> </a>

                  <a className='button whats' href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon whats" icon={faWhatsapp}/></a>
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
              <li>
                <Link to='/projetos' >Empreendimentos</Link>
              </li>
            </ul>
          </NavBar>
          
          <SocialMedia>
            
            <a className='button facebook' href="https://www.facebook.com/Forteart-Empreendimentos-Imobili%C3%A1rios-113521507067456" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faFacebookF}/> </a>

            <a className='button instagram' href="https://www.instagram.com/forteartempreendimentos/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram}/> </a>
            
            <a className='button whats' href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon whats" icon={faWhatsapp}/></a>
            <Link to='/contato' className={buttonContact ? 'buttonContact active' : 'buttonContact'}>Contato</Link>
            
          </SocialMedia>
          
        </div>
      </nav>
    </HeaderArea>
  );
}

export default Header;