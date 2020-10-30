import React from 'react';
import './App.css'

const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                <li> <button type="button" class="btn btn-light btn-sm"> About </button> </li>
                <li> <button type="button" class="btn btn-light btn-sm"> Front-end </button> </li>
                <li> <button type="button" class="btn btn-light btn-sm"> UX Research </button> </li>
                <li> <button type="button" class="btn btn-light btn-sm"> Interaction Design </button> </li>
                <li> <button type="button" class="btn btn-light btn-sm"> Art and Illustration </button> </li>
                <li> <button type="button" class="btn btn-light btn-sm"> Contact </button> </li>
            </ul>
        </div>
    )
}

export default Menu;