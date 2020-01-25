import React, { MouseEvent } from 'react';
import { appStore } from '../store';


const Day: React.FC = ({ isCurrentDay, date, onClick }: any) => {

    //const { daySelection } = appStore.getState()

    const handleSelectDay = (event: MouseEvent) => {
        event.preventDefault();
        onClick();
    }

    const selectDay = isCurrentDay ?
        (<div className="col-1 border border-secondary Day SelectDay" onClick={handleSelectDay}>
            {date}
        </div>) :
        (<div className="col-1  border border-secondary Day" onClick={handleSelectDay}>
            {date}
        </div>)


    return (selectDay)
}

export default Day;