import React from 'react';
import Header from '../../../components/partials/Header';
import {Area, Wrapper, Image, Text, Container, Grid} from './styled';
import Background from '../../../images/SlideImages/image2.jpg';
import { Gallery } from './styled';
import ImageOne from '../../../images/Florença/image1.jpg';
import ImageTwo from '../../../images/Florença/image2.jpg';
import ImageThree from '../../../images/Florença/image3.jpg';
import ImageFour from '../../../images/Florença/image4.jpg';
import { SRLWrapper } from "simple-react-lightbox";


const Page = () => {
  return (
    <div> 
      <Header/>
     
        <Area>
          <Wrapper>
            <Image src={Background} />
            <div>
              <h1>FLORENÇA</h1>
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
                    <img src={ImageFour} />
                  </Grid>
                </SRLWrapper>
              </Gallery>
          
          </Container>
        
        
        
    </div>
  );
}

export default Page;