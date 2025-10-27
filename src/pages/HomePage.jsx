import React from 'react';
import styles from '../styles/App.module.css';
import Header from '../components/Header';
import MapSection from '../components/MapSection';
import StatsSection from '../components/StatsSection';

const HomePage = ({ view }) => {
  let content;

  if (view === 'desktop-5') {
    // Стиль Desktop-5: Заголовок "Главная", только секция с картой и "Финансы"
    content = (
      <>
        <h1 className={styles.h1}>Главная</h1>
        <div className={styles.mapSection}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px', backgroundColor: '#173f8b', color: '#fff' }}>
            {/* Имитация блока Финансы и Карта */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '3rem', margin: 0 }}>Финансы</h2>
              <h2 style={{ fontSize: '5rem', margin: 0, fontWeight: 'bold' }}>185 млрд. тг</h2>
            </div>
            <div style={{ flex: 2, textAlign: 'center' }}>
                            МЕСТО ДЛЯ SVG КАРТЫ КАЗАХСТАНА
            </div>
          </div>
        </div>
        <div style={{ padding: '40px 0' }}>
          <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '2rem', marginRight: '15px', color: '#173f8b', backgroundColor: '#e6e6fa', padding: '10px', borderRadius: '50%' }}>
                ⚙️
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#173f8b' }}>ПРОЕКТЫ</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Стиль Desktop-1
    content = (
      <>
        <MapSection />
        <div className={styles.container}>
          <StatsSection />
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>{content}</div>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem', color: '#777' }}>
        Copyright ® 2025 Lorem All Rights Reserved
      </footer>
    </div>
  );
};

export default HomePage;