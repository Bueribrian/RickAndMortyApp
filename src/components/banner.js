import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='banner-app'>
                <div className='wrapper-bn'>
                    <div className='banner-content'>
                        <h2 className='title'>Rick and Morty</h2>
                        <p className='subtitle'>Esta es una aplicacion de practica hecha con React.js con el uso de la API publica de Rick and Morty</p>
                        <p>Para mas informacion ingresar a la pagina oficial</p>
                        <a className='btn-banner' href='https://rickandmortyapi.com/'>Visitar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
