import React from 'react';
import Header from '../../components/partials/Header';
import {Area, Wrapper, Image, Content, Gallery, ImageArea} from './styled';
import { Link } from 'react-router-dom';
import Atlanta from '../../images/Atlanta/image3.jpg';
import Florença from '../../images/Florença/image3.jpg';
import PortoSeguro from '../../images/Porto Seguro/image1.jpg';
import Veneza from '../../images/Veneza/image1.jpeg';

const Page = () => {
  return (
  <div>
    <Header/>
     
    <Area>
      
        <Wrapper>
       
            <Image  />
            <h1>Empreendimentos</h1>

        </Wrapper>
        <Content>
          <Gallery>
            <ImageArea>
            <Link className='empreendimento' to='/atlanta'> 
                <img src={Atlanta} alt="Atlanta" />
                <h1>Atlanta</h1>
            </Link>
            </ImageArea>
            <ImageArea>
              <Link className='empreendimento' to='/florenca'> 
                <img src={Florença} alt="Florença" />
                <h1>Florença</h1>
              </Link>
            </ImageArea>
            <ImageArea>
            <Link className='empreendimento' to='/porto'> 
              <img src={PortoSeguro} alt="Porto Seguro" />
              <h1>Porto<br/>Seguro</h1>
            </Link>
            </ImageArea>
            <ImageArea>
            <Link className='empreendimento' to='/veneza'> 
              <img src={Veneza} alt="Veneza" />
              <h1>Veneza</h1>
            </Link>
            </ImageArea>
          </Gallery>
        </Content>
      
    </Area>
      
    
    
    
    
</div>
  );
}

export default Page;