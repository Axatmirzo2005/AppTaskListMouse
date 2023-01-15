const item = document.querySelector(".item")
const placeHolders = document.querySelectorAll(".placeholder");

for(const placeHolder of placeHolders) {
    placeHolder.addEventListener("dragover", dragover)
    placeHolder.addEventListener("dragenter", dragenter)
    placeHolder.addEventListener("dragleave", dragleave)
    placeHolder.addEventListener("drop", drop)
}

function dragover(e) {
    e.preventDefault()
}

function dragenter(e) {
    e.target.classList.add("hovered")
}

function dragleave(e) {
    e.target.classList.remove("hovered")
}

function drop(e) {
    e.target.append(item)
    e.target.classList.remove("hovered")
}

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

function dragstart(e) {
    console.log("start")
    e.target.classList.add("hold")
    setTimeout(() => {
        e.target.classList.add("hide")
    }, 0);
}

function dragend(e) {
    console.log("end")
    e.target.classList.remove("hold")
    e.target.classList.remove("hide")
}
