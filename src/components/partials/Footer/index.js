import React from 'react';
import {FooterArea} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,  faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
    <FooterArea>
      <div className="grid">
        <div className="socialMedia">
         
          <a href="https://www.facebook.com/Forteart-Empreendimentos-Imobili%C3%A1rios-113521507067456" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="socialIcon face" icon={faFacebookSquare}/></a>
          <a href="https://www.instagram.com/forteartempreendimentos/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon insta" icon={faInstagramSquare}/></a>
          <a href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="socialIcon whats" icon={faWhatsappSquare}/></a>
          
        </div>
        <div className="space">
          <div className="bar"></div>
        </div>
        <div className="socialName">
          <h3>ForteArt Empreendimentos Imobiliários Ltda</h3>
          
        </div>
      </div>
    <p>Copyright © 2021 - Todos os direitos reservados - É proibida a reprodução total ou parcial </p>
    </FooterArea>
  );
}

export default Footer;