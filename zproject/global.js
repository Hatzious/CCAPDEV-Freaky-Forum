$(document).ready(function() {
    var music = document.getElementById("bgm");
    button = document.getElementById("music-toggle").innerHTML = "🔊";
    
    music.muted = true;
    music.volume = 0.1;
    music.play();

    var isPlaying = !music.paused;

    // unmute on ANY user interaction with the page
    function unmuteAudio() {
        if (!isPlaying) {
            music.muted = false;
            button.innerHTML = "🔊";
            button.style.opacity = "1";
            isPlaying = true;

            document.removeEventListener('click', unmuteAudio);
            document.removeEventListener('keydown', unmuteAudio);
            document.removeEventListener('touchstart', unmuteAudio);
        }
    }
    
    // listen for any user interaction to unmute
    document.addEventListener('click', unmuteAudio);
    document.addEventListener('keydown', unmuteAudio);
    document.addEventListener('touchstart', unmuteAudio);

    $("#music-toggle").click(function(e) {
        e.stopPropagation();
        if (isPlaying) {
            music.pause();
            $(this).text("🔇");
            $(this).css("opacity", "0.5");
            isPlaying = false;
        } else {
            music.muted = false;
            music.play();
            $(this).text("🔊");
            $(this).css("opacity", "1");
            isPlaying = true;
        }
    });
});