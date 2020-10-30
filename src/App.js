import React, {Component} from 'react';
import AboutCard from './About.js';
import Menu from './Menu.js';
import Cover from './Cover.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class App extends Component {
    constructor() {
        super()
    }
    // onSearchChange = (event) => {
    //     // needs to be re-rendered
    //     this.setState({searchfield: event.target.value});
    // }
    render() {
        // const filteredProjs = this.state.projects.filter(projects => {
        //     return projects.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // });
        return (
            <div>
                <Cover />
                <Menu />
                {/* <SearchBox searchChange={this.onSearchChange} /> */}
                <AboutCard />
            </div>
        );
    }
}

export default App;