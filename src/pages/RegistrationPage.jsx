import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 👈 ДОБАВЛЯЕМ useNavigate
import styles from '../styles/RegistrationPage.module.css';

function RegistrationPage() {
    // 1. Инициализируем хук useNavigate
    const navigate = useNavigate(); 

    // 2. Определяем функцию-обработчик для отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Здесь должна быть логика валидации и отправки данных на сервер
        // ...
        
        // 3. После успешной имитации регистрации перенаправляем пользователя
        navigate('/ecp-confirm'); 
    };
  return (
    <div className={styles.pageContainer}>
      
      <div className={styles.registrationFormBox}>
        <form className={styles.form} onSubmit={handleSubmit}>            
            {/* Группа 1: Организация, Регион, Адрес */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Организация</h3>
                <div className={styles.inputGroupFull}> {/* Отдельный класс для поля на всю ширину */}
                    <input type="text" placeholder="Введите название организации" className={styles.inputFull} />
                </div>
                
                {/* Регион (3 выпадашки) */}
                <h3 className={styles.sectionTitle}>Регион</h3>
                <div className={styles.rowThree}> {/* Класс для 3-х колонок */}
                    <div className={styles.inputGroup}>
                        <select className={styles.select}>
                            <option>Выберите регион</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <select className={styles.select}>
                            <option>Выберите область</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <select className={styles.select}>
                            <option>Выберите город</option>
                        </select>
                    </div>
                </div>

                {/* Адрес (4 поля) */}
                <h3 className={styles.sectionTitle}>Адрес</h3>
                <div className={styles.rowFour}> {/* Класс для 4-х колонок */}
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Район" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Улица" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="№ Улица" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Почтовый Индекс" className={styles.input} />
                    </div>
                </div>
            </div>

            {/* Группа 2: Контактная информация (телефон, email, факс) */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Контактная информация</h3>
                <div className={styles.rowThree}>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Телефон" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Email" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Факс" className={styles.input} />
                    </div>
                </div>
            </div>
            
            {/* Группа 3: Информация о первом руководителе */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Информация о первом руководителе</h3>
                
                {/* Фамилия, Имя, Отчество (3 колонки) */}
                <div className={styles.rowThree}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Фамилия</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Имя</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Отчество</label>
                        <input type="text" className={styles.input} />
                    </div>
                </div>
                
                {/* ИИН, Должность (2 колонки) */}
                <div className={styles.rowTwo}> {/* Новый класс для 2-х колонок */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>ИИН</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Должность</label>
                        <input type="text" className={styles.input} />
                    </div>
                </div>
                
                {/* Контактная информация (3 телефона) */}
                <h3 className={styles.sectionTitle}>Контактная информация</h3>
                <div className={styles.rowThree}>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Основной телефон" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel"  placeholder="Сотовый телефон" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Городской телефон" className={styles.input} />
                    </div>
                </div>
            </div>

            {/* Группа 4: Email / Пароль (Авторизация) */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Email / Логин</h3>
                
                <div className={styles.inputGroupFull}>
                    <input type="email" placeholder="Введите ваш e-mail" className={styles.inputFull} />
                </div>
                
                <h3 className={styles.sectionTitle}>Пароль</h3>
                <div className={styles.inputGroupFull}>
                    <input type="password" placeholder="Задайте пароль" className={styles.inputFull} />
                </div>
                
                <h3 className={styles.sectionTitle}>Подтверждение пароля</h3>
                <div className={styles.inputGroupFull}>
                    <input type="password" placeholder="Повторите пароль" className={styles.inputFull} />
                </div>
            </div>

            {/* Соглашение и Кнопки */}
            <div className={styles.footerActions}>
                <div className={styles.agreementCheckbox}>
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">Я соглашаюсь с политикой конфиденциальности и обработки персональных данных.</label>
                </div>
                
                <button type="submit" className={styles.primaryButton}>
                    Зарегистрироваться
                </button>
                <Link to="/login" className={styles.secondaryLink}>
                    Войти
                </Link>
            </div>

        </form>
      </div>
      
    </div>
  );
}

export default RegistrationPage;