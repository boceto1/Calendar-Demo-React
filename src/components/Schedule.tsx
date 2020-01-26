/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSun } from '@fortawesome/free-solid-svg-icons'
import { Reminder } from "../types";
import ReminderForm from "./ReminderForm";


const Schedule: React.FC = ({
    currentDay,
    reminders,
    onAddReminderClick,
    onUpdateReminderClick,
    onDeleteReminderClick,
    onDeleteReminderPerDayClick
}: any) => {


    const handleDeleteAllReminders = (event: MouseEvent) => {
        event.preventDefault();
        onDeleteReminderPerDayClick(currentDay)
        alert("DELETE REMINDERS");
    }

    const handleAddReminder = (reminder: Reminder) => { onAddReminderClick(reminder) }
    const handleUpdateReminder = (id: number, reminder: Reminder) => { onUpdateReminderClick(id, reminder) }


    const showReminders = reminders.length === 0 ? (
        <div className="row">
            <div className="col">
                <p>No Reminders</p>
                <ReminderForm
                    typeButton="NORMAL"
                    onAddReminderClick={handleAddReminder}
                    onUpdateReminderClick={handleUpdateReminder}
                />
            </div>
        </div>
    ) : (
            <div className="row">
                <div className="col">
                    <div className="container">
                        {reminders.map((reminder: Reminder) => (
                            <div className="row">
                                <div className="col-8">
                                    {reminder.title}
                                </div>
                                <div className="col-4">
                                    <button onClick={onDeleteReminderClick(reminder.id)}>
                                        Update
                        </button>
                                    <button onClick={onDeleteReminderClick(reminder.id)}>
                                        delete
                        </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )


    return (
        <div className="container Schedule border border-secondary">
            <div className="row  my-3">
                <div className="col-8 tex text-left">
                    <h4>{currentDay} de Enero 2020</h4>
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
                    <ReminderForm
                        typeButton="ICON"
                        onAddReminderClick={handleAddReminder}
                        onUpdateReminderClick={handleUpdateReminder}
                    />
                </div>
                <div className="col-2 text-left">
                    <a href="#" onClick={handleDeleteAllReminders}>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                        />
                    </a>
                </div>
            </div>
            {showReminders}
        </div>

    )
}

export default Schedule;