let audioContext;
let recorder;
let recordedChunks = [];
let audioPlayer = document.getElementById('audioPlayer');

// Función para inicializar el grabador
async function startRecording() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = event => recordedChunks.push(event.data);
}

// Función para detener la grabación
function stopRecording() {
    recorder.stop();
}

// Función para reproducir la grabación
function playRecording() {
    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
    const audioURL = URL.createObjectURL(blob);
    audioPlayer.src = audioURL;
}

// Event Listeners para los botones
document.getElementById('startRecording').addEventListener('click', startRecording);
document.getElementById('stopRecording').addEventListener('click', stopRecording);
document.getElementById('audioPlayer').addEventListener('ended', () => {
    // Limpiar la grabación después de que se termine de reproducir
    audioPlayer.src = '';
});

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
