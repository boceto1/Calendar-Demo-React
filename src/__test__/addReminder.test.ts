import { isCorrectData } from '../components/ReminderForm';

describe('add new Reminder', () => {
    describe('not add new Reminder', () => {
        it('the title has more than 30 chars', () => {
            const reminder = {
                id: 12343,
                title: "12345678909876543212345678976543234567865",
                city: "QUITO",
                color: "#FFFFFF",
                date: 26,
                time: "11:23",
                user: "Jean Karlo"
            }
            expect(isCorrectData(reminder))
                .toEqual('Title is more than 30 chars');
        });

        describe('there are empty fields', () => {

            it('City is empty', () => {
                const reminder = {
                    id: 12343,
                    title: "Go to the disco",
                    city: "",
                    color: "#FFFFFF",
                    date: 26,
                    time: "11:23",
                    user: "Jean Karlo"
                }
                expect(isCorrectData(reminder))
                    .toEqual('There are empty fields');
            })

            it('User is empty', () => {
                const reminder = {
                    id: 12343,
                    title: "Go to the disco",
                    city: "Guayaquil",
                    color: "#FFFFFF",
                    date: 26,
                    time: "11:23",
                    user: ""
                }
                expect(isCorrectData(reminder))
                    .toEqual('There are empty fields');
            })
        })
    })

    it('add new Reminder', () => {
        const reminder = {
            id: 12343,
            title: "Go to the disco",
            city: "Guayaquil",
            color: "#FFFFFF",
            date: 26,
            time: "11:23",
            user: "Jean Karlo"
        }
        expect(isCorrectData(reminder))
            .toEqual('YES');
    });
});