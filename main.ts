input.onButtonPressed(Button.A, function () {
    radio.sendString("Z")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("W")
})
radio.setGroup(7)
