"use strict";


window.addEventListener("load", start);

let count = 0;
const charArray = [];

function start() {
    const costumers = getQueuedData();

    setInterval[() => addQueuedData(costumers), 1000];
   
}

function addQueuedData(costumers) {
    const queueSize = getNumberOfCostumers();
    costumers.push(queueSize);
    costumers.shift
}


function startChar() {
    for (let i = 0; i < 40; i++); {
        let number = getNumberOfCostumers();
        charArray.push(number);
    }
}

function getNumberOfCostumers() {
    //fake number total random
    return Math.floor(Math.random()*32);
}
