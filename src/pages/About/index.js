import React from 'react';
import Header from '../../components/partials/Header';
import {Area, Wrapper, Image, Content} from './styled';
import Logo from '../../images/logofort.png';




const Page = () => {
  return (
    <div> 
      <Header/>
     
        <Area>
          
            <Wrapper>
           
                <Image  />
                <h1>Quem Somos</h1>

            </Wrapper>
            <Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel malesuada purus. Fusce eget sagittis urna. Maecenas commodo est ac feugiat tempor. Etiam vel leo turpis. Donec nec lorem porta, imperdiet ipsum sit amet, cursus urna. Suspendisse convallis tortor sapien, non eleifend ex vulputate at. Maecenas mi mi, rhoncus non augue id, condimentum mattis lectus. Morbi a tristique tellus. Sed rutrum, mi at tincidunt blandit, ex velit commodo libero, id lacinia eros lectus at nisi. </p>
              <img src={Logo}/>
            </Content>
          
        </Area>
          
        
        
        
        
    </div>
  );
}

export default Page;