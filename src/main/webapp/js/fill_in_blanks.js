let answered = document.getElementById("variable-named");
let answer = document.getElementById("answer_variable");


answered.addEventListener("click", function(event) {
    event.preventDefault();
    if (answer.value === "string_1") {
        let step_two = document.getElementById("second_step");
        step_two.classList.remove("d-none");
    }
});