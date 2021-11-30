import styled from 'styled-components';

export const Area = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1{
    :first-child{
      color:#6D0D13;
      text-shadow: 1px 1px 1px #999;
      margin-right: 20px;
    }
    :last-child{
      color: #555;
      text-shadow: 1px 1px 1px #999;
    }
  }
`;