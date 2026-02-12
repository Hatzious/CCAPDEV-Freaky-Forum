$(document).ready(function() {
    var music = document.getElementById("bgm");
    var isPlaying = false;

    music.volume = 0.2;
    document.getElementById("music-toggle").innerHTML = "🔊";

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