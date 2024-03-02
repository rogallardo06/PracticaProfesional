import { useEffect, useState } from 'react';
import Content from './Components/Content/Content';
import { Link } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if( theme == "dark" ){
      document.querySelector("html").classList.add("dark");
      document.querySelector("header button i.fa-solid").classList.remove("fa-moon")
      document.querySelector("header button i.fa-solid").classList.add("fa-sun")
      document.querySelector("header img").src = "/images/recruiting-darkmode-logo.png"
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("header button i.fa-solid").classList.remove("fa-sun")
      document.querySelector("header button i.fa-solid").classList.add("fa-moon")
      document.querySelector("header img").src = "/images/recruiting-logo.png"
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }

  return (
    <>
      <header>

        <div className="pb-3 dark:bg-neutral-900 dark:text-white">

          <nav className="flex items-center p-2 place-content-around">
            
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

          <Link to="/apply" exact="true">
            <i className="fa-solid fa-right-to-bracket active d-sm-none"></i>
            <a className="d-sm-block d-none" href="/apply">apply</a>
          </Link>

            <button onClick={handleChangeTheme}><i className="fa-solid fa-moon text-2xl"></i></button>

          </nav>

          <form className="flex px-4">
              <input className="form-control me-2 dark:bg-zinc-800 dark:text-white" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>

      </header>

      <div className='bg-slate-100 dark:bg-stone-950 pt-4 dark:text-white'>

        <Content/>

      </div>

    </>
  )
}

export default App