import React, {Component} from 'react';
import MainDisplay from './MainDisplay.js';
import Cover from './Cover.js';
import { pages } from './Pages.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: pages,
            page_id: 'About'
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(event) {
        event.preventDefault();
        this.setState({
            displays: pages,
            page_id: event.target.id
        });
    }
    render() {
        const filtered_displays = this.state.displays.filter((display) => {
            return display.name.toLowerCase().includes(this.state.page_id.toLowerCase())
        });
        return (
            <div>
                <Cover />
                <div className="menu">
                    <ul>
                        <li> <button type="button" className="btn btn-dark btn-sm" id="about" onClick={this.onButtonClick}> About </button> </li>
                        <li> <button type="button" className="btn btn-light btn-sm"> Front-end </button> </li>
                        <li> <button type="button" className="btn btn-light btn-sm"> UX Research </button> </li>
                        <li> <button type="button" className="btn btn-light btn-sm"> Interaction Design </button> </li>
                        <li> <button type="button" className="btn btn-light btn-sm"> Art and Illustration </button> </li>
                        <li> <button type="button" className="btn btn-light btn-sm"> Contact </button> </li>
                    </ul>
                </div>
                <MainDisplay filtered_displays={filtered_displays}/>
            </div>
        );
    }
}

export default App;