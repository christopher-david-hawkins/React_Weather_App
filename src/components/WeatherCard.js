import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherCard = (props) => {
    console.log(props)
    return(
        <>
        <div className="weather-card">
            <Card bg="primary" text="light" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
                <Card.Body>
                    <Card.Title><b>{props.data.name}</b></Card.Title>
                    <Card.Text>
                    {props.data.weather[0].description}
                    </Card.Text>
                    <Card.Text>
                    {props.data.main.temp}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default WeatherCard;