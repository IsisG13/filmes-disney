import React from "react";
import Logo from "../logo.svg";
import { FaFilm, FaHome, FaPlus, FaStar, FaTv } from "react-icons/fa";

function Cabecalho() {
    return (
        <div className="cabecalho">
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
          <FaFilm
            style={{
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </span>
        <a href="./movies">MOVIES</a>
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
          <FaStar
            style={{
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </span>
        <a href="https://www.disneyplus.com/franchise/disney-channel-original-movies" target="_blank">
          ORIGINALS
        </a>
        <span>
          <FaTv
            style={{
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "black",
              padding: "3%",
            }}
          />
        </span>
        <a href="https://www.disneyplus.com/pt-br/brand/disney" target="_blank">SERIES</a>
      </div>
    )
}

export default Cabecalho;