/* События */
const buttonAdd = document.getElementsByClassName("button_add")[0],
      modalAdd = document.getElementById("modalAdd"),
      modalAddTriangle = document.getElementsByClassName("triangle")[0],
      close_add = document.getElementsByClassName("close_add")[0];

function clickAdd(){
    // buttonAdd.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.5)';
    buttonAdd.style.background = "#C2E4FE";
    modalAdd.style.display = "block";
    modalAddTriangle.style.display = "block";
}

localData = localStorage.getItem("array")
for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

function createClick(){
    // localStorage.clear();
    // example 25 ноября, Кутеж, Серж
    /*let localData = JSON.parse(localStorage.getItem("array"));
    const input =  document.getElementById("input_add").value,
          split = input.split(",");

    split[0].trim();
    if(localStorage.length > 0 && localData.indexOf(split[0]) != -1)
    {
        alert("На это число уже записано другое событие!")
    }
    else
    {
        let array = [split[0], split[1].trim(), split[2].trim()];
        if(localStorage.length > 0) {
            localData.push(split[0])
            localData.push(split[1].trim)
            localData.push(split[2].trim)
        }
        localStorage.setItem("array", JSON.stringify(array));
    }*/
}

close_add.onclick = function(){
    resetButtonAdd();
}

function updateClick(){
    createEvents();
}

/*window.onclick = function(event){
    if(event.target == modalAdd){
        resetButtonAdd();
    }
    console.log(event.target)
}*/

function resetButtonAdd(){
    buttonAdd.style.background = "#0271C7";
    modalAdd.style.display = "none";
    modalAddTriangle.style.display = "none";
}

/*function createEvents(){
    const events = JSON.parse(localStorage.getItem("array"));
}*/