
import React, { useState } from 'react';
import styles from '../styles/ProjectCard.module.css'; 
import modalStyles from '../styles/Modal.module.css'; 

const ProjectCard = ({ title, description, imagePath, linkText, detailedDescription }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const imagePaths = Array.isArray(imagePath) ? imagePath : [imagePath];
    const thumbnailPath = imagePaths[0];
    const isPlaceholder = !thumbnailPath;

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
           
            <div className={styles.projectCard}>
                
                <div className={styles.imageContainer}>
                    {isPlaceholder ? (
                        <div className={styles.placeholderImage}>{title}</div>
                    ) : (
                        <img 
                            src={thumbnailPath} 
                            alt={`${title} 프로젝트 이미지`} 
                            className={styles.projectImage} 
                        />
                    )}
                </div>
                
                {/* 텍스트 컨텐츠 영역 */}
                <div className={styles.projectContent}>
                    <h4 className={styles.projectTitle}>{title}</h4>
                    <p className={styles.projectDescription}>{description}</p>
                    <a href="#!" onClick={openModal} className={styles.projectLink}>{linkText} →</a>
                </div>
            </div>

          
            {isModalOpen && (
                <div className={modalStyles.modalOverlay} onClick={closeModal}>
                    <div className={modalStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={modalStyles.closeButton} onClick={closeModal}>&times;</button>
                        
                        <h3 className={modalStyles.modalTitle}>{title}</h3>
                        
                        
                        {imagePaths.filter(path => path).length > 0 && ( 
                            <>
                                <h4 className={modalStyles.subtitle}>프로젝트 스크린샷</h4>
                                <div className={modalStyles.galleryWrapper}>
                                    {imagePaths.map((path, idx) => path && (
                                        <img 
                                            key={idx} 
                                            src={path} 
                                            alt={`스크린샷 ${idx + 1}`} 
                                            className={modalStyles.galleryImage}
                                        />
                                    ))}
                                </div>
                            </>
                        )}


                        <h4 className={modalStyles.subtitle}>프로젝트 개요</h4>
                        <p className={modalStyles.summary}>{description}</p>
                        
                        <h4 className={modalStyles.subtitle}>주요 내용 및 기술 스택</h4>
                        {/* 프로젝트별 부연 설명 표시 */}
                        <p className={modalStyles.detailText}>{detailedDescription}</p>

                       
                        
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;