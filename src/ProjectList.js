import React from 'react';
import Card from './Card';

const ProjectList = ({projects}) => {
    const projectArray = projects.map((user, i) => {
        return <Card 
        key={i} 
        id={projects[i].id} 
        name={projects[i].name} 
        desc={projects[i].description} 
        link={projects[i].link}/>
    }
    );
    return (
        <div>
            {projectArray}
        </div>
    );
}

export default ProjectList;