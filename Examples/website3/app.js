function playSong(songFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songFile;
    audioPlayer.play();
}
