
const MY_API =
  "https://api.elchocrud.pro/api/v1/3299eabec6b4589b950c3bce8de026f3/payments";
const table = document.querySelector("#root");

  const modal = document.getElementById("myModal");
 const btn = document.getElementById("editButton");
 const span = document.getElementsByClassName("close")[0];

 document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  let studentName = document.querySelector("#studentName").value;
  let payment = document.querySelector("#payment").value;
  let dateOfPayment = document.querySelector("dateOfPayment").value;

  

  const data = {
    studentName: studentName,
    payment: payment,
    dateOfPayment: dateOfPayment,
    payed:false,
  };
   postData(data);

});
//post
async function postData(object) {
  try {
    const response = await fetch(MY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const data =await response.json();
    
  
  } catch(error)  {
    alert("Error: " + error);
  }
}

//get
const getPayments = async () => {
  try{
    const res = await fetch(MY_API);
    console.log(res);
    const data = await res.json()
    console.log(data);
    renderPayments(data);
} catch (error) {
  alert("Error: +error");
}
};
getPayments();

function renderPayments(data) {
  let html = ``;

  data.forEach(element => {
    html += `
    <tr>
            <td>${element.studentName}</td>
            <td>${element.payment}</td>
            <td>${element.dateOfPayment}</td>
            <td class="actions">
              <input value= "${element.payed}" onchange="tooglePayed(${element._id})" id="checkbox" type="checkbox" class="checkbox" />
              <button class="edit-button" id="editButton">
                <img src="./assets/icons/edit.svg" alt="" />
              </button>
              <button class="delete-button" id="deleteButton">
                <img src="./assets/icons/deleteIcon.svg" alt="" />
              </button>
            </td>
          </tr>
    `;
    
  });
  table.innerHTML = html;
}


btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

async function tooglePayed(id) {
  const newData = {
  
    payed: true
  };

  try {
    const response = await fetch(`${MY_API}/${id}`,{
     method: "PATCH",
      headers:{
      "Content-Type": "application/json",
      },
    body,
    });
    
  const data = await response.json();
  } catch (error) {
  alert("Error: +error");
}
}