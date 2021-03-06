import React from "react";
import {CustomCard} from "../component/CustomCard";
import CustomHeader from "../component/CustomHeader";
import deathIcon from "../style/img/death-icon.png";
import bioIcon from "../style/img/bio-danger-icon.png";
import CovidService from "../service/CovidService";
import CovidBarChart from "./CovidBarChart";
import CovidDoughnutChart from "./CovidDoughnutChart";
import GridCountries from "./GridCountries";
import GridProvinces from "./GridProvinces";
import CovidRankDeath from "./CovidRankDeath";
import {CustomMesauresChart} from "./CustomMeasuresChart";
import DailyChartReport from "./DailyChartReport";

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            countCases: null,
            countDeaths: null,
            countRecovered: null,
            countActive: null,
            todayCases: null,
            todayDeaths: null,
            lastUpdate: null,
        }
    }

    getXAxes = (data) => {
        // let result = Object.entries(data).map(( [k, v] ) => (k));
        let result = Object.entries(data).map(( [k, v] ) => {
            if(v != 0){
                return k;
            }
        });
        result = result.filter(function (x) {
            return x !== undefined;
        });
        return result;
    }

    getYAxes = (data) => {
        //let result = Object.entries(data).map(( [k, v] ) => ({ [k]: v }));
        let result = Object.entries(data).map(( [k, v] ) => {
            if(v != 0){
                return v;
            }
        });
        result = result.filter(function (x) {
            return x !== undefined;
        });

        return result;
    }

    componentDidMount() {
        CovidService.getCountryCovid('Algeria').then(response => {
            this.setState({
                countCases:response.data.cases,
                countDeaths:response.data.deaths,
                countRecovered:response.data.recovered,
                countActive:response.data.active,
                todayCases: response.data.todayCases,
                todayDeaths: response.data.todayDeaths,
                lastUpdate: 'last update : ' + this.timespanToDatetime(response.data.updated)
            });
        }).catch(error => {
            console.log(error);
            alert(error);
        });

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
                    <CustomCard icon='fa fa-certificate' title='Total Cases' count={this.state.countCases} todayReport={this.state.todayCases} subtitle='new cases' />
                    &nbsp;
                    <CustomCard img={deathIcon} title='Total Deaths' count={this.state.countDeaths} todayReport={this.state.todayDeaths} subtitle='new deaths' />
                    &nbsp;
                    <CustomCard icon='fa fa-heartbeat' title='Total Recovers' count={this.state.countRecovered}/>
                    &nbsp;
                    <CustomCard img={bioIcon} title='Active Cases' count={this.state.countActive}/>
                </div>
                <br/>

                <div className="chart-container">
                    <CovidBarChart title='Evolution Cases' type='cases' perimeter='Algeria'/>
                    &nbsp;
                    <CovidBarChart title='Evolution Deaths' type='death' perimeter='Algeria'/>
                    &nbsp;
                    <CovidBarChart title='Evolution Recovered' type='recovered' perimeter='Algeria'/>
                </div>

                <div className="chart-container">
                    <CustomMesauresChart title= 'Comparative Report' perimeter='Algeria'/>
                    &nbsp;
                    <CovidDoughnutChart title='Today Situation' type='today' perimeter='Algeria'/>
                    &nbsp;
                    <CovidDoughnutChart title='Global Situation' type='global' perimeter='Algeria'/>
                    &nbsp;
                </div>
                {/*<div className="chart-container">
                    <WilayaChart title='Cases % Wilaya' type='confirmed'/>
                    &nbsp;
                    <WilayaChart title='Deaths % Wilaya' type='deaths'/>
                    &nbsp;
                    <div className="chart-content" />
                </div>*/}

                <GridProvinces title="Situation in Provinces" viewport={window.innerWidth > 500 ? "desktop" : "mobile"} />

                <GridCountries title="COVID-19 around the world" viewport={window.innerWidth > 500 ? "desktop" : "mobile"}/>

                <div className="chart-container">
                    <CovidBarChart title='Evolution Cases' type='cases' perimeter='world'/>
                    &nbsp;
                    <CovidBarChart title='Evolution Deaths' type='death' perimeter='world'/>
                    &nbsp;
                    <CovidBarChart title='Evolution Recovered' type='recovered' perimeter='world'/>
                </div>

                <div className="chart-container">
                    <CustomMesauresChart title= 'Comparative Report' perimeter='all'/>
                    &nbsp;
                    <CovidDoughnutChart title='Today Situation' type='today' perimeter='world'/>
                    &nbsp;
                    <CovidDoughnutChart title='Global Situation' type='global' perimeter='world'/>
                </div>

                <CovidRankDeath />

            </div>
        );
    }

}
export default Dashboard;
