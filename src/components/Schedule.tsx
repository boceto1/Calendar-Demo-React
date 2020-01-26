/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrashAlt, faSun } from '@fortawesome/free-solid-svg-icons'
import { Reminder } from "../types";

const Schedule: React.FC = ({
    currentDay,
    reminders,
    onAddReminderClick,
    onUpdateReminderClick,
    onDeleteReminderClick,
    onDeleteReminderPerDayClick
}: any) => {

    console.log(reminders.length)

    const handleAddReminder = (event: MouseEvent) => {
        event.preventDefault();
        alert("ADD REMINDER");
    }

    const handleDeleteAllReminders = (event: MouseEvent) => {
        event.preventDefault();
        onDeleteReminderPerDayClick(currentDay)
        alert("DELETE REMINDERS");
    }


    const showReminders = reminders.length === 0 ? (
        <div className="row">
            <div className="col">
                <p>No Reminders</p>
                <button> Add Reminder </button>
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
                    <a href="#" onClick={handleAddReminder}>
                        <FontAwesomeIcon
                            icon={faPlusSquare}
                        />
                    </a>
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