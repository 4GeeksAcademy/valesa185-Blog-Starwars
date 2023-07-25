import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ favorites }) => {
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
                  <a className="dropdown-item" href="#">
                    {favorite}
                  </a>
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
