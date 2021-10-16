import React from 'react';
import Header from '../../../components/partials/Header';
import {Area, Wrapper, Image, Text, Video, Grid, Container, Gallery} from './styled';
import Background from '../../../images/SlideImages/image1.jpg';
import Player from '../../../images/Atlanta/video1.mp4';
import ImageOne from '../../../images/Atlanta/image1.jpg';
import ImageTwo from '../../../images/Atlanta/image2.jpg';
import ImageThree from '../../../images/Atlanta/image3.jpg';
import { SRLWrapper } from "simple-react-lightbox";


const Page = () => {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  return (
    <div> 
      <Header/>
     
        <Area>
          
            <Wrapper>
           
                <Image src={Background} />
                <div>
                  <h1>ATLANTA</h1>
                  <p>Pineville | Pinhais - PR</p>
                </div>
            </Wrapper>
          
        </Area>
          
          <Container>
  
              <Text>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper. </p>
              </Text>            
            <Gallery>
                <SRLWrapper>
                  <Grid>
                    <img src={ImageOne} />
                    <img src={ImageTwo} />
                    <img src={ImageThree} />
                  </Grid>
                </SRLWrapper>
            </Gallery>
            <Video>
                <video src={Player} controls="controls" ></video>
              </Video>
          
          </Container>
        
        
        
    </div>
  );
}

export default Page;