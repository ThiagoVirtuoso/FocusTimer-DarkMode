import { lightModeButton, darkModeButton, minutesDisplay, secondsDisplay, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons } from "./elements.js"
import Timer from "./timer.js"
import Events from "./events.js"

const timer = Timer(minutesDisplay, secondsDisplay)
Events(timer, lightModeButton, darkModeButton, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons)