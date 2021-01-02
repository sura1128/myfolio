import React, {Component} from 'react';
import MainDisplay from './MainDisplay.js';
import Cover from './Cover.js';
import { pages } from './Pages.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../styles/App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: pages,
            page_id: 'About',
            btn_bg: 'btn btn-light btn-sm'
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(event) {
        event.preventDefault();
        this.setState({
            displays: pages,
            page_id: event.target.id,
            btn_bg: 'btn btn-dark btn-sm'
        });
    }
    render() {
        const filtered_displays = this.state.displays.filter((display) => {
            return display.name.toLowerCase().includes(this.state.page_id.toLowerCase())
        });
        // className="btn btn-light btn-sm" 
        return (
            <div>
                <Cover />
                <div className="menu">
                    <Nav className="justify-content-center" variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link className="btn btn-light btn-sm" href="/home" id="about" onClick={this.onButtonClick}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="btn btn-light btn-sm" id="frontend" eventKey="link-1" onClick={this.onButtonClick}>Front-end</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="btn btn-light btn-sm" id="uresearch" eventKey="link-2" onClick={this.onButtonClick}>UX Research</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="btn btn-light btn-sm" id="interaction" eventKey="link-3" onClick={this.onButtonClick}>Interaction Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="btn btn-light btn-sm" id="contact" eventKey="link-4" onClick={this.onButtonClick}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <MainDisplay filtered_displays={filtered_displays}/>
            </div>
        );
    }
}

export default App;