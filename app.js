const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".container-form input");
const ul = document.querySelector(".todo-list");
const removeBtn = document.querySelector(".delete-btn");
const text="Thai Doan Gia Bao"
const h5=document.querySelector(".navbar-brand");
let index=0;

setInterval(()=> {
    h5.innerText=text.slice(0,index);
    index++;
    if (index>text.length)
    index=0;
},100)



addBtn.addEventListener("click",function(){
    if (!test(input.value))
        return false; 
    else   {
    var inputValue=input;
    inputValue=document.createTextNode(input.value);
    var li=document.createElement("li");
    li.appendChild(inputValue);
    ul.appendChild(li);
    input.value=""; 
    }   
    event.preventDefault();
})

function test(input){
    if (input==="")
        return false;
    else
        return true;
}


removeBtn.addEventListener("click",function(){
    var li = document.querySelector(".todo-list li");
    ul.removeChild(li);
})

const changetheme = document.querySelector(".change-theme");
changetheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})