import React, { Component } from "react";
import Week from './Week';

class Calendar extends Component {

    titleDays = (nameDays: string[]) =>
        nameDays.map(
            name =>
                <div className="col-1 border border-secondary d-flex justify-content-center DayNames">
                    {name}
                </div>)

    render() {
        const nameDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const days1: number[] = [0, 0, 0, 1, 2, 3, 4];
        const days2: number[] = [5, 6, 7, 8, 9, 10, 11];
        const days3: number[] = [12, 13, 14, 15, 16, 17, 18];
        const days4: number[] = [19, 20, 21, 22, 23, 24, 25];
        const days5: number[] = [26, 27, 28, 29, 30, 31, 0];
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