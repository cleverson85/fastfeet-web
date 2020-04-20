import styled, { css } from 'styled-components';

export const Status = styled.div.attrs((props) => ({
  status: props.status,
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 27px;
  border-radius: 12px;
  font: Bold 16px Roboto, sans-serif;
  opacity: 1;

  ${(props) =>
    props.status === 'cancelado' &&
    css`
      background: #fab0b0 0% 0% no-repeat padding-box;
      color: #de3b3b;
    `}

  ${(props) =>
    props.status === 'entregue' &&
    css`
      background: #dff0df 0% 0% no-repeat padding-box;
      color: #2ca42b;
    `}

  ${(props) =>
    props.status === 'retirado' &&
    css`
      background: #bad2ff 0% 0% no-repeat padding-box;
      color: #4d85ee;
    `}

  ${(props) =>
    props.status === 'pendente' &&
    css`
      background: #f0f0df 0% 0% no-repeat padding-box;
      color: #c1bc35;
    `}

  svg {
    margin-right: 10px;
  }
`;
