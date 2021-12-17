import { Link, animateScroll as scroll } from "react-scroll";
import { desktop, mobile } from "../responsive";
import ParticlesBg from "particles-bg";
import React from "react";
import couple from "../imgs/couple.png";
import logo from "../imgs/logo.png";
import styled from "styled-components";
const Hero = () => {
  return (
    <div>
      <Header>
        <ParticlesBg color="#A5F2F4" type="cobweb" bg={true} num={300} />
        <Left>
          <Logo src={logo} />
          <H1>REKONSTRUKCE IDENTITY</H1>
          <P>
            Vzdělávací program Rekonstrukce identity je unikátní online
            vzdělávací portál se zaměřením na osobnostní rozvoj. Smyslem tohoto
            vzdělávacího programu je{" "}
            <strong>
              komplexní rozvíjení osobnosti formou vědomého praktikování.
            </strong>
          </P>
          <Link
            activeClass="active"
            to="first_block"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button>Zjistit více</Button>
          </Link>
        </Left>
        <Right></Right>
      </Header>
    </div>
  );
};

export default Hero;
const H1 = styled.h1`
  font-size: 70px;
  margin: 0;
  color: #3bb6d7;
  font-weight: black;
  ${mobile({ fontSize: "30px" })}
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 5rem;
`;
const Header = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  background-image: url(${couple});
  background-repeat: no-repeat;
  background-position: bottom right;
  ${desktop({ backgroundImage: "none" })};
`;
const P = styled.p`
  max-width: 800px;
  color: black;
  font-size: 25px;
`;
const Logo = styled.img`
  width: 250px;
  opacity: 90%;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  display: absolute;
  top: 0;
  left: 0;
  ${desktop({ display: "none" })};
`;

const Button = styled.button`
  background-color: #3bb6d7;
  border: none;
  padding: 15px 20px;
  width: 200px;
  color: #e8f9f2;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;
