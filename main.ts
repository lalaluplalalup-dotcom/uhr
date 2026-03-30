input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    minute += 10
    basic.showNumber(minute)
    basic.clearScreen()
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
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        minute = 0
        stunde += stunde
    }
})
basic.forever(function () {
	
})
