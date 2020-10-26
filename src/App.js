import React, { Component } from 'react';
import './App.css';
import { fethData } from './api/index';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountrtPicker';
import Chart from './components/Chart/Chart';



class app extends Component {

  state = {
    data : {},
    country: ''
  }

  async componentDidMount() {
    const fethedData = await fethData();

    this.setState({data : fethedData});
  }

  handelCountryChange = async (country) => {
    const fethedData = await fethData(country);

    this.setState({ data: fethedData, country: country});

  }


  render() { 
    return (
      <div className='App'>
        <Cards data={this.state.data} />
        <CountryPicker handelCountryChange={this.handelCountryChange} />
        <Chart country={this.state.country} data={this.state.data} />
      </div>
    );
  }
}
 
export default app;

