// Exercice 1: affiche Hello World dans une boite de dialogue alert();
// window.alert("Hello World");
// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
// let whatsyourname = prompt("Comment t'appelles-tu?");
// window.alert("Salut Jason");
// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
let whatsyourage = prompt("Quel âge as-tu?");
parseInt(whatsyourage, 10);
if (whatsyourage > 18) {
  window.confirm("Bienvenue Billy")
}
else { window.alert("C'est pas le bon site BILLY") };