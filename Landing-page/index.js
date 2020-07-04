let button = document.getElementById('icon');
let linkers = document.getElementById('linkers');
let counter = true;

button.addEventListener("click", () => {
    if (counter) {
        linkers.className = ("linkers two");
        counter = false;
    } else {
        linkers.classList.remove("two");
        linkers.className = ("linkers one");
        counter = true;
    }
});