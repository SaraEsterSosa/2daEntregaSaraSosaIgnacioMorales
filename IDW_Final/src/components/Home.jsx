import React from 'react';
import Cards from './Cards';
import FormInicio from './FormInicio';
import ParrafoInicio from './ParrafoInicio';

function Home() {
    return (
        <>
        <div className="contenedorCard">
            <Cards
                foto = './src/img/casa.jpeg'
                precio= '15.000'
                descripcion='Una linda casa para pasar unos dias'
            ></Cards>
            <Cards
                foto = './src/img/casa.jpeg'
                precio= '38.000'
                descripcion='Los mejores bungalows'
            ></Cards>
            <Cards
                foto = './src/img/casa.jpeg'
                precio= '23.456'
                descripcion='Cabañas para disfrutar'
            ></Cards>
        </div>
        <FormInicio/>
        <ParrafoInicio/>
        </>
    );
}

export default Home;