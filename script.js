/*const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.25 : bill * 0.30;
console.log(`the bill was ${bill}, tip was ${tip}, and the otal value ${bill + tip}`);*/

/*for (let num=1; num <=50; num++){
    if(num % 2 ===0){
        console.log (`${num} juft son`);
    }else if( num % 2 ===1){
        console.log (`${num} toq son`)
    }
}

"use script";
const calctip = function (bill){
    const tip = bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calctip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
};

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));*/

//---------------------------------------------------------------------------------

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 45

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  // sum = 0 + 1
  // sum = 1 + 2
  // sum = 3 + 3
  // sum = 6 + 4
  // sum = 10 + 5
  // sum = 15 + 6
  // sum = 21 + 7
  // sum = 28 + 8
  // sum = 36 + 9
  // sum = 45
}
console.log(sum);
