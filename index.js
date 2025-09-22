const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];

let totals = [];

const calcTips = function(bill){
    if(bill > 50 && bill < 300 ){
        return bill * (15/100);
    } else{
        return bill * (20/100);
    }
}

for(item of bills){
    const tip = calcTips(item);
    tips.push(tip);

    const total = Math.floor(item + tip);
    totals.push(total)
}

console.log(tips, totals)