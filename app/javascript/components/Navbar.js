import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Novel Novels
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="#">Shelf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
