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

        counter.elements.incrementButton.textContent = 'Incrémenter';

        counter.elements.wrapper.append(
            counter.elements.counter,
            counter.elements.incrementButton
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
    attachEvents() { // Pour la mise en place des écouteurs d'événements
        counter.elements.incrementButton.addEventListener(
            'click', 
            counter.incrementCounter
        );
    },
};