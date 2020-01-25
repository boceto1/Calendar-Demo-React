import { combineReducers } from 'redux'
import currentDay from './selectionDay';

const calendarStore = combineReducers({
    currentDay
});

export default calendarStore;