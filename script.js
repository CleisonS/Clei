
document.addEventListener("DOMContentLoaded", function () {
    // Obtenha o elemento de áudio e o botão
    const audioElement = document.getElementById("audio");
    const playButton = document.getElementById("playButton");
  
    // Adicione um ouvinte de evento para o botão de play
    playButton.addEventListener("click", function () {
      if (audioElement.paused) {
        audioElement.play();
        playButton.textContent = "Pause";
      } else {
        audioElement.pause();
        playButton.textContent = "Play";
      }
    });
  });
  