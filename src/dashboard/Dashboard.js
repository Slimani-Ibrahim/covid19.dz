import React from "react";
import {CustomCard} from "../component/CustomCard";
import CustomHeader from "../component/CustomHeader";
import deathIcon from "../style/img/death-icon.png";
import CovidService from "../service/CovidService";
import CustomBarChart from "../component/CustomBarChart";
import CustomDoughnutChart from "../component/CustomDoughnutChart";
import CustomGridCountries from "../component/CustomGridCountries";

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            countCases: null,
            countDeaths: null,
            countRecovered: null,
            countActive: null,
            lastUpdate: null
        }
    }

    componentDidMount() {
        CovidService.getCountryCovid('Algeria').then(response => {
            this.setState({
                countCases:response.data.cases,
                countDeaths:response.data.deaths,
                countRecovered:response.data.recovered,
                countActive:response.data.active,
                lastUpdate: 'last update : ' + this.timespanToDatetime(response.data.updated)
            });
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }

    timespanToDatetime = (doubleDate) => {
        if(doubleDate==="") return "";
        if(doubleDate===null) return "";
        if(doubleDate===undefined) return "";
        const current_datetime = new Date(doubleDate);
        return current_datetime.getDate()+"-"+(current_datetime.getMonth() + 1)+"-"+current_datetime.getFullYear()
    }


    render() {
        return(
            <div className="App">
                <CustomHeader lastUpdate={this.state.lastUpdate}/>
                <br/>
                <div className='card-container'>
                    <CustomCard icon='fa fa-certificate' title='Confirmed Cases' count={this.state.countCases}/>
                    &nbsp;
                    <CustomCard img={deathIcon} title='Deaths' count={this.state.countDeaths}/>
                    &nbsp;
                    <CustomCard icon='fa fa-heartbeat' title='Recovered' count={this.state.countRecovered}/>
                    &nbsp;
                    <CustomCard icon='fa fa-hotel' title='Hospitalized' count={this.state.countActive}/>
                </div>
                <br/>

                <div className="chart-container">
                    <CustomBarChart title='Evolution Cases' type='cases'/>
                    &nbsp;
                    <CustomBarChart title='Evolution Deaths' type='death'/>
                    &nbsp;
                    <CustomBarChart title='Evolution Recovered' type='recovered'/>
                </div>

                <div className="chart-container">
                    <CustomDoughnutChart title='Today Situation' type='today'/>
                    &nbsp;
                    <CustomDoughnutChart title='Global Situation' type='global'/>
                    &nbsp;
                    <div className="chart-content"/>
                </div>

                <CustomGridCountries title="COVID-19 around the world" viewport={window.innerWidth > 500 ? "desktop" : "mobile"}/>

            </div>
        );
    }

}
export default Dashboard;