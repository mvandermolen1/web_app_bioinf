let answered = document.getElementById("variable-named");
let answer = document.getElementById("answer_variable");
let for_loop_answer = document.getElementById("for_loop_made");
let answer_for_1 = document.getElementById("for_answer_one");
let answer_for_2 = document.getElementById("for_answer_two");
let answer_for_3 = document.getElementById("if_answer");
let if_button = document.getElementById("if_made");
let score = 0;
answered.addEventListener("click", function(event) {
    event.preventDefault();
    if (answer.value === "string_1") {
        let step_two = document.getElementById("second_step");
        step_two.classList.remove("d-none");
    }
    else{
        score++
        alert("Read the additional information carefully!");
    }
});

for_loop_answer.addEventListener("click", function (event){
    event.preventDefault();
    if(answer_for_1.value === "gene" && answer_for_2.value === "database"){
        let step_three = document.getElementById("third_step");
        step_three.classList.remove("d-none");
    }
    else{
        score++
        alert("Remember the first space is asking us for what we are getting and the second space is asking" +
            "us for where we are getting that from");
    }
});

if_button.addEventListener("click", function (event){
    event.preventDefault();
    if (answer_for_3.value === "string_1"){
        let step_four = document.getElementById("fourth_step");
        step_four.classList.remove("d-none");
        const button = document.createElement('button')
        button.innerText = "Back to the game"
        button.classList.add('btn')
        button.classList.add("btn-outline-light")
        button.addEventListener("click", redirect)
        document.getElementById("fourth_step").appendChild(button);
    }
    else{
        score++
        alert("Read the additional information carefully!");
    }
});

function redirect(option){
    return window.location.replace("/textgame?error=" + score + "&id=" + 4);
}