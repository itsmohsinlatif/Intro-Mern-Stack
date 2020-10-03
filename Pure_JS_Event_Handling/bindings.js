
console.log("Start");
function addToDo()
{
    console.log("Ading");
    console.log("New ToDo Added!");
}

function doBindings()
{
    console.log("Binding");
    var btn = document.getElementById("btnAdd");
    btn.onclick = addToDo;
}

window.onload = doBindings;
console.log("Finsih")
// doBindings();