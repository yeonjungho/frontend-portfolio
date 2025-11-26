
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from '../styles/ProjectSection.module.css';
import sectionStyles from '../styles/Section.module.css';


const projectData = [
    { 
        title: 'localit-지역소식알림', 
        description: '지역축제,관광,뉴스 등 지역정보를 통합하여 제공하는 지역소식지어플입니다.', 
        imagePath: ['/로컬잇1.png','/로컬잇지도.png','/로컬잇2.png','/로컬잇3.png','/로컬잇4.png','/로컬잇5.png'], 
        linkText: '프로젝트 상세보기',
        detailedDescription: `본 프로젝트 목적은 지역 축제부터 지역 소식까지, 우리 동네의 모든 정보를 한눈에 확인할 수 있는 디지털 소식지 역할을 합니다. 지역 주민과 관광객에게 유용하고 실질적인 정보를 제공하며, 지역 소멸 및 정보 단절문제를 해결하기 위한 애플리케이션입니다.
- 주요 기능: 지역 축제/행사, 지역 관광지/명소, 지역 뉴스 제공.
- 사용 스택: Android Studio, Firebase.
- 개발 경험: Android Studio와 Firebase를 이용하여 프론트와 백엔드를 통합하여 빠르고 효율적이게 진행하였습니다. 대부분 백엔드를 전담하여 진행하였습니다. API연동과 데이터파싱, 등 기술을 사용했습니다.`,
    },
    { 
        title: '멍냥케어-ai챗봇', 
        description: '반려동물의 증상을 챗봇에 입력하면 ai가 분석하여 증상과 처치법 메뉴얼을 제공, 간단한 반려동물지식 제공', 
        imagePath: '/멍냥케어1.png', 
        linkText: '프로젝트 상세보기',
        detailedDescription: `멍냥케어는 AI 기반 반려동물 건강 상담 챗봇 서비스입니다.
- 기능: 증상 분석 및 응급처치 매뉴얼 제공, 기본적인 반려동물 지식 Q&A, 위치기반 가까운 병원 추천.
- 핵심 기술: Python의 자연어 처리(NLP)를 활용한 키워드 기반 증상 분류 모델 구축.`,
    },
    { 
        title: 'FitSweat-운동정보제공웹사이트', 
        description: '운동에 괸한 정보를 시연영상과 함께 제공,정보공유 게시판, 등 제공', 
        imagePath: ['p1.PNG','/p2.PNG','/p3.PNG'], 
        linkText: '프로젝트 상세보기',
        detailedDescription: `FitSweat은 사용자가 다양한 운동 정보를 쉽게 찾고 공유할 수 있는 웹사이트입니다.
- 콘텐츠: 전문 트레이너의 시연 영상 및 운동 가이드 제공.
- 커뮤니티: 회원 간 정보 공유 및 질의응답 게시판 운영.
- 사용 스택: React (프론트), Spring boot(백엔드), MySQL.`,
    },
    { 
        title: '나만의 일기장', 
        description: '간단히 자신의 하루를 돌아보는 나만의 일기장', 
        imagePath: ['/일기1.png','/일기2.png'], 
        linkText: '프로젝트 상세보기',
        detailedDescription: `나만의 일기장은 자신의 하루를 돌아보는 생각정리 일기장입낟.
- 콘텐츠: 일기쓰기.
- 사용 스택: JSP(servlet), MySQL.`,
    }
];

const ProjectSection = () => {
    return (
        <section className={sectionStyles.sectionContainer} id="project">
            <div className={sectionStyles.contentWrapper}>
                <h2 className={sectionStyles.sectionTitle}>Projects</h2>
                <div className={styles.projectGrid}>
                    {projectData.map((project, index) => (
                        
                        <div 
                            key={index}
                            style={{ 
                                animationDelay: `${0.1 * index}s`,
                                width: '100%'
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imagePath={project.imagePath} 
                                linkText={project.linkText}
                                detailedDescription={project.detailedDescription}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;