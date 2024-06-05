import React from 'react';

const FormInicio = () => {
    return (
        <section className="formulario">
            <div className="contenedorForm">
                <form action="">
                    <label htmlFor="destino" className="items">
                        Destino <input type="text"/>
                    </label>
                    <label htmlFor="ingreso" className="items">
                        Ingreso <input type="date"/>
                    </label>
                    <label htmlFor="salida" className="items">
                        Salida <input type="date"/>
                    </label>
                    <label htmlFor="cantidadPersonas" className="items">
                        Cantidad de Personas <input type="number"/>
                    </label>
                <button type="button" className="btn">Buscar</button>
                </form>
            </div>
        </section>
    );
};

export default FormInicio;