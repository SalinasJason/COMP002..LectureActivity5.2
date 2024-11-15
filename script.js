document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button1");

    function buttonClick() {
        alert("Button clicked!");
        button.removeEventListener("click", buttonClick);
    }
    button.addEventListener("click", buttonClick);
});
