const bill =275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.30;
console.log (`the bill was ${bill}, tip was ${tip}, and the otal value ${bill + tip}`);