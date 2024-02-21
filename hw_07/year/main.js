function isHighYear(year){
    const febday = new Date(year, 1, 28);
    const marchDay = new Date(year, 2, 1);
    const res = (marchDay-febday)/(24*60*60*1000)
    const differenceValue = res === 2;
    return differenceValue;
}
console.log(`2021${isHighYear(2021)}`)
console.log(`2020${isHighYear(2020)}`)
console.log(`2019${isHighYear(2019)}`)
console.log(`2018${isHighYear(2018)}`)
console.log(`2017${isHighYear(2017)}`)
console.log(`2016${isHighYear(2016)}`)
