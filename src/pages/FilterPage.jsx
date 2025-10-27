import React from 'react';
import styles from '../styles/App.module.css';
import Header from '../components/Header';
import MapSection from '../components/MapSection';
import StatsSection from '../components/StatsSection';

const FilterPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        {/* MapSection содержит логику для отображения SidebarFilter на этом маршруте */}
        <MapSection /> 
        <div className={styles.container}>
          <StatsSection />
        </div>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem', color: '#777' }}>
        Copyright ® 2025 Lorem All Rights Reserved
      </footer>
    </div>
  );
};

export default FilterPage;