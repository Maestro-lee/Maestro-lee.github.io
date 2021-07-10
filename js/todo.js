const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];
handleTodoSave();

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter(todo => todo.id !==parseInt(li.id));
    saveToDos();
    handleTodoSave();
}

function paintToDO(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    handleTodoSave();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj ={
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDO(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO);
}

function handleTodoSave(){
    if(toDos.length !==0){
        document.querySelector("#todo-form h2").innerText = "Todo";
    }
    else{
        document.querySelector("#todo-form h2").innerText = "What will you do today?";
    }
}
