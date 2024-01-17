const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    parseInt(input_state.id);
    showTextNode(parseInt(input_state.id));
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
            button.classList.add("btn-outline-light")
            if (option.text === "Find the OR6A2 gene"){
                button.addEventListener('click', redirect)
            }
            else{
                button.addEventListener('click', () => selectOption(option))
            }
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
        state = {}
        return showTextNode(1);
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

function redirect(option){
    return window.location.replace("/fill?error=0&id=" + 5);
}

const textNodes = [
    {
        id: 1,
        text: "You wake up in a strange place. The scientist that hired you is looming over your body. He doesn't know you've regained your senses yet. " +
            "You wonder what to do.",
        options: [
            {
                text: 'Spook the scientist',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Leave the man alone',
                nextText: 3
            }
        ]
    },
    { id: 2,
        text: "The scientist frowns, he clearly did not appreciate your jest.",
        options: [
            {	text: "Punch him in the shoulder, all just a joke.",
                nextText: 3
            },
            {	text: "Tell him that's what he gets for looming over you",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: "Eventually, the scientist notes that you are back to your senses. " +
            "He tells you that you bumped your head against the corner of a cabinet, " +
            "but thinks you will be fine though he is worried about your memory. " +
            "He reminds you that you were busy with his research and that you should get back to it.",
        options: [
            {
                text: "Move back to your desk",
                nextText: 4
            },
            {
                text: "Sneakily see if you can find out more about this research.",
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: "At your desk, you get back to work. Luckily, you dutifully noted down what you were doing. You were trying to get a gene from a database. Right...",
        options: [
            {
                text: "Find the OR6A2 gene"
            }
        ]
    },
    {
        id: 5,
        text: "You sneak around behind the scientist's back and come across several papers. " +
            "Reading through them, you see that the scientist is trying to look for a gene called OR6A2. " +
            "You recall that this is the gene that is responsible for making cilantro taste differently based on what " +
            "version of the gene you have. What could the scientist want with this? Before you can continue reading, the " +
            "scientist scolds you and sends you back to work",
        options: [
            {
                text: "Move back to your desk",
                nextText: 4
            }
        ]
    },
    {
        id: 6,
        text: "You've done the work well! The scientist seems thrilled by this. " +
            "One step closer to destroying cila-,..ehm-,..I mean, one step closer to great scientific discoveries. " +
            "The scientist urges you on to continue working!",
        options: [
            {
                text: "Continue working",
                nextText: 8
            },
            {
                text: "Say you'll take a break, and look around the room",
                nextText: 9
            }
        ]
    },
    {
        id: 7,
        text: "You've done the work but the scientist looks at you weirdly. You ask yourself are you sure you know what you are doing?",
        options: [
            {
                text: "You totally know what you are doing",
                nextText: -1
            },
            {
                text:"Lie: You totally know what you are doing",
                nextText: -1
            },
            {
                text: "You have no idea what you are doing",
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: "The scientist tells you that the gene you pulled from the database is DNA. " +
            "The blueprint for everything in your body. It is nice, but he needs RNA. " +
            "For science. He explains that to go from DNA to RNA, you have to change a 'nucleotide'. " +
            "You nod along, you knew what that meant. Right?",
        options: [
            {
                text: "Turn the DNA into RNA"
            }
        ]
    },
    {
        id: 9,
        text: "You dart away from your desk to take your break, or rather to sneak around. " +
            "After some prying, you find personal letters from the scientist to someone about the" +
            " OR6A2 gene, the gene responsible for making cilantro taste funny. You read through " +
            "this rather personal letter. His tone in the letter indicated he was rather displeased " +
            "with cilantro, he didn't like the taste. If he couldn't enjoy it no one could. " +
            "Wow, that's rather bad. Maybe you shouldn't work with this man, but then he'd just replace you, right? " +
            "Maybe you should, you have your reasons. Maybe you should sabotage this man's plans?",
        options: [
            {
                text: "You quit on the spot.",
                nextStep: -1
            },
            {
                text: "You continue your work",
                nextStep: 8
            },
        ]
    },

]



startGame()