// src/Content.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#f9f9f9' : '#555', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>AMERICA YA!skjbkjsad</p>
        </div>
    );
};

export default Content;
