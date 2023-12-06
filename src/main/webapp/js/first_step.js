let inputX = document.getElementById("variable-x");

// inputX.addEventListener("input", function(event) {
//     let value = event.target.value;
//     if (parseInt(value) > 10) {
//         console.log("Value > 10: " , value);
//         let step_two_div = document.getElementById("step-two");
//         step_two_div.classList.remove("d-none");
//     }
// });

let submitX = document.getElementById("submit-variable-x");

submitX.addEventListener("click", function(event) {
    event.preventDefault();
    if (parseInt(inputX.value) > 100) {
        console.log("Value > 10: " , inputX.value);
        let step_two_div = document.getElementById("step-two");
        step_two_div.classList.remove("d-none");
    }
});
