//Dom elements
const btnSpace = document.querySelector('.buttons')

// make and populate calculator with buttons
const makeButtons = () => {
    for (let index = 0; index < 19; index++) {
        let btn = document.createElement('div')
        btn.dataset.index = index
        btnSpace.appendChild(btn)
    }
}