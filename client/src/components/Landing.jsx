//import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Landing.module.css'
export default function Landing(){
    return (
        <div className={styles.background}>
            <div >
                <h1 className={styles.welcome_message}>Bienvenido a tu lugar en el mundo</h1>
                <Link to= '/home'>
                <button className={styles.button}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}