import React from 'react';
import Header from '../../components/partials/Header';
import {Area, Content, Gallery, ImageArea} from './styled';
import { Link } from 'react-router-dom';
import Atlanta from '../../images/Atlanta/image3.jpg';
import Florença from '../../images/Florença/image3.jpg';
import PortoSeguro from '../../images/Porto Seguro/image1.jpg';
import Veneza from '../../images/Veneza/image1.jpeg';
import {PageTitle} from '../../components/MainComponents';
import Fade from 'react-reveal/Fade';

const Page = () => {
  return (     
    <Area>
      <Header/>
        <Fade top>  
          <PageTitle>
            <h1>Nossos</h1> <h1>Empreendimentos</h1>
          </PageTitle>
        </Fade>
      
        <Content>
          <Gallery>
            <Fade bottom>
              <ImageArea>
              <Link className='empreendimento' to='/atlanta'> 
                  <img src={Atlanta} alt="Atlanta" />
                  <h1>Atlanta</h1>
              </Link>
              </ImageArea>
            </Fade>
            <Fade right>
              <ImageArea>
                <Link className='empreendimento' to='/florenca'> 
                  <img src={Florença} alt="Florença" />
                  <h1>Florença</h1>
                </Link>
              </ImageArea>
            </Fade>
            <Fade left>
              <ImageArea>
              <Link className='empreendimento' to='/porto'> 
                <img src={PortoSeguro} alt="Porto Seguro" />
                <h1>Porto Seguro</h1>
              </Link>
              </ImageArea>
            </Fade>
            <Fade top>
              <ImageArea>
              <Link className='empreendimento' to='/veneza'> 
                <img src={Veneza} alt="Veneza" />
                <h1>Veneza</h1>
              </Link>
              </ImageArea>
            </Fade>
          </Gallery>
        </Content>
      
    </Area>
  );
}

export default Page;