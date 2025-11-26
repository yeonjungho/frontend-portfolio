import React from 'react';
import styles from '../styles/AboutMe.module.css'; 

const IntroductionText = () => {
    
    const subtitleStyle = {
        fontSize: '1.5em',
        fontWeight: '700',
        color: '#1e3a8a',
        marginTop: '30px',
        marginBottom: '15px',
        borderLeft: '4px solid #3b82f6',
        paddingLeft: '10px'
    };

   
    const bodyStyle = {
        lineHeight: 1.8,
        fontSize: '1.05em',
        color: '#333',
        marginBottom: '30px'
    };

    return (
        <section id="intro" style={{ padding: '80px 0', backgroundColor: '#f7f9fc' }}>
            <div className={styles.contentWrapper} style={{ flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                
                <h2 style={{ fontSize: '2.5em', fontWeight: '800', marginBottom: '40px', color: '#1e3a8a', textAlign: 'center' }}>
                    개발자 지원 동기 및 역량
                </h2>
                
                <div style={{ 
                    maxWidth: '1000px', 
                    width: '90%', 
                    padding: '40px', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '12px', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}>
                    
                   
                    <h3 style={subtitleStyle}>1. 지원 동기: 책임감을 바탕으로 한 성장 의지</h3>
                    <p style={bodyStyle}>
                        저는 ‘내가 부족해서 남에게 피해 주는 것을 피하고 싶다’는 마음가짐으로 항상 책임감 있게 일해왔습니다. 함께 일하는 동료들에게 부담을 주지 않기 위해, 스스로 필요한 기술과 지식을 미리 학습하고 실무에 바로 투입되더라도 지장이 없도록 준비해왔습니다.
                        <br/><br/>
                        저는 단순히 주어진 업무를 수행하는 데 그치지 않고, 팀과 회사에 실질적인 도움이 되는 구성원이 되기 위해 꾸준히 제 역량을 가꾸고 있습니다. 새로운 환경이나 업무에도 두려움 없이 도전하며, 빠르게 적응할 수 있도록 적극적으로 질문하고 먼저 움직이는 자세를 갖추고자 노력합니다. 부족한 점은 인정하고 개선하려는 태도, 그리고 책임감을 바탕으로 맡은 일에 최선을 다하는 저의 자세가 귀사의 조직문화와 잘 맞을 것이라 생각하여 지원하게 되었습니다.
                    </p>

                    
                    <h3 style={subtitleStyle}>2. 대학 생활: 책임감과 협업을 통한 성장</h3>
                    <p style={bodyStyle}>
                        대학생활에서 배운 것은 책임감입니다. 맡은 일은 끝까지 책임지고 마무리하려고 최선을 다했습니다. 대학 시절 팀 프로젝트나 팀 과제를 진행할 때는 주로 팀장을 맡아 팀원 간 의견 조율, 일정 관리, 역할 분담 등 여러 업무를 책임감 있게 수행하며 프로젝트를 성공적으로 마칠 수 있었습니다.
                        <br/><br/>
                        특히 문제가 생겼을 때 회피하지 않고 해결 방안을 찾기 위해 먼저 나서고, 팀원들의 어려움을 함께 고민하며 실질적인 도움을 주려고 노력했습니다. 이러한 책임감으로 개발과정에서 맡은 일을 끝까지 마무리하고, 앞으로도 어떤 일이 주어지든 책임감을 바탕으로 성실히 임하겠습니다.
                        <br/><br/>
                        여러 프로젝트를 진행해보며 JAVA를 이용한 영화 리뷰 프로그램(DB 연동)을 통해 DB 동작 방식을 배웠고, 같은 시기에 진행한 JSP를 이용한 ‘나만의 일기장’ 프로젝트도 성공적으로 마쳤습니다.
                        가장 기억에 남고, 저의 기술적 능력과 협업 능력을 키울 수 있었던 프로젝트는 React와 Spring Boot, MySQL을 이용한 S/W Project였습니다. 이전까지 프로젝트 진행 경험이 부족하여 팀 구성부터 역할 분담, 개발 방향 설정까지 모든 것이 막막했지만, 팀원들과의 적극적인 소통을 통해 크고 작은 문제를 해결하며 협업 능력을 키울 수 있었습니다. 앞으로도 팀원들과 적극적으로 협업하고, 함께 성장하는 개발자로 발전해 나가겠습니다.
                    </p>

                    
                    <h3 style={subtitleStyle}>3. 주요 프로젝트 경험</h3>
                    <ul style={{ ...bodyStyle, listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}> 
                        <li style={{ marginBottom: '20px' }}>
                            1) localit-소식담다 지역소식지 (교내 해커톤)
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                지역 축제부터 지역 소식까지, 우리 동네의 모든 정보를 한눈에 확인할 수 있는 디지털 소식지입니다. 지역 소멸 및 정보 단절 문제 해결을 목표로 개발했습니다.
                            </span>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            2) 멍냥케어-반려동물 증상 분석 챗봇 (Start-up 프로젝트)
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                반려동물 증상 입력 시 챗봇이 분석해 의심 질병, 응급 정도, 처치법, 근처 동물병원을 안내하는 서비스입니다. 자연어 처리(NLP)와 위치 기반 서비스를 활용해 개발 중입니다.
                            </span>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            3) 시스템 분석 및 설계: 헬스장 회원 관리 시스템
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                헬스장 회원 정보 등록/관리 및 운동 콘텐츠 예약이 가능한 웹 시스템입니다. React와 Spring Boot를 사용하여 요구사항 분석과 UML 설계를 바탕으로 기능을 구현했습니다.
                            </span>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            4) FitSweat-운동 정보 제공 웹 페이지
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                맨몸운동, 웨이트, 스트레칭 등 카테고리별 운동 정보와 시연 영상 콘텐츠를 제공하는 웹사이트입니다.
                            </span>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            5) JAVA 프로그래밍: 영화 리뷰 어플리케이션
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                NetBeans와 Java Swing을 이용한 GUI 기반 앱으로, MySQL 연동을 통해 사용자가 댓글과 별점을 남길 수 있는 기능을 구현했습니다.
                            </span>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            6) JSP: 나만의 일기장 게시판 페이지
                            <br/>
                            <span style={{ color: '#6b7280', fontSize: '0.95em' }}>
                                JSP와 Servlet을 활용하여 로그인, 일기 작성/수정/삭제, 감정 태그 기능이 있는 웹 기반 일기장 게시판을 구현했습니다.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default IntroductionText;