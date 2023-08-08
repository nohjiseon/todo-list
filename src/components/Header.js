import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Logo from "../images/logo.png";
import BurgerMenu from "../images/menu.png";
import NavClose from "../images/nav_close.png";
import FooterLogo from "../images/foo_logo.png";

const HeaderStyle = styled.header`
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  box-shadow: 0px 0.4rem 0.4rem rgba(198, 198, 198, 0.3);
`;

const Fixbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  height: 5rem;
  a {
    position: relative;
    display: block;
    font-size: 1.6rem;
  }
  a:after {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: url(${Logo}) no-repeat center / 1.8rem;
    position: absolute;
    top: -0.7rem;
    right: -1.2rem;
    z-index: -1;
  }
  button {
    width: 2rem;
    height: 2rem;
    background: url(${BurgerMenu}) no-repeat center / 1.8rem;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  &.active {
    right: 0;
    left: 0;
  }
`;

const Nav = styled.nav`
  width: 26rem;
  height: 100vh;
  margin-right: 0;
  margin-left: auto;
  padding: 2.3rem 2rem 0;
  background-color: #fff;
  text-align: right;

  button {
    width: 4rem;
    height: 4rem;
    background: url(${NavClose}) no-repeat center / contain;
  }

  ul {
    border-top: 1px solid #d9d9d9;
    margin-top: 2rem;
    padding-top: 1.5rem;
    a {
      display: block;
      padding: 1.5rem 0;
    }
  }
`;

const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 22rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  img {
    height: 2rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <Fixbar>
        <h1>
          <Link to="/">오늘의 할일</Link>
        </h1>
        <button onClick={openModalHandler}></button>
      </Fixbar>
      <BackDrop className={isOpen ? "active" : null} onClick={openModalHandler}>
        <Nav
          onClick={event => {
            // 이벤트 객체의 버블링을 막아준다
            event.stopPropagation();
          }}
        >
          <button onClick={openModalHandler}></button>
          <ul>
            <li>
              <Link to="/" onClick={openModalHandler}>
                오늘의 할일
              </Link>
            </li>
            <li>
              <Link to="/edit" onClick={openModalHandler}>
                할일 변경하기
              </Link>
            </li>
            <li>
              <Link to="/made" onClick={openModalHandler}>
                만든 이
              </Link>
            </li>
          </ul>
          <NavFooter>
            <img src={FooterLogo} alt="made by jiseon" />
          </NavFooter>
        </Nav>
      </BackDrop>
    </HeaderStyle>
  );
};

export default Header;
