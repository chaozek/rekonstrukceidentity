import { Link, animateScroll as scroll } from "react-scroll";
import { mobile } from "../responsive";
import ParticlesBg from "particles-bg";
import React from "react";
import logo from "../imgs/logo.png";
import styled from "styled-components";
const Hero = () => {
  return (
    <div>
      <ParticlesBg color="#F0F2F5" type="lines" bg={true} num={100} />
      <H2>Budeme vaší oporou</H2>

      <Header>
        <Logo src={logo} />
        <H1>REKONSTRUKCE IDENTITY</H1>
        <P>
          Vzdělávací program Rekonstrukce identity je unikátní online vzdělávací
          portál se zaměřením na osobní rozvoj. Smyslem tohoto vzdělávacího
          programu je{" "}
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
  flex-direction: column;
  margin: 0px 20px;
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
