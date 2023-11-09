import { useEffect, useState } from "react";
import "./App.css";
import Filmes from "./paginas/filmes.json";
import Imagem from "./paginas/movies/a-historia-do-imagineering.jpeg";
import { FaSearch } from "react-icons/fa";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(Filmes.data.movies);
  }, []);

  return (
    <div className="App">
      <div className="cabecalho">
        <h2>Filmes Disney</h2>
        <input className="pesquisas" type="text" placeholder="procure filmes" />
        <button>
          <FaSearch
            style={{
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </button>
      </div>

      <div className="filmes-container">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className="filmes" key={movie.id}>
              <a href={movie.url} target="_blenk">
                <img src={Imagem} alt={movie.title} />
                {/* <img src={movie.url} alt={movie.title} /> */}
                <h4>{movie.title}</h4>
              </a>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
