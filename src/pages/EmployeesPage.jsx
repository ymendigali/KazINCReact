// src/pages/EmployeesPage.jsx
import React from 'react';
// ✅ Используем специальный файл стилей для сотрудников
import styles from '../styles/EmployeesPage.module.css'; 
// Предполагаем, что SidebarFilter теперь импортируется корректно
// import SidebarFilter from '../components/SidebarFilter'; 

// Заглушка для данных сотрудников
const employeeData = [
    { id: 1, fio: "Акимов Руслан Болатович", age: 55, phone: "+7 777 245 22 55", email: "d.nugumanov@satbayev.university", icon: "📄" },
    { id: 2, fio: "Акимов Руслан Болатович", age: 55, phone: "+7 777 245 22 55", email: "d.nugumanov@satbayev.university", icon: "📄" },
    // ...
];

function EmployeesPage() {
    return (
        // Убираем max-width, чтобы контент занимал всю доступную ширину под хедером
        <div className={styles.pageContainer}> 
            <div className={styles.contentWrapper}>
                
                {/* 1. ЛЕВАЯ ПАНЕЛЬ С ФИЛЬТРАМИ */}
                {/* <SidebarFilter /> */}
                
                {/* 2. ПРАВАЯ ОСНОВНАЯ ЧАСТЬ */}
                <div className={styles.mainContent}>
                    
                    {/* Заголовок и кнопка "Добавить сотрудника" */}
                    <header className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>Сотрудники</h1>
                        <button className={styles.primaryButton}>
                            Добавить сотрудника
                        </button>
                    </header>
                    
                    {/* Статистика и Фильтр над таблицей */}
                    <div className={styles.statsRow}>
                        <span className={styles.foundText}>Найдено сотрудников: **520**</span>
                        
                        <div className={styles.dropdownsRight}>
                            <span className={styles.filterLabel}>Фильтр по категориям</span>
                            {/* Здесь в макете стоит иконка фильтра,
                                но мы оставим это как есть, пока не дойдем до иконок. */}
                        </div>
                    </div>
                    
                    {/* HTML-Таблица */}
                    <div className={styles.tableWrapper}>
                        <table className={styles.dataGrid}>
                            <thead>
                                <tr>
                                    <th className={styles.columnNum}>#</th>
                                    <th className={styles.columnFio}>ФИО сотрудника</th>
                                    <th className={styles.columnAge}>Возраст</th>
                                    <th className={styles.columnPhone}>Контактный телефон</th>
                                    <th className={styles.columnEmail}>Корпоративный Email</th>
                                    <th className={styles.columnDoc}></th> 
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData.map((employee, index) => (
                                    <tr key={employee.id}>
                                        <td>{index + 1}</td>
                                        <td className={styles.linkText}>{employee.fio}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.icon}</td> 
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className={styles.paginationFooter}>
                                <tr>
                                    <td colSpan="6">
                                        <div className={styles.pagination}>
                                            <a href="#page1" className={styles.activePage}>1</a>
                                            <a href="#page2">2</a>
                                            <a href="#page3">3</a>
                                            <a href="#page4">4</a>
                                            <a href="#page5">5</a>
                                            <a href="#page6">6</a>
                                            <a href="#page7">7</a>
                                            <a href="#page8">8</a>
                                            <a href="#page9">9</a>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            
            <p className={styles.copyrightText}>
                Copyright © 2022 Lorem All rights reserved
            </p>
        </div>
    );
}

export default EmployeesPage;