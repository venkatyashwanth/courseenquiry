import { URL1, URL2 } from './URL';
import axios from 'axios';

function getCourses(){
    return axios.get(URL1)
}

function addQuery(data){
    return axios.post(URL2,data)
}

function getQueries(){
    return axios.get(URL2)
}

export {getCourses,addQuery,getQueries}