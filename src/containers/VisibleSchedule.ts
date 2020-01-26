import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import { Reminder } from '../types';
import { addReminder, deleteReminder, updateReminder, deleteReminderPerDate } from '../store/actions'
import moment from "moment";

const compareTime = (reminder1: Reminder, reminder2: Reminder) => {
    const beginningTime = moment(reminder1.time, 'h:mm');
    var endTime = moment(reminder2.time, 'h:mm');
    if (beginningTime.isBefore(endTime)) return -1;
    return 1;
}

const mapStateToProps = (state: any) => {

    const { currentDay, reminders } = state;
    const filteredReminders = reminders.filter((reminder: Reminder) => reminder.date === currentDay).sort(compareTime)

    return {
        currentDay,
        reminders: filteredReminders
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddReminderClick: (reminder: Reminder) => {
            dispatch(addReminder(reminder));
        },
        onUpdateReminderClick: (reminder: Reminder) => {
            dispatch(updateReminder(reminder.id, reminder));
        },
        onDeleteReminderClick: (id: number) => {
            dispatch(deleteReminder(id));
        },
        onDeleteReminderPerDayClick: (date: number) => {
            dispatch(deleteReminderPerDate(date));
        }

    }
}


const VisibleSchedule = connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule)

export default VisibleSchedule;