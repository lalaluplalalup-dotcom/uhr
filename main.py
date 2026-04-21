def minutenCheck():
    global minute, stunde
    if minute == minutenlimit:
        minute = 0
        stunde += 1

def on_button_a():
    global stunde
    stunde += 1
    uhrCheck()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    basic.show_number(stunde)
    basic.show_string("M")
    basic.show_number(minute)
    basic.clear_screen()
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global minute
    minute += 1
    uhrCheck()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def zeigeStunden():
    stunden_strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    Index = 0
    while Index <= stunde * leds_pro_stunde:
        stunden_strip.set_pixel_color(Index, neopixel.colors(NeoPixelColors.RED))
        Index += 1
    stunden_strip.show()

def on_gesture_shake():
    zeigeMinuten()
    zeigeStunden()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def zeigeMinuten():
    strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    Index2 = 0
    while Index2 <= minute * leds_an_pro_minute:
        strip.set_pixel_color(Index2, neopixel.colors(NeoPixelColors.RED))
        Index2 += 1
    strip.show()
def uhrCheck():
    minutenCheck()
    stundenCheck()
def stundenCheck():
    global stunde
    if stunde == stundenlimit:
        stunde = 0
leds_pro_stunde = 0
leds_an_pro_minute = 0
stunden_strip: neopixel.Strip = None
strip: neopixel.Strip = None
stundenlimit = 0
minutenlimit = 0
stunde = 0
minute = 0
minute = 0
stunde = 0
minutenlimit = 2
stundenlimit = 12
strip = neopixel.create(DigitalPin.P3, 118, NeoPixelMode.RGB)
stunden_strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
leds_an_pro_minute = 2
leds_pro_stunde = 2
strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
stunden_strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))

def on_every_interval():
    global minute
    minute += 1
    uhrCheck()
    zeigeMinuten()
    zeigeStunden()
loops.every_interval(60000, on_every_interval)
