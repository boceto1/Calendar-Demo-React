import { connect } from 'react-redux';
import { setCurrentDay } from '../store/actions';
import { DayType } from '../types';
import Day from '../components/Day';

const mapStateToProps = (state: any, { date }: DayType) => {
    return {
        isCurrentDay: date === state.currentDay
    }
}

const mapDispatchToProps = (dispatch: any, { date }: DayType) => {
    return {
        onClick: () => {
            dispatch(setCurrentDay(date))
        }
    }
}

const SelectionDay = connect(
    mapStateToProps,
    mapDispatchToProps
)(Day)

export default SelectionDay;