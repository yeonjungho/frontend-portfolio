// src/App.js (이 파일은 직접 생성하셔야 합니다.)
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import './styles/global.css'; // 기본 스타일

const App = () => {
    return (
        <div className="portfolio-app">
            <Header />
            <main>
                <section id="about">
                    <AboutMe />
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