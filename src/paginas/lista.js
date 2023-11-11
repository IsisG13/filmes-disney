import { useEffect, useState } from "react";
import "../App.css";
import Logo from "../logo.svg";
import Filmes from "../paginas/filmes.json";
import { FaFilm, FaHome, FaPlus, FaSearch, FaStar, FaTv } from "react-icons/fa";
// import Cabecalho from "../paginas/cabecalho";

function Lista() {
  const [userProfile, setUserProfile] = useState(null);
  const [movies, setMovies] = useState([]);
  const [busca, setBusca] = useState("");

  const lowerBusca = typeof busca === "string" ? busca.toLowerCase() : "";
  const moviesFiltrados = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerBusca)
  );

  useEffect(() => {
    if (Filmes.data.userProfiles && Filmes.data.userProfiles.length > 0) {
      const randomProfileIndex = Math.floor(
        Math.random() * Filmes.data.userProfiles.length
      );
      setUserProfile(Filmes.data.userProfiles[randomProfileIndex]);
    }

    const filmesOrdenados = Filmes.data.movies
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    setMovies(filmesOrdenados);
  }, []);

  const getMoviesByInitialLetters = () => {
    const uniqueInitialLetters = Array.from(
      new Set(movies.map((movie) => movie.title.charAt(0).toUpperCase()))
    );

    const randomMovies = uniqueInitialLetters.map((letter) => {
      const moviesWithInitialLetter = movies.filter(
        (movie) => movie.title.charAt(0).toUpperCase() === letter
      );

      const randomIndex = Math.floor(
        Math.random() * moviesWithInitialLetter.length
      );

      return moviesWithInitialLetter[randomIndex];
    });

    return randomMovies;
  };

  return (
    <div className="App">
 <div className="cabecalho-lista">
        <img src={Logo} alt="disney logo" />
        <span>
          <FaHome
            style={{
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </span>
        <a href="/">HOME</a>

        <span>
          <FaPlus
            style={{
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </span>
        <a href="./lista">MY LIST</a>

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
          className="pesquisas-lista"
          type="text"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
          placeholder="SEARCH"
        />
      </div>

      <div className="perfil">
      <h3>MINHA LISTA</h3>
        {userProfile && (
          <div className="perfil" key={userProfile.id}>
            <img src={userProfile.avatar} alt={userProfile.name} />
            <h2>{userProfile.name}</h2>
          </div>
        )}
      </div>

      <div className="filmes-container">
        {moviesFiltrados && moviesFiltrados.length > 0 ? (
          getMoviesByInitialLetters().map((movie) => (
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
