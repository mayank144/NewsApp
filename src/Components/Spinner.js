import React, { Component } from 'react'
import Radar from './Triangles indicator.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Radar} alt="Radar"/>
            </div>
        )
    }
}

export default Spinner
