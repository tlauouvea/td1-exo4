input.onButtonPressed(Button.A, function () {
    led.unplot(posX, 0)
    posX += -1
    if (posX < 0) {
        posX = 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, 0)
    posX += 1
    if (posX > 4) {
        posX = 4
    }
})
let posX = 0
posX = 0
basic.forever(function () {
    led.plot(Math.constrain(posX, 0, 4), 0)
})
