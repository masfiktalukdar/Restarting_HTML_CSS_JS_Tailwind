/*

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


*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const {players:[players1, players2]} = game;
const {odds:{team1, x: draw, team2 }} = game;

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ... fieldPlayers2] = players2;

const allPlayer = [...players1, ...players2];

const players1Final = [...players1, "Thiago", 'Coutinho','Perisic'];

console.log(team2)
