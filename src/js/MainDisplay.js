import React from 'react';
import Contact from './Contact.js';
import '../styles/App.css';
import '../images/fe_project1.png';


const About = ({params}) => {
    return (
        <div className="about">
            <div></div>
            <img className="profile_img" src={require("../images/profile_pic.jpg")} alt="Image from Unsplash."></img>
            <div className="info">{params.desc}</div>
            <div></div>
        </div>
    )
}

const ProjectLayout = ({params}) => {
    return (
        <div className="frontend_projects">
             <div className="project_parent">
                <img className="frontend_imgs" src={require("../images/fe_project1.png")} alt="Photo by matthew Feeney on Unsplash. Link: https://unsplash.com/photos/Nwkh-n6l25w"></img>
                <div className="project_title">{params.projects.p1.title}</div>
                <div className="project_subtitle">{params.projects.p1.subtitle}</div>
            </div>
            <div className="project_parent">
                <img className="frontend_imgs" src={require("../images/fe_project2.png")} alt="Photo by Amauri Mejía on Unsplash. Link: https://unsplash.com/photos/IhXrWDckZOQ"></img>
                <div className="project_title">{params.projects.p2.title}</div>
                <div className="project_subtitle">{params.projects.p2.subtitle}</div>
            </div>
            <div className="project_parent">
                <img className="frontend_imgs" src={require("../images/fe_project3.png")} alt="Photo by Miti on Unsplash. Link: https://unsplash.com/photos/DFtvglCPWjY"></img>
                <div className="project_title">{params.projects.p3.title}</div>
                <div className="project_subtitle">{params.projects.p3.subtitle}</div>
            </div>
        </div>
    )
}

const FrontEnd = ({params}) => {
    return (
        <ProjectLayout params={params}/>
    )
}

const UXResearch = ({params}) => {
    return (
        <ProjectLayout params={params}/>
    )
}

const InteractionDesign = ({params}) => {
    return (
        <ProjectLayout params={params}/>
    )
}


const MainDisplay = ({filtered_displays}) => {
    console.log(filtered_displays)
    if (filtered_displays[0].name.toLowerCase() === "about") {
        let params = {'desc': filtered_displays[0].description}
        return (
            <About params={params}/>
        )
    } else if (filtered_displays[0].name.toLowerCase() === "frontend") {
        let params = {'projects': filtered_displays[0].projects}
        return (
            <FrontEnd params={params}/>
        )
    } else if (filtered_displays[0].name.toLowerCase() === "uresearch") {
        let params = {'projects': filtered_displays[0].projects}
        return (
            <UXResearch params={params}/>
        )
    } else if (filtered_displays[0].name.toLowerCase() === "interaction") {
        let params = {'projects': filtered_displays[0].projects}
        return (
            <InteractionDesign params={params}/>
        )
    } else if (filtered_displays[0].name.toLowerCase() === "contact") {
        return (
            <Contact/>
        )
    }
}

export default MainDisplay;
