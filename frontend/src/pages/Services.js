import React from 'react';

const services = [
    { name: 'General Consultation', description: 'Comprehensive health check-ups and medical advice.' },
    { name: 'Emergency Care', description: '24/7 emergency services for urgent medical needs.' },
    { name: 'Pediatrics', description: 'Specialized care for infants, children, and adolescents.' },
    { name: 'Laboratory Services', description: 'Accurate diagnostic tests and reports.' },
];

function Services() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Our Services</h1>
            <ul>
                {services.map((service, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem' }}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;