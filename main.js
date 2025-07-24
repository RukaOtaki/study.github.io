// script.js
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  // メニューの表示・非表示を切り替える
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex"; // 表示
  } else {
    menu.style.display = "none"; // 非表示
  }
});

// main.js に追加
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});