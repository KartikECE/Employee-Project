let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

function filterByProfession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }

    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let divElement = document.createElement("div");

            //add border to values
            divElement.style.borderStyle = "solid";
            divElement.style.margin ="20px 10px";
            divElement.style.borderRadius ="5px";

            divElement.innerText = item.id + " Name: " + item.name + " Profession: " + item.profession + " Age: " + item.age;
            result.append(divElement);
        }
    })
    console.log(arr);
}

filterbtn.addEventListener("click", filterByProfession);

let Name = document.getElementById("entername");
let Profession = document.getElementById("enterprofession");
let Age = document.getElementById("enterage");

let Btn = document.getElementById("Adduser");


function addUser() {
    let username = Name.value;
    let prof = Profession.value;
    let age = Age.value;

    let x = arr.length;
    ++x;

    let crr = { id: x, name: `${username}`, age: `${age}`, profession: `${prof}` }
    if(username !== "" && age !== "" && prof !== ""){
        arr.push(crr);
    }
    else{
        alert("fill complete detail.")
    }

    console.log(arr);

    Name.value = "";
    Age.value = "";
    Profession.value = "";

}

Btn.addEventListener("click", addUser);