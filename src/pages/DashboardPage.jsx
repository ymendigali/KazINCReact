// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MapSection from '../components/MapSection.jsx'; 
import styles from '../styles/DashboardPage.module.css';


const PlaceholderIcon = ({ iconName }) => {
    let emoji;
    switch (iconName) {
        case 'ПРОЕКТЫ': emoji = '💡'; break;
        case 'ПУБЛИКАЦИИ': emoji = '📄'; break;
        case 'СОТРУДНИКИ': emoji = '👥'; break;
        case 'ФИНАНСЫ': emoji = '💲'; break;
        default: emoji = '❓';
    }
    // Используем класс iconPlaceholder для стилизации иконки
    return <div className={styles.iconPlaceholder}>{emoji}</div>; 
};

// --- Вспомогательный компонент: Один кликабельный инфо-блок ---
const InfoBlock = ({ title, to, isActive }) => (
    // Используем Link и стилизуем его как блок
    <Link 
        to={to} 
        // Применяем класс activeBlock, если блок активен (например, если мы находимся на странице /projects)
        className={`${styles.infoBlock} ${isActive ? styles.activeBlock : ''}`}
    >
        <div className={styles.iconContainer}>
            <PlaceholderIcon iconName={title} />
        </div>
        <p className={styles.blockTitle}>{title}</p>
        
        {/* TODO: Здесь можно добавить дополнительную статистику, как на макете */}
        
    </Link>
);


function DashboardPage() {
    // В реальном приложении: const { pathname } = useLocation();
    // А пока — временно выделяем "ПРОЕКТЫ" как активный раздел
    const activeSection = 'ПРОЕКТЫ'; 

    return (
        <div className={styles.dashboardContainer}>
            
            {/* 1. Блок с картой и основными данными (MapSection) */}
            <div className={styles.mapSection}>
                <MapSection /> 
                <div className={styles.financeData}>
                    {/* Визуальная имитация данных из макета */}
                    <span className={styles.financeLabel}>Финансы</span>
                    <span className={styles.financeValue}>185 млрд. ТГ</span>
                </div>
            </div>

            {/* 2. Блоки "Проекты", "Публикации", "Сотрудники", "Финансы" */}
            <div className={styles.infoBlocksSection}>
                
                <InfoBlock 
                    title="ПРОЕКТЫ" 
                    to="/dashboard/projects"
                    isActive={activeSection === 'ПРОЕКТЫ'}
                />
                <InfoBlock 
                    title="ПУБЛИКАЦИИ" 
                    to="/dashboard/publications"
                    isActive={activeSection === 'ПУБЛИКАЦИИ'}
                />
                <InfoBlock 
                    title="СОТРУДНИКИ" 
                    to="/dashboard/employees"
                    isActive={activeSection === 'СОТРУДНИКИ'}
                />
                <InfoBlock 
                    title="ФИНАНСЫ" 
                    to="/dashboard/finance"
                    isActive={activeSection === 'ФИНАНСЫ'}
                />
                
            </div>
            
            <p className={styles.copyrightText}>
                Copyright © 2022 Lorem All rights reserved
            </p>
        </div>
    );
} 

export default DashboardPage;