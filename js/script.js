let btnData = document.getElementById("btn-data");
let inputData = document.getElementById("input-data");
let boxs = document.querySelectorAll(".box");
let drag = null;

// function add item
btnData.addEventListener("click", function () {
    if (inputData.value != "") {
        boxs[0].innerHTML += `
        <p class="item" draggable ="true">${inputData.value}</p>
        `;
        inputData.value = "";
    }
    dragItem();
})
function dragItem() {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item;
            item.style.opacity = ".5";
        })
    })
     items.forEach(item => {
        item.addEventListener('dragend', function () {
            drag = null;
            item.style.opacity = "1";
        })
         boxs.forEach(box => {
             box.addEventListener("dragover", function (e) {
                 e.preventDefault();
                 this.style.background = "rgb(155, 158, 22)";
                 this.style.color = "#fff";
             })
             box.addEventListener("dragleave", function () {
               this.style.background = "#fff";
                 this.style.color = "#000";
             })  
             box.addEventListener("drop", function () {
                 this.append(drag);
                 this.style.background = "#fff";
                 this.style.color = "#000";
             })
         })
    })
}