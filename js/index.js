let settingsMenu = document.querySelector(".setting-menu");
// console.log(settingsMenu);

function handleSettingsToggle() {
  settingsMenu.classList.toggle("setting-menu-height");
}

let darkMode = document.getElementById("dark-btn");

darkMode.onclick = function () {
  darkMode.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkMode.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkMode.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");
