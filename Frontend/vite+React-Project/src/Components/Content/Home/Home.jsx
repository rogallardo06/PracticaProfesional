import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Row from "../Row/Row";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    let sliderRef = useRef(null);

    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [aspirant, setAspirant] = useState();
    const [professions, setProfessions] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {

                const response = await Promise.all([
                    fetch("http://localhost:3000/api/aspirants"),
                    fetch("http://localhost:3000/api/professions"),
                ]);

                const [aspirantsData, professionsData] = await Promise.all(
                    response.map((res) => res.json())
                );

                setAspirant(aspirantsData.data);
                setProfessions(professionsData.data);
                setIsLoading(false)

            } catch (error) {

                console.error("Error fetching data:", error);

            }
        }

        fetchData();

    }, []);

    return (
        <>
            {!isLoading ? (<>

                <h2 className="text-3xl text-center font-bold px-4">Search and selection</h2>
                <p className="text-center pl-4 pr-4">We find talent for your company, in all administrative, professional and technical positions.</p>

                <img className="w-full pt-4 pb-4 sm:pl-16 sm:pr-16 md:px-40" src="./images/banner.jpg" alt="Rcursos Humanos"/>


                <div className="slider-container">

                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
        
                        {Array.isArray(aspirant) && aspirant.map((aspirante, i) => <Card 
                            key={i + aspirante.name}
                            imagen={aspirante.image}
                            nombre={aspirante.name}
                            apellido={aspirante.surname}
                        />)}

                    </Slider>

                    <div style={{ textAlign: "center" }}>
                        <button className="button" onClick={play}></button>
                        <button className="button" onClick={pause}></button>
                    </div>

                </div>

                <div class="mx-10 dark:bg-stone-600 border rounded-xl">
                    <a href="#" className="list-group-item p-2 bg-stone-900 text-white">List of Professions</a>
                    {Array.isArray(professions) && professions.map((profession,i) => <Row key={i + profession.name} nombre={profession.name}/>)}
                </div>

            </>)

            : 

            <div className="flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </>
    )
}

export default Home