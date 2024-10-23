const todoContainer = document.querySelector(".todoContainer");
const todoInput = document.querySelector(".todoInput");
const cardMainBox = document.querySelector(".card-mainContainer");
const cardBox = document.querySelector(".card-container");
// const card = document.querySelector(".container");

todoContainer.addEventListener("submit", e => {
    e.preventDefault();

    let todoValue = todoInput.value;
    // console.log(todoValue)
    const hasWord = /[a-zA-Z]/.test(todoValue);

    if (todoValue && hasWord) {
        // todoValue 
        cardMainBox.classList.add('open')
        getTodo()
        todoInput.value = ""
    } else {
        displayError("Please, Enter a Todo-List")
        //     if(todoValue){
        //        displayError("")
        //     }
    }
})

function getTodo() {
    const card = document.createElement("div")
    const text = document.createElement("div")
    const taskAdd = document.createElement("p")
    const btn = document.createElement("div")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")

    button1.textContent = "edit"
    button1.classList.add("edit-btn", "edit-btn:hover")


    button2.textContent = "delete"
    button2.classList.add("delete-btn", "delete-btn:hover")

    button1.addEventListener("click", () => {
        const newTaskContent = prompt("Edit and enter new task content:");
        const newTaskContentTwo = prompt("Enter new task content:");
        if (newTaskContent !== null) {
            taskAdd.textContent = newTaskContentTwo;
        }
    });

    // Add event listener for deleting task
    button2.addEventListener("click", () => {
        card.remove();
    });

    const todoValue = todoInput.value;
    // console.log(todoValue)
    taskAdd.textContent = todoValue
    taskAdd.classList.add("todo-value")

    card.classList.add("container")
    text.appendChild(taskAdd)

    btn.classList.add("btn")
    btn.appendChild(button1)
    btn.appendChild(button2)


    card.appendChild(text)
    card.appendChild(btn)
    cardBox.appendChild(card)
    cardBox.style.display = "flex"
}

function displayError(message) {
    const errorDisplay = document.createElement("p")
    const card = document.createElement("div")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.appendChild(errorDisplay)
    cardBox.appendChild(card)
    cardBox.style.display = "flex"

    const btn = document.createElement("div")
    const button1 = document.createElement("button")

    button1.textContent = "delete"
    button1.classList.add("errorDelete-btn", "delete-btn:hover")

    // Add event listener for deleting task
    button1.addEventListener("click", () => {
        card.remove();
    });

    btn.classList.add("errorBtn")
    btn.appendChild(button1)

    // card.appendChild(btn)
    card.appendChild(btn)
    cardBox.appendChild(card)
    cardBox.style.display = "flex"
}