let modebtn=document.querySelector("#btn");
let curmode="dark";
let body= document.querySelector("body");

modebtn.addEventListener("click",()=>{
    if(curmode==="dark"){
        curmode="white"
        body.classList.add("dark");
        body.classList.remove("white")
    }
    else
    {
        curmode="dark"
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(curmode);
})
