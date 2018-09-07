import React from 'react'

const Navbar = ({goToAbout, goToShelf, goToSuggestions}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#" onClick={goToShelf}>
        Novel Novels
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" onClick={goToShelf}>Shelf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={goToSuggestions}>Suggestions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={goToAbout}>About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
