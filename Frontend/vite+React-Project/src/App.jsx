import { useEffect, useState } from 'react';
import Content from './Components/Content/Content'

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

        <div className="container-fluid pb-3 dark:bg-neutral-900 dark:text-white">

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

            <button onClick={handleChangeTheme}><i className="fa-solid fa-moon"></i></button>

          </nav>

          <form className="flex">
              <input className="form-control me-2 dark:bg-zinc-800 dark:text-white" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>

      </header>

      <div className='bg-slate-100 dark:bg-stone-950 dark:text-white'>

        <h2 className="text-3xl text-center font-bold pl-4 pr-4">Search and selection</h2>
        <p className="text-center pl-4 pr-4">We find talent for your company, in all administrative, professional and technical positions.</p>

        <img className="w-full pt-4 pb-4 sm:pl-16 sm:pr-16 md:px-40" src="./images/banner.jpg" alt="Rcursos Humanos"/>

        <Content/>

      </div>

    </>
  )
}

export default App