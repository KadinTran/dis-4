// import {useEffect, useState} from "react";
import styled from "styled-components";
// import type {Game} from "./types/Game.ts";
import useSWR from "swr";
import GameDisplay from "./components/Display.tsx";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #222233 solid;
`;

export default function App(){

  const fetcher = (url : string) => fetch(url)
      .then( (res) => res.json() );
  const { data, error, isLoading } =
      useSWR('https://www.freetogame.com/api/games?category=card', fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
      <ParentDiv>
        <header> <h1> Card Games</h1> </header>
        <GameDisplay data = {data}/>
      </ParentDiv>
  );
}

