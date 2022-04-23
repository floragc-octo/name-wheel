const createChoiceElement = (value) => {
    const choiceElement = document.createElement("span")
    choiceElement.className = SELECTOR_CHOICES_LIST_ELEMENT_CLASSNAME
    choiceElement.innerHTML = value
    return choiceElement
}

const createLaunchButtonElement = () => {
    const launchButton = document.createElement("button")
    launchButton.className = "btn"
    launchButton.id = SELECTOR_CHOICE_MAKER_ID
    launchButton.innerHTML = "Lancer"
    launchButton.addEventListener("click", chooseWinner);
    return launchButton
}

const displayChoices = (choices) => {
    document.querySelector(SELECTOR_BOARD).innerHTML = ""
    const choicesParent = document.createElement('div')
    choicesParent.id = SELECTOR_CHOICES_LIST_ID
    
    choices.split(SEPARATOR).filter((choice) => choice).map((choice) => {
        const choiceElement = createChoiceElement(choice)
        choicesParent.appendChild(choiceElement)
    })
    document.querySelector(SELECTOR_BOARD).appendChild(choicesParent)

    const launchButton = createLaunchButtonElement()
    document.querySelector(SELECTOR_BOARD).appendChild(launchButton)
}

const chooseWinner = () => {
    const choices = document.querySelectorAll(SELECTOR_CHOICES_LIST_ELEMENT)
    const random = Math.floor(Math.random() * choices.length);
    let current = 0;
    choices.forEach((choice) => {
        choice.classList = SELECTOR_CHOICES_LIST_ELEMENT_CLASSNAME
        const statusClass = (current === random) ? CHOICE_CHOOSEN : CHOICE_NOT_CHOOSEN
        choice.classList.add(statusClass)
        current++
    })
}