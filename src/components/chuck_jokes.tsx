import Joke from "../joke";

interface ChuckJokesProps {
  joke: Joke;
}

const ChuckJokes: React.FC<ChuckJokesProps> = ({ joke }) => {
  return <p>{joke.joke}</p>;
};

export default ChuckJokes;
