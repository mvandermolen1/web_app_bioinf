const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    //takes text node for each point in array to show current textnode
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    //removes options first initialized in the html file
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    //check if events are triggered
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.classList.add('btn-outline-light')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

//check if there is a required state object, returns state
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

//checks current state and overwrite the old state
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange lab and see a microscope in front of you.',
        options: [
            {
                text: 'Take the microscope',
                setState: { Microscope: true },
                nextText: 2
            },
            {
                text: 'Leave the microscope',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You venture forth in search of answers to where you come across a workbench.',
        options: [
            {
                text: 'Go to the workbench',
                requiredState: (currentState) => currentState.Microscope,
                setState: { microscope: false},
                nextText: 3
            },
            {
                text: 'Ignore the workbench',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'You see a cluster of cells.',
        options: [
            {
                text: 'Investigate.',
                nextText: 4

            },
            {
                text: 'Leave them be.',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'The cells multiply and take over the world, you are dead.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]

startGame()