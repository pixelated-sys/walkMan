var song1 = "On & On - Cartoon, Jéja.mp3";
var song2 = "Mortals (feat. Laura Brehm) - Warriyo.mp3";
var song3 = "Cradles - Sub Urban.mp3";
var song4 = "Underrated (Feat. Sunny Lukas) - Zushi & Vanko.mp3";
var songs = [song1,song2,song3,song4];
var count=0;
var audio = document.getElementById("source");
var timeline = document.getElementById("timeline");
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];
var pause = document.querySelector(".innerCircle img");
var nm = document.getElementsByTagName("h2")[0];
var slider = document.getElementById("volumeSlider");
var music;
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
pause.addEventListener("click",pausePlay);
nm.innerHTML = songs[count];

function countChecker(){
    if(count == 4){
        count = 0;
    }
    if(count == -1){
        count = 3;
    }
}

function nextSong(){
    if(count<4){
        count++;
    }
    countChecker();
    audio.setAttribute("src","music/"+songs[count]);
    timeline.load();
    timeline.play();
    nm.innerHTML = songs[count];
}

function prevSong(){
    if(count>-1){
        count--;
    }
    countChecker();
    audio.setAttribute("src","music/"+songs[count]);
    nm.innerHTML = " " + songs[count];
    timeline.load();
    timeline.play();
}

function pausePlay(){
    if(timeline.paused)
        timeline.play();
    else
        timeline.pause();
}

slider.oninput = function(e){
    const vol = e.target.value;
    timeline.volume = vol;
}
