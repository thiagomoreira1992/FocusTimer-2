export default function(){

    const forest = new Audio("audios/Floresta.wav");
    
    const rain = new Audio('audios/Chuva.wav');
    
    const coffe = new Audio ('audios/Cafeteria.wav');
    
    const fireplace = new Audio ('audios/Lareira.wav');

    forest.loop = true;

    rain.loop = true;

    coffe.loop = true;

    fireplace.loop = true;

    const finalBeep = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    return{
        forest,
        rain,
        coffe,
        fireplace,
        finalBeep
    }


}
