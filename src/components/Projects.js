import React from 'react';
import jspproject from './jspproject.png'

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Check out some of my projects:</p>
            <ul>
                <li>Project 1 - Adventurelytical</li>
                <li>Project 2 - Library Management System</li>
                <img src={jspproject} />
                <li>Project 3 - College Sports Management System</li>
            </ul>
        </div>
    );
};

export default Projects;
