// @ts-check
/* global document, fetch, FormData */
const $$ = document.querySelector.bind(document);
const $$form = $$("form");

$$form.addEventListener("submit", ev => {
  ev.preventDefault();
  fetch("/vocagrabber", {
    method: "post",
    body: new FormData(ev.target)
  })
    .then(r => r.json())
    .then(data => ($$("#log").innerHTML = JSON.stringify(data, null, 2)));
});
