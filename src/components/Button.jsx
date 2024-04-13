import React from 'react';

export const Button = ({ children, onClick, variant = 'primary' }) => {
    const baseStyle = "rounded px-4 py-2 text-white font-medium";
    const styles = {
        primary: `${baseStyle} bg-blue-500 hover:bg-blue-600`,
        secondary: `${baseStyle} bg-gray-500 hover:bg-gray-600`
    };
    return (
        <button onClick={onClick} className={styles[variant]}>
            {children}
        </button>
    );
};