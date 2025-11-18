import React from 'react';
import styles from '../styles/SkillCard.module.css';

const SkillCard = ({ title, description, imagePath }) => {
    return (
        <div className={styles.skillCard}>
            {/* 이미지 영역 */}
            {imagePath ? (
                <div className={styles.imageContainer}>
                    <img 
                        src={imagePath} 
                        alt={`${title} 로고`} 
                        className={styles.skillImage} 
                    />
                </div>
            ) : (
                <div className={styles.placeholderImage}>
                    {title}
                </div>
            )}
            
            {/* 텍스트 컨텐츠 영역 */}
            <div className={styles.skillContent}>
                <h4 className={styles.skillTitle}>{title}</h4>
                <p className={styles.skillDescription}>{description}</p>
            </div>
        </div>
    );
};

export default SkillCard;