input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    minute += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(minute)
    basic.showNumber(stunde)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    stunde += 1
})
let stunde = 0
let minute = 0
minute = 0
stunde = 0
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        minute = 0
        stunde += 1
    }
})
basic.forever(function () {
	
})
