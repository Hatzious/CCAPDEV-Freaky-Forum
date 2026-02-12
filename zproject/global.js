$(document).ready(function() {
    var music = document.getElementById("bgm");
    button = document.getElementById("music-toggle").innerHTML = "🔊";
    var isPlaying = !music.paused;

    music.volume = 0.2;
    $("#music-toggle").click(function() {
        if (isPlaying) {
            music.pause();
            $(this).text("🔇");
            $(this).css("opacity", "0.5");
            isPlaying = false;
        } else {
            music.play();
            music.muted = false;
            $(this).text("🔊");
            $(this).css("opacity", "1");
            isPlaying = true;
        }
    });
});