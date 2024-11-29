let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    // console.log("hey welcome");
}
// 
btn2.addEventListener("click",()=>{
    console.log("my name is ahamed");
})
let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    let a=2;
    for(let a=2;a<=8;a++)
    {
        console.log(evt);
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX, evt.clientY)
        // console.log("Printing the numbers : "+a);
    }
}
btn3,addEventListener("click",()=>{
    console.log("MERN");
})

// let x=document.querySelector("btn3");
// btn3.onmousemove =()=>{
//     console.log("I am sajid ");
// };