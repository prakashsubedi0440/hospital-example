import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
    ];

    return (
        <nav style={styles.nav}>
            {navItems.map(item => (
                <Link
                    key={item.name}
                    to={item.path}
                    style={{
                        ...styles.link,
                        ...(location.pathname === item.path ? styles.active : {})
                    }}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        background: '#1976d2',
        padding: '10px'
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '20px',
        fontWeight: 'bold',
        fontSize: '18px',
        padding: '6px 12px',
        borderRadius: '4px',
        transition: 'background 0.2s'
    },
    active: {
        background: '#1565c0'
    }
};

export default Topbar;