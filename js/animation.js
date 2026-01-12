/* ===================================================================
   ANIMATION.JS - Lógica de animación
   =================================================================== */

// Estado global
let currentIndex = 0;
let isPlaying = false;
let animationSpeed = 1; // 1x por defecto
let animationInterval = null;

// Elementos DOM
const introScreen = document.getElementById('intro-screen');
const mainViz = document.getElementById('main-viz');
const outroScreen = document.getElementById('outro-screen');
const startBtn = document.getElementById('start-btn');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const replayBtn = document.getElementById('replay-btn');
const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');

// Elementos de la visualización
const currentYearEl = document.getElementById('current-year');
const barByd = document.getElementById('bar-byd');
const barTesla = document.getElementById('bar-tesla');
const barToyota = document.getElementById('bar-toyota');
const statByd = document.getElementById('stat-byd');
const statTesla = document.getElementById('stat-tesla');
const statToyota = document.getElementById('stat-toyota');
const totalMarket = document.getElementById('total-market');
const currentLeader = document.getElementById('current-leader');
const annotationEl = document.getElementById('annotation');
const annotationText = document.getElementById('annotation-text');

// ===================================================================
// INICIALIZACIÓN
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando visualización...');
    
    // Event listeners
    startBtn.addEventListener('click', startVisualization);
    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
    resetBtn.addEventListener('click', reset);
    replayBtn.addEventListener('click', replay);
    speedSlider.addEventListener('input', changeSpeed);
    
    console.log('✅ Event listeners configurados');
});

// ===================================================================
// FUNCIONES PRINCIPALES
// ===================================================================

function startVisualization() {
    console.log('▶ Iniciando visualización');
    introScreen.classList.add('hidden');
    mainViz.classList.remove('hidden');
    currentIndex = 0;
    updateVisualization(currentIndex);
}

function play() {
    if (isPlaying) return;
    
    console.log('▶ Play');
    isPlaying = true;
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    
    // Si estamos al final, reiniciar
    if (currentIndex >= chartData.length - 1) {
        currentIndex = 0;
    }
    
    startAnimation();
}

function pause() {
    console.log('⏸ Pause');
    isPlaying = false;
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    stopAnimation();
}

function reset() {
    console.log('↻ Reset');
    pause();
    currentIndex = 0;
    updateVisualization(currentIndex);
    hideAnnotation();
}

function replay() {
    console.log('↻ Replay desde outro');
    outroScreen.classList.add('hidden');
    mainViz.classList.remove('hidden');
    currentIndex = 0;
    updateVisualization(currentIndex);
}

function changeSpeed() {
    animationSpeed = parseFloat(speedSlider.value);
    speedValue.textContent = animationSpeed + 'x';
    console.log('⚡ Velocidad cambiada a:', animationSpeed);
    
    // Si está reproduciendo, reiniciar con nueva velocidad
    if (isPlaying) {
        stopAnimation();
        startAnimation();
    }
}

// ===================================================================
// ANIMACIÓN
// ===================================================================

function startAnimation() {
    const baseDelay = 2000; // 2 segundos base por año
    const delay = baseDelay / animationSpeed;
    
    animationInterval = setInterval(() => {
        currentIndex++;
        
        if (currentIndex >= chartData.length) {
            // Fin de la animación
            stopAnimation();
            showOutro();
            return;
        }
        
        updateVisualization(currentIndex);
    }, delay);
}

function stopAnimation() {
    if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
    }
}

// ===================================================================
// ACTUALIZAR VISUALIZACIÓN
// ===================================================================

function updateVisualization(index) {
    const data = chartData[index];
    console.log('📊 Actualizando año:', data.year);
    
    // Actualizar año
    currentYearEl.textContent = data.year;
    
    // Calcular el máximo para escalar las barras
    const maxValue = Math.max(data.tesla, data.byd, data.toyota);
    
    // Actualizar barras (width como porcentaje del máximo)
    const teslaWidth = (data.tesla / maxValue * 100);
    const bydWidth = (data.byd / maxValue * 100);
    const toyotaWidth = (data.toyota / maxValue * 100);
    
    barTesla.style.width = teslaWidth + '%';
    barByd.style.width = bydWidth + '%';
    barToyota.style.width = toyotaWidth + '%';
    
    // Actualizar valores en las barras
    barTesla.querySelector('.bar-value').textContent = formatNumber(data.tesla);
    barByd.querySelector('.bar-value').textContent = formatNumber(data.byd);
    barToyota.querySelector('.bar-value').textContent = formatNumber(data.toyota);
    
    // Actualizar porcentajes
    statTesla.textContent = data.teslaShare + '%';
    statByd.textContent = data.bydShare + '%';
    statToyota.textContent = data.toyotaShare + '%';
    
    // Actualizar métricas
    totalMarket.textContent = data.totalM + ' M';
    currentLeader.textContent = data.leader;
    
    // Aplicar color al líder
    currentLeader.style.color = getBrandColor(data.leader);
    
    // Reordenar tracks según ranking
    reorderTracks(data.ranking);
    
    // Mostrar annotation si existe para este año
    if (annotations[data.year]) {
        showAnnotation(annotations[data.year]);
        addPulseEffect(data.leader);
    } else {
        hideAnnotation();
    }
}

// ===================================================================
// REORDENAR TRACKS
// ===================================================================

function reorderTracks(ranking) {
    const container = document.querySelector('.race-container');
    const tracks = {
        'Tesla': document.querySelector('[data-brand="tesla"]'),
        'BYD': document.querySelector('[data-brand="byd"]'),
        'Toyota': document.querySelector('[data-brand="toyota"]')
    };
    
    // Reordenar según ranking (primero arriba)
    ranking.forEach(brandName => {
        const track = tracks[brandName];
        if (track) {
            container.appendChild(track);
        }
    });
}

// ===================================================================
// ANNOTATIONS
// ===================================================================

function showAnnotation(text) {
    annotationText.textContent = text;
    annotationEl.classList.remove('hidden');
    
    // Auto-hide después de 3 segundos
    setTimeout(() => {
        if (!isPlaying) {
            hideAnnotation();
        }
    }, 3000 / animationSpeed);
}

function hideAnnotation() {
    annotationEl.classList.add('hidden');
}

// ===================================================================
// EFECTOS VISUALES
// ===================================================================

function addPulseEffect(brandName) {
    const bars = {
        'Tesla': barTesla,
        'BYD': barByd,
        'Toyota': barToyota
    };
    
    const bar = bars[brandName];
    if (bar) {
        bar.classList.add('pulse');
        setTimeout(() => {
            bar.classList.remove('pulse');
        }, 1500);
    }
}

// ===================================================================
// OUTRO
// ===================================================================

function showOutro() {
    console.log('🎬 Mostrando outro');
    isPlaying = false;
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    
    setTimeout(() => {
        mainViz.classList.add('hidden');
        outroScreen.classList.remove('hidden');
    }, 1000);
}

// ===================================================================
// HELPER FUNCTIONS
// ===================================================================

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

function getBrandColor(brand) {
    const colors = {
        'Tesla': '#E82127',
        'BYD': '#0066CC',
        'Toyota': '#888888'
    };
    return colors[brand] || '#888888';
}

console.log('✅ animation.js cargado correctamente');
