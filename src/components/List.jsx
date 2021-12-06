import { GET_DATA_QUERY, URL_API } from "../constants";
import { getLaunches } from "../redux/launchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import React from "react";
import axios from "axios";
import styled from "styled-components";

const List = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches.launches);
  useEffect(() => {
    dispatch(getLaunches());
  }, []);
  return (
    <Container>
      {launches &&
        launches?.map((data) => {
          return (
            <ListElement key={data.id}>
              <Card {...data} />
            </ListElement>
          );
        })}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: 400px;
  text-align: center;
  margin: 20px;
`;
const ListElement = styled.div``;
export default List;
