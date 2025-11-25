// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
// 💡 추가
import IntroductionText from './components/IntroductionText'; 
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
                
                {/* 💡 추가: AboutMe와 SkillSection 사이에 새로운 섹션 삽입 */}
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