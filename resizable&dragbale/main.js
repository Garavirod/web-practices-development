const el = document.querySelector('.draggable');
let isResizing = false;
let isActiveResizers = false;
el.addEventListener('mousedown', mouseDownDrag);
el.addEventListener('click', activeResizers);


// This function actives the resizers with a click.
function activeResizers(e) {
    let res = e.target.querySelectorAll(".resizer");
    let isVisible = (!isActiveResizers) ? "visible" : "hidden";
    res.forEach(r => { r.style.visibility = isVisible; });
    isActiveResizers = !isActiveResizers;
}

// This function allows to move te item it make te item "Dragable"
function mouseDownDrag(e) {

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
        if (!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = el.getBoundingClientRect();

            el.style.left = rect.left - newX + "px";
            el.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;

        }
    }

    function mouseUp() {
        window.removeEventListener('mousemove', mouseMove);
    }

}

const resizers = document.querySelectorAll('.resizer');
let currentResizer;

function mouseDownResize(e) {
    isResizing = true;
    currentResizer = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    function mouseMove(e) {
        const rect = el.getBoundingClientRect();
        if (currentResizer.classList.contains('se')) {
            el.style.width = rect.width - (prevX - e.clientX) + "px";
            el.style.height = rect.height - (prevY - e.clientY) + "px";
        } else if (currentResizer.classList.contains('sw')) {
            el.style.width = rect.width + (prevX - e.clientX) + "px";
            el.style.height = rect.height - (prevY - e.clientY) + "px";
            el.style.left = rect.left - (prevX - e.clientX) + "px";
        } else if (currentResizer.classList.contains('ne')) {
            el.style.width = rect.width - (prevX - e.clientX) + "px";
            el.style.height = rect.height + (prevY - e.clientY) + "px";
            el.style.top = rect.top - (prevY - e.clientY) + "px";
        } else {
            el.style.width = rect.width + (prevX - e.clientX) + "px";
            el.style.height = rect.height + (prevY - e.clientY) + "px";
            el.style.top = rect.top - (prevY - e.clientY) + "px";
            el.style.left = rect.left - (prevX - e.clientX) + "px";
        }
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUp() {
        window.removeEventListener('mousemove', mouseMove);
        isResizing = false;
    }

}


resizers.forEach(r => {
    r.addEventListener('mousedown', mouseDownResize);
});