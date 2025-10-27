import React from 'react';
import styles from '../styles/Map.module.css';

const regions = [
  'Label 1',
  'Label 2',
  'Label 3',
  'Label 4',
  'Label 5',
  'Label 6',
  'Label 7',
  'Label 8',
  'Label 9',
  'Label 10',
];

const SidebarFilter = ({ title }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterHeader}>{title}</div>
      {regions.map((label, index) => (
        <div key={index} className={styles.checkboxItem}>
          <input type="checkbox" id={`label-${index}`} name={label} />
          <label htmlFor={`label-${index}`}>{label}</label>
        </div>
      ))}
      <div className={styles.filterButtons}>
        <button className={`${styles.button} ${styles.clearButton}`}>
          Очистить
        </button>
        <button className={`${styles.button} ${styles.addButton}`}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;