let user = "";
let xp = 0;
let level = 1;
let index = 0;

const quiz = [
{
q:"O que é cidadania digital?",
a:["Uso responsável da internet","Jogo","Virus"],
c:0
},
{
q:"IA significa?",
a:["Internet Avançada","Inteligência Artificial","Input Automático"],
c:1
},
{
q:"Boa prática online?",
a:["Compartilhar senha","Respeitar pessoas","Fake news"],
c:1
},
{
q:"Segurança digital é?",
a:["Proteção de dados","Memes","Jogos"],
c:0
},
{
q:"IA aprende com?",
a:["Dados","Sorte","Vídeos aleatórios"],
c:0
}
];

// LOGIN
function start(){
user = document.getElementById("userInput").value;

if(user === ""){
alert("Digite seu nome");
return;
}

document.getElementById("loginScreen").style.display = "none";

document.getElementById("userInfo").innerText = "👤 " + user;

loadQuiz();
loadRanking();
showSection("home");
}

// SEÇÕES
function showSection(id){
document.querySelectorAll(".section").forEach(s=>{
s.classList.remove("active");
});

document.getElementById(id).classList.add("active");
}

// QUIZ
function loadQuiz(){
let q = quiz[index];

document.getElementById("question").innerText = q.q;

let box = document.getElementById("answers");
box.innerHTML = "";

q.a.forEach((item,i)=>{
let btn = document.createElement("button");
btn.innerText = item;

btn.onclick = ()=>{
if(i === q.c){
xp += 10;
document.getElementById("feedback").innerText = "✔ Correto!";
levelUp();
}else{
document.getElementById("feedback").innerText = "❌ Errado!";
}
};

box.appendChild(btn);
});
}

function next(){
index++;

document.getElementById("feedback").innerText = "";

if(index < quiz.length){
loadQuiz();
}else{
saveRanking();

document.getElementById("question").innerText = "Fim do Quiz!";
document.getElementById("answers").innerHTML =
"XP final: " + xp;

loadRanking();
}
}

// LEVEL SYSTEM
function levelUp(){
if(xp % 30 === 0){
level++;
alert("🔥 Level up! Você está no nível " + level);
}
}

// RANKING
function saveRanking(){
let data = JSON.parse(localStorage.getItem("rank")) || [];

data.push({
name:user,
xp:xp,
level:level
});

localStorage.setItem("rank", JSON.stringify(data));
}

function loadRanking(){
let data = JSON.parse(localStorage.getItem("rank")) || [];

data.sort((a,b)=>b.xp - a.xp);

let html = "";

data.forEach(d=>{
html += `
<div class="card">
🏅 ${d.name}<br>
⭐ XP: ${d.xp}<br>
📊 Level: ${d.level}
</div>
`;
});

document.getElementById("rankingList").innerHTML = html;
}
