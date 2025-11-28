import React from 'react';
import styles from '../styles/AboutMe.module.css';
import sectionStyles from '../styles/Section.module.css'; 

const AboutMe = () => {
    const characterImagePath = '/증사1.jpeg'; 

    return (
        <section className={sectionStyles.sectionContainer} id="about">
            <div className={sectionStyles.contentWrapper}>
                <h2 className={sectionStyles.sectionTitle}>About me</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <img 
                            src={characterImagePath} 
                            alt="연정호 프로필 사진 " 
                            className={styles.characterImage} 
                        />
                    </div>
                    <div className={styles.introduction}>
                        <h3 className={styles.introTitle}>Frontend & Backend Developer</h3>
                        <p className={styles.introSummary}>
                            대학을 다니며 크고 작은 프로젝트의 경험으로 프론트 엔드와 백엔드, 데이터베이스에 대한 전반적인 지식을 가지고 있으며, 앞으로 팀원들과 소통하며 앞으로 나아가고 싶은 연정호입니다.
                        
                        </p>
                        <div className={styles.infoGrid}>
                            <p><span className={styles.label}>이름</span>: 연정호</p>
                            <p><span className={styles.label}>연락처</span>: 010-7518-9927</p>
                            <p><span className={styles.label}>이메일</span>: duswjdgh0617@naver.com</p>
                            <p><span className={styles.label}>학력</span>: 인하공업전문대학 졸업예정</p>
                            <p><span className={styles.label}>자격증</span>: 정보처리산업기사 필기</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;