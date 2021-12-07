import { mobile } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import opora from "../imgs/opora.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section>
      <Inside>
        <Left>
          <H2>Budeme vaší oporou</H2>
          <P>
            V průběhu celého kurzu vám poskytneme takový obsah a podporu, která
            vás jemně a plynule provede všemi klíčovými body na vaší cestě ke
            spokojenějšímu a plnohodnotnějšímu životu.
          </P>
          <Ul>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              <P>
                Dáme vám přístup k zásobě <strong>vzdělávacích videí</strong>,
                která můžete sledovat odkudkoliv a na všech zařízeních.
              </P>
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              <P>
                Poskytneme vám
                <strong> autorské publikace a videocasty a PODcasty</strong>,
                které vznikly speciálně pro tento program.
              </P>
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              <P>
                Zajistíme vám
                <strong> interaktivní podporu parťáka </strong>a psychologa pro
                neustálý rozvoj vaší osobnosti.
              </P>
            </Li>
            <Li>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              <P>
                Budete <strong> součástí komunity</strong>, která se navzájem
                podporuje a motivuje vás ve vašem osobním rozvoji.
              </P>
            </Li>
          </Ul>
          <H3>Co vás čeká v samotném finále?</H3>
          <P>
            Ve spolupráci se studijními trenéry zrekapitulujete vaši cestu
            rekonstrukcí identity. Zhodnotíte veškeré přínosy a pocity, které
            vám vzdělávání přineslo. Symbolickým oceněním několikaměsíčního
            procesu poznávání sebe sama bude pro ty nejlepší z vás také
            certifikát o absolvování kurzu. Možná vás čeká i natáčení našeho
            podcastu, kde se můžete s ostatními podělit o vlastní zážitky,
            uvědomění a pokrok.{" "}
          </P>
        </Left>
        <Right>
          <Img src={opora} />
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
  justify-content: flex-end;
  flex: 1;
  min-width: 300px;
  ${mobile({ order: "1" })}
`;
const Img = styled.img`
  width: 50%;
`;
const P = styled.p``;
const H3 = styled.h3``;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
`;
