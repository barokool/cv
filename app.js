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



const changetheme = document.querySelector(".change-theme");
changetheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})