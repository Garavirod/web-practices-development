let itemDraggable = document.querySelectorAll('.itemDraggable');
let workStation = document.getElementById('workStation');
itemDraggable.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    // item.addEventListener('draend', dragEnd);
});

workStation.addEventListener('dragover', dragOver);
workStation.addEventListener('dragenter', dragEnter);
workStation.addEventListener('dragleave', dragLeave);
workStation.addEventListener('drop', dragDrop);

function dragStart(e) {
    console.log(this);
}

function dragEnd() {
    // this.className = "fill";
    console.log("end");

}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    // this.classList.add("hovered");
    console.log(this);


}


function dragLeave() {
    // this.className = 'empty';
    console.log("leave");

}

function dragDrop() {
    // this.className = "empty";
    // this.append(fill);
    console.log("drop");

}