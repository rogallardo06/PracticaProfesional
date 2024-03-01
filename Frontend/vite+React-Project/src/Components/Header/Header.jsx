import SearchBar from "./SearchBar/SearchBar"

function Header() {

  return (
    <header>
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
    </header>
  )
}

export default Header