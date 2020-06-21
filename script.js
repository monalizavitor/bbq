let adult = document.getElementById('adults')
let children = document.getElementById('children')
let duration = document.getElementById('duration')
let result = document.getElementById('result')

function calc() {
    let amountAdults = adult.value
    let amountChildren = children.value
    let eventDuration = duration.value

    let amountMeat = meal(eventDuration) * amountAdults + (meal(eventDuration) / 2 * amountChildren)
    let amountbeer = beer(eventDuration) * amountAdults
    let amountdrink = drink(eventDuration) * amountAdults + (drink(eventDuration) / 2 * amountChildren)

    result.innerHTML = `<p><strong>Sua média de consumo será:</strong></p>`
    result.innerHTML += `<p><strong>${amountMeat}g de carne</strong></p>`
    result.innerHTML += `<p><strong>${amountbeer}ml de cerveja</strong></p>`
    result.innerHTML += `<p><strong>${amountdrink}ml de água ou refrigerante</strong></p>`

}

function meal(eventDuration) {
    if (eventDuration >= 6) {
        return 650
    } else {
        return 400
    }
}

function beer(eventDuration) {
    if (eventDuration >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function drink(eventDuration) {
    if (eventDuration >= 6) {
        return 1500
    } else {
        return 1000
    }
}