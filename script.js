let cor = 'black';
const paleta = document.getElementsByClassName('color');
const blocos = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const c1 = document.getElementById('c1');
c1.className = 'color cor1 selected';


//https://www.w3schools.com/jsref/event_target.asp
//https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

function cls() {
  for (const i of blocos)
  clear.addEventListener('click', function() {
    i.style.background = 'white'
    cor = '';
  });
}

function select() {
  for (const i of paleta) {
    i.addEventListener('click', function(e) {
      const pick = document.getElementById(e.target.id);
      const selecionada = window.getComputedStyle(pick).getPropertyValue('background-color');
      cor = selecionada;
      c1.className = 'color cor1';
      pick.classList.add('selected');
    });
  }
}

function paint() {
  for (const i of blocos)
      i.addEventListener('click', function () {
        i.style.background = cor;
      });
}

select();
paint();
cls();
