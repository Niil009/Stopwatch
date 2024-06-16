let out = document.getElementById('out')
let start = document.getElementById('btn2')
let stop = document.getElementById('btn1')
let reset = document.getElementById('btn3')
let mili = 0
let sec = 0
let min = 0
let hr = 0
let timerId = null
start.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId)
    }
    timerId = setInterval(startTime, 10)
})
stop.addEventListener('click', () => {
    clearInterval(timerId)
})
reset.addEventListener('click', () => {
    clearInterval(timerId)
    out.innerHTML = `00:00:00:000`
    mili = 0
    sec = 0
    min = 0
    hr = 0
})
function startTime() {
    mili++
    if (mili === 100) {
        mili = 0
        sec++
        if (sec === 60) {
            sec = 0
            min++
            if (min === 60)
                min = 0
            hr++
        }
    }
    let miliSec = (mili < 10) ? `0${mili}` : mili
    let secOnd = (sec < 10) ? `0${sec}` : sec
    let minute = (min < 10) ? `0${min}` : min
    out.textContent = `${hr} :${minute} :${secOnd}:${miliSec}`
}
