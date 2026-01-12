const temperatures = [7, 10, 1, 3, 27, 19];
const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let sum = 0;
let maxTemp = -Infinity;
let minTemp = Infinity;
for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
    if (temperatures[i] > maxTemp) {
        maxTemp = temperatures[i];
      }
    if (temperatures[i] < minTemp) {
        minTemp = temperatures[i];
      }
}
const averageTemp = sum / temperatures.length;
console.log("Températures enregistrées cette semaine :");
for (let i = 0; i < temperatures.length; i++) {
    console.log(days[i] + " : " + temperatures[i] + "°C");
}
console.log("La température moyenne de la semaine est de :",averageTemp,"°C");
console.log("La température maximale de la semaine est de :",maxTemp,"°C");
console.log("La température minimale de la semaine est de :",minTemp,"°C");