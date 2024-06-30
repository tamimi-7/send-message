//get element into varible
var inputel = document.getElementById("input");
var btmElement = document.getElementById("btn");
var pargraph = document.getElementById("msg");


btmElement.onclick = function(){
var tis = inputel.value
if (tis != "") {
    pargraph.innerHTML = tis
    inputel.value = ""
}
}