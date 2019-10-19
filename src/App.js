import React from 'react';
import Weather from './component/Weather';
import Form from './component/Form';
import './App.css';

const api_key = "48cb1fef688375d5ef8b6d53040af701";



class App extends React.Component {
  state = {
    pays: '',
    ville: '',
    temperature: '',
    description: '',
    humidite: '',
    erreur: ''
  }

  getWeather = async (e) => {
    const pays = e.target.elements.pays.value
    const ville = e.target.elements.ville.value
    e.preventDefault()
    console.log('hello');
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}&appid=${api_key}`);
    const data = await api.json()
    console.log(data)
    if (ville && pays) {
      const t = Math.round(data.main.temp- 272.1)
      this.setState({
        pays: data.sys.country,
        ville: data.name,
        temperature: t,
        description: data.weather[0].description,
        humidite: data.main.humidity,
        erreur: ''
      })
      console.log(this.state)
    }else{
      this.setState({
        pays: '',
        ville: '',
        temperature: '',
        description: '',
        humidite: '',
        erreur: data.message
      })
      console.log(data.message)
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Météo du jour</h1>
        <Form getWeather={this.getWeather} />
        <Weather   pays ={this.state.pays} ville={this.state.ville} temperature={this.state.temperature} 
        description={this.state.description} humidite={this.state.humidite} erreur={this.state.erreur} />

      </div>
    )
  }
}

export default App;
