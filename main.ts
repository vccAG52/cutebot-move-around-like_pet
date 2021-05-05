input.onSound(DetectedSound.Loud, function () {
    cuteBot.stopcar()
})
let Random_number = 0
let Move_Randomly = 0
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Inches) <= 5) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
        if (randint(0, 1) == 1) {
            cuteBot.moveTime(cuteBot.Direction.left, 50, 0.5)
        } else {
            cuteBot.moveTime(cuteBot.Direction.right, 50, 0.5)
        }
    }
})
basic.forever(function () {
    Move_Randomly = randint(1, 10)
    if (Move_Randomly >= 7) {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.9)
    } else if (Move_Randomly == 8) {
        cuteBot.moveTime(cuteBot.Direction.right, 50, 0.9)
    } else if (Move_Randomly == 9) {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.9)
    } else {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.9)
    }
})
basic.forever(function () {
    Random_number = randint(1, 16)
    if (Random_number == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    } else if (Random_number == 13) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x999999)
    } else if (Random_number == 2) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    } else if (Random_number == 3) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xb09eff)
    } else if (Random_number == 4) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
    } else if (Random_number == 5) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (Random_number == 6) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    } else if (Random_number == 7) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
    } else if (Random_number == 8) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    } else if (Random_number == 9) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x65471f)
    } else if (Random_number == 10) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0080)
    } else if (Random_number == 11) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
    } else if (Random_number == 12) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else if (Random_number == 14) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff9da5)
    } else if (Random_number == 15) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff00ff)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    }
    basic.pause(5000)
})
