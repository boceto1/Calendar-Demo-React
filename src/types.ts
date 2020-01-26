export interface DayType {
    date: number
}

export interface WeekType {
    days: DayType[]
}


export interface Reminder {
    id: number,
    title: string,
    user: string,
    date: number,
    time: string,
    city: string
    color: string,
}