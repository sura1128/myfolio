import React from 'react';
import './App.css'

const Card = (props) => {
    const {name, desc, id, link} = props;
    return (
        <div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="profilepic" src={`https://robohash.org/${id}?set=set4}`}/>
            <div>
                <h2> {name} </h2>
                {/* <p> {link} </p> */}
                <p className="b"> {desc} </p>
            </div>
        </div>
    )
}

export default Card;