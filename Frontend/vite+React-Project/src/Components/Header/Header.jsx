import SearchBar from "./SearchBar/SearchBar"

function Header() {

  return (
    <header>
      <nav className="navbar bg-body-tertiary border border-3">
        <div className="container-fluid">
          <a className="d-flex align-items-center navbar-brand text-truncate" href="#">
            <img src="/images/logo.png" alt="Logo" style={{ width: "5rem" }} class="d-inline-block align-text-top" />
            Recruiting DH
          </a>
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-row navbar-nav-scroll">
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Aspirants</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">Professions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Postularse</a>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>
          </div>
          <SearchBar />
        </div>
      </nav>
    </header>
  )
}

export default Header