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

  //   const stats = [
  //   {
  //     icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
  //     title: "ПРОЕКТЫ",
  //     items: [
  //       { value: "10 000", label: "ГРАНТОВ" },
  //       { value: "9 500", label: "ПРОГРАММЫ ПО ЧАСТНЫМ ЗАКАЗАМ" },
  //       { value: "300", label: "ХОЗЯЙСТВЕННЫЕ ДОГОВОРА" },
  //       { value: "2 500", label: "КОММЕРЦИАЛИЗАЦИЯ" },
  //     ],
  //   },
  //   {
  //     icon: <FileText className="w-10 h-10 text-blue-600" />,
  //     title: "ПУБЛИКАЦИИ",
  //     items: [{ value: "10 000", label: "Scopus" }],
  //   },
  //   {
  //     icon: <Users className="w-10 h-10 text-blue-600" />,
  //     title: "ЛЮДИ",
  //     items: [
  //       { value: "10 000", label: "ДОЦЕНТОВ" },
  //       { value: "9 102", label: "ПРОФЕССОРОВ" },
  //       { value: "300", label: "АССОЦИИРОВАННЫХ ПРОФЕССОРОВ" },
  //       { value: "18–50", label: "СРЕДНИЙ ВОЗРАСТ" },
  //     ],
  //   },
  //   {
  //     icon: <DollarSign className="w-10 h-10 text-blue-600" />,
  //     title: "ФИНАНСЫ",
  //     items: [{ value: "930", label: "млрд. тенге" }],
  //   },
  // ];

  // return (
  //   <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-blue-200 p-8 grid md:grid-cols-2 gap-10 text-center">
  //     {stats.map((section, index) => (
  //       <div key={index} className="flex flex-col items-center gap-4">
  //         <div className="bg-blue-100 p-4 rounded-2xl">{section.icon}</div>
  //         <h2 className="text-xl font-bold text-black">{section.title}</h2>
  //         <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-2">
  //           {section.items.map((item, i) => (
  //             <div key={i} className="text-center">
  //               <p className="text-2xl font-bold text-blue-700">{item.value}</p>
  //               <p className="text-sm text-gray-600 uppercase leading-tight">
  //                 {item.label}
  //               </p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     ))}

  //     <div className="col-span-full text-center text-gray-500 text-sm mt-6">
  //       Copyright © 2022 Lorem All rights reserved
  //     </div>
  //   </div>
  // );

};



export default StatsSection;