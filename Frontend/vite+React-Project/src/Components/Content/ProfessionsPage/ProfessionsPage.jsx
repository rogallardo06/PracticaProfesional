import { useState, useEffect } from "react";
import Row from "../Row/Row";

function ProfessionsPage() {
    
    const [professions, setProfessions] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        async function getProfessions() {
            let response = await fetch("http://localhost:3000/api/professions");
            let data = await response.json();
            setProfessions(data.data)
            setIsLoading(false)
        };

        getProfessions()
    }, [])

    return (
        <>
            {!isLoading ? (<>
                <div className="mx-10 dark:bg-stone-600 border rounded-xl">
                    <a href="#" className="list-group-item p-2 bg-stone-900 text-white">Listado de Profesiones</a>
                    {Array.isArray(professions) && professions.map((profession, i) => <Row key={i + profession.name} nombre={profession.name} />)}
                </div>
            </>) :
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
        </>
        )
}

export default ProfessionsPage