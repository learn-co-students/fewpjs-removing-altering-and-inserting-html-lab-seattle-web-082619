document.getElementById("main").remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Justin is the champion"
document.body.appendChild(newHeader)