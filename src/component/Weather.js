import React from 'react';

const Weather= (props)=>{

    return (
        <React.Fragment>
            <h1>Météo de la ville</h1>
            {props.ville && <p>ville: {props.ville}</p>}
            {props.pays && <p>pays: {props.pays}</p>}
            {props.temperature && <p>Température: {props.temperature} °</p>}
            {props.description && <p>Description: {props.description}</p>}
            {props.humidite && <p>Humidité: {props.humidite} %</p>}
            <p>{props.erreur }</p>
        
        </React.Fragment>
    )
 
}

export default Weather