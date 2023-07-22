import { lightModeButton, darkModeButton, playButton, pauseButton } from "./elements.js"
import Sounds from "./sounds.js"

const getSound = Sounds().getSound

export default function() {
    function themeToggle() {
        const html = document.documentElement
        html.classList.toggle('dark')
        lightModeButton.classList.toggle('hide')
        darkModeButton.classList.toggle('hide')
    }

    function toggleControls() {
        playButton.classList.toggle('hide')
        pauseButton.classList.toggle('hide')
    }
    
    function resetControls() {
        if(playButton.classList.contains('hide')) {
            toggleControls(playButton, pauseButton)
        }
    }
    
    function toggleMusicButton(button) {
        if(button.classList.contains('playing')) {
            button.classList.toggle('playing')
            getSound[button.id].pause()
        } else {
            button.classList.toggle('playing')
            getSound[button.id].play()
        }
    }

    function switchButtons(button, buttons) {
        let activeButton
        for (const Button of buttons) {
            if(Button.classList.contains('playing')) {
                activeButton = Button
            }
        }
        
        if(activeButton && (activeButton != button)) {
            toggleMusicButton(activeButton)
        }

        if(!button.classList.contains('playing')) {
            toggleMusicButton(button)
        }
    }
    
    function changeVolume(button, volume) {
        getSound[button.id].volume = volume
    }
    return { themeToggle, toggleControls, resetControls, switchButtons, changeVolume }
}