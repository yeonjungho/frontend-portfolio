// src/components/AboutMe.js
import React from 'react';
import styles from '../styles/AboutMe.module.css';
import sectionStyles from '../styles/Section.module.css'; // 공통 스타일 import

const AboutMe = () => {
    const characterImagePath = '/한교동.png'; 

    return (
        <section className={sectionStyles.sectionContainer} id="about">
            <div className={sectionStyles.contentWrapper}>
                <h2 className={sectionStyles.sectionTitle}>About me</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <img 
                            src={characterImagePath} 
                            alt="연정호 프로필 사진 (한교동)" 
                            className={styles.characterImage} 
                        />
                    </div>
                    <div className={styles.introduction}>
                        <h3 className={styles.introTitle}>Frontend & Backend Developer</h3>
                        <p className={styles.introSummary}>
                            새로운 기술에 대한 도전을 즐기며, 사용자 경험을 최적화하는 것에 흥미를 느낍니다. 
                        
                        </p>
                        <div className={styles.infoGrid}>
                            <p><span className={styles.label}>이름</span>: 연정호</p>
                            <p><span className={styles.label}>연락처</span>: 010-7518-9927</p>
                            <p><span className={styles.label}>이메일</span>: duswjdgh0617@naver.com</p>
                            <p><span className={styles.label}>학력</span>: 인하공업전문대학 졸업예정</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;