import React from 'react';
import Header from '../../components/partials/Header';
import {Area, Content} from './styled';
import Logo from '../../images/logofort.png';
import {PageTitle} from '../../components/MainComponents';
import Fade from 'react-reveal/Fade';


const Page = () => {
  return (
    <Area>
      <Header/>
        <Fade top>  
          <PageTitle>
            <h1>Quem</h1> <h1>Somos</h1>
          </PageTitle>
        </Fade>
      <Content>
        <Fade bottom>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel malesuada purus. Fusce eget sagittis urna. Maecenas commodo est ac feugiat tempor. Etiam vel leo turpis. Donec nec lorem porta, imperdiet ipsum sit amet, cursus urna. Suspendisse convallis tortor sapien, non eleifend ex vulputate at. Maecenas mi mi, rhoncus non augue id, condimentum mattis lectus. Morbi a tristique tellus. Sed rutrum, mi at tincidunt blandit, ex velit commodo libero, id lacinia eros lectus at nisi. </p>
        </Fade>
        <Fade left>
          <img src={Logo}/>
        </Fade>
      </Content>
    </Area>
  );
}

export default Page;