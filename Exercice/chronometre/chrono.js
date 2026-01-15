export function chronometre(container) {
    let startTime = null;
    let elapdedTime = 0;
    let timerInterval = null;

    const elements = {};
    function createElements(container) {
        elements.wrapper = document.createElement('div');
        elements.display = document.createElement('p');
        elements.startButton = document.createElement('button');
        elements.stopButton = document.createElement('button');
        elements.resetButton = document.createElement('button');
        elements.startButton.textContent = 'Démarrer';
        elements.stopButton.textContent = 'Arrêter';
        elements.resetButton.textContent = 'Réinitialiser';

        elements.wrapper.append(
            elements.display,
            elements.startButton,
            elements.stopButton,
            elements.resetButton
        );
    } 
    function updateDisplay() {
        const totalSeconds = Math.floor(elapdedTime / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const milliseconds = String(elapdedTime % 1000).padStart(3, '0');
        elements.display.textContent = `${minutes}:${seconds}:${milliseconds}`;
    }
    function attachEvents() {
        elements.startButton.addEventListener('click', startChrono);
        elements.stopButton.addEventListener('click', stopChrono);
        elements.resetButton.addEventListener('click', resetChrono);
    }
    function startChrono(){
        if (timerInterval) return;
        startTime = Date.now() - elapdedTime;
        timerInterval = setInterval(() => {
            elapdedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
    function stopChrono(){
        clearInterval(timerInterval);
        timerInterval = null;
    }
    function resetChrono(){
        stopChrono();
        elapdedTime = 0;
        updateDisplay();
    }
    createElements(container);
    container.append(elements.wrapper);
    updateDisplay();
    attachEvents();
}