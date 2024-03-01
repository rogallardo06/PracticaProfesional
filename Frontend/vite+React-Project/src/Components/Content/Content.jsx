import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import Row from "./Row/Row";

function Content() {

    const [aspirant, setAspirant] = useState();
    const [professions, setProfessions] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getAspirants() {
            let response = await fetch("http://localhost:3000/api/aspirants");
            let data = await response.json();
            setAspirant(data.data)
        };
        async function getProfessions() {
            let response = await fetch("http://localhost:3000/api/professions");
            let data = await response.json();
            setProfessions(data.data)
            setIsLoading(false)
        };

        getAspirants()
        getProfessions()
    }, [])
    return (
        <section >

            {!isLoading ? (<>
            <h2 className="text-3xl text-center font-bold pl-4 pr-4">Search and selection</h2>
			<p className="text-center pl-4 pr-4">We find talent for your company, in all administrative, professional and technical positions.</p>

			<img className="w-full pt-4 pb-4 sm:pl-16 sm:pr-16 md:pl-32 md:pr-32" src="./images/banner.jpg" alt="Rcursos Humanos"/>
				
            <div className="d-flex flex-wrap mt-5">
                {Array.isArray(aspirant) && aspirant.map((aspirante, i) => <Card key={i + aspirante.name} imagen={aspirante.image} nombre={aspirante.name} apellido={aspirante.surname} />)}
            </div>
            <div className="container list-group pe-0">
                <a href="#" className="list-group-item bg-dark text-white">Listado de Profesiones</a>
                {Array.isArray(professions) && professions.map((profession, i) => <Row key={i + profession.name} nombre={profession.name} />)}
            </div>
            </>) : 
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

        </section>
    )
}

export default Content;