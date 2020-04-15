import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container } from "./style";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Instagram Clone" />
        </Link>
        <Link to="/new">
          <button type="button">
            <span>
              <MdAdd fill="#FFF" />
            </span>
            Adicionar foto
          </button>
        </Link>
      </div>
    </Container>
  );
}
