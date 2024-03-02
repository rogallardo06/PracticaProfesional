import AspirantsPage from "./AspirantsPage/AspirantsPage"
import Home from "./Home/Home";
import ProfessionsPage from "./ProfessionsPage/ProfessionsPage";
import ApplyPage from "./ApplyPage/ApplyPage";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Content() {

    return (
        <section >
            <Routes>
                <Route path="/" exact={true} Component={Home}/>
                <Route path="/aspirants" exact={true} Component={AspirantsPage}/>
                <Route path="/professions" exact={true} Component={ProfessionsPage}/>
                <Route path="/apply" exact={true} Component={ApplyPage}/>
            </Routes>
        </section>
    )
}

export default Content;