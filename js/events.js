import Sounds from "./sounds.js"
import Controls from "./controls.js"

const sounds = Sounds()

export default function(timer, lightModeButton, darkModeButton, playButton, pauseButton, stopButton, plusButton, minusButton, soundButtons) {
    for (const soundButton of soundButtons) {
        const slider = soundButton.querySelector('.slider')
        let isSliderMoving = false
        let mouseDown = false

        slider.oninput = () => {
            Controls().changeVolume(soundButton, (Number(slider.value) / 100))
        }

        slider.onmousedown = () => {
            mouseDown = true
        }

        slider.onmousemove = () => {
            if(mouseDown) {
                isSliderMoving = true
            }
        }
        soundButton.onclick = () => {
            Controls().switchButtons(soundButton, soundButtons)
            if(!isSliderMoving && !mouseDown) {
                slider.value = 50
                Controls().changeVolume(soundButton, (Number(slider.value) / 100))
            } else {
                mouseDown = false
            }

            isSliderMoving = false
        }

    }

    lightModeButton.onclick = () => {
        Controls().themeToggle()
    }

    darkModeButton.onclick = () => {
        Controls().themeToggle()
    }
    
    playButton.onclick = () => {
        Controls().toggleControls()
        timer.countdown()
        sounds.buttonPress.play()
    }
    
    pauseButton.onclick = () => {
        Controls().toggleControls()
        timer.hold()
        sounds.buttonPress.play()
    }
    
    stopButton.onclick = () => {
        timer.reset()
        Controls().resetControls()
        sounds.buttonPress.play()
    }
    
    plusButton.onclick = () => {
        timer.set('+')
        sounds.buttonPress.play()
    }
    
    minusButton.onclick = () => {
        timer.set('-')
        sounds.buttonPress.play()
    }
}