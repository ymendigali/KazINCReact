

// src/components/SidebarFilter.jsx
import React from 'react';
import styles from '../styles/SidebarFilter.module.css';

function FilterGroup({ title, children }) {
    return (
        <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>{title}</h4>
            {children}
        </div>
    );
}

function CheckboxOption({ label, checked, count }) {
    return (
        <label className={styles.checkboxLabel}>
            <input type="checkbox" checked={checked} readOnly className={styles.checkbox} />
            <span>{label}</span>
            {count !== undefined && <span className={styles.count}>{count}</span>}
        </label>
    );
}

function SidebarFilter() {
    return (
        <div className={styles.sidebar}>
            {/* 1. Фильтр по категориям (Заголовок) */}
            <div className={styles.filterHeader}>
                <span className={styles.filterHeaderText}>ФИЛЬТР по категориям</span>
                <span className={styles.filterIcon}>☰</span>
            </div>

            {/* 2. Возраст (Слайдер) */}
            <FilterGroup title="Возраст">
                <div className={styles.ageRange}>
                    <span>18 лет</span>
                    <span>45 лет</span>
                </div>
                {/* Заглушка для слайдера */}
                <div className={styles.sliderPlaceholder}></div>
            </FilterGroup>

            {/* 3. Академические степени */}
            <FilterGroup title="Академические степени 3/25 >">
                <CheckboxOption label="Профессор" checked={true} />
                <CheckboxOption label="Ассоциированный профессор" checked={true} />
                <CheckboxOption label="Доцент" checked={true} />
                <a href="#viewall" className={styles.viewAll}>Посмотреть все</a>
            </FilterGroup>

            {/* 4. Академические звания */}
            <FilterGroup title="Академические звания">
                <CheckboxOption label="Профессор" checked={false} />
                <CheckboxOption label="Ассоциированный профессор" checked={false} />
                <CheckboxOption label="Доцент" checked={false} />
            </FilterGroup>
            
            {/* 5. Аффилированность */}
            <FilterGroup title="Аффилированность">
                <CheckboxOption label="Штатный сотрудник" checked={false} count={5000} />
                <CheckboxOption label="Сторонний исполнитель" checked={false} count={250} />
            </FilterGroup>

            {/* 6. Департаменты и Отделы */}
            <FilterGroup title="Департаменты 0/25 >">
                {/* Пусто */}
            </FilterGroup>
            <FilterGroup title="Отделы 0/25 >">
                {/* Пусто */}
            </FilterGroup>

            {/* Кнопка Сортировать */}
            <button className={styles.sortButton}>Сортировать</button>
        </div>
    );
}

export default SidebarFilter;