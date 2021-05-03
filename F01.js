// Írj egy függvényt, amelynek a visszatérési értéke az adott év 01.01. óta eltelt másodpercek száma!

const secondsFromThisYearJan01 = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth();
    const thisDay = now.getDate();
    const jan01InMilliseconds = Date.UTC(thisYear, 0, 1);
    const nowInMilliseconds = Date.UTC(thisYear, thisMonth, thisDay);
    return (nowInMilliseconds - jan01InMilliseconds) / 1000;
}
console.log('másodpercek jan. 1-je óta: ', secondsFromThisYearJan01());
console.log('eltelt napok jan. 1-je óta: ', secondsFromThisYearJan01() / 3600 / 24);
