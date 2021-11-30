import React, {useState, useEffect, useRef} from 'react';
import { Area, Wrapper, Slide, Slider, Image, Content, 
Arrow, SliderButtons, PrevArrow, NextArrow, Title } from './styled';
import { Link } from 'react-router-dom';



const Banner = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 3000)
    return  function() {
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () =>{
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current)
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return(
    
      <Area>
        <Wrapper>
            {slides.map((slide, index) => {
              return (
                  <Slide key={index}>
                    {index === current && (
                    <Slider>
                    <Image src={slide.image} alt={slide.alt}/>
                      <Content>
                        <Title>{slide.title}</Title>
                        <Link to={slide.path} className='button'>{slide.label}<Arrow/></Link>
                      </Content>
                    </Slider>
                    )}                
                  </Slide>
              );
            })}
            <SliderButtons>
              <PrevArrow onClick={prevSlide}/>
              <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </Wrapper>
      </Area>
  
  );
}

export default Banner;