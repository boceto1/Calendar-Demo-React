import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import { Reminder } from '../types';
import { addReminder, deleteReminder, updateReminder, deleteReminderPerDate } from '../store/actions'


const mapStateToProps = (state: any) => {

    const { currentDay, reminders } = state;
    const filteredReminders = reminders.filter((reminder: Reminder) => reminder.date === currentDay)

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
        onUpdateReminderClick: (id: number, reminder: Reminder) => {
            dispatch(updateReminder(id, reminder));
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