const form = document.querySelector("#form");
const list = document.querySelector("#list");

form.onsubmit = addItem;
list.onclick = delItem;

function addItem(e) {
    e.preventDefault();
  const item = document.createElement("li");
  const btn = document.createElement("button");
  

  list.append(item);
  item.append(form.word.value + " ", btn);
  btn.append("Del")

  form.reset();

  form.word.focus();
}

function delItem(e) {
  const btn = e.target;
  if (!btn.matches("button")) return
  
  const item = btn.parentElement;
  item.remove();
}
