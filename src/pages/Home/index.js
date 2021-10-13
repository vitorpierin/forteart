import React from 'react';
import Banner from '../../components/Banner';
import { SliderData } from '../../data/SliderData';
import  Header  from '../../components/partials/Header';

const Page = () => {
  return (
    <div > 
      <Header/>
      <Banner slides={SliderData}/>
    </div>
  );
}

export default Page;