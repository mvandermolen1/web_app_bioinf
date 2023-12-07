// select the item element by id, that's what the # is for
const item = document.querySelector('#item');
// begin dragging event through the function dragstart
item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('d-none');
    }, 0);
}

// select element by class, that's what the . is for
const boxes = document.querySelectorAll('.card');

// for each drop target, the cards, handle the events
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('bg-success');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('bg-success');
}

function dragLeave(e) {
    e.target.classList.remove('bg-success');
}

function drop(e) {
    e.target.classList.remove('bg-success');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('d-none');
}
