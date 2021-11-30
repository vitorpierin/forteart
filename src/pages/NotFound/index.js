import React from 'react';
import  Header  from '../../components/partials/Header';
import {Area, Content} from './styled';

const Page = () => {
  return (
    <Area > 
      <Header/>
      <Content> 
        <h1> 404</h1> <h1> Página não existe!</h1>
      </Content> 
    </Area>
  );
}

export default Page;