import { Reminder } from "../../types";


const reminders = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_REMINDER':
            return [
                ...state,
                {
                    id: action.reminder.id,
                    title: action.reminder.title,
                    city: action.reminder.city,
                    color: action.reminder.color,
                    date: action.reminder.date,
                    time: action.reminder.time,
                    user: action.reminder.user
                }
            ]
        case 'UPDATE_REMINDER':
            return state.map((reminder: Reminder) => {
                if (reminder.id === action.id) return action.reminder
                return reminder
            });
        case 'DELETE_REMINDER':
            return state.filter((reminder: Reminder) => reminder.id !== action.id)
        case 'DELETE_REMINDER_PER_DATE':
            console.log("DELETE ALL");
            return state.filter((reminder: Reminder) => reminder.date !== action.date)
        default:
            return state
    }
}

export default reminders;