/* ===================================================================
   DATA.JS - Tesla vs BYD (2018-2024)
   =================================================================== */

// Datos verificados
const rawData = {
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    tesla: [245000, 368000, 500000, 936000, 1313000, 1809000, 1800000],
    byd: [520687, 461399, 427018, 739266, 1858357, 3024417, 4272145]
};

// Procesar datos para la visualización
function processData() {
    const data = [];
    
    for (let i = 0; i < rawData.years.length; i++) {
        const year = rawData.years[i];
        const tesla = rawData.tesla[i];
        const byd = rawData.byd[i];
        const total = tesla + byd;
        
        // Calcular shares
        const teslaShare = (tesla / total * 100).toFixed(1);
        const bydShare = (byd / total * 100).toFixed(1);
        
        // Formatear valores en millones
        const teslaM = (tesla / 1000000).toFixed(2);
        const bydM = (byd / 1000000).toFixed(2);
        const totalM = (total / 1000000).toFixed(2);
        
        // Determinar líder
        const leader = byd > tesla ? 'BYD' : 'Tesla';
        
        // Calcular diferencia
        const gap = Math.abs(byd - tesla);
        const gapM = (gap / 1000000).toFixed(2);
        
        data.push({
            year: year,
            tesla: tesla,
            byd: byd,
            total: total,
            teslaShare: teslaShare,
            bydShare: bydShare,
            teslaM: teslaM,
            bydM: bydM,
            totalM: totalM,
            leader: leader,
            gap: gap,
            gapM: gapM
        });
    }
    
    return data;
}

// Annotations para momentos clave actualizadas
const annotations = {
    2020: "⚡ Tesla toma el liderato por primera vez",
    2022: "🔥 BYD RETOMA EL TRONO - Crecimiento explosivo +151%",
    2024: "📊 Dominación total: BYD controla 70% del mercado"
};

// Función para formatear números
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// Función para obtener color de marca
function getBrandColor(brand) {
    const colors = {
        'Tesla': '#E82127',
        'BYD': '#0066CC'
    };
    return colors[brand] || '#888888';
}

// Exportar datos procesados
const chartData = processData();

// Log para debug
console.log('📊 Datos cargados: Tesla vs BYD', chartData);
console.log('📝 Annotations:', annotations);
