// src/pages/ProjectsPage.jsx
import React from 'react';
import styles from '../styles/ProjectsPage.module.css'; // Создайте этот CSS файл
import ProjectTable from '../components/ProjectTable.jsx'; // Создадим позже

function ProjectsPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                
                {/* Заголовок и статистика */}
                <div className={styles.headerRow}>
                    <h1 className={styles.pageTitle}>Проекты</h1>
                    <p className={styles.projectCount}>Найдено проектов: 1205</p>
                </div>
                
                {/* Кнопки действий */}
                <div className={styles.actionRow}>
                    <button className={`${styles.button} ${styles.exportButton}`}>
                        Экспорт данных
                    </button>
                    <button className={`${styles.button} ${styles.createButton}`}>
                        Создать проект
                    </button>
                </div>

                {/* Основная таблица с данными */}
                {/* Здесь будет компонент ProjectTable, имитирующий данные с макета */}
                <div className={styles.tableContainer}>
                    <ProjectTable /> 
                </div>

            </div>
            
            {/* Футер/копирайт (опционально, можно вынести в Layout) */}
            <p className={styles.copyrightText}>
                Copyright © 2022 Lorem All rights reserved
            </p>
        </div>
    );
}

export default ProjectsPage;