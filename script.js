let user="";
let i=0;
let score=0;

function entrar(){
user=document.getElementById("name").value;
if(user==="") return;

document.getElementById("login").style.display="none";
}

function show(p){
document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
document.getElementById(p).classList.add("active");
}

const quiz=[
{q:"O que é cidadania digital?",a:["Uso correto da internet","Jogo","Virus"],c:0},
{q:"IA é?",a:["Máquina inteligente","Navegador","App"],c:0},
{q:"Segurança digital protege?",a:["Dados","Fotos","Vídeos"],c:0}
];

function load(){
let q=quiz[i];
document.getElementById("q").innerText=q.q;

let box=document.getElementById("a");
box.innerHTML="";

q.a.forEach((x,idx)=>{
let b=document.createElement("button");
b.innerText=x;

b.onclick=()=>{
if(idx===q.c){
score++;
document.getElementById("f").innerText="✔ certo";
}else{
document.getElementById("f").innerText="❌ errado";
}
}

box.appendChild(b);
});
}

function next(){
i++;

document.getElementById("f").innerText="";

if(i<quiz.length){
load();
}else{
document.getElementById("q").innerText="Fim!";
document.getElementById("a").innerHTML="Pontuação: "+score;

save();
showRank();
}
}

/* ranking */
function save(){
let r=JSON.parse(localStorage.getItem("r"))||[];
r.push({n:user,s:score});
localStorage.setItem("r",JSON.stringify(r));
}

function showRank(){
let r=JSON.parse(localStorage.getItem("r"))||[];
r.sort((a,b)=>b.s-a.s);

document.getElementById("ranking").innerHTML=
r.map(x=>`<p>🏅 ${x.n} - ${x.s}</p>`).join("");
}

load();
showRank();
