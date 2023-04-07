let word = ['one', 'two', 'three', 'four', 'five']
let b = document.getElementById("new");
let s = document.getElementById("show");
let d = document.getElementById("display");
let del = document.getElementById("delete");


b.onclick = () => {

  if (localStorage.length >= 5) {
    alert("Maximum list limit exceded");
    return;
  }
  let inp = prompt("YOUR NOTE :")
  localStorage.setItem(`${word[localStorage.length]}`, `${inp}`)

}

s.onclick = () => {
  line = `<br>`
  html = `<ul>`
  d.innerHTML = " "
  for (let i = 0; i < localStorage.length; i++) {

    html += `<li>${localStorage.getItem(localStorage.key(i))}</li>`

  }
  html += `</ul>`
  d.innerHTML = html;
}

del.onclick = () => {
  display = " "
  for (let i = 0; i < localStorage.length; i++) {
    display += `${localStorage.key(i)}:${localStorage.getItem(localStorage.key(i))} \n`

  }

  let dinp = prompt(`SELECT A KEY \n ${display}`);
  localStorage.removeItem(dinp);
}

