import React from 'react';
import portfolioPic1 from './portfoliopic1.jpg'

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>
                This is the home page of my portfolio website. Here, you can learn more
                about my skills, projects, and hobbies.
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
            <img src={portfolioPic1} alt="Portfolio Pic" style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
            </div>
            <div style={{ marginLeft: '20px' }}>
            <h2>About Me</h2>
            <p>My name is Dahlia James and I am 20 years old</p>
            </div>
        </div>
        </div>
    );
};

export default Home;
