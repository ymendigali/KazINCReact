import React from 'react';
import styles from '../styles/Stats.module.css';

const StatsSection = () => {
  const stats = [
    {
      title: 'ПРОЕКТЫ',
      icon: '⚙️',
      details: [
        { value: '10000', unit: 'грантов' },
        { value: '9500', unit: 'программы по частным заказам' },
        { value: '300', unit: 'воздействий договора' },
        { value: '2500', unit: 'коммерциализация' },
      ],
      isSmall: false,
    },
    {
      title: 'ПУБЛИКАЦИИ',
      icon: '📄',
      details: [{ value: '10 000', unit: 'Scopus', isBig: true }],
      isSmall: false,
    },
    {
      title: 'ЛЮДИ',
      icon: '👥',
      details: [
        { value: '10000', unit: 'доцентов' },
        { value: '9102', unit: 'профессоров' },
        { value: '300', unit: 'ассоциированных профессоров' },
        { value: '18-50', unit: 'средний возраст' },
      ],
      isSmall: false,
    },
    {
      title: 'ФИНАНСЫ',
      icon: '💰',
      details: [{ value: '930', unit: 'млрд. тенге', isBig: true }],
      isSmall: false,
    },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.cardTitle}>
            <span className={styles.icon}>{stat.icon}</span>
            {stat.title}
          </div>
          <div className={styles.numbers}>
            {stat.details.map((detail, dIndex) => (
              <div key={dIndex} className={styles.numberItem}>
                <span
                  className={
                    detail.isBig ? styles.publicationValue : styles.value
                  }
                >
                  {detail.value}
                </span>
                <span className={styles.unit}>{detail.unit}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;