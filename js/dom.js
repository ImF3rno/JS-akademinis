document.querySelector('article').style.backgroundColor='lightblue';

document.querySelector('p').innerHTML="<strong>Labai gerai naujiena</strong>";

for(let text of document.querySelectorAll('h4')){
    text.textContent="Labas rytas lietuva";
}

const ul=document.createElement('ul');
const li=document.createElement('li');
li.textContent="Labai svarbus darbas";


const table=document.createElement("table");
for(let i=0;i<3;i++) {
    const row=document.createElement("tr");
    for(let j=0;j<10;j++) {
        const cell=document.createElement("td");
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.querySelector('body').appendChild(table);
document.querySelector('section').appendChild(table);
table.setAttribute("border", "2");
  
/*
* Naudodami JS sukurti HTML lentele, kuria sudaro 3 eilutes ir 10 stulpeliu
*/
