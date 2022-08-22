const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  expNumber.value = "";
  expenseForm.style.display = "block";
  editForm.style.display = "none";
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

const amountInput = document.getElementById("number");
const addForm = document.getElementById("addForm");
const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");

const editForm = document.getElementById("editForm");
const saveEdit = document.getElementById("saveEdit");
const editExpValue = document.getElementById("editExpValue");
const editExpNumber = document.getElementById("editExpNumber");

const expForm = document.getElementById("expForm");
const expensesAmount = document.getElementById("expensesAmount");
const expValue = document.getElementById("expValue");
const displayExpenses = document.getElementById("displayExpenses");
const expenseForm = document.getElementById("expense-form");
const budgetform = document.getElementById("budgetform");

let expName = document.getElementById("expName");
let expQuantity = document.getElementById("expQuantity");
let expNumber = document.getElementById("expNumber");
let expNotes = document.getElementById("expNotes");
let id = 0;
let details = [];

function getBudgetAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "input can not be empty";
    amountInput.style.color = "#b80c09";
    setTimeout(() => {
      amountInput.style.color = "#495057";
      amountInput.style.border = "1px solid gray";
    }, 3000);
  } else {
    budgetAmount.innerText = amount;
    balanceAmount.innerText = amount;
    expenseForm.style.display = "block";
    budgetform.style.display = "none";
    editForm.style.display = "none";
    amountInput.value = "";
  }
}

function addExpenses(number) {
  if (!number.length) {
    // expName.style.border = "1px solid #b80c09";
    // expName.placeholder = "input can not be empty";
    // expName.style.color = "#b80c09";

    // expQuantity.style.border = "1px solid #b80c09";
    // expQuantity.placeholder = "input can not be empty";
    // expQuantity.style.color = "#b80c09";

    expNumber.style.border = "1px solid #b80c09";
    expNumber.placeholder = "input can not be empty";
    expNumber.style.color = "#b80c09";

    // expNotes.style.border = "1px solid #b80c09";
    // expNotes.placeholder = "input can not be empty";
    // expNotes.style.color = "#b80c09";

    setTimeout(() => {
      // expName.style.color = "#495057";
      // expName.style.border = "1px solid gray";
      // expName.placeholder = "input can not be empty";

      // expQuantity.placeholder = "input can not be empty";
      // expQuantity.style.border = "1px solid #b80c09";
      // expQuantity.style.color = "#b80c09";

      expNumber.placeholder = "input can not be empty";
      expNumber.style.border = "1px solid gray";
      expNumber.style.color = "#495057";

      // expNotes.style.border = "1px solid #b80c09";
      // expNotes.style.color = "#b80c09";
      // expNotes.placeholder = "input can not be empty";
    }, 3000);
  } else {
    const userExp = {
      id: id,
      // name: name,
      // quantity: parseInt(quantity),
      number: parseInt(number),
      // notes: notes,
    };
    details.push(userExp);
    displayExp(details);
    id++;
    // expName.value = "";
    // expQuantity.value = "";
    expNumber.value = "";
    // expNotes.value = "";
  }
}

function displayExp(details) {
  expValue.innerHTML = null;
  for (i = 0; i < details.length; i++) {
    expValue.innerHTML += `
  `;
  }
  calcExpenses();
  displayExpenses.style.display = "block";
}

function calcExpenses() {
  let totalExp = 0;
  for (i = 0; i < details.length; i++) {
    totalExp = details[i].number + totalExp;
  }
  expensesAmount.innerText = totalExp;
  updateBalance();
}

function updateBalance() {
  balanceAmount.innerText =
    parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
}

function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  displayExp(details);
}

function editExpDetails(id) {
  expenseForm.style.display = "none";
  budgetform.style.display = "none";
  editForm.style.display = "block";
  details.findIndex((item) => {
    if (item.id === id) {
      editExpNumber.value = item.number;
      saveEdit.children[1].id = item.id;
      modal.style.display = "block";
    }
  });
}

function getExpValue(editExpNumber, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].number = parseInt(editExpNumber);
  displayExp(details);
}

saveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getExpValue(editExpNumber.value, saveEdit.children[1].id);
});

expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expNumber.value);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudgetAmount(amountInput.value);
});
