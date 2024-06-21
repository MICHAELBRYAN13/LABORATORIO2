let audioContext;
let recorder;
let recordedChunks = [];
let audioPlayer = document.getElementById('audioPlayer');
let startButton = document.getElementById('startRecording');
let stopButton = document.getElementById('stopRecording');

// Función para inicializar el grabador
async function startRecording() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorder = new MediaRecorder(stream);

        recorder.ondataavailable = event => recordedChunks.push(event.data);
        recorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'audio/wav' });
            audioPlayer.src = URL.createObjectURL(blob);
            audioPlayer.controls = true;
        };

        recorder.start();
        startButton.disabled = true;
        stopButton.disabled = false;
    } catch (err) {
        console.error('Error al acceder al micrófono:', err);
    }
}

// Función para detener la grabación
function stopRecording() {
    if (recorder && recorder.state === 'recording') {
        recorder.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

// Event Listeners para los botones
startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);

// Código para los botones de filtros y espectro de frecuencias (implementarás luego)
document.getElementById('frequencySpectrum').addEventListener('click', () => {
    // Código para espectro de frecuencias
});

document.getElementById('highpassFilter').addEventListener('click', () => {
    // Código para filtro pasa alto
});

document.getElementById('lowpassFilter').addEventListener('click', () => {
    // Código para filtro pasa bajo
});

document.getElementById('bandpassFilter').addEventListener('click', () => {
    // Código para filtro pasa banda
});

