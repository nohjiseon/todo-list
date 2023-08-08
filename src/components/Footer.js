import styled from "styled-components";

import FooterLogo from "../images/foo_logo.png";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: #e8ecf3;
  img {
    height: 2.6rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <img src={FooterLogo} alt="made by jiseon" />
    </FooterStyle>
  );
};

export default Footer;
