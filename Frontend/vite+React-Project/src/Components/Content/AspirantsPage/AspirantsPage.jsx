import { useState, useEffect } from "react";
import Card from "../Card/Card";

function AspirantsPage() {
    
    const [aspirant, setAspirant] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getAspirants() {
            let response = await fetch("http://localhost:3000/api/aspirants");
            let data = await response.json();
            setAspirant(data.data)
            setIsLoading(false)
        };

        getAspirants()
    }, [])
    
    return (
        <>
            {!isLoading ? (<>
                <div className="d-flex flex-wrap">
                    {Array.isArray(aspirant) && aspirant.map((aspirante, i) => <Card key={i + aspirante.name} imagen={aspirante.image} nombre={aspirante.name} apellido={aspirante.surname} />)}
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

export default AspirantsPage