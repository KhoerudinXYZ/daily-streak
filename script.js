const display = document.getElementById('day');
let num = Number(localStorage.getItem("day")) || 0;
const updateUI = () => display.textContent = num;
updateUI();

const add = () => { 
    num++; 
    localStorage.setItem("day", num);
    updateUI(); 
};
const reset = () => { 
    num = 0; 
    localStorage.setItem("day", num);
    updateUI(); 
};