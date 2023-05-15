// function addPlus(params) {}
//p1
//Produit 1
let prixU = Number(document.querySelector(".tPrix1").innerHTML);
let quantiteU = 0;
let montantU;
let prixTotal1;

console.log(montantU);

let boutonplus1 = document.querySelector(".tAjouterplus1");

boutonplus1.onclick = function addPlus1() {
  document.querySelector(".tQuantite1").innerHTML = Number(++quantiteU);
  montantU = document.querySelector(".tMontant1").innerHTML = Number(
    quantiteU * prixU
  );
  prixTotal1 = document.querySelector(".prixTotal").innerHTML =
    Number(montantU);
};

let boutonmoins1 = document.querySelector(".tReduire1");

boutonmoins1.onclick = function supPlus1() {
  if (quantiteU > 0) {
    document.querySelector(".tQuantite1").innerHTML = Number(--quantiteU);
    montantU = document.querySelector(".tMontant1").innerHTML = Number(
      quantiteU * prixU
    );
    prixTotal1 = document.querySelector(".prixTotal").innerHTML =
      Number(montantU1);
  }
};

// //p2
//Produit 2
let prixU2 = Number(document.querySelector(".tPrix2").innerHTML);
let quantiteU2 = 0;
let montantU2 = "";
let prixTotal2;

let boutonplus2 = document.querySelector(".tAjouterplus2");

boutonplus2.onclick = function addPlus2() {
  document.querySelector(".tQuantite2").innerHTML = Number(++quantiteU2);
  montantU2 = document.querySelector(".tMontant2").innerHTML = Number(
    quantiteU2 * prixU2
  );
  prixTotal2 = document.querySelector(".prixTotal").innerHTML =
    Number(montantU2);
};

let boutonmoins2 = document.querySelector(".tReduire2");

boutonmoins2.onclick = function supPlus2() {
  if (quantiteU2 > 0) {
    document.querySelector(".tQuantite2").innerHTML = Number(--quantiteU2);
    montantU2 = document.querySelector(".tMontant2").innerHTML = Number(
      quantiteU2 * prixU2
    );
    prixTotal2 = document.querySelector(".prixTotal").innerHTML =
      Number(montantU2);
  }
};

// //p3

//Produit 3
let prixU3 = Number(document.querySelector(".tPrix3").innerHTML);
let quantiteU3 = 0;
let montantU3 = 0;
let prixTotal = 0;
console.log(prixTotal);

let boutonplus3 = document.querySelector(".tAjouterplus3");

boutonplus3.onclick = function addPlus3() {
  document.querySelector(".tQuantite3").innerHTML = Number(++quantiteU3);
  montantU3 = document.querySelector(".tMontant3").innerHTML = Number(
    quantiteU3 * prixU3
  );
  prixTotal = Number(montantU3);
};
console.log(montantU3);

let boutonmoins3 = document.querySelector(".tReduire3");

boutonmoins3.onclick = function supPlus3() {
  if (quantiteU3 > 0) {
    document.querySelector(".tQuantite3").innerHTML = Number(--quantiteU3);
    montantU3 = document.querySelector(".tMontant3").innerHTML = Number(
      quantiteU3 * prixU3
    );
    prixTotal = Number(montantU3);
    console.log(prixTotal);
  }
};
console.log(montantU3);

// Le total

// // creer conteneur
// let prixTotalConteneur = document.createElement("textContent");
// console.log(prixTotalConteneur);

// // creer node
// let prixTotalNode = document.createTextNode(prixTotal);
// console.log(prixTotalNode);

// // attacher node au conteneur
// prixTotalConteneur.appendChild(prixTotalNode);

// console.log(prixTotalConteneur.appendChild(prixTotalNode));

// document.querySelector(".prixTotal").appendChild(prixTotalNode);
