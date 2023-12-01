startbit.startbit_Init()
let angle = 1
startbit.startbit_setFanSpeed(startbit.startbit_fanPort.port1, 100)
startbit.setPWMServo(startbit.startbit_servorange.range2, 1, angle, 500)
basic.pause(500)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        angle = angle + 20
        if (angle >= 270) {
            angle = 270
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        angle = angle - 20
        if (angle <= 0) {
            angle = 0
        }
    }
    startbit.setPWMServo(startbit.startbit_servorange.range2, 1, angle, 20)
})
