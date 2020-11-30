// Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, 
// ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

// short: 2020. jan. 11. 14: 20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap, majd az idő a másodperc nélkül)
// long: 2020. január 11. 14: 20: 10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)

const secondsFromThisYearJan01 = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth();
    const thisDay = now.getDate();
    const jan01InMilliseconds = Date.UTC(thisYear, 0, 1);
    const nowInMilliseconds = Date.UTC(thisYear, thisMonth, thisDay);
    return (nowInMilliseconds - jan01InMilliseconds) / 1000;
}
console.log('másodpercek jan 1-je óta: ', secondsFromThisYearJan01());
console.log('eltelt napok jan 1-je óta: ', secondsFromThisYearJan01() / 3600 / 24);
