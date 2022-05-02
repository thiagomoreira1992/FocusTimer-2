import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrement,
    buttonDecrement,
    displayMinutes,
    displaySeconds,
    buttonSound1,
    buttonSound2,
    buttonSound3,
    buttonSound4,
    rangeSound1
} from "./elements.js";
import Timer from "./timer.js";
import Controls from './controls.js';

const timer = Timer({
    displayMinutes,
    displaySeconds
});
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSound1,
    buttonSound2,
    buttonSound3,
    buttonSound4,
    displayMinutes,
    timer
})


buttonPlay.addEventListener('click', function () {
    controls.play();
    timer.countDown();
})

buttonPause.addEventListener('click', function () {
    controls.pause();
    timer.hold();
})

buttonStop.addEventListener('click', function () {
    controls.stop();
    timer.reset();
})

buttonIncrement.addEventListener('click', function () {
    controls.increment();
})

buttonDecrement.addEventListener('click', function () {
    controls.decrement();
})

buttonSound1.addEventListener('click', function () {
    controls.sound1();
})

buttonSound2.addEventListener('click', function () {
    controls.sound2();
})

buttonSound3.addEventListener('click', function () {
    controls.sound3();
})

buttonSound4.addEventListener('click', function () {
    controls.sound4();
})



const rangeSound = document.querySelector('volume1');

rangeSound.addEventListener('input', function(){
    console.log(rangeSound.value);
})
