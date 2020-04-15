import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.header`
  background: #e1e4ed;
  height: 72px;
  box-shadow: 3px 3px 10px #b4b7be, -3px -3px 10px #f4f7ff;

  & > div {
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    border: none;
    background: linear-gradient(to right, #d73e6c 0%, #faa849 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 5px 5px 5px #bfc2c9, -5px -5px 5px #ffffff;
    opacity: 0.9;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }

    &:active {
      box-shadow: inset 5px 5px 5px #b7355c, inset -5px -5px 5px #d58f3e;
    }

    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ed7989;
      margin-right: 5px;

      svg {
        fill: #ffffff !important;
      }
    }
  }
`;
