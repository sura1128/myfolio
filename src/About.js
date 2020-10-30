import React from 'react';
import './App.css';
import './profile_pic.jpg'

const AboutCard = (props) => {
    return (
        <div class="about">
            <img src={require("./profile_pic.jpg")} alt="Image from Unsplash."></img>
            <div class="info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos nulla laudantium enim minus eaque fugiat animi non velit aut similique mollitia maxime distinctio sint excepturi, adipisci iste magnam porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos nulla laudantium enim minus eaque fugiat animi non velit aut similique mollitia maxime distinctio sint excepturi, adipisci iste magnam porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos nulla laudantium enim minus eaque fugiat animi non velit aut similique mollitia maxime distinctio sint excepturi, adipisci iste magnam porro! </div>
        </div>
    )
}

export default AboutCard;
