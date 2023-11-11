import Logo from "../logo.svg";
import { useEffect, useState } from "react";
import "../App.css";
import Filmes from "../paginas/filmes.json";
import { FaFilm, FaHome, FaPlus, FaSearch, FaStar, FaTv } from "react-icons/fa";
import Cabecalho from "./cabecalho";

function App() {
  const [movies, setMovies] = useState([]);
  const [busca, setBusca] = useState("");

  const lowerBusca = typeof busca === "string" ? busca.toLowerCase() : "";
  const moviesFiltrados = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerBusca)
  );

  useEffect(() => {
    setMovies(
      Filmes.data.movies.filter((movie) =>
        movie.title.toLowerCase().includes(busca.toLowerCase())
      )
    );
  }, [busca]);

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
                backgroundColor: "black",
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
        {movies && movies.length > 0 ? (
          moviesFiltrados.map((movie) => (
            <div className="filmes-movie" key={movie.id}>
              <a href={movie.url} target="_blenk">
                <img src={movie.Iurl} alt={movie.title} />
                <h4 className="nome">{movie.title}</h4>
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
