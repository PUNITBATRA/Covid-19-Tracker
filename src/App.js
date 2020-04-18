import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from './images/2.JPEG';
import Footer from './components/Footer/Footer';
class App extends React.Component {
    state={
        data:{},
        country:'',
    }
    async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    
      render() {
        const { data, country } = this.state;
    
        return (
      <div>    <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> </div>
        <div>  <Footer/>
        </div></div>
        );
      }
    }
export default App;