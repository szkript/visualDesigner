function initEventListeners(){
    // parse command icons
    document.querySelectorAll('[data-commands]').forEach(
        item => {
            item.addEventListener('click', e => {
                console.log(item.getAttribute("data-commands"));
            });
        });

    document.querySelectorAll('[data-tools]').forEach(
        item => {
            item.addEventListener("click", e =>{
                document.querySelector("[data-tools].active").classList.toggle("active");
                item.classList.toggle("active");
            });
        }
    )

    console.log("event listeners initialized");
};

document.addEventListener('DOMContentLoaded', (event) =>{
    initEventListeners();
});