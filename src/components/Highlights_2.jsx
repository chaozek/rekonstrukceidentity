import { mobile } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BM from "../imgs/BM.png";
import JN from "../imgs/JN.png";
import MB from "../imgs/MB.png";
import MV from "../imgs/MV.png";
import MV from "../imgs/MV.png";
import PL from "../imgs/PL.png";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import anonym from "../imgs/anonym.png";
import globe from "../imgs/globe.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section>
      <Inside>
        <Left>
          <H2>Kdo bude vaším parťákem?</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Součástí tohoto vzdělávacího programu je studijní trenér, který
              vás provede hlubokým sebepoznáním, aby maximalizoval přínosy do
              praxe. Poskytne vám zpětnou vazbu na odevzdané úkoly a pomůže vám
              vrátit se k sobě, ke své podstatě a posílit tak vaši identitu.
            </Li>
          </Ul>
          <Team>
            <Person>
              <PersonImg src={PZ} />
              <H4>Petr Zaplatílek</H4>
            </Person>
            <Person>
              <PersonImg src={BM} />
              <H4>Blanka Miličková</H4>
            </Person>
            <Person>
              <PersonImg src={MB} />
              <H4>Martina Brázdová</H4>
            </Person>
            <Person>
              <PersonImg src={PL} />
              <H4>Petra Luptáková</H4>
            </Person>
            <Person>
              <PersonImg src={JN} />
              <H4>Jakub Novotný</H4>
            </Person>
          </Team>
        </Left>
        <Right>
          <ScrollAnimation animateIn="fadeIn">
            <Img src={globe} />
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
  min-height: 80vh;
  justify-content: center;
`;
const H2 = styled.h2`
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
  order: 2;

  ${mobile({ order: "2" })}
`;
const Right = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  min-width: 300px;
  ${mobile({ order: "1" })}
`;
const Img = styled.img`
  width: 80%;
`;
const PersonImg = styled.img`
  width: 100px;
  border-radius: 50%;
`;
const H4 = styled.h4``;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 1.5rem 0rem;
`;
const Team = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Person = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 130px;
`;
