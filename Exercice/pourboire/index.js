const montant = Number(prompt("Montant de la facture :"));
const pourcentage = Number(prompt("Pourcentage du pourboire :"));
const pourboire = (montant * pourcentage) / 100;
const total = montant + pourboire;
const message = `le pourboire est de : ${pourboire}.\nLe total à régler est de : ${total}.`
alert(message);