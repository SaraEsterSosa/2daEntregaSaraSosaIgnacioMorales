import React from 'react';

function Contacto() {
    return (
    <>
        <div className="imagenMain">
            <img src="./src/img/fondo-contacto.jpg" alt="" className="imagenMain"/>
        </div>
        <h2 className="tituloConsulta">Dejanos tu consulta</h2>
        <div className="FormContacto">
            <h4>Nombre</h4>
            <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre/s" className="items"/>
            <h4>Apellido</h4>
            <input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido/s" className="items"/>
            <h4>E-mail</h4>
            <input type="email" name="email" id="email" placeholder="Ingrese su Email" className="items"/>
            <h4>Consulta</h4>
            <textarea name="consulta" id="consulta" cols="30" rows="10" className="items"></textarea>
            <input type="submit" value="ENVIAR" className='btn'/>
        </div>
    </>
    );
}

export default Contacto;