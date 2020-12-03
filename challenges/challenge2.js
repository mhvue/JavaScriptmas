//https://scrimba.com/learn/adventcalendar/-javascript-challenge-deposit-profit-introduction-cPk7yptk?utm_source=newsletter&utm_medium=email&utm_campaign=weeklywebdevchallenge&utm_content=wwdc_advent_cal_day2&purge=true

function depositProfit(deposit, rate, threshold) {
    //  year 0 = deposit 

    //convert our percent rate to decimal
    const convertRate = rate/100

    //count to hold for years
    let count= 0;

    while (deposit < threshold){
        const yearUp = deposit * convertRate
        deposit = deposit + yearUp
        count++
    }
    
    return count;
}
