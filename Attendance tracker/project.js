const students = [
  { name: "Aarav", rollNo: 101, attendance: "present" },
  { name: "Ananya", rollNo: 102, attendance: "present" },
  { name: "Vivaan", rollNo: 103, attendance: "present" },
  { name: "Diya", rollNo: 104, attendance: "present" },
  { name: "Aditya", rollNo: 105, attendance: "present" },
  { name: "Kiara", rollNo: 106, attendance: "present" },
  { name: "Krish", rollNo: 107, attendance: "present" },
  { name: "Aanya", rollNo: 108, attendance: "present" },
  { name: "Arjun", rollNo: 109, attendance: "present" },
  { name: "Meera", rollNo: 110, attendance: "present" },
  { name: "Rohan", rollNo: 111, attendance: "present" },
  { name: "Siya", rollNo: 112, attendance: "present" },
  { name: "Kabir", rollNo: 113, attendance: "present" },
  { name: "Ishita", rollNo: 114, attendance: "present" },
  { name: "Yash", rollNo: 115, attendance: "present" },
  { name: "Riya", rollNo: 116, attendance: "present" },
  { name: "Dev", rollNo: 117, attendance: "present" },
  { name: "Sneha", rollNo: 118, attendance: "present" },
  { name: "Aryan", rollNo: 119, attendance: "present" },
  { name: "Nisha", rollNo: 120, attendance: "present" }
];


// now remaining lines are 123


let maindiv = document.getElementById("main-div");
let maintitle = document.getElementById("title");
maindiv.classList.add("container", "text-center");

let i = 1, k = 0;

let rowdiv;

students.forEach(element => {
  if (i % 2 != 0) {
    rowdiv = document.createElement("div");
    rowdiv.classList.add("row", "gx-5");
    maindiv.append(rowdiv);
  }
  i++;
  let outerdiv = document.createElement("div");
  outerdiv.classList.add("col", "mt-4");
  rowdiv.append(outerdiv);
  let innerdiv = document.createElement("div");
  outerdiv.append(innerdiv);
  innerdiv.classList.add("border", "p-2", "rounded", "bg-dark-subtle", "cards");
  let namespan = document.createElement("span");
  namespan.classList.add("name", "nametext");
  namespan.style.marginRight = "128px";
  namespan.style.display = "inline-block";
  namespan.style.width = "80px";
  namespan.innerText = element.name;
  let rollspan = document.createElement("span");
  rollspan.classList.add("rollno", "rolltext");
  rollspan.style.marginRight = "56px";
  rollspan.innerText = element.rollNo;
  let prebutton = document.createElement("button");
  prebutton.innerText = "present";
  prebutton.classList.add("btn", "btn-success", "ms-3", "present")
  let absbutton = document.createElement("button");
  absbutton.classList.add(".absent")
  absbutton.innerText = "absent";
  absbutton.classList.add("btn", "btn-danger", "ms-3", "absent")
  let showdiv = document.createElement("span");
  showdiv.innerText = students[k].attendance;
  showdiv.style.color = "green";
  showdiv.style.marginLeft = "32px";
  showdiv.classList.add("text-center", "showattend");
  innerdiv.append(rollspan, namespan, prebutton, absbutton, showdiv);
});




//this variables should not be deleted at any cost
let attendanceshow = document.querySelectorAll(".showattend");
let cards = document.getElementsByClassName("cards");





let presentcount = document.getElementById("present-count");
let absentcount = document.getElementById("absent-count");
presentcount.innerText = students.length;
let nametext = document.getElementsByClassName("nametext");
let rolltext = document.getElementsByClassName("rolltext");

//logic of absent buttons

let presentbutton = document.getElementsByClassName("present");

let absent = document.querySelectorAll(".absent");
let present = document.querySelectorAll(".present");
let showtext = document.querySelectorAll(".showattend");


let absentlastdisplay = document.getElementById("absentdisplay");

let j = 1;

  let absentrolls=[];

  Array.from(absent).forEach((element) => {
    element.classList.add("countsattendees");
});

let presstud = 20;
let absstud = 0;

Array.from(absent).forEach((element,index) => {
  element.addEventListener("click", () => {
    students[index].attendance = "absent";
    presstud = 0;
    absstud = 0;

      absentrolls = [];

      students.forEach((stud)=>{
        if(stud.attendance == "present"){
          ++presstud;
        }else if(stud.attendance == "absent"){
          ++absstud;
          absentrolls.push(stud.rollNo);
          console.log(stud.rollNo)
          console.log(absentrolls);
        }
      })

      absentlastdisplay.innerText = absentrolls;
      

      presentcount.textContent = presstud;
      absentcount.textContent = absstud;
      attendanceshow[index].textContent = "absent";
      attendanceshow[index].style.color = "red";
      cards[index].classList.remove("border");
      cards[index].classList.add("border","border-danger");
      element.classList.remove("countsattendees");
  })
});

console.log(absentrolls);

let m=1;

Array.from(present).forEach((element,index)=>{
    element.addEventListener("click", ()=>{
    
      absentrolls = [];

        students[index].attendance = "present";
    presstud = 0;
    absstud = 0;

          students.forEach((stud,index)=>{
        if(stud.attendance == "present"){
          ++presstud;
        }else if(stud.attendance == "absent"){
          ++absstud;
          absentrolls.push(stud.rollNo);
        }
      })

      absentlastdisplay.innerText = absentrolls;

       presentcount.textContent = presstud;
      absentcount.textContent = absstud;
      attendanceshow[index].textContent = "present";
      attendanceshow[index].style.color = "green";
      cards[index].classList.remove("border");
      element.classList.remove("counterofattendance");

    })
});

let lastsection = document.getElementById("lastsection");
let title = document.getElementById("title");
lastsection.style.marginBottom = "56px";

let lastcols = document.getElementsByClassName("lastcols");

let themechange = document.getElementById("themechange");
themechange.addEventListener("click", () => {
  themechange.classList.toggle("darktheme");
  if (themechange.classList.contains("darktheme")) {
    document.body.style.backgroundColor = "black";
    maintitle.classList.remove("text-primary-emphasis");
    maintitle.style.color = "white";
    themechange.style.fill = "rgb(80, 80, 80)";

clearallButton.style.backgroundColor = "white";
clearallButton.style.color = "black";

    for (let c of cards) {
      console.log(c);
      c.classList.remove("bg-dark-subtle");
      c.style.backgroundColor = "rgb(24, 24, 24)";
      c.style.color = "rgb(204, 204, 204)";
      for (let lc of lastcols) {
        lc.classList.remove("bg-light");
        lc.style.backgroundColor = "rgb(35, 35, 35)";
        lc.style.color = "rgb(204, 204, 204)";
      }
    }
  }else{
    document.body.style.backgroundColor = "white";
    maintitle.classList.add("text-primary-emphasis");
    themechange.style.fill = "rgba(0, 0, 0, 0.5)";
    clearallButton.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    for (let c of cards) {
      console.log(c);
      c.classList.add("bg-dark-subtle");
      c.style.color = "black";
      for (let lc of lastcols) {
        lc.classList.remove("bg-light");
        lc.style.backgroundColor = "rgba(248, 249, 250, 1)";
        lc.style.color = "black";
      }
    }
  }
})

// console.log(absentrolls);

// let ansabsent = [];


cards = document.getElementsByClassName("cards");

btnabsent = document.querySelectorAll(".absent");

clearallButton=  document.getElementById("clearAll");

clearallButton.style.border = "none";
clearallButton.style.fontSize = "18px";
clearallButton.style.padding = "16px";
clearallButton.style.marginBottom = "48px";
clearallButton.style.borderRadius = "10px";
clearallButton.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

clearallButton.addEventListener("click",(e)=>{
  e.preventDefault();
  window.location.reload();
});


//to remove the numbers which got present after pressing the button of absent , two methods can be used:
//delete and filter.

