import React from 'react';
import { Link } from 'react-router-dom';

const PiePagina = () => {
    return (
        <footer className="pie_pagina">
            <div className="contenedorFooter">
                <div className="grupo1">
                    <div className="box">
                        <figure>
                            <a href="#">
                                <img src="./src/img/logo4.png" alt=""/>
                            </a>
                        </figure>
                    </div>
                    <div className="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <ul>
                            <li><Link to='/Contacto'>Contacto</Link></li>
                            <li><Link to='/Historia'>Nuestra Historia</Link></li>                        
                            <li><Link to='/'>Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>SIGUENOS</h2>
                        <div className="red_social">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-x"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>

                <div className="grupo2">
                    <p>&copy; 2024, Polaris - Todos los Derechos Reservados.</p>
                </div>
            </div>
        </footer>            
    );
};

export default PiePagina;

/*
                        <a href="historia.html">Nuestra historia</a>
                        <a href="contacto.html">Contacto</a>
                        <a href="#">Trabajá con nosotros</a>
*/