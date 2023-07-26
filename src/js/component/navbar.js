import React from "react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../store/DataContext";

export const Navbar = () => {
  const { favorites, removeFromFavorites } = useCharacterContext(); // Add the removeFromFavorites function from the context

  const handleRemoveFromFavorites = (characterName) => {
    removeFromFavorites(characterName); // Remove the character's name from the favorites list
  };

  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      {/** Dropdown lista de Favoritos */}

      <div className="ms-3">
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {favorites.length}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {favorites && favorites.length > 0 ? (
              favorites.map((favorite, index) => (
                <li key={index}>
                  <div className="d-flex align-items-center">
                    {" "}
                    {favorite}
                    <button
                      type="button"
                      className="btn btn-secondary ms-1"
                      style={{ backgroundColor: "transparent", border: "none" }}
                      onClick={() => handleRemoveFromFavorites(favorite)}
                    >
                      ✖️
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <a className="dropdown-item" href="#">
                  No favorites yet
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/**Imagen logo Star wars */}

      <Link to="/">
        <img
          className="me-4"
          style={{ width: "70px", height: "70px" }}
          src="https://pngimg.com/d/star_wars_logo_PNG34.png"
          alt="Star Wars logo"
        />
      </Link>
    </nav>
  );
};
