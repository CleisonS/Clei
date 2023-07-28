document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.getElementById("audio");
    const playButton = document.getElementById("playButton");
    const nextButton = document.getElementById("nextButton");
  
    const musicList = [
        "music/dust.mp3",
        "music/memory.mp3",
        "music/Shadow.mp3",
        "music/blizzard.mp3",
        "music/crystal.mp3"
    ];
    let currentMusicIndex = 0;
  
    function playCurrentMusic() {
      audioElement.src = musicList[currentMusicIndex];
      audioElement.play();
      playButton.textContent = "Pause";
    }
  
    function setMusicIndexToLocalStorage() {
      localStorage.setItem("currentMusicIndex", currentMusicIndex.toString());
    }
  
    function setPlayButtonIcon() {
        if (audioElement.paused) {
        playButton.classList.remove("pause-icon");
        playButton.classList.add("play-icon");
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Ícone de Play
        } else {
        playButton.classList.remove("play-icon");
        playButton.classList.add("pause-icon");
        playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Ícone de Pause
        }
    }

  setPlayButtonIcon();

  playButton.addEventListener("click", function () {
    if (audioElement.paused) {
      playCurrentMusic();
    } else {
      audioElement.pause();
      setPlayButtonIcon(); // Atualiza o ícone do botão ao pausar
    }
  });
  nextButton.addEventListener("click", function () {
    audioElement.pause();
    currentMusicIndex++;
    if (currentMusicIndex >= musicList.length) {
      currentMusicIndex = 0;
    }
    playCurrentMusic();
  });
  audioElement.addEventListener("ended", function () {
    currentMusicIndex++;
    if (currentMusicIndex >= musicList.length) {
      currentMusicIndex = 0;
    }
    playCurrentMusic();
  });
    window.addEventListener("beforeunload", setMusicIndexToLocalStorage);
  });
