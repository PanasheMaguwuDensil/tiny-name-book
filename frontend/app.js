const nameInput = document.getElementById("nameInput");
const addButton = document.getElementById("addButton");
const nameList = document.getElementById("nameList");

addButton.addEventListener("click", function() {
  const name = nameInput.value;
  const listItem = document.createElement("li");

  listItem.textContent = name;
  nameList.appendChild(listItem);
  nameInput.value = "";
})
