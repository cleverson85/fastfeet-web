import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
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
      justify-content: space-between;

      input {
        margin: 15px 0;
        border-radius: 4px;
        height: 35px;
        width: 30%;
        padding: 5px 10px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        opacity: 1;

        &::placeholder {
          color: #999999;
          opacity: 1;
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 35px;
        margin-top: 15px;
        font-size: 12px;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        background: #7d40e7;
        color: #ffffff;
        transition: background 0.2s;

        &:hover {
          opacity: 0.9;
        }

        svg {
          cursor: pointer;
          margin-right: 5px;
        }
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;

  thead th {
    color: #444;
    font: Bold 16px Roboto, sans-serif;
    text-align: center;
  }

  tbody tr {
    background: #ffffff 0% 0% no-repeat padding-box;
    text-align: center;
    opacity: 1;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font: 16px Roboto, sans-serif;
      text-align: left;
      letter-spacing: 0px;
      color: #666666;
      opacity: 1;
      margin: 10px 0;

      p {
        margin-left: 10px;
      }
    }
  }

  td:first-child {
    border-left-style: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  td:last-child {
    border-left-style: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
