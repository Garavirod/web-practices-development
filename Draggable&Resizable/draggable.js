let isResizing = false;
let isActiveResizers = false;
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;



// This function make visible the resizers given a click on the item.
function activeResizers(e) {
    let res = e.target.querySelectorAll(".resizer");
    let isVisible = (!isActiveResizers) ? "visible" : "hidden";
    res.forEach(r => { r.style.visibility = isVisible; });
    isActiveResizers = !isActiveResizers;
}



// Make dragabble a div
function makeDraggable(div) {
    var container = document.querySelector("#container");
    var dragItem = document.querySelector(div);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        if (e.target === dragItem && (isResizing == false)) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active && (isResizing == false)) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

}


/*Make resizable div by Hung Nguyen*/
function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const container = document.getElementById('container');
    const resizers = document.querySelectorAll(div + ' .resizer');
    element.addEventListener('click', activeResizers);
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0; i < resizers.length; i++) {
        const currentResizer = resizers[i];
        currentResizer.addEventListener('mousedown', function(e) {
            e.preventDefault()
            original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
            original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
            original_x = element.getBoundingClientRect().left;
            original_y = element.getBoundingClientRect().top;
            original_mouse_x = e.pageX;
            original_mouse_y = e.pageY;
            container.addEventListener('mousemove', resize)
            container.addEventListener('mouseup', stopResize)
        })

        function resize(e) {
            isResizing = true;
            if (currentResizer.classList.contains('bottom-right')) {
                const width = original_width + (e.pageX - original_mouse_x);
                const height = original_height + (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                }
            } else if (currentResizer.classList.contains('bottom-left')) {
                const height = original_height + (e.pageY - original_mouse_y)
                const width = original_width - (e.pageX - original_mouse_x)
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                }
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                    element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                }
            } else if (currentResizer.classList.contains('top-right')) {
                const width = original_width + (e.pageX - original_mouse_x)
                const height = original_height - (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                    element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                }
            } else {
                const width = original_width - (e.pageX - original_mouse_x)
                const height = original_height - (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                    element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                    element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                }
            }
        }

        function stopResize() {
            container.removeEventListener('mousemove', resize);
            isResizing = false;
        }
    }
}


makeResizableDiv('.resizable');
makeDraggable('.draggable');