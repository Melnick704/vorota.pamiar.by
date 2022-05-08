const INPUT_VALID_CLASS = 'is-valid-input'
const INPUT_INVALID_CLASS = 'is-invalid-input'


const setInputEvent = (inputSelector, eventValue = 'change') => {
    const input = document.querySelector(inputSelector)
    input.addEventListener(eventValue, (event) => {
        if (input.validity.valid) {
            input.classList.add(INPUT_VALID_CLASS)
            input.classList.remove(INPUT_INVALID_CLASS)
        } else {
            input.classList.remove(INPUT_VALID_CLASS)
            input.classList.add(INPUT_INVALID_CLASS)
        }
    })
}

const setInputEvents = (eventValue = 'change') => {
    setInputEvent('input[id="name"]', eventValue)
    setInputEvent('input[id="phone"]', eventValue)
}

setInputEvents()