import styled, { css } from 'styled-components';

export const Container = styled.div.attrs((props) => ({
  disabled: props.disabled,
}))`
  width: 60%;
  margin: 0 auto;

  > div {
    margin: 10px 0;

    h1 {
      font: Bold 24px Roboto, sans-serif;
      letter-spacing: 0px;
      opacity: 1;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    padding: 15px 15px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0;
    border-radius: 4px;

    p {
      text-align: left;
      margin-bottom: 5px;
      letter-spacing: 0px;
      font: Bold 16px Roboto, sans-serif;
      opacity: 1;
      color: #444444;
    }

    input {
      border-radius: 4px;
      height: 35px;
      width: 100%;
      margin-bottom: 15px;
      padding: 0 10px;
      text-align: left;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      letter-spacing: 0px;
      color: #666666;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      opacity: 1;

      &::placeholder {
        color: #999999;
        opacity: 1;
      }
    }
  }
`;

export const Button = styled.button.attrs((props) => ({
  label: props.label,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  margin-top: 15px;
  margin-left: 15px;
  font-size: 12px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  transition: background 0.2s;

  ${(props) =>
    props.label === 'voltar' &&
    css`
      background: #cccccc 0% 0% no-repeat padding-box;
    `}

  ${(props) =>
    props.label === 'salvar' &&
    css`
      background: #7d40e7 0% 0% no-repeat padding-box;
    `}

    &:hover {
    opacity: 0.9;
  }

  svg {
    cursor: pointer;
    margin-right: 5px;
  }
`;
