const genBtn = document.getElementById("genBtn");
const reset = document.getElementById("nothing");

genBtn.onclick = function(){
    let num = Math.floor((Math.random()*100)+1);
    document.getElementById("place").textContent = num;
}

reset.onclick = function(){
    document.getElementById("place").textContent = "";
}