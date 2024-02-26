let draggable;
const items = document.querySelectorAll(".list-group-item");
var score = 0;

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
    if (e.target.getAttribute("data-accept") === draggable.getAttribute("data-target")){
            e.target.classList.remove("bg-light");
            draggable.classList.remove("d-none");
            draggable.classList.add("bg-success");
            e.target.appendChild(draggable);

    }
    else{
        score++
        e.target.classList.remove("bg-light");
        let childP = e.target.getElementsByTagName("li")[0];
        document.getElementById("all").appendChild(childP);
    }
    draggable = null;
}

// function to check answers where answers are the answers to the drag and drop game
document.getElementById("checkAnswer").addEventListener("click", function () {
    let questions = document.getElementsByClassName("answer");
    let valid = "";
    let result = document.getElementById("result");
    for (let i = 0; i < questions.length; i++) {
        const element = questions[i];
        if (element.childElementCount === 1){
            valid = "You are done!"
        }
        else{
            valid = "You're not done yet!"
        }
    }
    if (valid === "You are done!"){
        const button = document.createElement('button')
        button.innerText = "Back to the game"
        button.classList.add('btn')
        button.classList.add("btn-outline-light")
        if (score < 5 && window.location.pathname === "/drag"){
            button.addEventListener("click", () => redirect(10))
        }
        else if (score < 5 && window.location.pathname === "/dragProtein"){
            button.addEventListener("click", () => redirect(14))
        }
        else if (score > 7 && window.location.pathname ==="/dragProtein"){
            button.addEventListener("click", () => redirect(15))
        }
        else{
            button.addEventListener("click", () => redirect(11))
        }
        document.getElementById("stopButton").appendChild(button);
    }
    result.append(valid);
})

function redirect(id){
    return window.location.replace("/textgame?error=" + score + "&id=" + id);
}

