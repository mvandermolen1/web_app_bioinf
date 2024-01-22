const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    showTextNode(parseInt(input_state.id));
}

function showTextNode(textNodeIndex) {
    //takes text node for each point in array to show current textnode
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
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
                button.addEventListener('click', () => redirect("/fill?error="+ input_state.error +"&id="  + input_state.id))
            }
            else if (option.text === "Turn the DNA into RNA"){
                button.addEventListener('click', () => redirect("/drag?error=" + input_state.error +"&id=" + input_state.id))
            }
            else if (option.text === "You are ready!"){
                button.addEventListener('click', () => redirect("/dragProtein?error=" + input_state.error +"&id=" + input_state.id))
            }
            else if (option.text === "Dream world, here we come!"){
                button.addEventListener('click', () => redirect("/memorygame?error=" + input_state.error +"&id=" + input_state.id))
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
    if (nextTextNodeId <= -2) {
        state = {}
        return showTextNode(1);
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

function redirect(url){
    return window.location.replace(url);
}

const textNodes = [
    {
        id: 1,
        text: "You wake up in a strange place. The scientist that hired you is looming over your body. He doesn't know you've regained your senses yet. " +
            "You wonder what to do.",
        options: [
            {
                text: 'Spook the scientist',
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
        text: "You've done the work but the scientist looks at you weirdly. " +
            "You ask yourself are you sure you know what you are doing?",
        options: [
            {
                text: "You totally know what you are doing",
                nextText: 8
            },
            {
                text:"Lie: You totally know what you are doing",
                nextText: 8
            },
            {
                text: "You have no idea what you are doing",
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: "Returning to your work, the scientist tells you that the gene you pulled from the database is DNA " +
            ", the blueprint for everything in your body. It is nice, but he needs RNA, the code that gets translated to protein. " +
            "So to get the protein, he needs the RNA code. He explains that to go from DNA to RNA, you have to change one of the building blocks of DNA to another. " +
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
                nextText: -1
            },
            {
                text: "You continue your work",
                nextText: 8
            },
        ]
    },
    {
        id: 10,
        text: "Success! You've turned the string of DNA into RNA! The scientist laughs madly, the end is approaching" +
            "That is, the end of the project of course. Not the end of the world. That'd be mad. Just a few more steps to go!" +
            "For the next trick, you'll need to go one step further. We're turning the RNA into a proper protein! A protein" +
            "are like the workers in your body. They are responsible for keeping all the processes going.",
        options: [
            {
                text: "Continue working",
                nextText: 13
            },
            {
                text: "Say you'll take a break, and look around the room",
                nextText: 12
            },
        ]
    },
    {
        id: 11,
        text: "Well, that took some time but failure means you're learning. As long as you didn't give up! The scientist" +
            "seems more skeptical and wonders if you're sure you know what you're doing.",
        options: [
            {
                text: "Of course you are are! Trust the process!",
                nextText: 10
            },
            {
                text: "Well, maybe you're not so sure. Perhaps you want a retry?",
                nextText: 8
            },
        ]
    },
    {
        id: 12,
        text: "Avoiding the scientist, you start to see what this research is about. The herb cilantro is the target, it seems." +
            "Using modifications to the protein, the scientist wants to make it taste bad for all people. Just like how it tastes bad for him." +
            "Maybe not for the first time you wonder, should you be doing this?",
        options: [
            {
                text: "You quit on the spot.",
                nextText: -1
            },
            {
                text: "You continue your work",
                nextText: 13
            },
        ]
    },
    {
        id: 13,
        text: "You adjust yourself and get ready for the final stretch. Turning RNA into protein. Okay, that doesn't sound too bad." +
            "The scientist tells you all about proteins. Maybe a bit too much. The only thing you recall is that they are made by three letters" +
            "of RNA, a codon. This codon can be translated into an amino acid, the building blocks of proteins, using a codon table." +
            "Are you ready to do it?",
        options: [
            {
                text: "You are ready!",
                nextText: 14
            },
        ]
    },
    {
        id: 14,
        text: "Excellent work! That was it! The final step! The scientist doesn't even seem all that happy. He" +
            "is already busy with the next step.",
        options: [
            {
                text: "You shrug, and get ready to leave work.",
                nextText: 16
            },
            {
                text: "Maybe you won't leave just yet.",
                nextText: 16
            }
        ]
    },
    {
        id: 15,
        text: "That certainly could've gone better, but you managed. Didn't the scientist say this was the final" +
            "step anyways? Surely you won't quit now.",
        options: [
            {
                text: "You continue onwards.",
                nextText: 16
            },
        ]
    },
    {
        id: 16,
        text: "The scientist suddenly perks up. Damn, and you thought you were done. He moves over to you, grabbing you by the collar" +
            "and dragging you back to computer. Something is still going wrong. The adjustment he made in the protein has caused the immune system" +
            "to respond. That's not supposed to happen. While the scientist rants and raves about this, you drift off to a dream. What do you" +
            "remember of the immune system.... ",
        options: [
            {
                text: "Dream world, here we come!",
            }
        ],
    },
    {
        id: 17,
        text: "You snap back to reality. That was quite the dream you had. The scientist has stopped raving and looks at you." +
            "Suddenly, a spark of genius lights up in you. You have a solution in your mind to the man's problem. Do you tell him?",
        options: [
            {
                text: "Of course, you do!",
                nextText: 19
            },
            {
                text: "You don't, you have your reasons",
                nextText: 20
            }
        ],
    },
    {
        id: 18,
        text: "You wake up and feel groggy, almost sick. That dream didn't go very well. The scientist quirks an eyebrow," +
            "he has finally stopped his raving. Even after your trip in your dream world, you can not recall a solution to the scientist's" +
            "problem.",
        options: [
            {
                text: "Bluff your way into a solution",
                nextText: 20
            },
            {
                text: "Just tell him you don't have a solution",
                nextText: 20
            }
        ],
    },
    {
        id: 19,
        text: "The scientist smiles, nodding in approval to your solution. He says he will test it and allows you a break." +
            "You'll have to return tomorrow.",
        options: [
            {
                text: "Of course you will return tomorrow",
                setState: {Total: input_state.total_error},
                nextText: 21
            },
            {
                text: "Never return",
                nextText: -1
            }
        ],
    },
    {
        id: 20,
        text: "The scientist scoffs, waving you away. Clearly, he isn't very impressed by you. He tells you that" +
            "he'll solve it while you can take a break and return tomorrow.",
        options: [
            {
                text: "You will not return tomorrow",
                nextText: -1
            },
            {
                text: "Well, see you tomorrow then!",
                setState: {Total: input_state.total_error},
                nextText: 21
            }
        ],
    },
    {
        id: 21,
        text: "You return to your work. The scientist appears to be waiting for you with the final product. What you have gone through" +
            "all this trouble for. He tells you that he has successfully found a way to edit the OR6A2 gene so that nobody will ever" +
            "enjoy the taste of cilantro again. The only thing left to do is put his plan into action...",
        options: [
            {
                text: "Ask him if you can look at the final result one last time...",
                requiredState:(currentState) => currentState.Total < 20,
                nextText: 22
            },
            {
                text: "No, he won't! Fight the scientist! This plan can not succeed!",
                requiredState:(currentState) => currentState.Total > 20,
                nextText: 23
            },
            {
                text: "Allow him to go on ahead. This isn't your fight.",
                requiredState:(currentState) => currentState.Total > 20,
                nextText: 24
            },
        ],
    },
    {
        id: 22,
        text: "Because you've done so well, the scientist allows you to take a look at the final results one more time.",
        options: [
            {
                text: "While the scientist is gloating, sabotage the results.",
                nextText: 25
            },
            {
                text: "Leave the results as is. You never liked cilantro either.",
                nextText: 26
            }
        ],
    },
    {
        id: 23,
        text: "You try to fight the scientist but he's a surprisingly skilled fighter. After a struggle, you are" +
            "knocked on the ground. End of the line...or is it. While you are knocked out, the scientist tries to put his plans" +
            "into action but due the mistakes you've made...the gene fails to work. " +
            "Maybe making mistakes along the way isn't so bad after all.",
        options: [
            {
                text: "The world can be at ease. Cilantro is saved.",
                nextText: 0
            },
        ],
    },
    {
        id: 24,
        text: "The scientist nods in approval to the hatred you show off cilantro. He knew he could trust you." +
            "However, due to the mistakes you've made the gene promptly fails and the scientist fires you shortly after" +
            "the incident. Well-,..we can't all make on the first try.",
        options: [
            {
                text: "Cilantro is saved, but your career is in tatters. Maybe don't mention this on your resume...",
                nextText: 0
            },
        ],
    },
    {
        id: 25,
        text: "You return to the scientist after getting the last glance at the project. You know what you did." +
            "You gave up all your hard work to save cilantro. The world will never know of your sacrifice. In the days that come" +
            ", the scientist's plans slowly fall apart due to your sabotage. He doesn't know, and eventually shuts the plans down entirely." +
            "Job done, cilantro saved. All in a few days' times.",
        options: [
            {
                text: "Huzzah! Cilantro is saved.",
                nextText: 0
            },
        ],
    },
    {
        id: 26,
        text: "Cilantro was an awful herb anyways. The scientist enacts his plans, and together, you two bring the plant down." +
            "In the future, nobody likes cilantro. Destroying an entire industry and several family recipes. As for you," +
            "your career is thriving. The scientist has kept you onboard, and you're working on his next project...",
        options: [
            {
                text: "The world mourns the loss of cilantro, but you celebrate.",
                nextText: 0
            },
        ],
    },
    {
        id: -1,
        text: "For whatever reason, you quit your work at the scientist's lab. You'll work on your own path, and you won't let" +
            "one scientist decide what that path may be. Yet, doubt always lingers. Days, weeks, months pass and you notice you" +
            "start to dislike the taste of cilantro.",
        options: [
            {
                text: "Whatever. You are too busy these days with your own project to care.",
                nextText: 0
            },
        ],
    },
    {
        id: 0,
        text: "You've reached the end of the game. You can restart here.",
        options: [
            {
                text: "Restart",
                nextText: -2
            }
        ]
    }
]



startGame()