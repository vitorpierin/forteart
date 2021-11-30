import React, {useRef} from 'react';
import Header from '../../components/partials/Header';
import {Area, Form, Wrapper, Image, Content} from './styled';
import emailjs from 'emailjs-com';
import {PageTitle} from '../../components/MainComponents';
import {MdPermIdentity, MdOutlineMail} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';

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
          </Form>
        </Content>
          
    </Area>
  );
}

export default Page;