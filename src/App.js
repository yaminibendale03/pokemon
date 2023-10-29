import { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./Component/PokeCard";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const pokemonData = response.data.results;

        const detailsPromises = pokemonData.map(async (pokemon, index) => {
          try {
            const detailsResponse = await axios.get(
              `https://pokeapi.co/api/v2/characteristic/${index + 1}`
            );
            const description =
              detailsResponse.data.descriptions[7]["description"];

            return {
              ...pokemon,
              description,
            };
          } catch (error) {
            console.log(error);
            return {
              ...pokemon,
              description: "Description not available",
            };
          }
        });

        const pokemonDetails = await Promise.all(detailsPromises);
        setData(pokemonDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>Welcome to Pokemon family</h1>
      </div>
    <div className="app">
      <ul className="cards">
        {data.length > 0 ? (
          data.map((pokemon, index) => (
            <PokeCard data={{ ...pokemon, key: index }} key={index} />
          ))
        ) : (
          <></>
        )}
      </ul>
      <button class="button-33" role="button">
        Load More
      </button>
    </div>
    </div>
  );
}

export default App;
