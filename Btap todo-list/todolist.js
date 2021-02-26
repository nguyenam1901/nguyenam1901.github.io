



let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
a.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(b.value)
})



function createItem(x) {
  let ourHTML = `<li> ${x} <button onclick="deleteItem(this)"> Delete </button></li>`
  c.insertAdjacentHTML("beforeend", ourHTML)
  b.value = ""
  b.focus()
}


function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}
