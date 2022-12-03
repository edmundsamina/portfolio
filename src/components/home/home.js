import './home.css'
import Data from '../data/data'


export default function Home(){
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className = "home_content grid">
                    <div className="home_image">     
                    </div>
                    <Data/>
                </div>
            </div>
        </section>
    )
}