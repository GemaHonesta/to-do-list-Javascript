 let ul = document.getElementById("message");
 let textbox = document.getElementById("textbox");
 let button = document.getElementById("button");


 button.addEventListener("click",function(){
    let li = document.createElement("li");
    console.log(li);
    li.className = 'list'; 
    li.innerHTML = textbox.value;
    ul.appendChild(li);
    textbox.value = "";
 });


 