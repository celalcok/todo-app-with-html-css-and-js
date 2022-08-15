
// defining variables
let addTodoInput = document.getElementById("addTodoInput");
let addTodoButton = document.getElementById("addTodoButton");
let todosContainer = document.getElementById("todosContainer");
let message = document.getElementById("message");



if(todosContainer.childNodes.length <2){
    todosContainer.style.visibility="hidden";
}
else{
    todosContainer.style.visibility="visible";
}


function addTodo(){
    
    if(addTodoInput.value.length < 3){
        message.innerHTML = "Please enter some text whose character count is greater than 3";
    }
    else{


        if(todosContainer.childNodes.length < 1){
            todosContainer.style.visibility = "hidden";
        }
        else{
            todosContainer.style.visibility = "visible";
        }
        
        message.innerHTML = "";
        

        // defining todo item
        var todoItem = document.createElement("div");
        todoItem.className ="todo-item";
        
        // defining todo text
        var todoText  = document.createElement("p");
        todoText.className = "todo-text";
        todoText.innerText = addTodoInput.value;
        
        // defining todo remove button
        var todoRemoveButton = document.createElement("button");
        todoRemoveButton.className ="btn-remove";
        todoRemoveButton.innerText="Remove";
        
        // eventlistener for remove button
        todoRemoveButton.addEventListener("click", (e) =>{
            todoRemoveButton.parentElement.remove();
            if(todosContainer.childNodes.length <2){
                todosContainer.style.visibility="hidden";
            }
            else{
                todosContainer.style.visibility="visible";
            }
        })

        // Eventlistener for addTodoInput
        addTodoInput.addEventListener("keydown", ()=>{
            message.innerHTML="";
        })

        // Add children to parent element
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoRemoveButton);
        todosContainer.appendChild(todoItem);

        //Clear 
        addTodoInput.value="";
        message.innerHTML=""
    }
}


addTodoButton.addEventListener("click",addTodo);
