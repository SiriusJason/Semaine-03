//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
      let numberOne = document.getElementById('first-number').value;
      let numberTwo = document.getElementById('second-number').value;
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne + parsednumberTwo;
      console.log(result);
    });
}

function substractionOnClick() {
  document
    .getElementById('soustraction')
    .addEventListener('click', function substract() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
      let numberOne = document.getElementById('first-number').value;
      let numberTwo = document.getElementById('second-number').value;
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne - parsednumberTwo;
      console.log(result);
    });
}

function divisionOnClick() {
  document
    .getElementById('division')
    .addEventListener('click', function division() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
      let numberOne = document.getElementById('first-number').value;
      let numberTwo = document.getElementById('second-number').value;
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = numberOne / numberTwo;
      console.log(result);
    });
}

function multiplicationOnClick() {
  document
    .getElementById('multiplication')
    .addEventListener('click', function multiplication() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
      let numberOne = document.getElementById('first-number').value;
      let numberTwo = document.getElementById('second-number').value;
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = numberOne * numberTwo;
      console.log(result);
    });
}
