const products = [
 { name: "Clavier", price: 45, inStock: true },
 { name: "Souris", price: 25, inStock: false },
 { name: "Écran", price: 250, inStock: true },
];

let priceSum = 0;
let inStockCount = 0;

for (const product of products) {
  if (product.inStock) {
    priceSum += product.price;
    inStockCount++;
  }
}

const averagePrice = priceSum / inStockCount;
console.log("Prix moyen des produits en stocks :", averagePrice);
