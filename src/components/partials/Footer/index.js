import React from 'react';
import {FooterArea} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,  faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
    <FooterArea>
        <div className="socialName">
          <h3>ForteArt Empreendimentos Imobiliários Ltda</h3>
        </div>
    <p>Copyright © 2021 - Todos os direitos reservados - É proibida a reprodução total ou parcial </p>
    </FooterArea>
  );
}

export default Footer;