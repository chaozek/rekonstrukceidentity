import { desktop, mobile, tablet } from "../responsive";
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
          <H2>Zjistěte o nás více</H2>
          <Ul>
            <List>
              <ArrowForwardIosIcon style={{ color: "#3BB6D7" }} />
              Nechceme, abyste byli pouhými diváky nebo čtenáři – plán
              Rekonstrukce identity je navržen tak, abyste všechny nové poznatky
              vědomě praktikovali a zahrnuli je tak do svého běžného života,
              protože pouze vlastní zažitá zkušenost nás může posunout dál.
            </List>
          </Ul>
          <strong>
            <h3>
              Zajímají vás témata v oblasti osobního rozvoje nebo vlastní
              identity?{" "}
            </h3>
            <Ul>
              <List>
                Udělejte si čas pro sebe a přečtěte si některý z našich článků
                na webu Psychologie pro každého:
              </List>
            </Ul>
          </strong>

          <Ul>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/rekonstrukce-identity/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>Rekonstrukce identity</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/online-vzdelavani-nepropasnete-svou-prilezitost/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>Online vzdělávání-nepropásněte svou příležitost</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/andrea-gembalova-a-jarka-spolkova-psychologickym-vycvikem-k-silne-osobnosti/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>Psychologickým výcvikem k silné osobnosti</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/vojtech-kracik-proc-je-dulezite-aby-mel-obchodnik-zdravou-identitu/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P> Proč je důležité mít zdravou identitu</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/vojtech-kracik-jak-muze-psychologicky-vycvik-pomoci-i-vam/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P> Jak může psychologický výcvik pomoci i vám?</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/jste-skutecne-pripraveni-prevzit-odpovednost-za-svuj-zivot/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>
                    Jste skutečně připraveni vzít zodpovědnost za svůj život?
                  </P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/kazdodenni-ritualy-ktere-vam-zmeni-zivot/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>Každodenní rituály, které vám změní život</P>
                </Li>
              </A>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <A
                target="_blank"
                href="https://psychologieprokazdeho.cz/jak-prekonat-ponorkovou-nemoc/"
              >
                <Li>
                  <ArrowForwardIosIcon style={{ color: "#5C9DE9" }} />
                  <P>Jak překonat ponorkovou nemoc?</P>
                </Li>
              </A>
            </ScrollAnimation>
          </Ul>
        </Left>
        <Right>
          <Iframe
            width="500px"
            height="500px"
            src="https://www.youtube.com/embed/OtXrdSyAacE?start=1068"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
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
const Iframe = styled.iframe`
  border-radius: 20px;
  ${desktop({ width: "300px" })};
  ${mobile({ width: "100%" })};
`;
const Left = styled.div`
  flex: 1;
  margin-top: 5rem;
  min-width: 300px;
`;
const A = styled.a`
  color: black;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 300px;
  ${mobile({ order: "1" })}
`;

const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${tablet({ justifyContent: "center", alignItems: "center" })}
`;
const P = styled.p`
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  width: 80%;
  margin: 10px;
  transition: all 200ms;
  height: 100px;
  ${mobile({ height: "50px" })}

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  ${mobile({ justifyContent: "center" })}
`;
const List = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
`;
