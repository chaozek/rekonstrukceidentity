import { mobile } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Thinking from "../imgs/thinking.png";
import globe from "../imgs/globe.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section id="first_block">
      <Inside>
        <Left>
          <H2>Co získám, když do toho půjdu?</H2>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> Dozvíte se,
              co je to identita a popíšete role ve vašem životě.
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> Naučíte se,
              jak se rozvíjet pomocí zkušeností a rozeznávat a pojmenovávat
              emoce.
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Poznáte metody ego obranných mechanismů a obohatíte se též o
              poznatky týkající se manipulace a toho, jak se jí bránit či ji
              využívat ve svůj prospěch.
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> Získáte
              jednoduché techniky pro navození porozumění v pracovních i
              partnerských vztazích a objevíte kouzlo nenásilné a konstruktivní
              komunikace a možnosti jejího využití.
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} /> Naučíte se
              dívat na svět očima psychologa, což vám ukáže, jak nahlížíte na
              své silné i slabé stránky, co si u sebe potřebujete změnit a čeho
              si naopak na sobě ceníte.
            </Li>
          </Ul>
        </Left>
        <Right>
          <ScrollAnimation animateIn="fadeIn">
            <Img src={Thinking} />
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
const H2 = styled.h2`
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
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 1.5rem 0rem;
`;
