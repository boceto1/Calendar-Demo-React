
export interface ISelectDay {
    type: 'SELECTION_DAY',
    currentDay: number
}

const currentDayfromCalendar = new Date().getDate();

const daySelection = (state = currentDayfromCalendar, action: ISelectDay) => {
    switch (action.type) {
        case 'SELECTION_DAY':
            return action.currentDay;
        default:
            return state;
    }
}

export default daySelection;