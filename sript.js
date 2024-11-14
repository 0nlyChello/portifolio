function togglemode() {
  const body = document.body;

  // Alterna entre a classe 'dark' e 'light'
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}
