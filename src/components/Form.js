import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from "./WeatherCard";

const Form = () => {

    let originalResponse = {
        "name": '',
        "main": {
            "temp": ''
        },
        "weather": [{
            "description":"",
            "icon": "02n",
            "id": "",
            "main": ""
        }]
    }

    let [responseData, setResponseData] = useState(originalResponse);
    var locationName;

    let getData = () => {
            console.log("Passed")
            let location = locationName.value;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1554de1c3f3604feb817d171fa465b04`)
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log("Render Once")
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=1554de1c3f3604feb817d171fa465b04`)
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <form>
                <input ref={c => (locationName = c)} placeholder="Enter a Location"></input>
                <Button onClick={getData}variant="primary">Search</Button>
            </form>
            
            <WeatherCard data={responseData}/>
        </>
    )
}

export default Form;