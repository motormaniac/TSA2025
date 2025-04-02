
var millis = 0 //current updated time

export let Input = {
/*
String keyCode : {
    bool isPressed,
    num pressTime,  //time in millis the button was pressed
    num releaseTime, //time in millis the button was released
    func onPress, //function called right when the button is pressed
    func onRelease //function called right when the button is released
    }
    */
}

const DEFAULT_KEY_INFO = {
    isPressed:false,
    pressTime:0,
    releaseTime:0,
    onPress:()=>{},
    onRelease:()=>{}
}

export var mouseX = 0
export var mouseY = 0
export var deltaMouseX = 0
export var deltaMouseY = 0

//key code values: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
export const W = "KeyW"
export const A = "KeyA"
export const S = "KeyS"
export const D = "KeyD"
    
window.onkeydown = (keyEvent) => {
    let keyInfo = Input[String(keyEvent.code)]
    if (keyInfo===null) {
        keyInfo = DEFAULT_KEY_INFO
        Input[String(keyEvent.code)] = keyInfo
    }
    keyInfo.isPressed = true
    keyInfo.startTime = millis
    keyInfo.onPress()
}
window.onkeyup = (keyEvent) => {
    let keyInfo = Input[String(keyEvent.code)]
    if (keyInfo===null) {
        keyInfo = DEFAULT_KEY_INFO
        Input[String(keyEvent.code)] = keyInfo
    }
    keyInfo.isPressed = false
    keyInfo.releaseTime = millis
    keyInfo.onRelease()
}

function getMouseKey(mouseEventButton) {
    switch (mouseEvent.button) {
        case 0: return "lmb" //left mouse button
        case 1: "mmb" //middle mouse button
        case 2: return "rmb" //right mouse button
        default: return "lmb"
    }
}

window.onmousedown = (mouseEvent) => {
    let keyInfo = Input[getMouseKey(mouseEvent.button)]
    if (keyInfo===null) {
        keyInfo = DEFAULT_KEY_INFO
        Input[String(keyEvent.code)] = keyInfo
    }
    keyInfo.isPressed = true
    keyInfo.startTime = millis
    keyInfo.onPress()
}
window.onmouseup = (mouseEvent) => {
    let keyInfo = Input[getMouseKey(mouseEvent.button)]
    if (keyInfo===null) {
        keyInfo = DEFAULT_KEY_INFO
        Input[String(keyEvent.code)] = keyInfo
    }
    keyInfo.isPressed = false
    keyInfo.releaseTime = millis
    keyInfo.onRelease()
}

window.onmousemove = (mouseEvent) => {
    mouseX = mouseEvent.x
    mouseY = mouseEvent.y

    deltaMouseX = mouseEvent.movementX
    deltaMouseY = mouseEvent.movementY
}