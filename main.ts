radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.sendValue("temperatura", input.temperature())
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1.8 * (input.temperature() + 32))
})
radio.onReceivedValue(function (name, value) {
    if (name == "temperatura") {
        basic.showNumber(value)
    }
})
radio.setGroup(58545256)
basic.forever(function () {
	
})
