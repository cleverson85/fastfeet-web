import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  top: 0px;
  left: 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;

  img {
    margin-left: 10px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 10px;

  p {
    text-align: right;
    letter-spacing: 0px;
    font: Bold 15px/20px Roboto, sans-serif;
    color: #666666;
    opacity: 1;
  }

  button {
    background: #fff;
    border: 0;
    font: 15px Roboto, sans-serif;
    color: #de3b3b;
    opacity: 1;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 50%;
`;

export const Order = styled(Link)`
  text-align: left;
  font: Bold 15px/20px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #999999;
  opacity: 1;

  &:hover {
    color: #444444;
  }

  &:focus {
    color: #444444;
  }
`;

export const Deliveryman = styled(Link)`
  text-align: left;
  font: Bold 15px/20px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #999999;
  opacity: 1;

  &:hover {
    color: #444444;
  }

  &:focus {
    color: #444444;
  }
`;

export const Recipient = styled(Link)`
  text-align: left;
  font: Bold 15px/20px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #999999;
  opacity: 1;

  &:hover {
    color: #444444;
  }

  &:focus {
    color: #444444;
  }
`;

export const Issues = styled(Link)`
  text-align: left;
  font: Bold 15px/20px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #999999;
  opacity: 1;

  &:hover {
    color: #444444;
  }

  &:focus {
    color: #444444;
  }
`;
