import { mobile, tablet } from "../responsive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BM from "../imgs/BM.png";
import MB from "../imgs/MB.png";
import MV from "../imgs/MV.png";
import PZ from "../imgs/PZ.png";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import anonym from "../imgs/anonym.png";
import bubble from "../imgs/bubble.png";
import ec from "../imgs/ec.png";
import styled from "styled-components";
const Highlights = () => {
  return (
    <Section>
      <Inside>
        <Left>
          <H2>Kontaktujte nás</H2>
          <Team>
            <Person>
              <PersonLeft>
                <PersonImg src={MV} />
              </PersonLeft>
              <PersonRight>
                <H4>Michaela Varmužová</H4>
                <P padding="20px">Poradce pro osobnostní rozvoj</P>
                <P>
                  <strong>Telefon: </strong>{" "}
                  <a style={{ color: "white" }} href="tel:703375474">
                    +420 703 375 474
                  </a>
                </P>
                <P>
                  <strong>E-mail:</strong>{" "}
                  <a
                    style={{ color: "white" }}
                    href="mailto:michaela.varmuzova@essentialcollege.cz"
                  >
                    michaela.varmuzova@essentialcollege.cz
                  </a>
                </P>
              </PersonRight>
            </Person>
          </Team>
        </Left>
        <Right>
          <ScrollAnimation animateIn="fadeIn">
            <Img src={bubble} />
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
  margin: 20px 20px;
  color: black;
  justify-content: center;
  background-color: #3bb6d7;
  padding: 20px;
  border-radius: 20px;
  color: white;
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

  ${tablet({ order: "2" })}
`;
const Right = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  min-width: 300px;
  ${mobile({ order: "1" })}
`;
const Img = styled.img`
  width: 100%;
`;
const PersonImg = styled.img`
  width: 100px;
`;
const H4 = styled.h4`
  margin: 0;
`;
const PersonLeft = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-right: 20px;
`;
const PersonRight = styled.div``;
const P = styled.p`
  margin: 0;
  padding-bottom: ${(props) => props.padding};
`;
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
  flex-wrap: wrap;
`;
const Person = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-width: 130px;
`;
