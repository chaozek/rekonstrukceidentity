import { mobile } from "../responsive";
import { tablet } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import opora from "../imgs/opora.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Container>
      <H3>Jaké jsou možnosti kurzu?</H3>
      <Section>
        <Card>
          <H2>Psychodiagnostika Get2KnowMe</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Zjistíte jaké jsou vaše životní hodnoty a kam chcete směřovat
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> Odhalíte svůj
              potenciál a své talenty
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Porozumíte svým emocím
            </Li>
          </Ul>
          <A href="mailto:obchod@essentialcollege.cz">
            <Button>KONTAKTUJTE NÁS</Button>
          </A>
        </Card>
        <Card>
          <H2>Mini</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />3 hodiny
              individuálních konzultací včetně psychodiagnostiky Get2KnowMe
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> 30 unikátních
              vzdělávacích videí
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              BONUS
            </Li>
          </Ul>
          <A href="mailto:obchod@essentialcollege.cz">
            <Button>KONTAKTUJTE NÁS</Button>
          </A>
        </Card>
        <Card>
          <H2>Plus</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> 6 hodin
              individuálních konzultací včetně psychodiagnostiky Get2KnowMe
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> 30 unikátních
              vzdělávacích videí
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              BONUS
            </Li>
          </Ul>
          <A href="mailto:obchod@essentialcollege.cz">
            <Button>KONTAKTUJTE NÁS</Button>
          </A>
        </Card>
        <Card>
          <H2>Extra</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> 12 hodin
              individuálních konzultací včetně psychodiagnostiky Get2KnowMe
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> 30 unikátních
              vzdělávacích videí
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              BONUS
            </Li>
          </Ul>
          <A href="mailto:obchod@essentialcollege.cz">
            <Button>KONTAKTUJTE NÁS</Button>
          </A>
        </Card>
      </Section>
    </Container>
  );
};

export default Highlights;
const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: 350px;
  text-align: center;
  margin: 20px;
  ${mobile({
    gridAutoRows: "350px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  })}
`;
const H3 = styled.h3`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 5rem;
  color: black;
`;
const Card = styled.div`
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const H2 = styled.h2`
  color: black;
  text-align: center;
`;
const Ul = styled.ul`
  padding: 0;
`;
const Container = styled.div`
  margin: 50px 20px;
`;
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0rem;
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
