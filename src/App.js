import { useEffect, useState } from "react";
import "./App.css";
import Filmes from "./paginas/filmes.json";
import { FaSearch } from "react-icons/fa";
import Cabecalho from "./paginas/cabecalho";

function App() {
  const [movies, setMovies] = useState([]);
  const [busca, setBusca] = useState("");

  const lowerBusca = busca.toLowerCase();
  const moviesFiltrados = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerBusca)
  );

  useEffect(() => {
    const filmesOrdenados = Filmes.data.movies
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    setMovies(filmesOrdenados);
  }, []);

  const groupMoviesByInitialLetter = () => {
    const groupedMovies = {};
    moviesFiltrados.forEach((movie) => {
      const initialLetter = movie.title.charAt(0).toUpperCase();
      if (!groupedMovies[initialLetter]) {
        groupedMovies[initialLetter] = [];
      }
      groupedMovies[initialLetter].push(movie);
    });
    return groupedMovies;
  };

  return (
    <div className="App">
      <div className="cabecalho">
        <Cabecalho />
        <div className="nav-pesquisa">
          <span>
            <FaSearch
              style={{
                fontSize: "15px",
                color: "#ffffff",
                padding: "3%",
              }}
            />
          </span>
          <input
            className="pesquisas"
            type="text"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
            placeholder="SEARCH"
          />
        </div>
      </div>

      <div className="filmes-container">
        {moviesFiltrados && moviesFiltrados.length > 0 ? (
          Object.entries(groupMoviesByInitialLetter()).map(
            ([letter, moviesList]) => (
              <div className="letras" key={letter}>
                <h3>{letter}</h3>
                <div className="linhas-horizontais">
                  {moviesList.map((movie) => (
                    <div className="filmes" key={movie.id}>
                      <a href={movie.url} target="_blank">
                        <img src={movie.Iurl} alt={movie.title} />
                        <h4 className="nome">{movie.title}</h4>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
