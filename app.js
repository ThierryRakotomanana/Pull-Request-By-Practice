// anonyme
let Rectangle = class {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

// nommée
let Rectangle = class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

function quantité(selectObject) {
  let qtéSélectionnée = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      qtéSélectionnée++;
    }
  }
  return qtéSélectionnée;
}