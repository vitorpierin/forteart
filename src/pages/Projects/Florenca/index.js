import React from 'react';
import Header from '../../../components/partials/Header';
import {ProjectTitle, Area, BulletPoints, Text, Container, Gallery, Grid} from '../../../components/ProjectComponents';
import ImageOne from '../../../images/Florença/image1.jpg';
import ImageTwo from '../../../images/Florença/image2.jpg';
import ImageThree from '../../../images/Florença/image3.jpg';
import ImageFour from '../../../images/Florença/image4.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Page = () => {
  return (
      <Area>
        <Header/>
        <ProjectTitle>
          <h1>FLORENÇA</h1>
          <p>Pineville | Pinhais - PR</p>
        </ProjectTitle>
        <Container>
        <Text>
        <Zoom>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper. </p>
          <BulletPoints>
            <Fade className="bullet" bottom><li><span>★</span> <p>2 ou 3 quartos</p></li></Fade>
            <Fade className="bullet" left><li><span>★</span> <p>42 ou 72m² privativos</p></li></Fade>
            <Fade className="bullet" top><li><span>★</span> <p>Vagas Cobertas</p></li></Fade>
          </BulletPoints>
        </Zoom>
      </Text>         
      <Gallery>
        <SRLWrapper>
          <Grid>
            <img src={ImageOne} alt="apartamento Pinhais" />
            <img src={ImageTwo} alt="apartamento Pinhais" />
            <img src={ImageThree} alt="apartamento Pinhais" />
            <img src={ImageFour} alt="apartamento Pinhais"/>
          </Grid>
        </SRLWrapper>
      </Gallery>
          
        </Container> 
        
      </Area>
  );
}

export default Page;