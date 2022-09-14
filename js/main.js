
const accordion = Array.from(document.querySelectorAll(".accordion"));
const hidden = document.querySelector(".hidden");
console.log(accordion);

accordion.forEach( action => {
    action.addEventListener( "click", (e) =>{
        console.log("working")
        // hidden.classList.remove("hidden");
        // hidden.classList.add("display");
    })
})