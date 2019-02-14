import React, { Component } from 'react';

class Panel extends Component {

    render() {
        return (
            <div className='panel-app'>
                <ul>
                    <li onClick={()=>{this.props.handleInfo('https://rickandmortyapi.com/api/character')}}>Characters</li>
                    <li onClick={()=>{this.props.handleInfo('https://rickandmortyapi.com/api/episode')}}>Episodes</li>
                    <li onClick={()=>{this.props.handleInfo('https://rickandmortyapi.com/api/location')}} >Locations</li>
                </ul>
            </div>
        );
    }
}

export default Panel;
