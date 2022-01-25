export class Calculations {

    days(month, year) {
        const dayOfWeek = (new Date(year, month)).getDay(); 
        const monthDays = 32 - new Date(year, month, 32).getDate();

        let day: any = [];
        for (let i = 1; i <= monthDays; i++) {
            day.push(i);
        }

        return day;
    }
}