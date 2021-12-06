import React from "react";
import styled from "styled-components";

const Card = (data) => {
  var parsedDate = new Date(data.launch_date_local).toLocaleDateString();
  return (
    <Container>
      Name
      <Thing>{data.mission_name}</Thing>
      Rocket
      <Thing>{data.rocket.rocket_name}</Thing>
      Launch Date
      <Thing>{parsedDate}</Thing>
      Link
      <a href={data.links.video_link} target="_blank" rel="noreferrer">
        <Button>Watch</Button>
      </a>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  height: 400px;
  background-color: #272727;
  color: #929292;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  opacity: 0.95;
`;
const Thing = styled.div`
  background-color: #ff635c;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
`;
const Button = styled.div`
  background-color: white;
  color: gray;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: #ff635c;
    color: white;
  }
`;
