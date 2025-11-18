import React from 'react';
import SkillCard from './SkillCard'; //
import styles from '../styles/SkillSection.module.css';
import sectionStyles from '../styles/Section.module.css';

// 스킬 데이터를 배열로 정의 (기존 데이터 유지)
const skillsData = [
    { title: 'Java', description: 'JDBC 개념 이해 및 데이터베이스 연동, 간단한 투표 앱 구현.', imagePath: '/자바.png' },
    { title: 'Python', description: '파이썬의 동작 구조 이해 및 AI 챗봇 개발에 사용', imagePath: '/파이썬.png' },
    { title: 'MySQL', description: '프론트엔드, 백엔드와 데이터베이스 연결 및 쿼리 작성 가능', imagePath: '/mysql.png' },
    { title: 'React', description: '학기 중 간단한 프로젝트를 React를 사용하여 구현', imagePath: '/react.png' },
    { title: 'JavaScript', description: 'HTML, CSS 기본 동작 구조 이해 및 적용가능', imagePath: '/자바스크립트.png' }, 
    { title: 'jsp', description: 'servelet을 사용하여 일기장 구현', imagePath: '/jsp.png' }  
];

const SkillSection = () => {
    return (
        <section className={sectionStyles.sectionContainer} id="skill"> 
            <div className={sectionStyles.contentWrapper}> 
                <h2 className={sectionStyles.sectionTitle}>Skills</h2>
                <div className={styles.skillGrid}>
                    {skillsData.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            title={skill.title} 
                            description={skill.description}
                            imagePath={skill.imagePath} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;