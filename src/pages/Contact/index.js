import React, {useRef} from 'react';
import Header from '../../components/partials/Header';
import {Area, Form, Content} from './styled';
import emailjs from 'emailjs-com';
import {PageTitle} from '../../components/MainComponents';
import {MdPermIdentity, MdOutlineMail} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';

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
    <Area>
      <Header/>
        <PageTitle>
        <h1>F o r m u l á r i o&nbsp; d e</h1><h1>&nbsp;C o n t a t o</h1>
        </PageTitle>
        <Content>
          <Form>                
            <form ref={form} onSubmit={sendEmail}>
              <label className='label' for="name"> <MdPermIdentity className='formIcon'/> <p>Nome: </p></label>
              <input type="text" id="name" placeholder="Digite seu nome" name="name"/>        
              <label className='label' for="email"><MdOutlineMail className='formIcon'/><p>Email:</p> </label>
              <input type="text" id="email" placeholder="Digite seu email" name="email"/>
              <label className='label' for="message"><BiMessageDetail className='formIcon'/><p>Mensagem: </p></label>
              <textarea id="message" rows="8" cols="19" placeholder="Digite sua mensagem" name="message"></textarea>
              <input  type="submit" value="Enviar"/>
            </form>    
            <div>
              <a href="https://api.whatsapp.com/send?phone=5541991831747&app=facebook&entry_point=page_cta&fbclid=IwAR0JE40DUU65mbAHlQDNbngXRurfyMD51XfDoAbjKjhzByyZ6xXSz58yFBg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="whats" icon={faWhatsappSquare}/><p>(41)99183-1747</p></a>
            </div>
          </Form>
        </Content>
          
    </Area>
  );
}

export default Page;