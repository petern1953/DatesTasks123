// Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, 
// ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

// short: 2020. jan. 11. 14: 20 (tehát évszám, a hónap neve röviden magyarul és kisbetűkkel, a nap, majd az idő a másodperc nélkül)
// long: 2020. január 11. 14: 20: 10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)

const dateObjWSortAndLong = (dateObj) => {
    const monthStrings = [
        ['jan.', 'január'],
        ['feb.', 'február'],
        ['már.', 'március'],
        ['ápr.', 'április'],
        ['máj.', 'május'],
        ['jún.', 'június'],
        ['júl.', 'július'],
        ['aug.', 'augusztus'],
        ['szep.', 'szeptember'],
        ['okt.', 'október'],
        ['nov.', 'november'],
        ['dec.', 'december'],
    ];

    const month = dateObj.getMonth();
    console.log(month);
    const shortMonthName = monthStrings[dateObj.getMonth()][0];
    const longMonthName = monthStrings[dateObj.getMonth()][1];

    const dateStringHU = dateObj.toLocaleDateString('hu');
    const timeStringHU = dateObj.toLocaleTimeString('hu');
    let shortTimeStringHU = timeStringHU.slice(0, timeStringHU.length - 3);

    let shortDateStringHU = dateStringHU.replace(`. ${month + 1}.`, `. ${shortMonthName}`);
    let longDateStringHU = dateStringHU.replace(`. ${month + 1}.`, `. ${longMonthName}`);
    // shortDateStringHU.length = shortDateStringHU.length - 4;

    let short = `${shortDateStringHU} ${shortTimeStringHU}`;
    let long = `${longDateStringHU} ${timeStringHU}`;

    return { short: short, long: long };
}
console.log(dateObjWSortAndLong(new Date()));
