import React from 'react';
import Header from '../../../components/partials/Header';
import {ProjectTitle, Area, BulletPoints, Text, Video, Grid, Container, Gallery} from '../../../components/ProjectComponents';
import Player from '../../../images/Atlanta/video1.mp4';
import ImageOne from '../../../images/Atlanta/image1.jpg';
import ImageTwo from '../../../images/Atlanta/image2.jpg';
import ImageThree from '../../../images/Atlanta/image3.jpg';
import ImageFour from '../../../images/Atlanta/image4.jpg';
import ImageFive from '../../../images/Atlanta/image5.jpg';
import ImageSix from '../../../images/Atlanta/image6.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Page = () => {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  return (
   
  <Area>
    <Header/>
         
      <ProjectTitle>
      <Fade top> <h1>ATLANTA</h1></Fade> 
      <Fade bottom><p>Pineville | Pinhais - PR</p></Fade> 
      </ProjectTitle>
          
    <Container>
      <Text>
        <Zoom>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper. </p>
          <BulletPoints>
            <Fade top><li><span>★</span> <p>3 quartos com 2 varandas</p></li></Fade>
            <Fade left><li><span>★</span> <p>2 quartos com 1 varanda</p></li></Fade>
            <Fade center><li><span>★</span> <p>Churrasqueira</p></li></Fade>
            <Fade right><li><span>★</span> <p>Área de Serviço</p></li></Fade>
            <Fade down><li><span>★</span> <p>Área de Lazer</p></li></Fade>
          </BulletPoints>
        </Zoom>
      </Text>            
      <Gallery>
          <SRLWrapper>
            
              <Grid>
              <Fade right><img src={ImageOne} alt="apartamento Pinhais" /></Fade>
              <Fade bottom><img  src={ImageTwo} alt="apartamento Pinhais" /></Fade>
              <Fade left><img  src={ImageThree} alt="apartamento Pinhais" /></Fade>
              <Fade right><img  src={ImageFour} alt="apartamento Pinhais" /></Fade>
              <Fade top><img  src={ImageFive} alt="apartamento Pinhais" /></Fade>
              <Fade left><img  src={ImageSix} alt="apartamento Pinhais" /></Fade>
              </Grid>
            
          </SRLWrapper>
      </Gallery>
      <Video>
        <Zoom>
          <video src={Player} controls="controls" ></video>
        </Zoom>  
      </Video>
    </Container>
  
    </Area> 

  );
}

export default Page;