import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleTheme}
            className={
                'px-4 py-2 rounded font-semibold ' +
                (theme === 'light'
                    ? 'bg-gray-200 text-gray-800 border border-gray-400'
                    : 'bg-gray-800 text-white border border-gray-600')
            }
        >
            {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}