/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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
        alert("DELETE ALL REMINDERS");
    }

    const handleDeleteReminder = (id: number) => { onDeleteReminderClick(id) }
    const handleAddReminder = (reminder: Reminder) => { onAddReminderClick(reminder) }
    const handleUpdateReminder = (reminder: Reminder) => { onUpdateReminderClick(reminder) }

    console.log(reminders);

    const showReminders = reminders.length === 0 ? (
        <div className="row">
            <div className="col">
                <p>No Reminders</p>
                <ReminderForm
                    date={currentDay}
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
                            <div className="row Reminder" key={reminder.id}>
                                <div className="col-1 text-left">
                                    <span className="dot" style={{ backgroundColor: reminder.color }}></span>
                                </div>
                                <div className="col-2 text-left">
                                    {reminder.time}
                                </div>
                                <div className="col-7 text-left">
                                    {reminder.title}
                                </div>
                                <div className="col-1 text-left">
                                    <a href="#" onClick={() => { handleDeleteReminder(reminder.id) }}>
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                        />
                                    </a>
                                </div>
                                <div className="col-1 text-left">
                                    <ReminderForm
                                        reminder={reminder}
                                        date={currentDay}
                                        typeButton="ICON_EDIT"
                                        onAddReminderClick={handleAddReminder}
                                        onUpdateReminderClick={handleUpdateReminder}
                                    />
                                </div>
                                <br />
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
            </div>
            <hr />
            <div className="row">
                <div className="col-8 text-left">
                    Reminders:  {reminders.length}
                </div>
                <div className="col-2 text-right">
                    <ReminderForm
                        date={currentDay}
                        typeButton="ICON_ADD"
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