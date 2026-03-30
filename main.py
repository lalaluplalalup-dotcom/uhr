def on_button_a():
    global stunde
    stunde += 1
    basic.show_number(stunde)
    basic.clear_screen()
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
    basic.show_number(minute)
    basic.clear_screen()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

stunde = 0
minute = 0
minute = 0
stunde = 0

def on_every_interval():
    global minute, stunde
    minute += 1
    if minute == 60:
        minute = 0
        stunde += stunde
loops.every_interval(60000, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
