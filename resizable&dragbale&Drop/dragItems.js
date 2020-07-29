// let workStation = document.getElementById('workStation');
// let iframeElement = document.createElement('iframe');
// iframeElement.classList.add("iframestation");
// iframeElement.setAttribute("src", "workStation.html");
// iframeElement.setAttribute("id", "iframeWS");
// workStation.appendChild(iframeElement);



window.onload = function() {
    let itemDraggable = document.querySelectorAll('.itemDraggable');
    let iFrame = document.getElementById('iframeWS');
    itemDraggable.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        // item.addEventListener('draend', dragEnd);
    });

    function dragStart(e) {
        // console.log(this);
    }

    iFrame.addEventListener('dragover', dragOver);
    iFrame.addEventListener('dragenter', dragEnter);

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // this.classList.add("hovered");
        console.log("entro");
    }

}




// // iFrame.addEventListener('dragover', dragOver);

// // iFrame.addEventListener('dragleave', dragLeave);
// // iFrame.addEventListener('drop', dragDrop);



// function dragEnd() {
//     // this.className = "fill";
//     console.log("end");

// }






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