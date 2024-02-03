import React from 'react';
import resumeThumbnail from './resume-thumbnail.png';

const Skills = () => {
    const pdfFile = `${process.env.PUBLIC_URL}/Dahlia_James_Resume.pdf`;

    return (
        <div>
            <h1>Skills</h1>
            <p>Here are some of my skills:</p>
            <ul>
                <li>Web Development</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Java </li>
                <li>Linux </li>
                <li>C# </li>

            </ul>
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                <img src={resumeThumbnail} alt="Resume Thumbnail" style={{ maxWidth: '300px', maxHeight: '300px' }} />
            </a>
        </div>
    );
};

export default Skills;
