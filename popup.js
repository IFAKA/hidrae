import { start } from "./background.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");
  btn.style = `
    border: none;
    color: white;  
    cursor: pointer;  
    border-radius: 13%;  
    height: 3em;  
    width: 5em; 
    background-color: #4c75f2;
    font-weight: bold;
    letter-spacing: 0.7px;
  `;
  btn.addEventListener("click", start);
});
