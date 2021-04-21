import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "Gdańsk",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=3d939e44753294d434c3b344b67cf1c2&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Problem, nie udało się");
      })
      .then((response) => response.json())

      .then((data) => {
        const day = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();

        this.setState((state) => ({
          err: false,
          day: day,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: state.value,
        }));
      })

      .catch((err) => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
