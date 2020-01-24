import React, { Component, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrashAlt, faSun } from '@fortawesome/free-solid-svg-icons'

class Calendar extends Component {

    handleAddReminder(event: MouseEvent) {
        event.preventDefault();
        alert("ADD REMINDER");
    }

    handleDeleteAllReminders(event: MouseEvent) {
        event.preventDefault();
        alert("DELETE REMINDERS");
    }

    render() {
        return (
            <div className="container Schedule border border-secondary">
                <div className="row  my-3">
                    <div className="col-8 tex text-left">
                        <h4>1 de Febrero</h4>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon
                            icon={faSun}
                            size="2x"
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-8 text-left">
                        Schedule
                    </div>
                    <div className="col-2 text-right">
                        <a href="#" onClick={this.handleAddReminder}>
                            <FontAwesomeIcon
                                icon={faPlusSquare}
                            />
                        </a>
                    </div>
                    <div className="col-2 text-left">
                        <a href="#" onClick={this.handleAddReminder}>
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calendar;