import React from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "../store/CharacterContext";

export const Navbar = () => {
  const { selectedCharacterName } = React.useContext(CharacterContext); // Access the selectedCharacterName from the context

  return (
    /** Imagen Logo Inicio Izquierda */
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <img
          className=" ms-4"
          style={{ width: "70px", height: "70px" }}
          src="https://pngimg.com/d/star_wars_logo_PNG34.png"
          alt="Star Wars logo"
        />
      </Link>
      {/* ... (rest of the component code) ... */}
      <div className="me-3">
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {selectedCharacterName && (
              <li>
                <a className="dropdown-item" href="#">
                  {selectedCharacterName}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
