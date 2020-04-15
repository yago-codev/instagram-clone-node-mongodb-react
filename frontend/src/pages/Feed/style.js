import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
`;

export const Post = styled.article`
  background: #bcc1cd;
  box-shadow: 5px 5px 10px #bfc2c9, -5px -5px 10px #ffffff;
  margin: 45px;
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 13px;
        font-weight: 500;
      }

      span:nth-child(2) {
        font-size: 11px;
        margin-top: 3px;
        color: #242424;
        font-weight: normal;
      }
    }
  }

  .imgPost {
    width: 100%;
    object-fit: cover;
  }

  footer {
    padding: 20px;

    div {
      margin-bottom: 10px;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      img {
        height: 20px;
        margin-right: 10px;
      }
    }

    p {
      font-size: 13px;
      margin-top: 2px;
      line-height: 18px;

      span {
        display: block;
        color: #2f3c70;
        font-weight: 500;
      }
    }
  }
`;
