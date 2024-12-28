const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const fd = new FormData(form);

  const obj = Object.fromEntries(fd);
  console.log(obj);

  const json = JSON.stringify(obj);
  localStorage.setItem("form", json);
  window.location.href = "rezultat.html";
});
