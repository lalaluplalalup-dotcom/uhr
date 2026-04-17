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
function zeigeStunden () {
    stunden_strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    for (let Index = 0; Index <= stunde * leds_pro_stunde; Index++) {
        stunden_strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
    }
    stunden_strip.show()
}
input.onGesture(Gesture.Shake, function () {
    zeigeMinuten()
    zeigeStunden()
})
function zeigeMinuten () {
    if (minute != 0) {
        for (let Index = 0; Index <= minute * leds_an_pro_minute; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        }
        strip.show()
    }
}
let leds_pro_stunde = 0
let leds_an_pro_minute = 0
let stunden_strip: neopixel.Strip = null
let strip: neopixel.Strip = null
let stunde = 0
let minute = 0
minute = 0
stunde = 12
let minutenlimit = 2
let stundenlimit = 12
strip = neopixel.create(DigitalPin.P3, 120, NeoPixelMode.RGB)
stunden_strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
leds_an_pro_minute = 2
leds_pro_stunde = 3
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
stunden_strip.showColor(neopixel.colors(NeoPixelColors.Red))
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == minutenlimit) {
        strip.clear()
        strip.show()
        minute = 0
        stunde += 1
        if (stunde > stundenlimit) {
            stunde = 1
        }
    }
    zeigeMinuten()
    zeigeStunden()
})
