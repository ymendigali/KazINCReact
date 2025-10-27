import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {title} <span className={styles.dropdownArrow}>&#9660;</span>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {items.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;