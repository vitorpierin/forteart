import React from 'react';
import Header from '../../../components/partials/Header';
import {ProjectTitle, Area, BulletPoints, Container, Text, Video, Grid, Gallery} from '../../../components/ProjectComponents';
import Player from '../../../images/Porto Seguro/video2.mp4';
import ImageOne from '../../../images/Porto Seguro/image1.jpg';
import ImageTwo from '../../../images/Porto Seguro/image2.jpg';
import ImageThree from '../../../images/Porto Seguro/image3.jpg';
import ImageFour from '../../../images/Porto Seguro/image4.jpg';
import ImageFive from '../../../images/Porto Seguro/image5.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import Fade from 'react-reveal/Fade';

const Page = () => {
  return (
    <Area> 
      <Header/>      
      <ProjectTitle>
      <Fade top><h1>PORTO <br/> SEGURO</h1></Fade>
      <Fade bottom><p>Bairro Alto | Curitiba - PR</p></Fade>
      </ProjectTitle>           
      <Container>
        <Text>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper. </p>
          <BulletPoints>
            <Fade top><li><span>★</span> <p>Duplex 108m²</p></li></Fade>
            <Fade left><li><span>★</span> <p>Triplex 165m²</p></li></Fade>
            <Fade center><li><span>★</span> <p>Suíte</p></li></Fade>
            <Fade right><li><span>★</span> <p>Churrasqueira</p></li></Fade>
            <Fade down><li><span>★</span> <p>Área de Serviço</p></li></Fade>
          </BulletPoints>
        </Text>
        <Gallery>
          <SRLWrapper>
            <Grid>
              <img src={ImageOne} alt='Sobrado no Bairro Alto' />
              <img src={ImageTwo} alt='Sobrado no Bairro Alto'  />
              <img src={ImageThree} alt='Sobrado no Bairro Alto'  />
              <img src={ImageFour} alt='Sobrado no Bairro Alto'  />
              <img src={ImageFive} alt='Sobrado no Bairro Alto'  />
            </Grid>
          </SRLWrapper>
        </Gallery>
        <Video>
          <video src={Player} controls="controls"></video>
        </Video>
      </Container> 
    </Area>    
  );
}

export default Page;