const orders = [
 { id: 1, customer: "Alice", amount: 150, status: "livrée", products: 3 },
 { id: 2, customer: "Bob", amount: 85, status: "en cours", products: 2 },
 { id: 3, customer: "Charlie", amount: 200, status: "livrée", products: 5 },
 { id: 4, customer: "Diana", amount: 45, status: "annulée", products: 1 },
 { id: 5, customer: "Alice", amount: 120, status: "livrée", products: 2 }
];

// 1. map() : ajouter 10% de frais.
const ordersWithFees = orders.map(order => ({
    ...order,
    amount: order.amount * 1.1
}));
console.log("Commandes avec frais ajoutés :", ordersWithFees);

// 2. filter() : les commandes livrées.
const deliversOrders = orders.filter (order => order.status === "livrée");
console.log("Commandes livrées :", deliversOrders);

// 3. reduce() : Calculer le chiffre d'affaires total.
const totalRevenue = orders.reduce((total, order) => total + order.amount, 0);
console.log("Chiffre d'affaires total :", totalRevenue);

// 4. find() : Trouver une commande par ID.
const orderById = orders.find(order=> order.id === 3);
console.log("Commande avec ID 3 :", orderById);

// 5. sort() : Trier les commandes par montant décroissant.
const sorteOrders = orders.slice().sort((a,b) => b.amount - a.amount);
console.log("Commandes triées par montant décroissant :", sorteOrders);