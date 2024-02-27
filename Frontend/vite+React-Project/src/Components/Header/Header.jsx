import SearchBar from "./SearchBar/SearchBar"

function Header() {

  return (
    <header>
      <nav className="navbar bg-body-tertiary mb-5">
        <div className="container-fluid">
          <a className="d-flex align-items-center navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo" style={{ width: "100px" }} class="d-inline-block align-text-top" />
            Recruiting DH
          </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">Aspirants</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">Professions</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">Postularse</a>
              </li>
            </ul>
            <SearchBar />
          </div>
      </nav>
    </header>
  )
}

export default Header