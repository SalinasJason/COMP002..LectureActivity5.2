document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button1");

    function buttonClick() {
        alert("Button clicked!");
        button.removeEventListener("click", buttonClick);
    }
    button.addEventListener("click", buttonClick);

   

    let link = document.querySelector("#link1");

    function LinkClick(event) {
        event.preventDefault(); 
        alert("No distractions! I'm coding!");
    }
    link.addEventListener("click", LinkClick);
});
