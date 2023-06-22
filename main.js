let song = document.getElementById("song");
let progress = document.getElementById("progress");
let playIcon = document.getElementById("playIcon");

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (playIcon.classList.contains("fa-pause")) {
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    } else {
        song.play();
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
}

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});