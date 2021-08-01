input.onButtonPressed(Button.A, function () {
    if (start == 1) {
        eredmeny = control.millis() - startMillis
    } else {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showString("early")
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(eredmeny)
})
let eredmeny = 0
let startMillis = 0
let start = 0
start = 0
for (let index = 0; index <= 4; index++) {
    while (0 > control.millis() - (index + 1) * 1000) {
    	
    }
    startMillis = control.millis()
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    basic.showNumber(5 - index)
}
music.playTone(587, music.beat(BeatFraction.Whole))
startMillis = control.millis()
start = 1
basic.showNumber(0)
