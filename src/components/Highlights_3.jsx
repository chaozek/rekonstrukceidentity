import { mobile } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import path from "../imgs/road.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section>
      <Inside>
        <Left>
          <H2>Jak vypadá cesta rekonstrukcí identity?</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />V rámci vaší
              cesty projdete pěti vzdělávacími bloky. Při dodržení doporučeného
              studijního plánu trvá posluchači absolvování jednoho bloku
              přibližně měsíc.
            </Li>
          </Ul>
          <strong>
            <h3>Následující témata probereme postupně, krok po kroku:</h3>
          </strong>

          <Ul>
            <ScrollAnimation animateIn="bounceInRight">
              <Li>
                <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>1.</Center>
                    </Span>
                    krok
                  </strong>
                  - Jak zjistím, kým skutečně jsem?
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight">
              <Li>
                <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>2.</Center>
                    </Span>
                    krok
                  </strong>
                  - Jak docílím toho, že se skutečně přijmu?
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight">
              <Li>
                <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
                <P>
                  <strong>
                    <Span>
                      <Center> 3.</Center>
                    </Span>
                    krok
                  </strong>
                  - Jak porozumím svým emocím a zvládnu je u ostatních?
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight">
              <Li>
                <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>4.</Center>
                    </Span>
                    krok
                  </strong>
                  - Jak přijmu ego-obrany u sebe i u ostatních?
                </P>
              </Li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight">
              <Li>
                <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
                <P>
                  <strong>
                    <Span>
                      <Center>5.</Center>
                    </Span>
                    krok
                  </strong>
                  - Jak vytvářet a rozvíjet už jen zdravé vztahy?
                </P>
              </Li>
            </ScrollAnimation>
          </Ul>
        </Left>
        <Right>
          <ScrollAnimation animateIn="fadeIn">
            <Img src={path} />
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
  ${mobile({ fontSize: "30px", marginBottom: "2rem" })};
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
