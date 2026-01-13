export const button = {
    init(buttunElement){
        buttunElement.addEventListener("mouseenter", () => {
            const x = Math.random() * (window.innerWidth - buttunElement.offsetWidth);
            const y = Math.random() * (window.innerHeight - buttunElement.offsetHeight);
            buttunElement.style.position = 'absolute';
            buttunElement.style.left = `${x}px`;
            buttunElement.style.top = `${y}px`;
        });
    }
}