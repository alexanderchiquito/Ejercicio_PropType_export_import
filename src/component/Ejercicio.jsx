import React from "react";
import PropTypes from 'prop-types'
import './Ejercicio.css'

export const Ejercicio = ({texto, entero, decimal}) =>{

    return(
        <>
        <div className="box_one">
            <h1>{texto}</h1>
            <h2>{entero}</h2>
            <p>{decimal}</p>
        </div>
        </>
    )
};

Ejercicio.propTypes ={
    texto: PropTypes.string.isRequired,
    entero: PropTypes.number.isRequired,
    decimal: PropTypes.number.isRequired,
}