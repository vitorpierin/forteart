import React, {useRef} from 'react';
import Header from '../../components/partials/Header';
import {Area, Wrapper, Image, Content} from './styled';
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
    <div> 
      <Header/>
     
        <Area>
          
            <Wrapper>
           
                <Image  />
                <h1>Contato</h1>

            </Wrapper>
            <Content>
              <form ref={form} onSubmit={sendEmail}>
                <h4>Formulário de Contato</h4>
                <label for="name">Nome: </label>
                <input type="text" id="name" placeholder="Digite seu nome" name="name"/>
                <label for="email">Email: </label>
                <input type="text" id="email" placeholder="Digite seu email" name="email"/>
                <label for="message">Mensagem: </label>
                <textarea id="message" rows="8" cols="19" placeholder="Digite sua mensagem" name="message"></textarea>
                <input  type="submit" value="Enviar"/>
              </form>
            </Content>
          
        </Area>
          
        
        
        
        
    </div>
  );
}

export default Page;