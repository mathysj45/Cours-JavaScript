function calculatePriceTTC(priceHT, vatRate) {
    return priceHT + (priceHT * vatRate) / 100;
}
console.log(calculatePriceTTC(100, 20));
console.log(calculatePriceTTC(50, 5.5));
