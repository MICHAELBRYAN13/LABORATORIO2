// Definir variables para el contexto de audio
let audioContext;
let recorder;
let recordedChunks = [];

//Cuando se hace clic en "Comenzar a Grabar"
startRecordingButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      chunks = [];
      const audioURL = URL.createObjectURL(blob);
      audioPlayer.src = audioURL;
    };

    mediaRecorder.start();
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;
  } catch (error) {
    console.error('Error al acceder al micrófono:', error);
  }
});

// Cuando se hace clic en "Parar de Grabar"
stopRecordingButton.addEventListener('click', () => {
  mediaRecorder.stop();
  startRecordingButton.disabled = false;
  stopRecordingButton.disabled = true;
});

// Event Listeners para los botones
document.getElementById('stopRecording').addEventListener('click', stopRecording);
document.getElementById('playRecording').addEventListener('click', playRecording);

// Código para los filtros (ejemplo de manejo en JavaScript)
document.getElementById('lowpassFilter').addEventListener('click', () => {
    // Código para filtro pasa bajo
});

document.getElementById('highpassFilter').addEventListener('click', () => {
    // Código para filtro pasa alto
});

document.getElementById('bandpassFilter').addEventListener('click', () => {
    // Código para filtro pasa banda
});
