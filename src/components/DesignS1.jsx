import { Link } from "react-router-dom"
import images1 from "../imgfst.jpg"
import DesignS2 from "./DesignS2"
let DesignS1 =()=>{

    return(
        <div>
            <div id="S1body">
            <header>
            <div class="logo">ResumeBuilder</div>
                <nav>
                    
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
               <Link to='/resume'><button  className="btn">Try Now</button></Link>
                </nav>
                
            </header>
            <section className="sec123">

                <div className="containerS1">
                    <h3>Crafting Your Profeesional Journy</h3>
                    <h1>Elevate Your Career with our</h1>
                    <p>
                        Transfer your resume into a powerful that show case  your skill, experience and achivements.Our userfrriendly platform make it easy to create a polished and personalilised resume that.
                    </p>
                    
                </div>
                <div className="S1img"><img src={images1} alt="error"/></div> 

                <div>
                    
                </div>
            </section>
            </div>
            <DesignS2></DesignS2>
        </div>
    )
}
export default DesignS1