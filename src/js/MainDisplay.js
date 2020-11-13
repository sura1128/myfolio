import React from 'react';
import '../styles/App.css'

const About = ({params}) => {
    return (
        <div className="about">
            <div></div>
            <img src={require("../images/profile_pic.jpg")} alt="Image from Unsplash."></img>
            <div className="info">{params.desc}</div>
            <div></div>
        </div>
    )
}

const MainDisplay = ({filtered_displays}) => {
    console.log(filtered_displays)
    if (filtered_displays[0].name.toLowerCase() === "about") {
        let params = {'desc': filtered_displays[0].description}
        return (
            <About params={params}/>
        )
    }
}

export default MainDisplay;
