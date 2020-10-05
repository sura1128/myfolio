import React, {Component} from 'react';
import ProjectList from './ProjectList';
import { projects } from './projects'
import SearchBox from './SearchBox'
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            projects: projects,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render() {
        const filteredProjs = this.state.projects.filter(projects => {
            return projects.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className='tc'>
                <h1 className="f1"> SURANJANA SENGUPTA </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <ProjectList projects={filteredProjs}/>
            </div>
        );
    }
}

export default App;
