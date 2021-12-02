import React, {useRef} from 'react';
import * as C from './styled';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import { SliderData } from '../../data/SliderData';
import  Header2  from '../../components/partials/Header2';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {BiBuildingHouse, BiMessageDetail} from 'react-icons/bi';
import {GiBrickWall} from 'react-icons/gi';
import {MdOutlineFamilyRestroom} from 'react-icons/md';
import {MdPermIdentity, MdOutlineMail} from 'react-icons/md';
import Logo from '../../images/logofort.png';
import Empreendimento from '../../images/Florença/image2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';




const Page = () => {
  const form = useRef();

   function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_w3mnx39', form.current, 'user_scRheQyWlsLMQLRVX7lB1')
      .then((result) => {
          alert('Mensagem enviada');
      }, (error) => {
        alert('Mensagem NÃO enviada');
      });
      e.target.reset();
  }

  return (
    <div > 
      
      <Header2/>
      <Banner slides={SliderData}/>
     
        <C.Container>
          <C.TitleArea>
            <h1>Encontre aqui </h1> <h1> o lar dos seus sonhos</h1>
          </C.TitleArea>
          <C.ContentArea>
            <C.Content>
              <Fade left>            
                <p>A ForteArt é referência no mercado que atua. Nossos empreendimentos 
                  são construídos com materiais modernos e de extrema qualidade. Confira mais detalhes na página de empreendimentos. 
                </p>
              </Fade>
            </C.Content>
          
            <Fade top>
              <C.Logo src={Logo}/>
            </Fade>
          </C.ContentArea>
          <C.ContentArea className="other">
            <Fade bottom>
              <C.Logo src={Empreendimento}/>
            </Fade>
            
            <C.Content>
              <Fade right>            
                <p>Clique <a href="/projetos">aqui</a> para conhecer nossos projetos.  
                </p>
              </Fade>
            </C.Content>
          </C.ContentArea>
          <C.Info>
            <C.Icon>
              <Fade left>
                <div>
                  <BiBuildingHouse className="icon"/>
                </div>
              </Fade>
              <Zoom>
                <h3>10</h3>
                <p>Empreendimentos entregues</p>
              </Zoom>            
            </C.Icon>
            <C.Icon>
              <Fade top>
                <div>
                  <GiBrickWall className="icon"/>
                </div>
              </Fade>
              <Zoom>    
                <h3>120 mil m²</h3>
                <p>Construídos</p>
              </Zoom>            
            </C.Icon>
            <C.Icon>
              <Fade right>
                <div>
                  <MdOutlineFamilyRestroom className="icon"/>
                </div>
              </Fade>
              <Zoom>  
                <h3>70</h3>
                <p>Famílias realizadas</p>
              </Zoom>
            </C.Icon>
          </C.Info>
          <C.Contact>
            <Zoom> 
              <C.TitleArea>
                <h1>Fale com nosso </h1> <h1> consultor:</h1>
              </C.TitleArea>
              <C.Form>                
                <form ref={form} onSubmit={sendEmail}>
                  <label className='label' for="name"> <MdPermIdentity className='formIcon'/> <p>Nome: </p></label>
                  <input type="text" id="name" placeholder="Digite seu nome" name="name"/>        
                  <label className='label' for="email"><MdOutlineMail className='formIcon'/><p>Email:</p> </label>
                  <input type="text" id="email" placeholder="Digite seu email" name="email"/>
                  <label className='label' for="message"><BiMessageDetail className='formIcon'/><p>Mensagem: </p></label>
                  <textarea id="message" rows="8" cols="19" placeholder="Digite sua mensagem" name="message"></textarea>
                  <input  type="submit" value="Enviar"/>
                </form>
              </C.Form>
              <div>
                <a href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="whats" icon={faWhatsappSquare}/><p>(41)99183-1747</p></a>
              </div>
            </Zoom>
          </C.Contact>
        </C.Container>
    
    </div>
  );
}

export default Page;