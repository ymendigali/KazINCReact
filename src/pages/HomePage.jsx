import React from 'react';
import styles from '../styles/App.module.css';
import Header from '../components/Header';
import MapSection from '../components/MapSection';
import StatsSection from '../components/StatsSection';


const HomePage = ({ isLoggedIn }) => {
    return (
        <>
            {/* Секция карты: фон на 100%, но контент внутри с отступом */}
            <MapSection /> 
            
            {/* Общий контейнер для статистики */}
            <div className={styles.contentWrapper}> 
                <StatsSection /> 
            </div>
        </>
    );
};


export default HomePage;