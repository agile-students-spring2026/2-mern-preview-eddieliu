import React, { useState, useEffect } from 'react';
import "./AboutUs.css";

const AboutUs = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5002/about-us")
            .then(response => response.json())
            .then(result => {
                console.log("About Us Data:", result);
                setData(result);
            })
            .catch(error => {
                console.error("Error fetching About Us data:", error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="about-us">
            <h1>{data.title}</h1>
            <img id="EddieLiuPhoto" src={data.imgUrl} alt={data.imgAlt} />
            <h3 id="EddieLiuName">{data.name}</h3>
            <p id="EddieLiuBio">{data.bio}</p>
            <p id="EddieLiuHobbies">{data.hobbies}</p>
        </div>
    );
}

export default AboutUs;