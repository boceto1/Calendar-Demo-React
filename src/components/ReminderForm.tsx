import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react';
import { Reminder } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


interface IProps {
    typeButton: 'ICON' | 'NORMAL',
    reminder?: Reminder,
    onAddReminderClick: (reminder: Reminder) => void,
    onUpdateReminderClick: (id: number, reminder: Reminder) => void,
}

const ReminderForm = ({
    typeButton,
    reminder,
    onAddReminderClick,
    onUpdateReminderClick
}: IProps) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderButton = typeButton === 'ICON' ? (
        <a href="#" onClick={handleShow}>
            <FontAwesomeIcon
                icon={faPlusSquare}
            />
        </a>
    ) : (
            <Button variant="primary" onClick={handleShow}>
                Add a reminder
        </Button>
        )

    const renderTitle = !reminder ? "ADD REMINDER" : reminder.title;


    return (
        <div>
            {renderButton}
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
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="formGroupUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Add username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupTime">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Add username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupCity">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Add username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupColor">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Add username" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ReminderForm;