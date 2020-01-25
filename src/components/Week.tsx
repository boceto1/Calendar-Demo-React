import React from 'react';
import Day from '../containers/SelectionDay';

type Props = {
    data: number[];
}

const Week: React.FC<Props> = props => {

    const { data } = props;

    const renderDays = () => data.map(day => <Day date={day} />)


    return (
        <div className="row Week">
            {renderDays()}
        </div>
    )

}

export default Week;