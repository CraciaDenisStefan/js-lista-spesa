"use strict";

let lista = [
    `anguria`,
    `melone`,
    `pomodoro`,
    `formaggio`,
    `pane`,
    `carne`,
]

let ul = document.getElementById(`lista_spesa`);

let i = 0;
while (i < lista.length) {
    i++;
   
    let lista_elem = `<li>${lista[i]}</li>`;
    ul.innerHTML += lista_elem;
}