// src/pages/LoginPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css'; // Создайте этот CSS файл

function LoginPage({ setIsLoggedIn }) { // 👈 Принимаем пропс
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        // 1. Устанавливаем состояние входа
        setIsLoggedIn(true); 
        
        // 2. Перенаправляем на главную страницу
        navigate('/'); 
    };
  return (
    // Общий контейнер страницы (для центрирования белого блока)
    <div className={styles.pageContainer}>
        
        {/* Это основной белый блок с формой */}
        <div className={styles.loginFormBox}>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                
                {/* Email */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" placeholder="Введите ваш e-mail" className={styles.input} />
                </div>

                {/* Пароль */}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Пароль</label>
                    <input type="password" placeholder="Введите ваш пароль" className={styles.input} />
                    <a href="/forgot-password" className={styles.resetPasswordLink}>Сбросить ваш пароль</a>
                </div>
                
                {/* Опции: Запомнить меня + Забыли пароль */}
                <div className={styles.optionsRow}>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="remember" className={styles.checkbox} />
                        <label htmlFor="remember">Запомнить меня</label>
                    </div>
                    <a href="/forgot-password" className={styles.forgotPassword}>Забыли пароль?</a>
                </div>

                {/* Соглашение */}
                <p className={styles.agreementText}>
                    Нажимая кнопку "Войти", я соглашаюсь с политикой 
                    конфиденциальности и обработки персональных данных.
                </p>

                {/* Кнопки */}
                <button type="submit" className={styles.primaryButton}>
                    Войти
                </button>
                <Link to="/register" className={styles.secondaryLink}>
                    Зарегистрироваться
                </Link>
            </form>
            
        </div>
        
        {/* Футер/копирайт */}
        <p className={styles.copyrightText}>
            Copyright © 2022 Lorem All rights reserved
        </p>
    </div>
  );
}

export default LoginPage;