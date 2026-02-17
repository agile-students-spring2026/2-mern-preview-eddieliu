import { Link } from "react-router-dom";
import "./AboutUs.css";
import EddieLiuPhoto from "./image/EddieLiuPhoto.jpg";

const AboutUs = (props) => {
    return (
        <>
            <h1>About Us</h1>
            <img id="EddieLiuPhoto" src={EddieLiuPhoto} alt="A photo of Eddie Liu"/>
            <h3 id="EddieLiuName">Eddie Liu</h3>
            <p id="EddieLiuBio">Eddie Liu is an AI & Backend Developer exploring agentic AI and rapid prototyping while continuing to grow his full-stack skills.</p>
            <p id="EddieLiuHobbies">When he's not staring at a terminal, he likes reading📚, working out💪, playing guitar🎸, or learning new languages🌍.</p>
        </>
    )
}

export default AboutUs;