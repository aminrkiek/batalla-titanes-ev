# ⚡ LA BATALLA QUE NADIE VIO VENIR
## Tesla vs BYD | La Historia No Contada del Mercado Eléctrico (2018-2024)

[![Visualización](https://img.shields.io/badge/Demo-Live-brightgreen)](https://tu-link-aqui.netlify.app)
[![Estado](https://img.shields.io/badge/Estado-Completado-blue)]()
[![Licencia](https://img.shields.io/badge/Licencia-MIT-yellow)]()

---

## 📖 La Historia

Durante años, **Tesla fue sinónimo de coche eléctrico**. Todo el mundo conocía a Elon Musk. El Model S había revolucionado la industria.

Pero mientras Occidente miraba a Silicon Valley, **China construía en silencio**.

Esta visualización interactiva muestra cómo **BYD conquistó el mercado eléctrico mundial** mientras casi nadie prestaba atención.

### 📊 Los Números que Nadie Te Contó:

- **2018:** Tesla 245K | BYD 521K → *BYD ya era más grande, pero nadie lo sabía*
- **2020:** Tesla toma el liderato (54% del mercado combinado)
- **2022:** 🔥 **BYD RETOMA EL TRONO** - Crecimiento explosivo +151%
- **2024:** BYD 4.27M | Tesla 1.80M → *BYD es 2.4x más grande que Tesla*

---

## 🎯 Características

- ✅ **Visualización animada** tipo carrera con 2 carriles
- ✅ **Datos verificados** de fuentes oficiales (2018-2024)
- ✅ **Narrativa épica** con momentos clave destacados
- ✅ **Controles interactivos** (Play/Pause/Reset/Velocidad)
- ✅ **Diseño responsive** (funciona en móvil)
- ✅ **Soporte para logos** de marcas (profesional)
- ✅ **0 dependencias** externas - Solo vanilla JavaScript

---

## 🚀 Demo en Vivo

**[Ver Visualización →](https://batalla-byd-tesla.netlify.app/)**

---

## 📁 Estructura del Proyecto

```
batalla-titanes-ev/
├── index.html           # Estructura HTML principal
├── css/
│   └── styles.css       # Estilos completos + tema oscuro
├── js/
│   ├── data.js          # Datos verificados Tesla vs BYD
│   └── animation.js     # Lógica de animación
├── assets/              # (opcional) Logos de marcas
│   ├── tesla-logo.png
│   └── byd-logo.png
└── README.md            # Este archivo
```

---

## 🛠️ Instalación y Uso

### Opción 1: Abrir Localmente (más fácil)

1. **Descarga el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/batalla-titanes-ev.git
   cd batalla-titanes-ev
   ```

2. **Abre `index.html` en tu navegador:**
   - Doble click en el archivo
   - O arrastra el archivo a tu navegador
   - O usa Live Server en VS Code

3. **¡Listo!** La visualización debería funcionar inmediatamente.

### Opción 2: Deploy Online

**Netlify (Recomendado - 5 minutos):**
1. Ve a [netlify.com](https://app.netlify.com)
2. "Add new site" → "Import from GitHub"
3. Selecciona este repositorio
4. Deploy settings:
   - Build command: *(vacío)*
   - Publish directory: `/`
5. ¡Deploy!

**GitHub Pages:**
1. Ve a Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/ (root)`
4. Save y espera 2-3 minutos

---

## 🎨 Añadir Logos (Opcional pero Recomendado)

Los logos hacen la visualización mucho más profesional.

### Pasos:

1. **Descarga logos PNG transparentes:**
   - Google: "Tesla logo PNG transparent"
   - Google: "BYD logo PNG transparent"
   - Tamaño recomendado: 500x500px

2. **Crea carpeta `assets/`** en la raíz del proyecto

3. **Guarda los logos:**
   - `assets/tesla-logo.png`
   - `assets/byd-logo.png`

4. **Edita `index.html`:**
   
   Busca estas líneas (~línea 50 y ~70):
   ```html
   <!-- OPCIÓN 1: Con logo (descomentar cuando tengas las imágenes) -->
   <!-- <img src="assets/byd-logo.png" alt="BYD" class="brand-logo"> -->
   
   <!-- OPCIÓN 2: Con emoji (por ahora) -->
   <span class="brand-icon">🔵</span>
   ```
   
   Cámbialas a:
   ```html
   <!-- Con logo -->
   <img src="assets/byd-logo.png" alt="BYD" class="brand-logo">
   
   <!-- Emoji comentado -->
   <!-- <span class="brand-icon">🔵</span> -->
   ```
   
   Haz lo mismo para Tesla.

5. **¡Listo!** Recarga la página y verás los logos.

---

## 🎮 Controles

- **▶ Play:** Inicia la animación (2 segundos por año)
- **⏸ Pause:** Pausa la animación
- **↻ Reset:** Vuelve a 2018
- **Velocidad:** Slider de 0.5x a 2x
  - 0.5x = Más lento (4 seg/año) - Ideal para presentaciones
  - 1x = Normal (2 seg/año)
  - 2x = Rápido (1 seg/año)

---

## 📊 Datos y Fuentes

### Período: 2018-2024 (7 años)

**Tesla (Vehículos 100% eléctricos):**
- Fuente: Reportes trimestrales oficiales de Tesla Investor Relations
- [ir.tesla.com](https://ir.tesla.com/)

**BYD (Vehículos eléctricos + híbridos enchufables):**
- Fuente: Reportes oficiales corporativos de BYD
- [BYD Official Reports](https://www.byd.com/)

### Datos Verificados:

| Año  | Tesla     | BYD       | Líder | BYD/Tesla Ratio |
|------|-----------|-----------|-------|-----------------|
| 2018 | 245K      | 521K      | BYD   | 2.1x            |
| 2019 | 368K      | 461K      | BYD   | 1.3x            |
| 2020 | 500K      | 427K      | Tesla | 0.9x            |
| 2021 | 936K      | 739K      | Tesla | 0.8x            |
| 2022 | 1.31M     | 1.86M     | **BYD** | 1.4x      |
| 2023 | 1.81M     | 3.02M     | BYD   | 1.7x            |
| 2024 | 1.80M     | 4.27M     | BYD   | **2.4x**        |

**Momentos Clave:**
- **2020:** Tesla toma liderato por primera vez
- **2022:** BYD retoma el trono con crecimiento +151%
- **2024:** BYD domina con 70% del mercado combinado

---

## 🎬 Narrativa Completa

### INTRO
```
2018
Tesla era sinónimo de coche eléctrico.
El mundo conocía a Elon Musk.
El Model S había revolucionado la industria.

Pero una empresa china estaba a punto de cambiar el juego.
Y casi nadie en Occidente se dio cuenta.
```

### MOMENTOS ÉPICOS
- **2020:** ⚡ Tesla toma el liderato
- **2022:** 🔥 BYD RETOMA EL TRONO
- **2024:** 📊 BYD domina con 70%

### OUTRO
```
2024
BYD vende 4.3 millones de vehículos eléctricos.
Tesla: 1.8 millones. Estancado.

BYD es 2.4 veces más grande que Tesla.
Y la mayoría del mundo occidental aún no lo sabe.

¿Puede alguien detener a BYD?
```

---

## 🛠️ Stack Técnico

- **HTML5** - Estructura semántica
- **CSS3** - Grid, Flexbox, Animations, Gradients
- **JavaScript Vanilla** - Sin frameworks ni librerías
- **Responsive Design** - Mobile-first approach

**Sin dependencias externas:**
- ❌ No jQuery
- ❌ No React
- ❌ No D3.js
- ✅ Solo código vanilla limpio y eficiente

### Métricas del Código:
- ~150 líneas HTML
- ~500 líneas CSS
- ~200 líneas JavaScript
- **Total: ~850 líneas de código**

---

## 🎨 Paleta de Colores

```css
--tesla-color: #E82127    /* Rojo oficial Tesla */
--byd-color: #0066CC      /* Azul corporativo BYD */
--bg-dark: #0F1419        /* Fondo oscuro principal */
--bg-card: #1A1F26        /* Cards y containers */
--text-highlight: #FFD700 /* Dorado para highlights */
```

---

## 🐛 Troubleshooting

### ❌ No se ve nada / Pantalla en blanco
**Causa:** CSS no cargado correctamente  
**Solución:**
1. Verifica que `styles.css` está en `css/styles.css`
2. Abre DevTools (F12) → Console → busca errores
3. Verifica la ruta en el `<link>` del HTML

### ❌ Los botones no funcionan
**Causa:** JavaScript no cargado  
**Solución:**
1. Verifica que `data.js` y `animation.js` están en `js/`
2. Abre DevTools (F12) → Console
3. Deberías ver: "✅ animation.js cargado correctamente"

### ❌ Las barras no se mueven
**Causa:** Datos no procesados correctamente  
**Solución:**
1. Abre DevTools (F12) → Console
2. Escribe: `console.log(chartData)`
3. Deberías ver array con 7 años

### ❌ Logos no aparecen
**Causa:** Rutas incorrectas o archivos faltantes  
**Solución:**
1. Verifica que los archivos existen en `assets/`
2. Nombres exactos: `tesla-logo.png`, `byd-logo.png`
3. Rutas en HTML: `assets/tesla-logo.png` (sin `/` al inicio)

---

## 📱 Responsive

La visualización funciona perfectamente en:
- ✅ Desktop (1920x1080 y superiores)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667 y superiores)

**Breakpoints:**
- Desktop: >768px
- Tablet/Mobile: ≤768px
- Small Mobile: ≤480px

## 📈 Uso para Portfolio

Este proyecto demuestra:

✅ **Data Storytelling** - Convertir datos en narrativa  
✅ **Visualización de Datos** - Gráficos animados efectivos  
✅ **Frontend Development** - HTML, CSS, JavaScript avanzado  
✅ **UX Design** - Interfaz intuitiva y atractiva  
✅ **Responsive Design** - Multi-dispositivo  
✅ **Análisis Estratégico** - Comparar modelos de negocio  

---

🔗 (https://batalla-byd-tesla.netlify.app/)]

¿Puede Tesla recuperar el trono?

#ElectricVehicles #Tesla #BYD #DataVisualization 
#DataStorytelling #China #Innovation #DataAnalytics
```

---

## 📧 Contacto

**Amin Rkiek**  
Data Analyst | Data Science  
📍 Madrid, España  

[LinkedIn]((https://www.linkedin.com/in/amine-rkiek-86871520b/)) | [GitHub](https://github.com/aminrkiek) 

---

## 📄 Licencia

MIT License - Libre para usar, modificar y distribuir.

---

## 🙏 Agradecimientos

- **Tesla Investor Relations** por datos públicos y transparentes
- **BYD Corporate Reports** por información oficial

---

## ⭐ Si te Gusta el Proyecto

Si este proyecto te resulta útil o interesante:

1. ⭐ **Dale una estrella** en GitHub
2. 🔀 **Fork** para crear tu propia versión
3. 📢 **Comparte** en LinkedIn
4. 💬 **Deja feedback** en Issues

---

## 🔄 Actualizaciones

### v2.0.0 (Enero 2025) - Actual
- ✅ Cambio a Tesla vs BYD (2 marcas)
- ✅ Nueva narrativa: "La Batalla que Nadie Vio Venir"
- ✅ Soporte para logos de marcas
- ✅ Métricas mejoradas (gap entre marcas)
- ✅ Annotations actualizadas
- ✅ Diseño refinado

### v1.0.0 (Enero 2025)
- ✅ Versión inicial con 3 marcas
- ✅ Visualización animada funcional
- ✅ Controles interactivos

---

**¿Preguntas? ¿Sugerencias? ¿Encontraste un bug?**  
[Abre un Issue](https://github.com/tu-usuario/batalla-titanes-ev/issues) →

---

<p align="center">
  Made with ⚡ by Amine Rkiek<br>
  <sub>Data Analyst | Madrid, España</sub>
</p>
