import { mobile } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Get2KnowMe from "../imgs/Get2KnowMe.png";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section>
      <Inside>
        <Left>
          <H2>Ptáte se, co znamená psychodiagnostika Get2KnowMe?</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Díky této psychologické hře získáte uvědomění a sebepoznání ve
              třech oblastech: hodnotách, emocích a kompetencích (vlastnostech).
            </Li>
          </Ul>
          <strong>
            <h3>Pomůže vám:</h3>
          </strong>

          <Ul>
            <ScrollAnimation animateIn="flipInY" delay={500}>
              <Li>
                <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>1.</Center>
                    </Span>
                  </strong>
                  Zjistit, jaké jsou vaše životní hodnoty a kam chcete směřovat.
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInY" delay={800}>
              <Li>
                <ArrowForwardIosIcon style={{ color: "#9D64AF" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>2.</Center>
                    </Span>
                  </strong>
                  Odhalit svůj potenciál a své talenty.
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInY" delay={1100}>
              <Li>
                <ArrowForwardIosIcon style={{ color: "#D26BB6" }} />
                <P>
                  <strong>
                    <Span>
                      <Center> 3.</Center>
                    </Span>
                  </strong>
                  Porozumět svým emocím.
                </P>
              </Li>
            </ScrollAnimation>
          </Ul>
        </Left>
        <Right>
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            {" "}
            <Img src={Get2KnowMe} />
          </ScrollAnimation>
        </Right>
      </Inside>
    </Section>
  );
};

export default Highlights;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 20px;
  color: black;
`;
export const H2 = styled.h2`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 5rem;
`;
const Inside = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Left = styled.div`
  flex: 1;
  margin-top: 5rem;
  min-width: 300px;
  ${mobile({ order: "2" })};
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-width: 300px;
  ${mobile({ order: "1" })}
`;
const Img = styled.img`
  width: 100%;
`;
const Span = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  background-color: #3bb6d7;
  border-radius: 50%;
  margin-right: 10px;
`;
const Ul = styled.ul`
  padding: 0;
`;
const P = styled.p`
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  width: 80%;
  margin: 10px;
  transition: all 200ms;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
const Center = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  height: 100%;
  vertical-align: middle;
  justify-content: center;
  color: white;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
`;
