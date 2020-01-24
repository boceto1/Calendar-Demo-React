import React, { useState, MouseEvent } from 'react';
import { DayType } from '../types';

type Props = DayType

const Day: React.FC<Props> = props => {

    const [isSelect, setIsCount] = useState(false);
    const { date } = props;

    const handleSelectDay = (event: MouseEvent) => {
        event.preventDefault();
        setIsCount(!isSelect);
    }
    const selectDay = isSelect ?
        (<div className="col-1 border border-secondary Day SelectDay" onClick={handleSelectDay}>
            {date}
        </div>) :
        (<div className="col-1  border border-secondary Day" onClick={handleSelectDay}>
            {date}
        </div>)


    return (selectDay)
}

export default Day;