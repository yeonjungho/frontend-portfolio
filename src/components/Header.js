// src/components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Jungho's Portfolio</div>
            <nav className={styles.nav}>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About me</a>
                <a href="#skill" onClick={(e) => { e.preventDefault(); scrollToSection('skill'); }}>Skill</a>
                <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>Project</a>
            </nav>
        </header>
    );
};

export default Header;