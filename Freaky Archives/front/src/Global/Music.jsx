import { useState, useEffect, useRef } from 'react';

const Music = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        audio.volume = 0.5;
        audio.muted = true;

        const tryPlay = () => {
            audio.play().then(() => {
                setIsPlaying(!audio.paused);
            })
            .catch(() => {
                setIsPlaying(false);
            });
        };

        tryPlay();

        const removeListeners = () => {
            document.removeEventListener('click', unmute);
            document.removeEventListener('keydown', unmute);
            document.removeEventListener('touchstart', unmute);
        };

        const unmute = () => {
            audio.muted = false;
            if (audio.paused) {
                tryPlay();
            }
            removeListeners();
        };

        document.addEventListener('click', unmute);
        document.addEventListener('keydown', unmute);
        document.addEventListener('touchstart', unmute);

        return removeListeners;
    }, []);

    const toggleMusic = (e) => {
        e.stopPropagation();
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        if (isPlaying && !audio.paused) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.muted = false;
            audio.play().then(
                () => setIsPlaying(true)
            ).catch(
                () => setIsPlaying(false)
            );
        }
    };

    return (
        <>
            <audio ref={audioRef} loop preload="auto">
                <source src="/audio/Remember.m4a" type="audio/mpeg" />
            </audio>
            <span
                className="audio"
                onClick={toggleMusic}
                style={{ opacity: isPlaying ? 1 : 0.5 }}
            >
                {isPlaying ? '🔊' : '🔇'}
            </span>
        </>
    );
};

export default Music;
