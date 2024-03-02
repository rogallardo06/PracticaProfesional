import SearchBar from "./SearchBar/SearchBar"
import AspirantsPage from "../Content/AspirantsPage/AspirantsPage"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Header() {

  return (
    <header>
      <div className="container-fluid pb-3 bg-gray-200">
        <nav className="navbar place-content-around">

          <Link to="/" exact="true" className="w-8 sm:w-14">
            <img src="/images/recruiting-logo.png" alt="Logo" class="img-fluid" />
          </Link>

          <Link to="/" exact="true">
            <i className="fa-solid fa-house active d-sm-none"></i>
            <a className="d-sm-block d-none" aria-current="page" href="/">Home</a>
          </Link>

          <Link to="/aspirants" exact="true">
            <i className="fa-solid fa-user active d-sm-none"></i>
            <a className="d-sm-block d-none" href="/aspirants">Aspirants</a>
          </Link>

          <Link to="/professions" exact="true">
            <i className="fa-solid fa-briefcase active d-sm-none"></i>
            <a className="d-sm-block d-none" href="/professions">Professions</a>
          </Link>

          <Link to="apply" exact="true">
            <i className="fa-solid fa-right-to-bracket active d-sm-none"></i>
            <a className="d-sm-block d-none" href="/apply">apply</a>
          </Link>


        </nav>

        <SearchBar />
      </div>
    </header>
  )
}

export default Header