import styled from 'styled-components/macro';


export const Area = styled.section`
  
  
`;
export const Wrapper = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  
  &::before{
    content: '';
    position: absolute;
    z-index:2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%,  rgba(0,0,0,0.6) 50%,  rgba(0,0,0,0.6) 100%);
  }
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  h1{
    color: #fff;
    font-weight: bold;
    z-index: 90;
    text-shadow: 1px 1px 5px #000;
    margin: 0px 0px;
  } 
  p {
    font-family: 'Poppins', sans-serif;
    color: #f1f1f1;
    z-index: 90;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;
  }
  @media(max-width:600px){
    h1{
      font-size: 40px;
    }
    p{
      font-size: 15px;
    }
  }
`;


export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  
 
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: auto;
  
`;

export const Text = styled.div`
  padding: 50px;
  text-align: justify;
  text-indent: 15px;
`;

export const Video = styled.div`
  flex: 1;
  padding: 20px;
video{
  width: 500px;
  padding: 10px;
}
@media(max-width:600px){
    video{
      width:340px;
    } 
}
`;

export const Gallery = styled.div`
  h3{
    background-color: #6D0D13;
    width: 100vw;
    font-size: 40px;
    color: #fff;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  height: 100%;
  padding-bottom: 40px;
  img{
    width: 200px;
    height: 200px;
    cursor: pointer;
  }
  @media(max-width:600px){
    grid-template-columns: repeat(1, 200px);
  }
`;


