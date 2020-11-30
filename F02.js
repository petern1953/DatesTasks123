// Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma!

const numberOfWeekdays = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth();
    const thisDay = now.getDate();
    const jan01InMilliseconds = Date.UTC(thisYear, 0, 1);
    const nowInMilliseconds = Date.UTC(thisYear, thisMonth, thisDay);
    const passedDaysThisYear = (nowInMilliseconds - jan01InMilliseconds) / 1000 / 3600 / 24;

    const jan01Date = new Date(thisYear, 0, 1);
    const jan01Day = jan01Date.getDay();
    const todaysDay = now.getDay();

    const daysBetweenThese2Days = todaysDay - jan01Day;
    const weeksPassed = (passedDaysThisYear - daysBetweenThese2Days) / 7;
    const weekDays = weeksPassed * 5 + daysBetweenThese2Days + 1;

    return weekDays;
}
console.log('A jan. 1-je óta eltelt munkanapok száma, a maival együtt: ', numberOfWeekdays());