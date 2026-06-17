let user="";
let i=0;
let score=0;

/* 🔥 ADIÇÃO: nível do usuário */
let level=1;

function entrar(){
user=document.getElementById("name").value;
if(user==="") return;

document.getElementById("login").style.display="none";

/* 🔥 ADIÇÃO: boas-vindas */
alert("Bem-vindo " + user + " 🚀");

document.getElementById("userBox").innerText="👤 "+user;
document.getElementById("welcomeMsg").innerText="Olá "+user+"! Vamos começar 🎯";
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

/* 🔥 ADIÇÃO: progresso */
document.getElementById("progress").innerText=
"Pergunta " + (i+1) + " de " + quiz.length;

let box=document.getElementById("a");
box.innerHTML="";

q.a.forEach((x,idx)=>{
let b=document.createElement("button");
b.innerText=x;

b.onclick=()=>{
if(idx===q.c){
score++;
document.getElementById("f").innerText="✔ certo";
document.getElementById("f").style.color="lightgreen";

/* 🔥 ADIÇÃO: XP + nível */
levelUp();

}else{
document.getElementById("f").innerText="❌ errado";
document.getElementById("f").style.color="red";
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
document.getElementById("a").innerHTML=
"Pontuação: "+score+" / "+quiz.length;

/* 🔥 ADIÇÃO: resultado final bonito */
document.getElementById("progress").innerText=
"🏁 Quiz finalizado!";

save();
showRank();
}
}

/* 🔥 ADIÇÃO: sistema de nível simples */
function levelUp(){
if(score % 2 === 0){
level++;
console.log("Level up: "+level);
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

/* 🔥 ADIÇÃO: carregar ranking sempre atualizado */
function init(){
load();
showRank();
}

init();
