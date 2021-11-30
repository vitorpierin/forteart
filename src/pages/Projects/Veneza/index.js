import React from 'react';
import Header from '../../../components/partials/Header';
import {Area, BulletPoints, Container, Text, Video, Grid} from './styled';
import Player from '../../../images/Veneza/video3.mp4';
import { Gallery } from './styled';
import ImageOne from '../../../images/Veneza/image1.jpeg';
import ImageTwo from '../../../images/Veneza/image2.jpeg';
import ImageThree from '../../../images/Veneza/image3.jpg';
import ImageFour from '../../../images/Veneza/image4.jpg';
import ImageFive from '../../../images/Veneza/image5.jpg';
import ImageSix from '../../../images/Veneza/image6.jpg';
import ImageSeven from '../../../images/Veneza/image7.jpg';
import ImageEight from '../../../images/Veneza/image8.jpg';
import ImageNine from '../../../images/Veneza/image9.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import {ProjectTitle} from '../../../components/MainComponents';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Page = () => {
  return (
    <Area>
      <Header/>  
      <ProjectTitle>
        <Fade top> <h1>V E N E Z A</h1></Fade> 
        <Fade bottom><p>Jd. Weissopolis| Pinhais - PR</p></Fade> 
      </ProjectTitle>  
      <Container>   
        <Text>
          <Zoom> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper. </p>
          </Zoom>   
          <BulletPoints>
            <Fade top><li><span>★</span> <p>Sobrados com 3 quartos</p></li></Fade>
            <Fade left><li><span>★</span> <p>Apartamentos com 2 quartos</p></li></Fade>
            <Fade center><li><span>★</span> <p>Churrasqueira</p></li></Fade>
            <Fade right><li><span>★</span> <p>Ambientes Integrados</p></li></Fade>
           
          </BulletPoints>
        </Text>
        <Gallery>
          <SRLWrapper>
            <Grid>
            <Fade bottom><img src={ImageOne} /></Fade>
            <Fade bottom><img src={ImageTwo} /></Fade>
            <Fade bottom><img src={ImageThree} /></Fade>
            <Fade left><img src={ImageFour} /></Fade>
            <Fade center><img src={ImageFive} /></Fade>
            <Fade right><img src={ImageSix} /></Fade>
            <Fade top><img src={ImageSeven} /></Fade>
            <Fade top><img src={ImageEight} /></Fade>
            <Fade top><img src={ImageNine} /></Fade>
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