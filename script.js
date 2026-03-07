const display = document.getElementById('day');
let num = Number(localStorage.getItem("day")) || 0;
const themeL = document.getElementById('theme');
const Stheme = 'style.css';
const Ftheme = 'fail.css';
let theme = localStorage.getItem("href");
const updateUI = () => { 
    display.textContent = num; 
    themeL.setAttribute("href", theme);
}
updateUI();

const add = () => { 
    num++; 
    theme = Stheme;
    localStorage.setItem("day", num);
    localStorage.setItem("href", theme);
    themeL.setAttribute("href", theme);
    updateUI(); 
};
const reset = () => { 
    num = 0; 
    theme = Ftheme;
    localStorage.setItem("day", num);
    localStorage.setItem("href", theme);
    themeL.setAttribute("href", theme);
    updateUI(); 
};