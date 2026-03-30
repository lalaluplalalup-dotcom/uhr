input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
	
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    stunde += 1
    basic.showNumber(stunde)
    basic.clearScreen()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.showString("M")
    basic.showNumber(minute)
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    minute += 1
    basic.showNumber(minute)
    basic.clearScreen()
})
let stunde = 0
let minute = 0
minute = 0
stunde = 0
let strip = neopixel.create(DigitalPin.P3, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
basic.pause(5000)
strip.clear()
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
strip.show()
let minuten_counter = 0
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        minute = 0
        stunde += stunde
    }
    if (minute % 2 == 0 && minute != 0) {
        strip.setPixelColor(minuten_counter, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        minuten_counter += 1
    }
})
basic.forever(function () {
	
})
