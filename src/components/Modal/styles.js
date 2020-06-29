import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 4px;
  background-color: #eee;
  box-shadow: 0px 0px 10px #00000033;
  width: 450px;
  height: 425px;
  word-wrap: break-word;

  h3 {
    font: Bold 14px Roboto, sans-serif;
    color: #444;
    margin: 10px 0px;
  }

  p {
    font: 14px Roboto, sans-serif;
    color: #666;
    text-align: left;
  }
`;
