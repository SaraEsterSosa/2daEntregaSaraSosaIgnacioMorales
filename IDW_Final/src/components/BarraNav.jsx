import React from 'react';
import { Link } from 'react-router-dom';

const BarraNav = () => {
return (
    <nav className='contenedorNav'>
        <figure className='logo'>
            <img src='./src/img/logo2.jpg' alt="Polaris" className='logoNav' />
        </figure>
        <div className='nombre'> 
            <h1>Polaris</h1>
        </div>
        <div className='menuDropDown'>
            <a href="" className='menu'>Menú</a>
            <ul className='dropDownMenu'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/Contacto'>Contacto</Link></li>
                <li><Link to='/Historia'>Historia</Link></li>
                <li><Link to='/Administracion'>Administración</Link></li>
            </ul>
        </div>
    </nav>
    );
};

export default BarraNav;


/*
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.Link}>{item.label}</a>
                    </li>
                ))}
*/