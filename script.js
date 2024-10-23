const todoContainer = document.querySelector(".todoContainer");
const todoInput = document.querySelector(".todoInput");
const cardMainBox = document.querySelector(".card-mainContainer");
const cardBox = document.querySelector(".card-container");
// const card = document.querySelector(".container");

cardMainBox.classList.add("hide");

todoContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoValue = todoInput.value;
  const hasWord = /[a-zA-Z]/.test(todoValue);

  if (todoValue && hasWord) {
    getTodo();
    cardMainBox.classList.add("open");
    cardMainBox.classList.remove("hide");
    todoInput.value = "";
  } else {
    displayError("Please, Enter a Todo-List");
    cardMainBox.classList.add("open");
    cardMainBox.classList.remove("hide");
  }
});

// todoContainer.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let todoValue = todoInput.value;
//   // console.log(todoValue)
//   const hasWord = /[a-zA-Z]/.test(todoValue);

//   if (todoValue && hasWord) {
//     // todoValue
//     getTodo();
//     // cardMainBox.classList.remove("hide");
//     cardMainBox.classList.add("open");
//     todoInput.value = "";
//   } else {
//     displayError("Please, Enter a Todo-List");
//     // cardMainBox.classList.remove("hide");
//     cardMainBox.classList.add("open");
//     //     if(todoValue){
//     //        displayError("")
//     //     }
//   }

//   cardMainBox.classList.remove("open");
//   cardMainBox.classList.add("hide");
// });

// todoContainer.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let todoValue = todoInput.value;
//   const hasWord = /[a-zA-Z]/.test(todoValue);

//   if (todoValue && hasWord) {
//     cardMainBox.classList.add("open");
//     getTodo();
//     todoInput.value = "";
//     clearError(); // Clear any previous error
//   } else {
//     if (!document.querySelector(".error-message")) {
//       // Ensure only one error message
//       displayError("Please, Enter a Todo-List");
//     }
//   }
// });

// // Optional: Function to clear error messages if needed
// function clearError() {
//   const errorElement = document.querySelector(".error-message");
//   if (errorElement) {
//     errorElement.remove();
//   }
// }

function getTodo() {
  const card = document.createElement("div");
  const text = document.createElement("div");
  const taskAdd = document.createElement("p");
  const btn = document.createElement("div");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");


  button1.textContent = "edit";
  button1.classList.add("edit-btn", "edit-btn:hover");

  button2.textContent = "delete";
  button2.classList.add("delete-btn", "delete-btn:hover");

  // button1.addEventListener("click", () => {
  //     const newTaskContent = prompt("Edit and enter new task content:");
  //     const newTaskContentTwo = prompt("Enter new task content:");
  //     if (newTaskContent !== null) {
  //         taskAdd.textContent = newTaskContent;
  //     } else if (newTaskContentTwo === "") {
  //          taskAdd.textContent = newTaskContentTwo;
  //     }
  // });

  // button1.addEventListener("click", () => {
  //   const newTaskContent = prompt("Edit and enter new task content:");

  //   if (newTaskContent !== null && newTaskContent.trim() !== "") {
  //         alert("Enter new task content");
  //     taskAdd.textContent = newTaskContent;
  //   }
  // //   else if (newTaskContent !== null) {
  // //   }
  //   else {
  //     const newTaskContentTwo = prompt("Enter new task content:");
  //     taskAdd.textContent = newTaskContentTwo
  //       ? newTaskContentTwo
  //           : "No content provided.";

  //       taskAdd.classList.add("red")
  //   }
  // });

  // button1.addEventListener("click", () => {
  //   const newTaskContent = prompt("Edit and enter new task content:");

  //   if (newTaskContent === null || newTaskContent.trim() === "") {
  //     alert("Please enter a valid task content.");

  //     const newTaskContentTwo = prompt("Enter new task content:");
  //     if (newTaskContentTwo === null && newTaskContentTwo.trim() !== "") {
  //       // taskAdd.textContent = newTaskContentTwo;
  //       // taskAdd.classList.add("red");

  //       while (newTaskContentTwo === null || newTaskContentTwo.trim() === "") {
  //         alert("Please enter a valid task content.");
  //         newTaskContentTwo = prompt("Enter new task content:");
  //       }
  //     }
  //     // else {
  //     //   //  alert("No content provided. Please try again.");

  //     // }
  //   }
  //   // else {
  //   //   taskAdd.textContent = newTaskContent;
  //   // }
  // });

  button1.addEventListener("click", () => {
    let newTaskContent = prompt("Edit and enter new task content:");

    // Keep prompting until valid input is provided
    while (newTaskContent === null || newTaskContent.trim() === "") {
      alert("Please enter a valid task content.");
      newTaskContent = prompt("Enter new task content:");
    }

    // Update the task content and apply the red class once valid input is received
    taskAdd.textContent = newTaskContent;
  });

  // button1.addEventListener("click", () => {
  //   const newTaskContent = prompt("Edit and enter new task content:");
  //   taskAdd.textContent = newTaskContent;

  //   let newTaskContentTwo = "";

  //   // Keep prompting until valid input is entered
  //   while (newTaskContentTwo === null || newTaskContentTwo.trim() === "") {
  //     alert("Please enter a valid task content.");
  //     newTaskContentTwo = prompt("Enter new task content:");
  //   }

  //   // Once valid input is provided, update the task and add the class
  //   taskAdd.textContent = newTaskContentTwo;
  // });

  // Add event listener for deleting task

  button2.addEventListener("click", () => {
    card.remove();

     if (cardBox.children.length === 0) {
       cardMainBox.classList.add("hide");
       // Hide the cardMainBox if no items left
        cardMainBox.classList.remove("open");
    }
  });

  const todoValue = todoInput.value;
  // console.log(todoValue)
  taskAdd.textContent = todoValue;
  taskAdd.classList.add("todo-value");

  card.classList.add("container");
  text.appendChild(taskAdd);

  btn.classList.add("btn");
  btn.appendChild(button1);
  btn.appendChild(button2);

  card.appendChild(text);
  card.appendChild(btn);
  cardBox.appendChild(card);
  cardBox.style.display = "flex";
}

// function displayError(message) {
//   const errorDisplay = document.createElement("p");
//   const card = document.createElement("div");
//   errorDisplay.textContent = message;
//   errorDisplay.classList.add("errorDisplay");

//   card.appendChild(errorDisplay);
//   cardBox.appendChild(card);
//   cardBox.style.display = "flex";

//   const btn = document.createElement("div");
//   const button1 = document.createElement("button");

//   button1.textContent = "delete";
//   button1.classList.add("errorDelete-btn", "delete-btn:hover");

//   // Add event listener for deleting task
//   button1.addEventListener("click", () => {
//     card.remove();
//   });

//   btn.classList.add("errorBtn");
//   btn.appendChild(button1);

//   // card.appendChild(btn)
//   card.appendChild(btn);
//   cardBox.appendChild(card);
//   cardBox.style.display = "flex";
// }

function displayError(message) {
  // Check if an error message already exists
  if (document.querySelector(".errorDisplay")) return;

  const errorDisplay = document.createElement("p");
  const card = document.createElement("div");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.appendChild(errorDisplay);
  cardBox.appendChild(card);
  cardBox.style.display = "flex";

  const btn = document.createElement("div");
  const button1 = document.createElement("button");

  button1.textContent = "delete";
  button1.classList.add("errorDelete-btn", "delete-btn:hover");

  // Add event listener for deleting task
  button1.addEventListener("click", () => {
    card.remove();
     if (cardBox.children.length === 0) {
       cardMainBox.classList.add("hide");
       // Hide the cardMainBox if no items left
       cardMainBox.classList.remove("open");
     }
  });

  btn.classList.add("errorBtn");
  btn.appendChild(button1);
  card.appendChild(btn);

  cardBox.appendChild(card);
  cardBox.style.display = "flex";
}
