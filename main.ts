radio.setGroup(1)
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        if (input.acceleration(Dimension.Y) < -300) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendNumber(1)
        }
        if (input.acceleration(Dimension.Y) > 300) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            radio.sendNumber(2)
        }
        if (input.acceleration(Dimension.X) > 300) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            radio.sendNumber(3)
        }
        if (input.acceleration(Dimension.X) < -300) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            radio.sendNumber(4)
        }
        if (Math.abs(input.acceleration(Dimension.X)) < 300 && Math.abs(input.acceleration(Dimension.X)) > 0 && (Math.abs(input.acceleration(Dimension.Y)) < 300 && Math.abs(input.acceleration(Dimension.Y)) > 0)) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            radio.sendNumber(5)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
