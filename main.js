// function addPlus(params) {}
//p1
//Produit 1

let prixU = document.getElementsByClassName("tPrix");
let boutonplus = document.getElementsByClassName("tAjouterplus");
let boutonmoins = document.getElementsByClassName("tReduire");
let quantiteU = document.getElementsByClassName("tQuantite");
let montantU = document.getElementsByClassName("tMontant");
let prixTotal = document.querySelector(".prixTotal");

let lesPrixunitaires = [];

for (let index = 0; index < prixU.length; index++) {
  lesPrixunitaires.push(+prixU[index].innerHTML);
}
console.log(lesPrixunitaires);

let lesPrixTotaux = [];
for (let index = 0; index < lesPrixTotaux.length; index++) {
  lesPrixTotaux.push(+prixTotal[index].innerHTML);
}
console.log(lesPrixTotaux);

for (let i = 0; i < quantiteU.length; i++) {
  boutonplus[i].onclick = function addPlus() {
    let laQuantité = ++quantiteU[i].innerHTML;

    montantU[i].innerHTML = laQuantité * lesPrixunitaires[i];

    let laSomme = (prixTotal.innerHTML =
      +prixTotal.innerHTML + lesPrixunitaires[i]);
    lesPrixTotaux.push(laSomme);
  };
}

for (let i = 0; i < quantiteU.length; i++) {
  boutonmoins[i].onclick = function addPlus() {
    let laQuantité = --quantiteU[i].innerHTML;
    +prixU[i].innerHTML;

    montantU[i].innerHTML = laQuantité * lesPrixunitaires[i];

    let laSomme = (prixTotal.innerHTML =
      +prixTotal.innerHTML - lesPrixunitaires[i]);
    lesPrixTotaux.push(laSomme);
  };
}

let favoRie = document.getElementsByClassName("tfavorie");

for (let i = 0; i < favoRie.length; i++) {
  favoRie[i].onclick = function () {
    if (favoRie[i].style.color == "black") {
      favoRie[i].style.color = "red";
    } else {
      favoRie[i].style.color = "black";
    }
  };
}

let listepararticle = document.getElementsByClassName("listepararticle");
let listeIcone = document.getElementsByClassName("icone");

for (let i = 0; i < listeIcone.length; i++) {
  listeIcone[i].onclick = function () {
    listepararticle[i].outerHTML = "";
    lesPrixunitaires[i].remove();
  };
}
