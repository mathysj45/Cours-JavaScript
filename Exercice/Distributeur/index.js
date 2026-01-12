const braverageWaterPrice = Number(1.5);
const braverageWaterQauntity = 5;
const braverageWaterName = "Eau";

const braverageSodaPrice = Number(2);
const braverageSodaQauntity = 0;
const braverageSodaName = "Soda";

const braverageJuicePrice = Number(2.5);
const braverageJuiceQauntity = 2;
const braverageJuiceName = "Jus";

const braverageCofeePrice = Number(0.8);
const braverageCofeeQauntity = 10;
const braverageCofeeName = "Café";

let braverageName, braveragePrice, braverageQauntity;

const choice = prompt("Que souhaitez-vous acheter ? (Eau, Soda, Jus, Café)");

if (choice === "Eau") {
  braverageName = braverageWaterName;
  braveragePrice = braverageWaterPrice;
  braverageQauntity = braverageWaterQauntity;
}

else if (choice === "Soda") {
  braverageName = braverageSodaName;
  braveragePrice = braverageSodaPrice;
  braverageQauntity = braverageSodaQauntity;
}

else if (choice === "Jus") {
  braverageName = braverageJuiceName;
  braveragePrice = braverageJuicePrice;
  braverageQauntity = braverageJuiceQauntity;
}

else if (choice === "Café") {
  braverageName = braverageCofeeName;
  braveragePrice = braverageCofeePrice;
  braverageQauntity = braverageCofeeQauntity;
}

if (braverageName !== undefined) {
  const amount = Number(prompt(`L'${braverageName} coûte ${braveragePrice}€. Combien insérer-vous ?`));
  if (amount === braveragePrice && braverageQauntity > 0) {
    alert(`Voici votre ${braverageName}. Merci et à bientôt !`);
  }
  else if (braverageQauntity <= 0) {
    alert(`Désolé, il n'y a plus d'${braverageName} disponible.`);
  }
  else if (amount > braveragePrice) {
    const change = amount - braveragePrice;
    alert(`Voici votre ${braverageName}. Votre monnaie est de ${change}€. Merci et à bientôt !`);
  }
  else {
    alert(`Montant insuffisant pour acheter de l'${braverageName}.`);
  }
}
else {
  alert("Produit indéfinie.");
}