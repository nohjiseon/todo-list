import styled from "styled-components";
import { Link } from "react-router-dom";

import Cheerup from "../images/Cheerup.png";
import Plus from "../images/plus.png";

const BeforeTodo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17.2rem;
  background-color: #fff;
  border-radius: 1.2rem;
  font-size: 1.8rem;
  a {
    display: block;
    width: 4rem;
    height: 4rem;
    margin-top: 1.2rem;
    background: url(${Plus}) no-repeat center / contain;
  }
`;

const Main = () => {
  return (
    <main>
      <img src={Cheerup} alt="오늘도 힘내세요!" />
      <BeforeTodo>
        <p>할일을 등록해주세요</p>
        <Link to="/edit"></Link>
      </BeforeTodo>
    </main>
  );
};

export default Main;
