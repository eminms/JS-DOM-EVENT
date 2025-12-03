let body = document.querySelector("body");

let myInput = document.createElement("input");
myInput.placeholder = "Write Todo";

let myInputText = document.createElement("input");
myInputText.placeholder = "Write task";

let myBtn = document.createElement("button");
myBtn.textContent = "Add Todo";

let myUl = document.createElement("ul");
let myBodyUl = document.createElement("ul");

function addTodo() {
  if (myInput.value == "") {
    alert("Bos olammaz!!!");
  } else {
    let myLi = document.createElement("li");
    let myBodyLi = document.createElement("li");
    myBodyLi.classList.add("lii");
    let doneBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    doneBtn.style.display = "block";
    deleteBtn.style.display = "block";
    editBtn.style.display = "block";
    myLi.textContent = myInput.value;
    myBodyLi.textContent = myInputText.value;
    deleteBtn.innerText = "🗑️";
    doneBtn.innerText = "✅";
    editBtn.innerText = "🖉";
    myBodyLi.style.display = "flex";
    myBodyLi.style.alignItems = "center";
    myLi.style.display = "flex";
    myLi.style.padding = "20px 30px";
    myLi.style.alignItems = "center";
    myLi.style.gap = "18 px";

    myInput.value = "";
    myInputText.value = "";
    myBodyLi.append(doneBtn, deleteBtn, editBtn);
    myUl.append(myLi);
    myLi.append(myBodyUl);
    myLi.append(myBodyLi);

    deleteBtn.addEventListener("click", () => {
      myUl.removeChild(myLi);
      myBodyUl.removeChild(myBodyLi);
    });
    doneBtn.addEventListener("click", () => {
      myLi.style.color = "green";
      myLi.style.textDecoration = "line-through";
    });
    editBtn.addEventListener("click", () => {
      
    });
  }
}

myBtn.addEventListener("click", addTodo);

body.append(myInput);
body.append(myInputText);
body.append(myBtn);
body.append(myUl);
body.append(myBodyUl);
