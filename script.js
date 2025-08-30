//elementos
const mesCalendario = document.getElementById("mes");
const btnMesAnterior = document.getElementById("mes-anterior");
const btnProximoMes = document.getElementById("proximo-mes");
const datasCalendario = document.getElementById("datas");
const anoCalendario = document.getElementById("ano");
const btnAnoAnterior = document.getElementById("ano-anterior");
const btnProximoAno = document.getElementById("proximo-ano");

//datas
let mes = new Date().getMonth();
const dia = new Date().getDate();
let ano = new Date().getFullYear();
const diaDaSemana = new Date(ano, mes, 1).getDay();
const totalDiasMes = new Date(ano, mes + 1, 1 - 1).getDate();

btnMesAnterior.addEventListener("click", mesAnterior);
btnProximoMes.addEventListener("click", proximoMes);
btnAnoAnterior.addEventListener("click", anoAnterior);
btnProximoAno.addEventListener("click", proximoAno);

const formater = Intl.DateTimeFormat("pt-br", { month: "long" });

mesCalendario.innerText = formater.format(new Date());

function mesAnterior() {
  mes--;
  mesCalendario.innerHTML = formater.format(new Date(ano, mes));
  let diaDaSemana = new Date(ano, mes, 1).getDay();
  let totalDiasMes = new Date(ano, mes + 1, 1 - 1).getDate();
  removeElements();
  createDatasCalendario(totalDiasMes,mes,ano);
  positionFirstDay(diaDaSemana);
}

function proximoMes() {
  mes++;
  mesCalendario.innerHTML = formater.format(new Date(ano, mes));
  let diaDaSemana = new Date(ano, mes, 1).getDay();
  let totalDiasMes = new Date(ano, mes + 1, 1 - 1).getDate();
  removeElements();
  createDatasCalendario(totalDiasMes,mes,ano);
  positionFirstDay(diaDaSemana);
}

anoCalendario.innerText = ano.toString();

function anoAnterior() {
  ano--;
  anoCalendario.innerText = ano.toString();
  let diaDaSemana = new Date(ano, mes, 1).getDay();
  let totalDiasMes = new Date(ano, mes + 1, 1 - 1).getDate();
  removeElements();
  createDatasCalendario(totalDiasMes,mes,ano);
  positionFirstDay(diaDaSemana);
}

function proximoAno() {
  ano++;
  anoCalendario.innerText = ano.toString();
  let diaDaSemana = new Date(ano, mes, 1).getDay();
  let totalDiasMes = new Date(ano, mes + 1, 1 - 1).getDate();
  removeElements();
  createDatasCalendario(totalDiasMes,mes,ano);
  positionFirstDay(diaDaSemana);
}

function positionFirstDay(diaDaSemana) {
  datasCalendario.firstChild.nextSibling.style.marginLeft = `${
    diaDaSemana * 65
  }px`;
}

function createDatasCalendario(totalDiasMes,mes) {
  for (let i = 1; i <= totalDiasMes; i++) {
    const div = document.createElement("div");
    div.classList.add("data");
    div.innerText = i;
    datasCalendario.appendChild(div);
  }
  if(mes === new Date().getMonth() && ano === new Date().getFullYear()){
    datasCalendario.children[dia -1].classList.add('dia-atual')
  }
}

function removeElements() {
  const allElements = datasCalendario.childElementCount;
  for (let i = 1; i <= allElements; i++) {
    datasCalendario.children[0].remove();
  }
}

createDatasCalendario(totalDiasMes,mes,ano);
positionFirstDay(diaDaSemana);