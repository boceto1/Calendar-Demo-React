
import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { Reminder } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faEdit } from '@fortawesome/free-solid-svg-icons';
import ColorPicker from './ColorPicker';
import WheaterDisplay from './WheaterDisplay';

interface IProps {
    date: number
    typeButton: 'ICON_ADD' | 'ICON_EDIT' | 'NORMAL',
    reminder?: Reminder,
    onAddReminderClick: (reminder: Reminder) => void,
    onUpdateReminderClick: (reminder: Reminder) => void,
}

interface IState {
    show: boolean
    color: string,
    title: string,
    city: string,
    time: string,
    username: string
}

export const isCorrectData: any = (reminder: Reminder) => {
    if (reminder.title.length > 30) return "Title is more than 30 chars"
    if (Object.values(reminder).some(value => value === "")) return "There are empty fields"
    return "YES"
}

class ReminderForm extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            show: false,
            color: "blue",
            title: "",
            city: "",
            time: "",
            username: "",
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }

    componentDidMount() {
        if (this.props.reminder) {
            const { color, city, user, time, title } = this.props.reminder;
            this.setState({ color, city, username: user, time, title })
        }
    }



    handleChangeTitle(event: any) {
        this.setState({ title: event.target.value });
    }

    handleChangeUserName(event: any) {
        this.setState({ username: event.target.value });
    }

    handleChangeCity(event: any) {
        this.setState({ city: event.target.value });
    }

    handleChangeTime(event: any) {
        this.setState({ time: event.target.value });
    }

    setShow = (stateShow: boolean) => (this.setState({ show: stateShow }));
    setColor = (color: string) => (this.setState({ color }));

    selectColorFromName = (color: string) => {
        if (color === "blue") return "#84B9E5";
        if (color === "green") return "#A1E584";
        if (color === "orange") return "#E5BD84";
        return "#BA84E5"
    }

    render() {
        const {
            typeButton,
            date,
            reminder,
            onAddReminderClick,
            onUpdateReminderClick
        } = this.props;

        const { show } = this.state;

        const nonce = Math.random() * (9990 - 1000) + 1000;

        const handleClose = () => { this.setShow(false) };
        const handleShow = () => this.setShow(true);
        const handleAddReminder = () => {
            const color = this.selectColorFromName(this.state.color);
            const newReminder = {
                id: parseInt(date + this.state.time + nonce),
                title: this.state.title,
                city: this.state.city,
                color,
                date,
                time: this.state.time,
                user: this.state.username
            }

            if (isCorrectData(newReminder) === "YES") {
                onAddReminderClick(newReminder);
                alert("The reminder was added");
                handleClose();
            } else {
                alert(isCorrectData(newReminder))
            }

        }

        const handleUpdateReminder = (reminder: Reminder) => {
            onUpdateReminderClick(reminder);
            alert("The reminder was updated");
            handleClose();
        }

        const renderButton = (typeButton: any) => {
            switch (typeButton) {
                case 'ICON_ADD':
                    return (
                        <a href="#" onClick={handleShow}>
                            <FontAwesomeIcon
                                icon={faPlusSquare}
                            />
                        </a>)
                case 'ICON_EDIT':
                    return (
                        <a href="#" onClick={handleShow}>
                            <FontAwesomeIcon
                                icon={faEdit}
                            />
                        </a>)
                case 'NORMAL':
                default:
                    return (
                        <Button variant="primary" onClick={handleShow}>
                            Add a reminder
                </Button>
                    )
            }
        }
        const renderTitle = !reminder ? "ADD REMINDER" : reminder.title;

        const renderForm = !reminder ? (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {renderTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={this.state.title} onChange={this.handleChangeTitle} />
                        </Form.Group>
                        <Form.Group controlId="formGroupUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Add username" value={this.state.username} onChange={this.handleChangeUserName} />
                        </Form.Group>
                        <Form.Group controlId="formGroupTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" onChange={this.handleChangeTime} />
                        </Form.Group>
                        <Form.Group controlId="formGroupCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Add City" onChange={this.handleChangeCity} />
                        </Form.Group>
                        <Form.Group controlId="formGroupColor">
                            <Form.Label>Color</Form.Label>
                            <ColorPicker onSelectColor={this.setColor} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleAddReminder}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        ) : (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {renderTitle}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" value={this.state.title} onChange={this.handleChangeTitle} />
                            </Form.Group>
                            <Form.Group controlId="formGroupUser">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Add username" value={this.state.username} onChange={this.handleChangeUserName} />
                            </Form.Group>
                            <Form.Group controlId="formGroupTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" value={this.state.time} onChange={this.handleChangeTime} />
                            </Form.Group>
                            <Form.Group controlId="formGroupCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Add City" value={this.state.city} onChange={this.handleChangeCity} />
                            </Form.Group>
                            <Form.Group controlId="formGroupColor">
                                <Form.Label>Color</Form.Label>
                                <ColorPicker color={this.state.color} onSelectColor={this.setColor} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <WheaterDisplay city={this.state.city} />
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleUpdateReminder({
                            id: reminder.id,
                            title: this.state.title,
                            user: this.state.username,
                            date: reminder.date,
                            time: this.state.time,
                            color: this.selectColorFromName(this.state.color),
                            city: this.state.city
                        })}>
                            Save
                    </Button>
                    </Modal.Footer>
                </Modal>
            )

        return (
            <div>
                {renderButton(typeButton)}
                {renderForm}

            </div>
        );
    }

}


export default ReminderForm;