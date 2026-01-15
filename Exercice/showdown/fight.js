const fight = new Promise ((resolve, reject) => {
    let round = 1;
    
    const player1 = {
        name: 'Hero',
        health: 100,
        attack: Math.floor(Math.random() * 20) + 10,
    };

    const player2 = {
        name: 'Monster',
        health: 80,
        attack: Math.floor(Math.random() * 25) + 5,
    };

    const intervalID = setInterval(() => {
        
        console.log(`Round ${round}: ${player1.name} attacks ${player2.name}!`);
        player2.health -= player1.attack;
        console.log(`${player2.name} health: ${player2.health}`);
        console.log(`Next: ${player2.name} attacks ${player1.name}!`);
        player1.health -= player2.attack;
        console.log(`${player1.name} health: ${player1.health}`);
        round++;
        if (player1.health <= 0 || player2.health <= 0) {
            clearInterval(intervalID);

            if (player1.health > 0) {
                resolve(`${player1.name} wins!`);
            }
            if (player2.health > 0) {
                reject(`${player2.name} wins!`);
            }
            else {
                reject("It's a draw!"); 
            }
        }
    }, 300);
});

fight
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log('The fight is over.');
    }
);