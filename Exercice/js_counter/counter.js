export const counter = {
    // propriétés (variable d'un objet)
    data: {}, // Pour stocker les données relatives au compteur
    elements: {}, // Pour stocker les éléments du DOM

    // méthodes (fonction d'un objet)
    init(container) { // Initialiser l'application
        counter.data.count = 0;
        counter.creatElements(container);
        counter.updateDisplay();
        counter.attachEvents();
    },
    creatElements(container) { // Créer et stocker les éléments du DOM
        counter.elements.wrapper = document.createElement('div');
        counter.elements.counter = document.createElement('p');
        counter.elements.incrementButton = document.createElement('button');
        counter.elements.decrementButton = document.createElement('button');
        counter.elements.resetButton = document.createElement('button');

        counter.elements.incrementButton.textContent = 'Incrémenter';
        counter.elements.decrementButton.textContent = 'Décrémenter';
        counter.elements.resetButton.textContent = 'Réinitialiser';

        counter.elements.wrapper.append(
            counter.elements.counter,
            counter.elements.incrementButton,
            counter.elements.decrementButton,
            counter.elements.resetButton
        );

        container.append(counter.elements.wrapper);
    },
    updateDisplay() { // Mettre à jour le DOM
        counter.elements.counter.textContent = counter.data.count;
    },
    incrementCounter() { // Incrémenter les valeurs du compteur
        counter.data.count += 1;
        counter.updateDisplay();
    },
    decrementCounter() { // Décrémenter les valeurs du compteur
        counter.data.count -= 1;
        counter.updateDisplay();
    },
    resetCounter() { // Réinitialiser les valeurs du compteur
        counter.data.count = 0;
        counter.updateDisplay();
    },
    attachEvents() { // Pour la mise en place des écouteurs d'événements
        counter.elements.incrementButton.addEventListener(
            'click', 
            counter.incrementCounter,
            
        );
        counter.elements.decrementButton.addEventListener(
            'click',
            counter.decrementCounter,
            
        );
        counter.elements.resetButton.addEventListener(
            'click',
            counter.resetCounter,
        );
    },
};