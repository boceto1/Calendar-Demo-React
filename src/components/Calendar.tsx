import React, { Component } from "react";
import Week from './Week';

class Calendar extends Component {

    titleDays = (nameDays: string[]) =>
        nameDays.map(
            name =>
                <div className="col-1 border border-secondary DayNames">
                    {name}
                </div>)

    render() {
        const nameDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const days1: number[] = [1, 2, 3, 4, 5, 6, 7];
        const days2: number[] = [8, 9, 10, 11, 12, 13, 14];
        const days3: number[] = [15, 16, 17, 18, 19, 20, 21];
        const days4: number[] = [22, 23, 24, 25, 26, 27, 28];
        const days5: number[] = [29, 30, 31, 1, 2, 3, 4];
        return (
            <div className="container-fluid">
                <div className="row font-weight-bold Week">
                    {this.titleDays(nameDays)}
                </div>
                <Week data={days1} />
                <Week data={days2} />
                <Week data={days3} />
                <Week data={days4} />
                <Week data={days5} />
            </div>
        )
    }
}


export default Calendar;