function simulationCourse(raceDistance, horse) {
return new Promise((resolve, reject) => {
    const intervalID = setInterval(() => {
        horse.distanceCovered += horse.speed;
        console.log(`${horse.name} a parcouru ${horse.distanceCovered} mètres.`);
        if (horse.distanceCovered >= raceDistance) {
            clearInterval(intervalID);
            resolve({ horseName: horse.name, message: `${horse.name} a terminé la course !` });
        }
    }, 1000);
});
};
const raceDistance = 100;
const horse1 = {
    name: 'Petit Tonnerre',
    speed: Math.floor(Math.random() * 10) + 5,
    distanceCovered: 0,
};
const horse2 = {
    name: 'petite Flamme',
    speed: Math.floor(Math.random() * 10) + 5,
    distanceCovered: 0,
};

const race = [
    simulationCourse(raceDistance, horse1),
    simulationCourse(raceDistance, horse2)
]

Promise.all(race).then(results => {
    console.log(results.map(result => result.message).join('\n'));
});

Promise.race(race).then(winner => {
    console.log(`Le gagnant de la course est : ${winner.horseName}`);
});


