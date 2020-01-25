import { createStore } from 'redux';
import calendarReducers from "./reducers"

export interface IAppState {
    currentDay: number
}

const appStore = createStore(
    calendarReducers,
)

export { appStore }