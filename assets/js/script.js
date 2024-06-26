// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE :zero::
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE :uno:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
// MILESTONE :due::
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1 :stella2::
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2 :stella2: :stella2:
// Organizzare i singoli membri in card/schede. 


// Creo array di oggetti
const members = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    }, 
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }, 
];

console.log(members);

///////////////////////////////////////////////////

// // Stampo in console le informazioni per ogni membro del team
// for (let i = 0; i < members.length; i++) {
//     // Salvo oggetto corrente in variabile
//     const curMember = members[i];
//     console.log(curMember);

//     // Stampo tutte le chiavi dell'oggetto corrente attraverso for in
//     for (let key in curMember) {
//         console.log(curMember[key]);
//     }

//     console.log("----------------------");

// };

///////////////////////////////////////////////////


// Stampo in pagine le informazioni di ogni membro sottoforma di stringhe
// Cerco elemento members in pagina
// const membersElem = document.querySelector(".members");
// console.log(membersElem);
// for (let i = 0; i < members.length; i++) {
//     // Salvo oggetto corrente in variabile
//     const curMember = members[i];
//     console.log(curMember);

//     // Inserisco in pagina una lista
//     membersElem.innerHTML += `<ul class="person${i}"></ul>`

//     // Trovo elemento ul in pagina
//     const personElem = document.querySelector(`.person${i}`);
//     console.log(personElem);

//     // Stampo tutte le chiavi dell'oggetto corrente attraverso for in pagina
//     for (let key in curMember) {
//         // console.log(key);
//         console.log(curMember[key]);

//         // Trasformo la stringa foto in un immagine effettiva
//         if (key === "foto") {
//             // console.log("questa è una foto");
//             personElem.innerHTML += `<li><img src="img/${curMember[key]}" class="person-img"</li>`
//         } else {
//             personElem.innerHTML += `<li>${curMember[key]}</li>`
//         }
//     }
// };


// Organizzo i singoli membri in card
const rowMembersElem = document.getElementById("row-members");
console.log(rowMembersElem);
for (let i = 0; i < members.length; i++) {
    // Salvo oggetto corrente in variabile
    const curMember = members[i];
    console.log(curMember);

    rowMembersElem.innerHTML += `
    <div class="col mb-4">
        <div class="card" style="width: 18rem;">
            <img src="${"img/" + curMember.foto}" class="card-img-top" id="member-img">
            <div class="card-body">
                <h5 class="card-title" id="member-name">${curMember.nome}</h5>
                <p class="card-text" id="member-rule">${curMember.ruolo}</p>
            </div>
        </div>
    </div>
    `

};
