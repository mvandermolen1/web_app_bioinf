let answered = document.getElementById("variable-named");
let answer = document.getElementById("answer_variable");
let for_loop_answer = document.getElementById("for_loop_made");
let answer_for_1 = document.getElementById("for_answer_one");
let answer_for_2 = document.getElementById("for_answer_two");

answered.addEventListener("click", function(event) {
    event.preventDefault();
    if (answer.value === "string_1") {
        let step_two = document.getElementById("second_step");
        step_two.classList.remove("d-none");
    }
});

for_loop_answer.addEventListener("click", function (event){
    event.preventDefault();
    if(answer_for_1.value === "gene" && answer_for_2.value === "database"){
        let step_three = document.getElementById("third_step");
        step_three.classList.remove("d-none");
    }
});
