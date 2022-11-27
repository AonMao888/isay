const socket = io();
const roomapi = "https://raw.githubusercontent.com/AonMao888/service/main/isayrooms";
let me = prompt("Enter your name!");
const inp = document.querySelector(".inp");
const menu = document.querySelector(".menu");
const sendbtn = document.querySelector(".send");
const allmsg = document.querySelector(".allmsg");
const gname = document.querySelector(".gname");
const gicon = document.querySelector(".gicon");
const inn = document.querySelector(".in"); 
const ed = document.querySelector(".ed"); 
const qrcode = document.querySelector(".qrcode"); 
const closemenu = document.querySelector(".closemenu");
const omenu = document.querySelector(".omenu");
let ggid = document.querySelector(".gid");
let pop = document.querySelector(".pop");
let bottom = document.querySelector(".bottom");
const link = window.location.href;
const url = new URL(link);
const gid = url.searchParams.get("gid");

function closem(){
    menu.style.left = '-639px';
}
function om(){
    menu.style.left = '0';
}


fetch(roomapi).then(re=>re.json()).then(all=>{
    for (let i = 0; i < all.length; i++) {
        menu.innerHTML += `<a href="?gid=${all[i].id}"><img src="${all[i].icon}" alt=""><h1>${all[i].name}<p>Created at ${all[i].created}</p></h1></a>`;
    }
})
if(gid){
    ggid.innerText = gid;
    fetch(roomapi).then(re=>re.json()).then(all=>{
        let res = all.find(({id})=>id===gid);
        ggid.innerText = res.id;
        gname.innerText = res.name;
        gicon.src = res.icon;
        inn.innerHTML = `<img src="${res.background}" alt="">
        <div class="d"><img src="${res.icon}" alt=""><h2>${res.name}<span>${res.id}</span></h2></div>`;
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.href}`;
        ed.innerText = 'Created at '+res.created;
    })
}
sendbtn.onclick=()=>{
    if(inp.value !=""){
        send();
    }
}
inp.onchange=()=>{
    if(inp.value !=''){
        send()
    }
}
function send(){
    socket.emit("send",{
        text:inp.value,
        sender: me,
        time:Date()
    })
    inp.value = "";
}
socket.on("send",(data)=>{
    if(data.sender == me){
        allmsg.innerHTML += `<div class="msg out"><div class="tt"><p>${data.text}</p><div class="d"><h2><span>${data.time}</span></h2></div></div></div>`;
    }else{
        allmsg.innerHTML += `<div class="msg in"><div class="tt"><p>${data.text}</p><div class="d"><h1>S</h1><h2>${data.sender}<span>${data.time}</span></h2></div></div></div>`;
    }
})

function more(){
    closemore.style.right="-519px"
    //bottom.style.bottom= '0'
    console.log("dsaj")
}