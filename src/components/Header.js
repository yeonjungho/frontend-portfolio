import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

   
    const handlePrint = (e) => {
        e.preventDefault();
        window.print();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>jungho's portfolio</div>
            <nav className={styles.nav}>
                 <a href="#!" onClick={handlePrint} className={styles.printLink}>Print</a> 
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About me</a>
         
         
               
                
                <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Introduction</a> 
                
                <a href="#skill" onClick={(e) => { e.preventDefault(); scrollToSection('skill'); }}>Skill</a>
                <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}>Project</a>
            </nav>
        </header>
    );
};

export default Header;