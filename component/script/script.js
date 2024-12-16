const items = [
  { tag: "a", href: "./index.html", text: "Index" },
  { tag: "a", href: "./exercice1.html", text: "Exercice 1" },
  { tag: "a", href: "./exercice2.html", text: "Exercice 2" },
  { tag: "a", href: "./exercice3_4.html", text: "Exercice 3 & 4" },
  { tag: "a", href: "./formulaire.html", text: "formulaire" },
  { tag: "a", href: "./Jeu_Des_Base.html", text: "jeu de base" },
  { tag: "a", href: "./maison_svg.html", text: "Maison svg" },
  { tag: "a", href: "./Exemple_Base_SVG.html", text: "exemple" },
];

const ul = document.createElement("ul");

for (let i = 0; i < items.length; i++) {
  let item = document.createElement(items[i].tag);
  item.setAttribute("href", items[i].href);
  item.innerHTML = items[i].text;
  let li = document.createElement("li");
  li.appendChild(item);
  ul.appendChild(li);
}
const navbar = document.getElementById("navbar");
navbar.appendChild(ul)