import { playButton } from "./elements.js"
import Sounds from "./sounds.js"
import Controls from "./controls.js"

export default function(minutesDisplay, secondsDisplay) {
    let timeCountdown
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    function update(minutes, seconds) {
        minutes = minutes === undefined ? minutesDisplay.textContent : minutes
        seconds = seconds === undefined ? secondsDisplay.textContent : seconds
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown() {
        timeCountdown = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            
            
            if(isFinished) {
                reset()
                Sounds().timer.play()
                Controls().resetControls()
                return
            }
            
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
            
            update(minutes, --seconds)
            countdown()
        }, 1000)
    }

    function hold() {
        clearInterval(timeCountdown)
    }


    function reset() {
        update(minutes, seconds)
        clearTimeout(timeCountdown)
        playButton.classList.toggle('counting')
    }

    function set(operator) {
        let newMinutes = Number(minutesDisplay.textContent)
        
        if(operator == '+') {
            newMinutes += 5
            minutes += 5
            update(newMinutes)
        } else {
            newMinutes -= 5
            if(newMinutes <= 0) {
                return
            }
            
            minutes -= 5
            update(newMinutes)
        }
    }

    return { update, countdown, hold, reset, set }
}