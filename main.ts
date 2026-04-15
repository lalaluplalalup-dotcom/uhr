input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    stunde += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.showString("M")
    basic.showNumber(minute)
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    minute += 1
})
let stunde = 0
let minute = 0
minute = 0
stunde = 0
let strip = neopixel.create(DigitalPin.P0, 120, NeoPixelMode.RGB)
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        strip.clear()
        strip.show()
        minute = 0
        stunde += 1
    }
    if (minute != 0) {
        for (let Index = 0; Index <= minute * 2; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        }
        strip.show()
    }
})
basic.forever(function () {
	
})
