// ChuckJokes.tsx
import React from "react";
import Joke from "../joke";

interface ChuckJokesProps {
  joke: Joke;
}

const ChuckJokes: React.FC<ChuckJokesProps> = ({ joke }) => {
  return <>{joke.joke}</>;
};

export default ChuckJokes;
