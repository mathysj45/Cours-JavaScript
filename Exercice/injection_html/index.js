const firstName = prompt("Entrez votre prénom :");
const lastName = prompt("Entrez votre nom de famille :");
const age = prompt("Entrez votre âge :");

const userInfos = document.getElementById('user-infos');
userInfos.innerHTML = `<p>Bonjour, je m'appelle ${firstName} ${lastName} et j'ai ${age} ans.</p>`;