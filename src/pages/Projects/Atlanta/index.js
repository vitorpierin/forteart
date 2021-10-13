import React from 'react';
import Header from '../../../components/partials/Header';
import {Area, Wrapper, Image, Content, Text, Video, Grid} from './styled';
import Background from '../../../images/SlideImages/image1.jpg';
import {PageContainer} from '../../../components/MainComponents';
import Player from '../../../images/Atlanta/video1.mp4';
import { Galery } from './styled';
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
                <h1>ATLANTA</h1>
           
            </Wrapper>
          
        </Area>
          
          <PageContainer>
            <Content>
              <Text>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis nisi in lacus sollicitudin semper. Suspendisse dictum congue nisi. Mauris sed rutrum elit, vitae fringilla lectus. Etiam fringilla nisi ac ultricies suscipit. Duis ultrices, risus volutpat tincidunt ornare, ante elit gravida mauris, quis sollicitudin neque ex ut erat. Donec congue augue augue. Proin semper, nunc quis blandit aliquam, mauris est dignissim mauris, non fermentum ipsum dui sed libero. Nulla sed ultrices nulla. Fusce at posuere justo. Nulla interdum, magna sed tempor tincidunt, felis ex accumsan justo, auctor convallis metus urna a nisi. Fusce massa lorem, ultrices et nibh et, pellentesque ultricies metus. Donec gravida feugiat libero, id mollis elit dictum ut. </p>
              </Text>            
            <Galery>
                <SRLWrapper>
                  <Grid>
                    <img src={ImageOne} />
                    <img src={ImageTwo} />
                    <img src={ImageThree} />
                  </Grid>
                </SRLWrapper>
            </Galery>
            <Video>
                <video src={Player} controls="controls" autoPlay="false"></video>
              </Video>
            </Content>
          </PageContainer>
        
        
        
    </div>
  );
}

export default Page;