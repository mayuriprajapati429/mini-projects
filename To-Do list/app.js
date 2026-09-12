//initialization of the js variables

let addbutton = document.getElementById("addButton");
let clearall = document.getElementById("clearAll");
let addinput = document.getElementById("input-task");
let taskcontainer = document.getElementById("boxes");
let tasksbox = document.getElementsByClassName("box");
let completed = document.getElementById("clearCompleted")

let todos = [];
let taskval;

addbutton.addEventListener("click", ()=>{
    //whenever the add button will be clicked a task will be added to localstorage and input field will be empty then
    if(addinput.value==""){
        return;
    }
    taskval = addinput.value.trim();
    addinput.value=""
    let task = {
        work:taskval,
        isCompleted:false,
        isChecked:false
    }
    todos.push(task);
    localStorage.setItem("todotasks", JSON.stringify(todos));
    window.location.reload();
})

addinput.addEventListener("keyup", (e)=>{
    //the task can be added using enter key also
    if(e.key === "Enter"){
         if(addinput.value==""){
        return;
    }
    taskval = addinput.value.trim();
    addinput.value=""
    let task = {
        work:taskval,
        isCompleted:false,
        isChecked:false
    }
    todos.push(task);
    localStorage.setItem("todotasks", JSON.stringify(todos));
    window.location.reload();
    }
})

clearall.addEventListener("click", ()=>{
    //whenever the clear button is clicked , localstorage will be empty
   window.location.reload()
   localStorage.clear()
})

todos = JSON.parse(localStorage.getItem("todotasks"))||[];

let i=0;

todos.forEach(element => {
    //this code snippet creates design in accordance with available tasks in localstorage
    let outerdiv = document.createElement("div");
    outerdiv.classList.add("box");
    let innerspan = document.createElement("span");
    innerspan.classList.add("task");
    innerspan.textContent=element.work;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("taskcheck");
    outerdiv.append(checkbox);
    outerdiv.append(innerspan);
    taskcontainer.append(outerdiv);
    i++;
});



let taskcheckbox = document.querySelectorAll(".taskcheck");
let maintext = document.querySelectorAll(".task");

taskcheckbox.forEach((chkbox,index)=>{
    //this code snippet sets the value of isCompleted property in accordnace with user interaction
    chkbox.addEventListener("click", ()=>{
        if(todos[index].isChecked == false){
            todos[index].isChecked =true;
            todos[index].isCompleted = true;
            localStorage.setItem("todotasks", JSON.stringify(todos))
            maintext[index].style.textDecoration = "line-through"
                
        }else{
            todos[index].isChecked = false;
            todos[index].isCompleted =false;
            chkbox.checked = false;
            localStorage.setItem("todotasks", JSON.stringify(todos))
            maintext[index].style.textDecoration = "none"
            localStorage.removeItem(todos[index])
        }
    })
})


todos.forEach((elem,index)=>{
    if(elem.isChecked){
        maintext[index].style.textDecoration = "line-through"
        taskcheckbox[index].checked=true;
    }else{
        maintext[index].style.textDecoration = "none"
    }
})


completed.addEventListener("click", ()=>{
    //this will remove the tasks which are already done and then active tasks will be dispplayed on the screen
     todos = todos.filter((elem)=>{
        return !elem.isChecked    
    } )
    localStorage.setItem("todotasks", JSON.stringify(todos))
    window.location.reload()
})
