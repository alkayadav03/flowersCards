let main=document.getElementById("main");
let arr=["https://i.pinimg.com/1200x/4a/28/72/4a287251b6752a53f17201a48d060a14.jpg","https://i.pinimg.com/736x/93/a8/ef/93a8efd76810f8560f8e89dca200a832.jpg","https://i.pinimg.com/736x/6b/39/2e/6b392ef55b50ac9aef6a8fcf6811d907.jpg","https://i.pinimg.com/736x/3d/fc/28/3dfc2880ff72080cbf3845a76f2d6956.jpg","https://i.pinimg.com/736x/ca/1c/d9/ca1cd9c3b8a8d1d9a5599790ec4b074b.jpg"];
let s="";
for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;