// const btn = document.querySelector("#btn");
// const p = document.querySelector("p");
// btn.addEventListener("click", function() {
//     console.log("click!")
//     p.innerText = "clicked!"
// })

// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(function(item) {
//     item.addEventListener("click", function() {
//         console.log("click!")
//         console.log(item.id)
//         item.style.backgroundColor = "red"
//     })
// })

const inp = document.querySelector("input");
const p = document.querySelector("p");
inp.addEventListener("keydown", function(event) {
    console.log(event.key)
    inp.addEventListener("blur", function(event) {

        p.innerText = `Hello ${event.target.value}`;
    })
})