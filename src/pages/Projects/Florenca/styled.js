import styled from 'styled-components/macro';


export const Area = styled.section`
  
  
`;
export const Wrapper = styled.div`
  height: 300px;
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

  h1{
    color: #fff;
    font-weight: bold;
    z-index: 90;
    text-shadow: 1px 1px 5px #000;
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

export const Content = styled.div`  
  max-width: 1000px;
`;

export const Text = styled.div`
  padding: 50px;
`;

export const Video = styled.div`
  flex: 1;
  padding: 20px;
video{
  width: 500px;
  padding: 10px;
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
  
`;


