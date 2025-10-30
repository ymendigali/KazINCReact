import React from 'react';
import styles from '../styles/EcpConfirmationPage.module.css';

function EcpConfirmationPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Белый блок по центру */}
      <div className={styles.contentBox}>
        
        {/* Заголовок */}
        <h2 className={styles.title}>Подтверждение с помощью ключа ЭЦП</h2>
        
        {/* Кнопка выбора сертификата */}
        <button className={styles.primaryButton}>
          Выбрать сертификат
        </button>
        
        {/* Ссылка на альтернативный вход */}
        <a href="/login" className={styles.secondaryLink}>
          Войти через другую учетную запись
        </a>
      </div>
      
      <p className={styles.copyrightText}>
        Copyright © 2022 Lorem All rights reserved
      </p>
    </div>
  );
}

export default EcpConfirmationPage;