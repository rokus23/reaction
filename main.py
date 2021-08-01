def on_button_pressed_a():
    global eredmeny
    if start == 1:
        eredmeny = control.millis() - startMillis
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(eredmeny)
input.on_button_pressed(Button.B, on_button_pressed_b)

eredmeny = 0
startMillis = 0
start = 0
start = 0
for index in range(6):
    basic.show_number(5)
    basic.pause(1000)
    basic.show_number(4)
    basic.pause(1000)
    basic.show_number(3)
    basic.pause(1000)
    basic.show_number(2)
    basic.pause(1000)
    basic.show_number(1)
    basic.pause(1000)
startMillis = control.millis()
start = 1
basic.show_number(0)