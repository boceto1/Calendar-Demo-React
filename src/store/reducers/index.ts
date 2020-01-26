import { combineReducers } from 'redux'
import currentDay from './selectionDay';
import reminders from './reminders';

const calendarStore = combineReducers({
    currentDay,
    reminders
});

export default calendarStore;