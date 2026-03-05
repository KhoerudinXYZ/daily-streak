const display = document.getElementById('day');
let num = Number(localStorage.getItem("day")) || 0;
const updateUI = () => display.textContent = num;
const themeL = document.getElementById('theme');
const Stheme = 'style.css';
const Ftheme = 'fail.css';
updateUI();

const add = () => { 
    num++; 
    localStorage.setItem("day", num);
    theme = localStorage.setItem("href", Stheme);
    themeL.setAttribute("href", Stheme);
    updateUI(); 
};
const reset = () => { 
    num = 0; 
    localStorage.setItem("day", num);
    theme = localStorage.setItem("href", Ftheme);
    themeL.setAttribute("href", Ftheme);
    updateUI(); 
};

// jika day == 0 change the style.css to fail.css