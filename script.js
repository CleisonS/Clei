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
  
    // Função para reproduzir a música atual
    function playCurrentMusic() {
      audioElement.src = musicList[currentMusicIndex];
      audioElement.play();
      playButton.textContent = "Pause";
    }
  
    // Função para definir o índice da música atual na localStorage
    function setMusicIndexToLocalStorage() {
      localStorage.setItem("currentMusicIndex", currentMusicIndex.toString());
    }
  
     // Função para definir o ícone do botão de play com base no estado de reprodução do áudio
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

  // Inicializa o ícone do botão de play
  setPlayButtonIcon();

  // Ouvinte para o botão de play
  playButton.addEventListener("click", function () {
    if (audioElement.paused) {
      playCurrentMusic();
    } else {
      audioElement.pause();
      setPlayButtonIcon(); // Atualiza o ícone do botão ao pausar
    }
  });

  
  // Ouvinte para o botão de próxima música
  nextButton.addEventListener("click", function () {
    audioElement.pause();
    currentMusicIndex++;
    if (currentMusicIndex >= musicList.length) {
      currentMusicIndex = 0;
    }
    playCurrentMusic();
  });
  
    // Ouvinte para salvar o índice da música atual quando o usuário fecha a página
    window.addEventListener("beforeunload", setMusicIndexToLocalStorage);
  });
  
  

  
  "music/dust.mp3",
  "music/memory.mp3",
  "music/Shadow.mp3",
  "music/blizzard.mp3",
  "music/crystal.mp3"