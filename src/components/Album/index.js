import React from 'react';
import { NavLink } from 'react-router-dom';

const Album = () => {
    return (
        <div>
            some ui
            <NavLink to='/albums'>Альбомы</NavLink>
        </div>
    );
};

export default Album