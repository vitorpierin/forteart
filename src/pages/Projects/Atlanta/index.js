import React from 'react';
import Header from '../../../components/partials/Header';
import {ProjectTitle} from '../../../components/MainComponents';
import {Area, BulletPoints, Text, Video, Grid, Container, Gallery} from '../../../components/ProjectComponents';
import Background from '../../../images/SlideImages/image1.jpg';
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
      <Fade top> <h1>A T L A N T A</h1></Fade> 
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
              <Fade right><img src={ImageOne} /></Fade>
              <Fade bottom><img src={ImageTwo} /></Fade>
              <Fade left><img src={ImageThree} /></Fade>
              <Fade right><img src={ImageFour} /></Fade>
              <Fade top><img src={ImageFive} /></Fade>
              <Fade left><img src={ImageSix} /></Fade>
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