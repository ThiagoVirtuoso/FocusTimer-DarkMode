export default function() {
    const forest = new Audio('./assets/florest.wav') 
    const rain = new Audio('./assets/rain.wav')
    const coffee_shop = new Audio('./assets/coffee-shop.wav')
    const fireplace = new Audio('./assets/fireplace.wav')
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    forest.loop = true
    rain.loop = true
    coffee_shop.loop = true
    fireplace.loop = true

    const getSound = {
        'forest': forest,
        'rain': rain,
        'coffee_shop': coffee_shop,
        'fireplace': fireplace
    }

    return { forest, rain, coffee_shop, fireplace, buttonPress, timer, getSound }
}
