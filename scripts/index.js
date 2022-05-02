import Timer from "./timer.js";
import Controls from './controls.js';
import Events from './events.js'
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
    rangeSound
} from "./elements.js";

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

Events({controls, timer});
