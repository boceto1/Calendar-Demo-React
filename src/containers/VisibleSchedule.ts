import { connect } from 'react-redux';
import Schedule from '../components/Schedule';

const mapStateToProps = (state: any) => {
    return {
        currentDay: state.currentDay
    }
}


const VisibleSchedule = connect(
    mapStateToProps
)(Schedule)

export default VisibleSchedule;