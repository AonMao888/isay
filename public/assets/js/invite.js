const gname = document.querySelector(".gname");
const link = document.querySelector('.link');
const qrcode = document.querySelector(".qrcode");
const glink = window.location.href;
const roomapi = "https://raw.githubusercontent.com/AonMao888/service/main/isayrooms";
const url = new URL(glink);
const gid = url.searchParams.get('gid');

link.innerHTML = '?gid='+gid;
qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.innerHTML}`;

if(gid){
    fetch(roomapi).then(re=>re.json()).then(all=>{
        let res = all.find(({id})=>id===gid);
        gname.innerText = res.name;
    })
}