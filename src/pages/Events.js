import React from 'react';

const events = [
    {
        id: 1,
        title: 'Health Awareness Camp',
        date: '2024-07-15',
        location: 'Main Auditorium',
        description: 'Join us for a free health check-up and awareness session conducted by our expert doctors.',
    },
    {
        id: 2,
        title: 'Blood Donation Drive',
        date: '2024-08-05',
        location: 'Community Hall',
        description: 'Participate in our blood donation drive and help save lives.',
    },
    {
        id: 3,
        title: 'Nutrition Workshop',
        date: '2024-09-10',
        location: 'Conference Room B',
        description: 'Learn about healthy eating habits and nutrition tips from our dieticians.',
    },
];

function Events() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Upcoming Events</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {events.map(event => (
                    <li key={event.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                        <h2>{event.title}</h2>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;