import React from 'react';

const notices = [
    {
        id: 1,
        title: 'COVID-19 Vaccination Drive',
        date: '2024-06-10',
        description: 'Free COVID-19 vaccination available for all age groups. Visit our hospital between 9 AM to 5 PM.'
    },
    {
        id: 2,
        title: 'Blood Donation Camp',
        date: '2024-06-15',
        description: 'Join our blood donation camp and help save lives. Register at the reception.'
    },
    {
        id: 3,
        title: 'Health Checkup Packages',
        date: '2024-06-20',
        description: 'Avail special discounts on health checkup packages throughout June.'
    }
];

function Notice() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Hospital Notices</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {notices.map(notice => (
                    <li key={notice.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                        <h2>{notice.title}</h2>
                        <p><strong>Date:</strong> {notice.date}</p>
                        <p>{notice.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notice;