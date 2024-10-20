// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container} className='dark:bg-black'>
            <h1 style={styles.title} className='text-[#343a40] dark:text-white'>404 - Page Not Found</h1>
            <p style={styles.message} className='text-[#343a40] dark:text-white'>Oops! The page you are looking for does not exist.</p>
            <Link to="/default" style={styles.homeLink}>Go Back to Default</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    homeLink: {
        fontSize: '20px',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default NotFound;
