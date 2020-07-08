const el = document.querySelector('.item');
let isResizing = false;
el.addEventListener('mousedown', mouseDown);

function mouseDown(e) {

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

function mouseDown2(e) {
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
    r.addEventListener('mousedown', mouseDown2);
});