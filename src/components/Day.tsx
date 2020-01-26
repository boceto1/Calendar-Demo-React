import React, { MouseEvent } from 'react';


const Day: React.FC = ({ isCurrentDay, date, onClick }: any) => {

    const handleSelectDay = (event: MouseEvent) => {
        event.preventDefault();
        onClick();
    }

    if (date === 0) {
        return (
            (<div className="col-1 border border-secondary bg-dark Day disabled">
            </div>)
        )
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