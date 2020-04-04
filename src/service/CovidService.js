import axios from 'axios';
const PREFIX_API="https://corona.lmao.ninja"

class CallService {

    getCountryCovid(country){
        return axios.get(PREFIX_API+'/countries/'+country);
    }

    getHistoricalCovid(country){
        return axios.get(PREFIX_API+'/v2/historical/'+country);
    }

    getCountriesCovid(){
        return axios.get(PREFIX_API+'/countries');
    }
}

export default new CallService();