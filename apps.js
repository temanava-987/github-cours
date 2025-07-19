//DOM 
const calcul = [...document.querySelectorAll('.bouton')];
const listeKeycode = calcul.map(touche => touche.dataset.key);
const result = document.querySelector('.result');

document.addEventListener('keydown' , (e) => {
    const valeur = e.keyCode.toString();
    calculer (valeur)
})

document.addEventListener('click' , (e) => {
    const valeur = e.target.dataset.key;
    calculer (valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){
        switch(valeur){
            case "8":
                result.textContent = "";
                break
            case '13':
                const entrer = eval(result.textContent);
                result.textContent = entrer;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = calcul[indexKeycode];
                result.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert ('Une erreur est survenue dans votre calcul :' + e.message)
})