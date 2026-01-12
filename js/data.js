/* ===================================================================
   DATA.JS - Manejo de datos del CSV
   =================================================================== */

// Datos hardcodeados (más fácil para empezar que cargar CSV)
// Después puedes cambiar esto a cargar desde el CSV si quieres

const rawData = {
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    tesla: [245000, 368000, 500000, 936000, 1313000, 1809000, 1800000],
    byd: [520687, 461399, 427018, 739266, 1858357, 3024417, 4272145],
    toyota: [814481, 999400, 907711, 1263351, 1268136, 1677815, 1327648]
};

// Procesar datos para la visualización
function processData() {
    const data = [];
    
    for (let i = 0; i < rawData.years.length; i++) {
        const year = rawData.years[i];
        const tesla = rawData.tesla[i];
        const byd = rawData.byd[i];
        const toyota = rawData.toyota[i];
        const total = tesla + byd + toyota;
        
        // Calcular shares
        const teslaShare = (tesla / total * 100).toFixed(1);
        const bydShare = (byd / total * 100).toFixed(1);
        const toyotaShare = (toyota / total * 100).toFixed(1);
        
        // Formatear valores en millones
        const teslaM = (tesla / 1000000).toFixed(2);
        const bydM = (byd / 1000000).toFixed(2);
        const toyotaM = (toyota / 1000000).toFixed(2);
        const totalM = (total / 1000000).toFixed(2);
        
        // Determinar ranking
        const brands = [
            { name: 'Tesla', value: tesla },
            { name: 'BYD', value: byd },
            { name: 'Toyota', value: toyota }
        ];
        brands.sort((a, b) => b.value - a.value);
        const leader = brands[0].name;
        
        data.push({
            year: year,
            tesla: tesla,
            byd: byd,
            toyota: toyota,
            total: total,
            teslaShare: teslaShare,
            bydShare: bydShare,
            toyotaShare: toyotaShare,
            teslaM: teslaM,
            bydM: bydM,
            toyotaM: toyotaM,
            totalM: totalM,
            leader: leader,
            ranking: brands.map(b => b.name)
        });
    }
    
    return data;
}

// Annotations para momentos clave
const annotations = {
    2020: "⚡ Tesla supera a BYD por primera vez en plena pandemia",
    2022: "🔥 BYD TOMA EL LIDERATO - Crecimiento explosivo +151%",
    2024: "📉 Toyota colapsa -21% - Crisis de estrategia PHEV"
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
        'BYD': '#0066CC',
        'Toyota': '#888888'
    };
    return colors[brand] || '#888888';
}

// Exportar datos procesados
const chartData = processData();

// Log para debug
console.log('📊 Datos cargados:', chartData);
console.log('📝 Annotations:', annotations);
