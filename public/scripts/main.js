// @ts-check
/* global document, fetch, FormData, alert */
const $$ = document.querySelector.bind(document);
const $$form = $$("form");

$$form.addEventListener("submit", ev => {
  ev.preventDefault();
  fetch("/vocagrabber", {
    method: "post",
    body: new FormData(ev.target)
  })
    .then(r => r.json())
    .then(data => alert(data.words.join("\n")));
});
