import React from 'react';
import Header from '../../../components/partials/Header';
import {Area, Wrapper, Image, Container, Text, Video, Grid} from './styled';
import Background from '../../../images/SlideImages/image1.jpg';
import Player from '../../../images/Veneza/video3.mp4';
import { Gallery } from './styled';
import ImageOne from '../../../images/Veneza/image1.jpeg';
import ImageTwo from '../../../images/Veneza/image2.jpeg';
import ImageThree from '../../../images/Veneza/image3.jpg';
import { SRLWrapper } from "simple-react-lightbox";

const Page = () => {
  return (
    <div> 
      <Header/>
     
        <Area>
          <Wrapper>
            <Image src={Background} />
            <div>
              <h1>VENEZA</h1>
              <p>Jd. Weissopolis| Pinhais - PR</p>
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
                <video src={Player} controls="controls"></video>
              </Video>
    
          </Container>
        
        
        
    </div>
  );
}

export default Page;