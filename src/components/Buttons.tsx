import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from '../types/ButtonType';

const Buttons: React.FC<ButtonProps> = ({ className, link, content }) => {
    return (
        <Link to={link} className={className}>
            {content}
        </Link>
    );
};

export default Buttons; 