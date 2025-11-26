
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

import IntroductionText from './components/IntroductionText'; 
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import './styles/global.css'; 

const App = () => {
    return (
        <div className="portfolio-app">
            <Header />
            <main>
                <section id="about">
                    <AboutMe />
                </section>
                
                
                <section id="intro">
                    <IntroductionText /> 
                </section>
                
                <section id="skill">
                    <SkillSection />
                </section>
                <section id="project">
                    <ProjectSection />
                </section>
            </main>
        </div>
    );
};

export default App;