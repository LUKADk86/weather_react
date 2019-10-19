import React from 'react';

const Form =(props)=>{

    return (
        <form onSubmit={props.getWeather}>
                <label>pays</label>
                <input type="text" name="pays"/><br/>
                <label>ville</label>
                <input type="text" name="ville"/><br/>
                <button>valider</button>
        </form>
   
    )
}
export default Form;