import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  margin: 45px auto 0;
  padding: 30px;
  border-radius: 10px;
  background: #bcc1cd;
  box-shadow: 5px 5px 5px #bfc2c9, -5px -5px 5px #ffffff;

  input,
  textarea {
    margin-bottom: 20px;
    border: none;
  }

  input[type="text"],
  textarea {
    background: #e1e4ed;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: inset 5px 5px 5px #a0a4ae, inset -5px -5px 5px #ffffff;
  }

  input[type="file"] {
    color: #363b47;
  }

  input[type="file"]::-webkit-file-upload-button {
    border: none;
    background: #e1e4ed;
    border-radius: 7px;
    padding: 5px 10px;
    outline: 0;
    color: #363b47;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="text"]::placeholder,
  textarea::placeholder {
    color: #484f60;
  }

  button[type="submit"] {
    border: none;
    background: linear-gradient(to right, #d73e6c 0%, #faa849 100%);
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    color: #ffffff;
    box-shadow: 5px 5px 5px #a0a4ae, -5px -5px 5px #d8deec;
    opacity: 0.9;
    font-weight: bold;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &:active {
      box-shadow: inset 5px 5px 5px #b7355c, inset -5px -5px 5px #d58f3e;
    }
  }
`;
