import React, { MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrashAlt, faSun } from '@fortawesome/free-solid-svg-icons'

interface IState {
    currentDay: number
}

const Schedule: React.FC = ({ currentDay }: any) => {

    console.log(currentDay);


    const handleAddReminder = (event: MouseEvent) => {
        event.preventDefault();
        alert("ADD REMINDER");
    }

    const handleDeleteAllReminders = (event: MouseEvent) => {
        event.preventDefault();
        alert("DELETE REMINDERS");
    }


    return (
        <div className="container Schedule border border-secondary">
            <div className="row  my-3">
                <div className="col-8 tex text-left">
                    <h4>{currentDay} de Febrero</h4>
                </div>
                <div className="col-4">
                    <FontAwesomeIcon
                        icon={faSun}
                        size="2x"
                        color="#5D4B55"
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-8 text-left">
                    Schedule
                    </div>
                <div className="col-2 text-right">
                    <a href="#" onClick={handleAddReminder}>
                        <FontAwesomeIcon
                            icon={faPlusSquare}
                        />
                    </a>
                </div>
                <div className="col-2 text-left">
                    <a href="#" onClick={handleAddReminder}>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Schedule;