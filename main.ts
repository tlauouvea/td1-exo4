input.onButtonPressed(Button.A, function () {
    if (posX == 0) {
        if (posY == 0) {
            led.unplot(posX, posY)
            led.plot(4, 4)
            posX = 4
            posY = 4
        } else {
            led.unplot(posX, posY)
            led.plot(4, posY - 1)
            posX = 4
            posY = posY - 1
        }
    } else {
        led.unplot(posX, posY)
        led.plot(posX - 1, posY)
        posX = posX - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX == 4) {
        if (posY == 4) {
            led.unplot(posX, posY)
            led.plot(0, 0)
            posX = 0
            posY = 0
        } else {
            led.unplot(posX, posY)
            led.plot(0, posY + 1)
            posX = 0
            posY = posY + 1
        }
    } else {
        led.unplot(posX, posY)
        led.plot(posX + 1, posY)
        posX = posX + 1
    }
})
let posX = 0
let posY = 0
posY = 0
posX = 0
led.plot(0, 0)
basic.forever(function () {
	
})
