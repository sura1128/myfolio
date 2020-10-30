import React from 'react';
import './App.css'

const Card = (props) => {
    const {name, desc, id, link} = props;
    return (
        <div class="proj">
            <div class="desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos nulla laudantium enim minus eaque fugiat animi non velit aut similique mollitia maxime distinctio sint excepturi, adipisci iste magnam porro!</div>
            <img src="portfolio.jpg"/>
        </div>
    )
}

export default Card;