input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(2)
    radio.sendNumber(randint(4, 7))
    basic.pause(500)
    radio.setGroup(3)
    radio.sendNumber(randint(4, 7))
    basic.pause(500)
    radio.setGroup(4)
    radio.sendNumber(randint(4, 7))
    radio.setGroup(5)
    basic.showIcon(IconNames.Chessboard)
    state = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "Icon1") {
        Icon1 = value
        state += 1
    } else if (name == "Icon2") {
        Icon2 = value
        state += 1
    } else if (name == "Icon3") {
        Icon3 = value
        state += 1
    }
})
let state = 0
let Icon3 = 0
let Icon2 = 0
let Icon1 = 0
Icon1 = 0
Icon2 = 0
Icon3 = 0
state = 0
basic.forever(function () {
    if (state == 3) {
        if (Icon1 == Icon2 && Icon2 == Icon3 && Icon3 == Icon1) {
            for (let index = 0; index < 4; index++) {
                basic.showString("Winner!!!")
            }
            control.reset()
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
