function buttonPress() {
    let numberOfSquares = Number(prompt('How many squares do you want ?'))
    if (numberOfSquares > 100) {
        buttonPress()
    } else {
        document.querySelector('#main').remove()
        grid(numberOfSquares)
    }
}

function grid(numberOfSquares) {
    let container = document.createElement("div");
    container.id = "main";
    container.className = "container";


    for (i = 1; i <= numberOfSquares; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.className = "row";
        row.id = "row" + i;

        for (k = 1; k <= numberOfSquares; k++) {
            let box = row.appendChild(document.createElement('div'));
            box.className = "box";
            box.id = 'box' + k;
        };
    };

    document.body.appendChild(container);


    let box = document.querySelectorAll('.box')
    box.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    })

};
grid(16);



const button = document.createElement('button')
button.textContent = 'Set max squares'
document.body.appendChild(button)
document.querySelector('button').addEventListener('click', buttonPress)


