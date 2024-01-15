// Recupero l'elemento dal DOM dove voglio inserire le carte
const cardContainer = document.getElementById("cardContainer");
// Creo un array di oggetti
const info = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "./img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "./img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

console.log(info);

// Creo le card utilizzando un ciclo for
let cardsHTML = "";
for (let i = 0; i < info.length; i++) {
  const person = info[i];
  cardsHTML += `
    <div class="col mt-3">
      <div class="card" style="width: 18rem">
        <img src="${person.img}" class="card-img-top" alt="${person.name}" />
        <div class="card-body">
          <h5 class="card-title">${person.name}</h5>
          <p class="card-text">${person.role}</p>
        </div>
      </div>
    </div>
  `;
}

cardContainer.innerHTML = cardsHTML;
