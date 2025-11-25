const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        Toastify({
            text: "You must write something!",
            className: "info",
            style: {
                background: "linear-gradient(to right, #b00000ff, #c93d3dff)",
            }
        }).showToast();
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }
}