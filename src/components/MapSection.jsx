import React from 'react';
import styles from '../styles/Map.module.css';
import SidebarFilter from './SidebarFilter';
import { useLocation } from 'react-router-dom';

const MapSection = () => {
  const location = useLocation();
  // Проверяем, находится ли пользователь на странице с открытым фильтром
  const isFilterOpen = location.pathname === '/filter';

  // В этом месте должен быть компонент SVG-карты Казахстана.
  // Для простоты я использую заглушку.
  const KazakhstanMapPlaceholder = () => (
    <div style={{ padding: '100px', textAlign: 'center', color: '#fff', fontSize: '1.5rem', border: '1px dashed #fff' }}>
            МЕСТО ДЛЯ SVG КАРТЫ КАЗАХСТАНА
    </div>
  );

  return (
    <div className={styles.mapSection}>
      <div className={styles.container}>
        {isFilterOpen && (
          <div className={styles.filterLayout}>
            {/* Имитация выпадающего меню сбоку */}
            <SidebarFilter title="НАПРАВЛЕНИЕ" />
          </div>
        )}
        <div className={styles.mapContainer}>
          <KazakhstanMapPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default MapSection;