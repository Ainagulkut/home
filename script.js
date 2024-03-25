import { generateUUID } from "../utils/helpers.js";

let spinner = document.querySelector("#spinner");
let errorElement = document.querySelector("#error");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const date = document.querySelector("#date").value;
  const userType = document.querySelector("#userType").value;

  const data = { username, date, userType, id: generateUUID() };
});



function getUsers() {
    const items = fetch("https://3ebda516be373723.mokky.dev/items");
    items
        .then((data) => {
            return data.json();
        })
        .then((result) => {
            render (result)
        })
        .catch((error) => {
            return error
        });
  
}
  const root=document.querySelector(".root-table")      
 const postBtn=document.querySelector('.root-loading')
 const newUser = {
    name: Ainagul,
    age: 36,
    city: Bishkek,
};

function postStudent() {
    postBtn.innerHTML='Loading',
    fetch("https://3ebda516be373723.mokky.dev/items", {
    method: "POST",
        body: JSON.stringify(newUser),
     headers: {
        "Content-type":"application/json",
    },
    }).finally(() => {
     postBtn.innerHTML
 })
}

function render(data) {
    let html=''
    data.forEach(element => {
        html += `
        div`
    });
}