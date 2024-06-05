import React from 'react';

function Administracion() {
    return (
    <>
        <h2 className="tituloConsulta">Administración de Alojamientos</h2>
        <div className="FormContacto">
            <h4>Titulo</h4>
            <input type="text" placeholder="Ingrese el Titulo" className="items"/>
            <h4>Descripción</h4>
            <br />
            <input type="text" placeholder="Descripción del Alojamiento" className="items"/>
            <h4>Tipo de Alojamiento</h4>
            <br />
            <input type="text" placeholder="Tipo de Alojamiento" className="items"/>
            <h4>Latitud</h4>
            <br />
            <input type="text" placeholder="Ingrese la Latitud" className="items"/>
            <h4>Longitud</h4>
            <br />
            <input type="text" placeholder="Ingrese la Longitud" className="items"/>
            <h4>Precio por día</h4>
            <br />
            <input type="text" placeholder="Ingrese el Precio por día" className="items"/>
            <h4>Cantidad de Dormitorios</h4>
            <br />
            <input type="number" placeholder="Ingrese Cantidad de Dormitorios" className="items"/>
            <h4>Cantidad de Baños</h4>
            <br />
            <input type="number" placeholder="Ingrese Cantidad de Baños" className="items"/>
            <h4>Estado</h4>
            <br />
            <input type="text" placeholder="Ingrese Estado" className="items"/>
            <br />
            <input type="submit" value="Guardar" className='btn'/>
        </div>
    </>
    );
}

export default Administracion;