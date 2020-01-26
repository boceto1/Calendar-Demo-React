import { Reminder } from "../../types";

export const setCurrentDay = (currentDay: number) => ({
    type: 'SELECTION_DAY',
    currentDay
});

export const addReminder = (reminder: Reminder) => ({
    type: 'ADD_REMINDER',
    reminder
});

export const updateReminder = (id: number, reminder: Reminder) => ({
    type: 'UPDATE_REMINDER',
    id,
    reminder
})

export const deleteReminder = (id: number) => ({
    type: 'DELETE_REMINDER',
    id
});

export const deleteReminderPerDate = (date: number) => ({
    type: 'DELETE_REMINDER_PER_DATE',
    date
})