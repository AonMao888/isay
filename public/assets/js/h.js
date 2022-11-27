const closemore = document.querySelector(".closemore");
const morebtn = document.querySelector(".morebtn");
const moremenu = document.querySelector(".moremenu");
const invitebtn = document.querySelector(".invitebtn");

morebtn.onclick=()=>{
    moremenu.style.right = "0px";
}
closemore.onclick=()=>{
    moremenu.style.right = "-519px";
}
invitebtn.onclick=()=>{
    console.log(12)
    window.location.href = `invite/?gid=${ggid.innerText}`;
}