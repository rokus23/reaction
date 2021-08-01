input.onButtonPressed(Button.A, function () {
    if (start == 1) {
        eredmeny = control.millis() - startMillis
    }
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
    basic.showNumber(5 - index)
}
startMillis = control.millis()
start = 1
basic.showNumber(0)
