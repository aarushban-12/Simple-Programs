function addItem() {
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const del = document.createElement("td");
  const button = document.createElement("button");
  const tableRow = document.createElement("tr");
  const tbody = document.getElementById("body");
  
  var task = document.getElementById("task");
  var date = document.getElementById("date");
  td1.textContent = task.value;
  td2.textContent = date.value;

  button.classList.add("btn", "btn-link", "p-0");
  button.id = "x";
  button.textContent = "Delete";

  button.addEventListener('click', () => {
    var row = button.parentNode.parentNode;

  // Remove the row from the table
    row.remove(); 
  });

  del.appendChild(button);
  tableRow.appendChild(td1);
  tableRow.appendChild(td2);
  tableRow.appendChild(del);
  tbody.appendChild(tableRow);
}


let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

