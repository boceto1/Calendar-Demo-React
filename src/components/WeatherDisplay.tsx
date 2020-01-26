import React from "react";
import { Button, Modal } from "react-bootstrap";
import { API_KEY } from "../env.json"

interface IProps {
    city: string
}

interface IState {
    show: boolean
    weather: string
}

class WeatherDisplay extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            show: false,
            weather: ""
        };
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${API_KEY}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ weather: data.weather[0].main })
            })
            .catch(console.log)
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Check the weather
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.city}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>The weather is {this.state.weather}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }

}

export default WeatherDisplay;