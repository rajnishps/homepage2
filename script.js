function showPassword() {
  let x = document.getElementById("pwd")
  if (x.type === "password") {
    x.type = "text"
  } else {
    x.type = "password"
  }
}

function expandCard(id) {
  let element = document.getElementById(id)
  element.classList.toggle("expand")
}
