import "./about.css";
import CV from "../../assets/CV (Anonymized).pdf";
import Info from "../info/info";
import Skills from "../skills/skills";
export default function About(){
    return(
        <section className="about section" id = "about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle"></span>
            <div className="about__container container grid">
              
                <div className="about__data">
                    <Info/>
                    <p className="about__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nulla elementum porttitor dui ac condimentum. 
                    Duis sed luctus dui. Morbi vitae accumsan nibh. 
                    Sed ultricies ipsum nunc, ac accumsan massa vulputate in. </p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
                    
                </div>
            </div>
            <Skills/>
        </section>
    )
}