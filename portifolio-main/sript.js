function togglemode() {
  const html = document.documentElement
  /* metodo mais facil */
  html.classList.toggle("light")
  /* metodo tradicional.
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  
}