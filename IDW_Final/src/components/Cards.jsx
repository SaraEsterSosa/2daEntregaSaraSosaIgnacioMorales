import React from 'react';

const Cards = ({foto, precio, descripcion}) => {
    return (
        <div className="card">
            <img src = {foto} alt="" className='descripcionImg'/>
            <p className="descripcionCard">{precio}</p>
            <p className="descripcionCard">{descripcion}</p>
        </div>
    );
};

export default Cards;