import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;

  > div {
    width: 100%;
    font: 16px Roboto, sans-serif;

    p {
      text-align: left;
      margin-bottom: 5px;
      letter-spacing: 0px;
      font: Bold 16px Roboto, sans-serif;
      opacity: 1;
      color: #444444;
    }
  }

  > span {
    width: 10px;
  }
`;
