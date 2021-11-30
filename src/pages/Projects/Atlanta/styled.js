import styled from 'styled-components/macro';


export const Area = styled.section`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: justify;
  text-indent: 15px;
  color: #444;
  margin-top: 0px;
`;
export const BulletPoints = styled.ul`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
  list-style: none;
  text-align: start;
  margin-left: -60px;
  
  li{
    display: flex;
    align-items: center;
    justify-content:center;
    p{
      font-size: 22px;
    }
    span{
      margin-right: 20px;
      font-size: 35px;
      color: #6D0D13;
      
    }
  }
  @media(max-width: 800px){
    li{
  
    p{
      font-size:15px;
    }
    span{
     
      font-size: 25px;
     
      
    }
  }
  }
`;
export const Video = styled.div`
  flex: 1;
  padding: 20px;
video{
  width: 600px;
  padding: 10px;
  text-align: center;
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

