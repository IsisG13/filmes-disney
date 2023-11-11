import { useEffect, useState } from "react";
import "../App.css";
import Filmes from "../paginas/filmes.json";
import { FaSearch } from "react-icons/fa";
import Cabecalho from "../paginas/cabecalho";

function Lista() {
  const [perfil, setPerfil] = useState(null);
  const [movies, setMovies] = useState([]);
  const [busca, setBusca] = useState("");

  const lowerBusca = typeof busca === "string" ? busca.toLowerCase() : "";
  const moviesFiltrados = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerBusca)
  );

  useEffect(() => {
    // Escolher aleatoriamente um perfil se existir
    if (Filmes.userProfiles && Filmes.userProfiles.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * Filmes.userProfiles.length
      );
      setPerfil(Filmes.userProfiles[randomIndex]);
    }
  }, []);

  useEffect(() => {
    const filmesOrdenados = Filmes.data.movies
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    setMovies(filmesOrdenados);
  }, []);

  const getFirstMovieByInitialLetter = () => {
    const firstMovies = {};
    movies.forEach((movie) => {
      const initialLetter = movie.title.charAt(0).toUpperCase();
      if (!firstMovies[initialLetter]) {
        firstMovies[initialLetter] = movie;
      }
    });
    return Object.values(firstMovies);
  };

  return (
    <div className="App">
      <div className="cabecalho">
        <Cabecalho />
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

      <div className="perfil">
        {perfil && (
          <div className="perfil">
            <img src={perfil.avatar} alt={perfil.name} />
            <h4>{perfil.name}</h4>
          </div>
        )}
      </div>

      <div className="filmes-container">
        {moviesFiltrados && moviesFiltrados.length > 0 ? (
          getFirstMovieByInitialLetter().map((movie) => (
            <div className="filmes" key={movie.id}>
              <a href={movie.url} target="_blank" rel="noopener noreferrer">
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

export default Lista;
