import React from 'react';
import Buttons from './Buttons';
import { buttonsData } from '../data/Data';

const ButtonArea: React.FC = () => {
    window.scrollTo(0, 0)
    return (
        <ul className='button-list'>
            {buttonsData.map((button, index) => (
                <li key={index}>
                    <Buttons
                        content={button.content}
                        className={button.className}
                        link={`/buttons/${button.link}`}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ButtonArea;