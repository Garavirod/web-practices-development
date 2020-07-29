// let workStation = document.getElementById('workStation');
// let iframeElement = document.createElement('iframe');
// iframeElement.classList.add("iframestation");
// iframeElement.setAttribute("src", "workStation.html");
// iframeElement.setAttribute("id", "iframeWS");
// workStation.appendChild(iframeElement);

var coorX = null;
var coorY = null;
var inWorkSta = false;
var currentElem = null;



function createResizers() {
    let resizers = document.createElement('div');
    resizers.classList.add('resizers');
    for (let i = 0; i < 4; i++) {
        let resizer = document.createElement('div');
        resizer.classList.add('resizer');
        if (i == 0)
            resizer.classList.add('top-left');
        else if (i == 1)
            resizer.classList.add('top-right');
        else if (i == 2)
            resizer.classList.add('bottom-left');
        else
            resizer.classList.add('bottom-right');

        resizers.appendChild(resizer);
    }

    return resizers;
}

window.onload = function() {
    let itemDraggable = document.querySelectorAll('.itemDraggable');
    let workStation = document.getElementById('workStation');

    // Draggable element 
    itemDraggable.forEach(it => {
        it.addEventListener('dragstart', dragStart);
        it.addEventListener('draend', dragEnd);
    });


    // Element container
    workStation.addEventListener('dragover', dragOver);
    workStation.addEventListener('dragenter', dragEnter);
    workStation.addEventListener('dragleave', dragLeave);
    workStation.addEventListener('drop', dragDrop);

    function dragStart(e) {
        currentElem = this;
        console.log("you satrted to dragg" + this);
    }

    function dragOver(e) {
        e.preventDefault();
        coorX = e.clientX;
        coorY = e.clientY;
        console.log("you are dragging " + e.clientX + " " + e.clientY);
    }

    function dragEnter(e) {
        inWorkSta = true;
        e.preventDefault();
        e.stopPropagation();
        // this.classList.add("hovered");
        console.log("you entered the container");

    }

    function dragEnd() {
        // this.className = "fill";
        console.log("finished");

    }

    function dragLeave() {
        inWorkSta = false;
        console.log("you left the container");
    }

    function dragDrop() {
        currentElem.classList.remove("itemDraggable");
        currentElem.classList.add("resizable");
        currentElem.classList.add("draggable");
        currentElem.classList.add("item");
        currentElem.setAttribute("draggable", "false");
        currentElem.style.transform = "translate3d(" + coorX + "px, " + coorY + "px, 0)";
        currentElem.appendChild(createResizers());
        this.append(currentElem);
        console.log("dropped");
    }

}













// }


// function dragLeave() {
//     // this.className = 'empty';
//     console.log("leave");

// }

// function dragDrop() {
//     // this.className = "empty";
//     // this.append(fill);
//     console.log("drop");

// }