// src/components/ProjectTable.jsx
import React from 'react';
import tableStyles from '../styles/Table.module.css'; // Создайте этот CSS файл

const mockData = [
    { id: 1, name: 'Тест проект 43', number: 5365, date: '15/08/2022', status: 'Завершен', contractor: 'ТОО "Лест"' },
    { id: 2, name: 'Тест проект 43', number: 6578, date: '15/08/2022', status: 'Просрочен', contractor: 'ТОО "Нуртан"' },
    { id: 3, name: 'Тест проект 1', number: 578, date: '20/10/2022', status: 'В работе', contractor: 'ТОО "Нуртан"' },
    // ... можно добавить больше данных
];

const StatusBadge = ({ status }) => {
    let className;
    if (status === 'Завершен') className = tableStyles.statusSuccess;
    else if (status === 'Просрочен') className = tableStyles.statusDanger;
    else className = tableStyles.statusInfo;
    
    return <span className={`${tableStyles.statusBadge} ${className}`}>{status}</span>;
};

function ProjectTable() {
    return (
        <table className={tableStyles.projectTable}>
            <thead>
                <tr>
                    <th className={tableStyles.headerNum}>#</th>
                    <th>Название проекта</th>
                    <th>№ договора</th>
                    <th>Начало договора</th>
                    <th>Завершение договора</th>
                    <th>Заказчик</th>
                    <th className={tableStyles.headerStatus}>Статус</th>
                    <th className={tableStyles.headerActions}></th>
                </tr>
            </thead>
            <tbody>
                {mockData.map(item => (
                    <tr key={item.id} className={item.id % 2 !== 0 ? tableStyles.oddRow : ''}>
                        <td className={tableStyles.cellNum}>{item.id}</td>
                        <td className={tableStyles.link}>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.date}</td>
                        <td>{item.date}</td>
                        <td>{item.contractor}</td>
                        <td><StatusBadge status={item.status} /></td>
                        <td className={tableStyles.cellActions}>
                            {/* Имитация иконок действий */}
                            <span>👁️</span>
                            <span>✏️</span>
                            <span>📄</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProjectTable;