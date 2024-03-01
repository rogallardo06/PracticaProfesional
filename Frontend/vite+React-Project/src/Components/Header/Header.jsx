import SearchBar from "./SearchBar/SearchBar"

function Header() {

  return (
    <header>
<<<<<<< HEAD
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
=======
        <div className="container-fluid pb-3 bg-gray-200">
        <nav className="navbar place-content-around">
          
          <a className="w-8 sm:w-14" href="#">
            <img src="/images/recruiting-logo.png" alt="Logo" class="img-fluid"/>
          </a>

          <i className="fa-solid fa-house active d-sm-none"></i>
          <a className="d-sm-block d-none" aria-current="page" href="#">Home</a>

          <i className="fa-solid fa-user active d-sm-none"></i>
          <a className="d-sm-block d-none" href="#">Aspirants</a>

          <i className="fa-solid fa-briefcase active d-sm-none"></i>
          <a className="d-sm-block d-none" href="#">Professions</a>

          <i className="fa-solid fa-right-to-bracket active d-sm-none"></i>
          <a className="d-sm-block d-none" href="#">apply</a>

        </nav>

        <SearchBar/>

      </div>
>>>>>>> 627404acdefffdeec8d58fd00f06637060b9c3e1
    </header>
  )
}

export default Header