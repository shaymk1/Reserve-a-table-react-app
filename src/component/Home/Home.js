import "./home.css"
import {Outlet} from "react-router-dom"
import Hero from "../hero/Hero"
import Specials from "../specials/Specials";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About"

const Home =()=>{
    return (
        <div>
            Gae
            <Outlet/>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </div>
    )
}

export default Home