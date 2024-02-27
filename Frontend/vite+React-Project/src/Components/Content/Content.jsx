import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import Row from "./Row/Row";

function Content() {

    const [aspirant, setAspirant] = useState();
    const [professions, setProfessions] = useState();

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
        };

        getAspirants()
        getProfessions()
    }, [])
    return (
        <section >
            <div className="d-flex flex-wrap">
                {Array.isArray(aspirant) && aspirant.map((aspirante, i) => <Card key={i + aspirante.name} imagen={aspirante.image} nombre={aspirante.name} apellido={aspirante.surname} />)}
            </div>
            <div class="container list-group pe-0">
                <a href="#" className="list-group-item bg-dark text-white">Listado de Profesiones</a>
                {Array.isArray(professions) && professions.map((profession,i) => <Row key={i + profession.name} nombre={profession.name}/>)}
            </div>
        </section>
    )
}

export default Content;