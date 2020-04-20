import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  img {
    height: 70px;
    font-weight: bold;
  }

  h1 {
    margin-left: 10px;
    font: Oblique 40px Helvetica;
    letter-spacing: 1.1px;
    color: #7d40e7;
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 360px;
  height: 425px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  margin: 0 auto;

  form {
    margin-top: 40px;
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    div {
      width: 300px;
      height: 73px;
      margin-bottom: 10px;

      p {
        text-align: left;
        margin-bottom: 5px;
        letter-spacing: 0px;
        font-size: 12px;
        opacity: 1;
        color: #444444;
        font-family: 'Roboto Bold', sans-serif;
        font-weight: bold;
      }

      input {
        border-radius: 4px;
        height: 44px;
        width: 100%;
        padding: 10px 15px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        opacity: 1;

        &::placeholder {
          color: #999999;
          opacity: 1;
        }
      }
    }

    button {
      width: 300px;
      height: 45px;
      margin-top: 15px;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      color: #ffffff;
      transition: background 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }

    span {
      color: #fb6f91;
      font-size: 12px;
      font-family: 'Roboto Bold', sans-serif;
      font-weight: bold;
    }
  }
`;
