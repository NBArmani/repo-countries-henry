//import React from 'react'
import { Link } from 'react-router-dom'
export default function Landing(){
    return (
        <div className='landing'>
            <div className='content'>
                <h1>Bienvenido a tu lugar en el mundo.</h1>
                <Link to= '/home'>
                <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}