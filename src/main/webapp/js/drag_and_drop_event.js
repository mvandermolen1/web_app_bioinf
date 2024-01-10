let draggable;
// select the item element by id, that's what the # is for
const items = document.querySelectorAll(".list-group-item");

// Add dragging event through the function dragstart
items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
})

function dragStart(e) {
    draggable = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.classList.add("d-none");
    }, 0);
}

// select element by class, that's what the . is for
const boxes = document.querySelectorAll(".answer");

// for each drop target, handle the events
boxes.forEach(box => {
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
});

// Removes the hide when drag stops
document.addEventListener("dragend", function (event) {
    event.target.classList.remove("d-none");
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("bg-light");
}


function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("bg-light");
}



function dragLeave(e) {
    e.target.classList.remove("bg-light");
}


function drop(e) {
    e.preventDefault();
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    let draggable = document.getElementById(id);

    draggable.classList.remove('d-none');
    if(e.target.classList.contains("answer")){
        e.target.classList.remove("bg-light");
        draggable.classList.remove("d-none");
        if(e.target.childElementCount !== 0){
            let childP = e.target.getElementsByTagName("li")[0];
            document.getElementById("all").appendChild(childP);
        }
        e.target.appendChild(draggable);
        draggable = null;
    }
}

document.getElementById("checkAnswer").addEventListener("click", function () {
    let questions = document.getElementsByClassName("answer");
    const answers = ["nucleotide", "is equal to", "T", "U", "is not equal to"];
    let score = 0;
    let result = document.getElementById("result");
    for (let i = 0; i < questions.length; i++) {
        const element = questions[i];
        let childP = element.getElementsByTagName("li")[0];
        if (childP.innerText=== answers[i]){
            score++
        }
        else{
            childP.classList.add("bg-danger")
        }
    }
    result.append(score + "/" + answers.length);
})

function reset_game(){
    let container = document.getElementById("dragdrop");
    container.innerHTML= html;
}
let html;
window.onload = function(){
    html = document.getElementById("dragdrop").innerHTML;
};
