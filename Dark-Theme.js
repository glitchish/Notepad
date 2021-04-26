function darkmode() {
   var body = document.body;
   body.classList.toggle("dark-mode");
   var theme = document.getElementById("toggleTheme");
   theme.classList.toggle("light-button");
   var p = document.getElementById("filename");
   p.classList.toggle("color-black");
   p.classList.toggle("darker-theme");
   var textarea = document.getElementById("text-area");
   textarea.classList.toggle("dark-mode");
   var navbar = document.getElementById("navbar");
   navbar.classList.toggle("darker-theme");
   var dropdown = document.getElementById("navbtn");
   dropdown.classList.toggle("color-white");
}
