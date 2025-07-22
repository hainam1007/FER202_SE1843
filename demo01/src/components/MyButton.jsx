import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../contexts/ThemeContext';

function MyButton() {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <Button variant="outline-primary" onClick={toggleTheme}>Toggle Theme</Button>
        </>
    );
}

export default MyButton;