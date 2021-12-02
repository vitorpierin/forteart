import styled from 'styled-components';

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 0px;
  h1{
    color: #6D0D13;
    font-weight: bolder;
    font-size: 50px;
    text-shadow: 1px 1px 5px #c3c3c3;
    letter-spacing: 20px;
    margin-bottom: 0px;
  }
  p{
    margin-top: 0px;
    text-align: center;
    color: #999;
    font-weight: 100;
    letter-spacing: 5px;
  }
  @media(max-width: 800px){
    h1{
     font-size: 35px;
    }
    p{
      font-size: 12px;
    }
  }
`;

export const Area = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;  
`;


export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
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
  margin-left: -70px;
  
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
  width: 800px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  height: 100%;
  padding-bottom: 40px;
  img{
    width: 200px;
    height: 200px;
    cursor: pointer;
    margin-right: 15px;
    margin-top: 15px;
    box-shadow: 0px 0px 5px #c3c3c3;
    transition: 0.25s ease-in-out;
    :hover{
      box-shadow: 0px 0px 5px #555;
    }
  }
  @media(max-width:800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{
    margin-top: 15px;
  }
  }
`;