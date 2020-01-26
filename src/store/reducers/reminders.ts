import { Reminder } from "../../types";

const initialReminder: Reminder = {
    id: 1,
    city: "Quito",
    date: 25,
    color: "#ffffff",
    time: "11:00-12:00",
    title: "Test Title",
    user: "Jean Karlo"
}

const reminders = (state = [initialReminder], action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.reminder
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