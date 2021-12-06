import List from "./List";
import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <Header>GraphQL Fetch Test</Header>
      <List />
      <Link href="https://api.spacex.land/graphql/">
        https://api.spacex.land/graphql/
      </Link>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  min-height: 100%;
  margin: 0 auto;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export default Homepage;
