// Função que alterna o modo escuro e salva o estado no LocalStorage
function myFunction() {
  const element = document.body;
  const isDarkMode = element.classList.toggle("DarkMode");

  // Salva o estado atual (true = escuro, false = claro)
  localStorage.setItem("dark-mode", isDarkMode);
}

// Ao carregar a página, verifica e aplica o modo salvo
window.addEventListener("DOMContentLoaded", () => {
  const darkModeStatus = localStorage.getItem("dark-mode");

  if (darkModeStatus === "true") {
    document.body.classList.add("DarkMode");
  }

  // Mantém o switch na posição correta
  const switchInput = document.querySelector('.switch input');
  if (switchInput) {
    switchInput.checked = darkModeStatus === "true";
  }
});