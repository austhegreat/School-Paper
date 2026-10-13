const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputDir = __dirname;
const htmlPath = path.join(outputDir, 'Kertas_1_Matematik_Tingkatan_4_Set2.html');
const pdfPath = path.join(outputDir, 'Kertas_1_Matematik_Tingkatan_4_Set2.pdf');

// Helpers for SVGs in Set 2
function generateParabolaSvgSet2() {
  return `
  <svg width="270" height="160" viewBox="0 0 270 160" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="25" y1="65" x2="245" y2="65" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <text x="250" y="69" font-size="11" font-family="Times New Roman, serif" font-weight="bold">x</text>
    <line x1="60" y1="150" x2="60" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <text x="52" y="13" font-size="11" font-family="Times New Roman, serif" font-weight="bold">f(x)</text>
    <text x="50" y="60" font-size="10" font-family="Times New Roman, serif">O</text>

    <!-- Parabola opening UP with vertex at (2, -5) represented at (130, 125) -->
    <path d="M 70 28 Q 130 185 190 28" fill="none" stroke="#1d4ed8" stroke-width="2"/>

    <line x1="130" y1="65" x2="130" y2="125" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="60" y1="125" x2="130" y2="125" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="130" cy="125" r="3" fill="#1e293b"/>
    <text x="135" y="135" font-size="10" font-weight="bold" font-family="Times New Roman, serif">(2, &minus;5)</text>

    <text x="50" y="32" font-size="10" font-family="Times New Roman, serif">3</text>
    <text x="126" y="58" font-size="10" font-family="Times New Roman, serif">2</text>
    <text x="44" y="129" font-size="10" font-family="Times New Roman, serif">&minus;5</text>
    
    <text x="150" y="45" font-size="10" font-style="italic" fill="#1e40af" font-family="Times New Roman, serif">f(x) = 2x² &minus; 8x + 3</text>
  </svg>`;
}

function generateVennSvgSet2() {
  return `
  <svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <rect x="10" y="10" width="240" height="130" fill="#f8fafc" stroke="#334155" stroke-width="1.4" rx="3"/>
    <text x="20" y="26" font-size="12" font-weight="bold" font-family="Times New Roman, serif">&xi;</text>

    <circle cx="95" cy="75" r="45" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.4"/>
    <circle cx="155" cy="75" r="45" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.4"/>

    <text x="75" y="45" font-size="12" font-weight="bold" font-family="Times New Roman, serif">A</text>
    <text x="175" y="45" font-size="12" font-weight="bold" font-family="Times New Roman, serif">B</text>

    <text x="75" y="80" font-size="11" font-weight="bold" font-family="Times New Roman, serif">8</text>
    <text x="121" y="80" font-size="11" font-weight="bold" font-family="Times New Roman, serif">5</text>
    <text x="170" y="80" font-size="11" font-weight="bold" font-family="Times New Roman, serif">11</text>
    <text x="215" y="125" font-size="11" font-weight="bold" font-family="Times New Roman, serif">6</text>
  </svg>`;
}

function generateShadedVennSvgSet2() {
  return `
  <svg width="250" height="155" viewBox="0 0 250 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <clipPath id="circleR2"><circle cx="125" cy="98" r="42"/></clipPath>
    </defs>
    <rect x="8" y="8" width="234" height="138" fill="#f8fafc" stroke="#334155" stroke-width="1.4" rx="3"/>
    <text x="18" y="24" font-size="12" font-weight="bold" font-family="Times New Roman, serif">&xi;</text>

    <!-- Shade (P union Q) intersect R -->
    <g clip-path="url(#circleR2)">
      <circle cx="95" cy="62" r="42" fill="#93c5fd"/>
      <circle cx="155" cy="62" r="42" fill="#93c5fd"/>
    </g>

    <circle cx="95" cy="62" r="42" fill="none" stroke="#0f172a" stroke-width="1.4"/>
    <circle cx="155" cy="62" r="42" fill="none" stroke="#0f172a" stroke-width="1.4"/>
    <circle cx="125" cy="98" r="42" fill="none" stroke="#0f172a" stroke-width="1.4"/>

    <text x="68" y="42" font-size="12" font-weight="bold" font-family="Times New Roman, serif">P</text>
    <text x="175" y="42" font-size="12" font-weight="bold" font-family="Times New Roman, serif">Q</text>
    <text x="122" y="132" font-size="12" font-weight="bold" font-family="Times New Roman, serif">R</text>
  </svg>`;
}

function generateWeightedGraphSvgSet2() {
  return `
  <svg width="290" height="145" viewBox="0 0 290 145" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <!-- Edges -->
    <line x1="45" y1="72" x2="115" y2="35" stroke="#334155" stroke-width="1.6"/>
    <line x1="45" y1="72" x2="115" y2="110" stroke="#334155" stroke-width="1.6"/>
    <line x1="115" y1="35" x2="195" y2="110" stroke="#334155" stroke-width="1.6"/>
    <line x1="115" y1="110" x2="195" y2="110" stroke="#334155" stroke-width="1.6"/>
    <line x1="115" y1="35" x2="255" y2="72" stroke="#334155" stroke-width="1.6"/>
    <line x1="195" y1="110" x2="255" y2="72" stroke="#334155" stroke-width="1.6"/>

    <!-- Weights -->
    <text x="70" y="45" font-size="10" font-weight="bold" fill="#1d4ed8">7 km</text>
    <text x="70" y="102" font-size="10" font-weight="bold" fill="#1d4ed8">5 km</text>
    <text x="142" y="65" font-size="10" font-weight="bold" fill="#1d4ed8">6 km</text>
    <text x="150" y="122" font-size="10" font-weight="bold" fill="#1d4ed8">4 km</text>
    <text x="195" y="45" font-size="10" font-weight="bold" fill="#1d4ed8">11 km</text>
    <text x="230" y="105" font-size="10" font-weight="bold" fill="#1d4ed8">8 km</text>

    <!-- Vertices -->
    <circle cx="45" cy="72" r="12" fill="#1e3a8a"/>
    <text x="40" y="76" font-size="11" font-weight="bold" fill="#fff">P</text>

    <circle cx="115" cy="35" r="12" fill="#1e3a8a"/>
    <text x="110" y="39" font-size="11" font-weight="bold" fill="#fff">Q</text>

    <circle cx="115" cy="110" r="12" fill="#1e3a8a"/>
    <text x="110" y="114" font-size="11" font-weight="bold" fill="#fff">R</text>

    <circle cx="195" cy="110" r="12" fill="#1e3a8a"/>
    <text x="191" y="114" font-size="11" font-weight="bold" fill="#fff">S</text>

    <circle cx="255" cy="72" r="12" fill="#1e3a8a"/>
    <text x="250" y="76" font-size="11" font-weight="bold" fill="#fff">T</text>
  </svg>`;
}

function generateSubgraphComparisonSvgSet2() {
  return `
  <div style="display:flex; justify-content:space-around; align-items:center; margin:4px 0;">
    <div style="text-align:center;">
      <svg width="90" height="75" viewBox="0 0 90 75">
        <text x="5" y="14" font-weight="bold" font-size="10">A</text>
        <line x1="25" y1="20" x2="65" y2="20" stroke="#334155" stroke-width="1.5"/>
        <line x1="65" y1="20" x2="65" y2="55" stroke="#334155" stroke-width="1.5"/>
        <circle cx="25" cy="20" r="5" fill="#1e3a8a"/><text x="22" y="14" font-size="8">A</text>
        <circle cx="65" cy="20" r="5" fill="#1e3a8a"/><text x="68" y="14" font-size="8">B</text>
        <circle cx="65" cy="55" r="5" fill="#1e3a8a"/><text x="68" y="65" font-size="8">C</text>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="90" height="75" viewBox="0 0 90 75">
        <text x="5" y="14" font-weight="bold" font-size="10">B</text>
        <line x1="25" y1="20" x2="65" y2="20" stroke="#334155" stroke-width="1.5"/>
        <line x1="25" y1="20" x2="25" y2="55" stroke="#334155" stroke-width="1.5"/>
        <circle cx="25" cy="20" r="5" fill="#1e3a8a"/><text x="22" y="14" font-size="8">A</text>
        <circle cx="65" cy="20" r="5" fill="#1e3a8a"/><text x="68" y="14" font-size="8">B</text>
        <circle cx="25" cy="55" r="5" fill="#1e3a8a"/><text x="22" y="65" font-size="8">D</text>
        <circle cx="65" cy="55" r="5" fill="#1e3a8a"/><text x="68" y="65" font-size="8">C</text>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="90" height="75" viewBox="0 0 90 75">
        <text x="5" y="14" font-weight="bold" font-size="10">C</text>
        <line x1="25" y1="20" x2="65" y2="20" stroke="#334155" stroke-width="1.5"/>
        <line x1="25" y1="20" x2="65" y2="55" stroke="#dc2626" stroke-width="1.5"/>
        <line x1="65" y1="20" x2="65" y2="55" stroke="#334155" stroke-width="1.5"/>
        <circle cx="25" cy="20" r="5" fill="#1e3a8a"/><text x="22" y="14" font-size="8">A</text>
        <circle cx="65" cy="20" r="5" fill="#1e3a8a"/><text x="68" y="14" font-size="8">B</text>
        <circle cx="65" cy="55" r="5" fill="#1e3a8a"/><text x="68" y="65" font-size="8">C</text>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="90" height="75" viewBox="0 0 90 75">
        <text x="5" y="14" font-weight="bold" font-size="10">D</text>
        <line x1="65" y1="20" x2="65" y2="55" stroke="#334155" stroke-width="1.5"/>
        <line x1="65" y1="55" x2="25" y2="55" stroke="#334155" stroke-width="1.5"/>
        <circle cx="65" cy="20" r="5" fill="#1e3a8a"/><text x="68" y="14" font-size="8">B</text>
        <circle cx="65" cy="55" r="5" fill="#1e3a8a"/><text x="68" y="65" font-size="8">C</text>
        <circle cx="25" cy="55" r="5" fill="#1e3a8a"/><text x="22" y="65" font-size="8">D</text>
      </svg>
    </div>
  </div>`;
}

function generateLinearInequalitySvgSet2() {
  return `
  <svg width="260" height="155" viewBox="0 0 260 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrowI2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="20" y1="120" x2="240" y2="120" stroke="#0f172a" stroke-width="1.4" marker-end="url(#arrowI2)"/>
    <text x="245" y="124" font-size="11" font-weight="bold">x</text>
    <line x1="70" y1="145" x2="70" y2="15" stroke="#0f172a" stroke-width="1.4" marker-end="url(#arrowI2)"/>
    <text x="62" y="12" font-size="11" font-weight="bold">y</text>
    <text x="58" y="132" font-size="10">O</text>

    <!-- Shaded region polygon between (70, 100), (70, 50), (105, 100) etc. -->
    <polygon points="70,100 70,50 115,50 115,100" fill="#93c5fd" opacity="0.6"/>

    <!-- Line y = 2x + 4 passes through (70, 50) where y=4, and (115, 10) etc -->
    <line x1="30" y1="90" x2="150" y2="20" stroke="#1d4ed8" stroke-width="2"/>
    <text x="145" y="24" font-size="10" font-weight="bold" fill="#1d4ed8">y = 2x + 4</text>

    <!-- Horizontal line y = 1 -->
    <line x1="30" y1="100" x2="230" y2="100" stroke="#059669" stroke-width="1.8"/>
    <text x="205" y="94" font-size="10" font-weight="bold" fill="#059669">y = 1</text>

    <text x="56" y="53" font-size="10">4</text>
    <text x="58" y="103" font-size="10">1</text>
    <text x="92" y="80" font-size="12" font-weight="bold" fill="#1e3a8a">R</text>
  </svg>`;
}

function generateDistanceTimeSvgSet2() {
  return `
  <svg width="270" height="155" viewBox="0 0 270 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrDT2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="45" y1="125" x2="255" y2="125" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrDT2)"/>
    <text x="235" y="140" font-size="10" font-weight="bold">Masa / Time (jam)</text>
    <line x1="45" y1="135" x2="45" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrDT2)"/>
    <text x="35" y="12" font-size="10" font-weight="bold">Jarak / Distance (km)</text>
    <text x="34" y="137" font-size="10">O</text>

    <line x1="45" y1="125" x2="115" y2="65" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="115" y1="65" x2="160" y2="65" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="160" y1="65" x2="225" y2="25" stroke="#1d4ed8" stroke-width="2"/>

    <line x1="45" y1="65" x2="115" y2="65" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="115" y1="65" x2="115" y2="125" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="160" y1="65" x2="160" y2="125" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="45" y1="25" x2="225" y2="25" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="225" y1="25" x2="225" y2="125" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>

    <text x="25" y="68" font-size="10">90</text>
    <text x="20" y="29" font-size="10">150</text>
    <text x="105" y="138" font-size="10">1.5</text>
    <text x="150" y="138" font-size="10">2.0</text>
    <text x="215" y="138" font-size="10">2.5</text>
  </svg>`;
}

function generateSpeedTimeAccSvgSet2() {
  return `
  <svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrST2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="45" y1="120" x2="245" y2="120" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrST2)"/>
    <text x="225" y="135" font-size="10" font-weight="bold">Masa / Time (s)</text>
    <line x1="45" y1="130" x2="45" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrST2)"/>
    <text x="35" y="12" font-size="10" font-weight="bold">Laju / Speed (m s⁻¹)</text>
    <text x="34" y="132" font-size="10">O</text>

    <line x1="45" y1="80" x2="180" y2="35" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="45" y1="35" x2="180" y2="35" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="180" y1="35" x2="180" y2="120" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>

    <text x="26" y="84" font-size="10">12</text>
    <text x="26" y="39" font-size="10">32</text>
    <text x="176" y="133" font-size="10">5</text>
  </svg>`;
}

function generateSpeedTimeTrapeziumSvgSet2() {
  return `
  <svg width="270" height="150" viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrTrap2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="45" y1="120" x2="255" y2="120" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrTrap2)"/>
    <text x="235" y="135" font-size="10" font-weight="bold">Masa / Time (s)</text>
    <line x1="45" y1="130" x2="45" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrTrap2)"/>
    <text x="35" y="12" font-size="10" font-weight="bold">Laju / Speed (m s⁻¹)</text>
    <text x="34" y="132" font-size="10">O</text>

    <!-- Trapezium line and shaded area -->
    <polygon points="45,120 95,40 165,40 220,120" fill="#93c5fd" opacity="0.45"/>
    <line x1="45" y1="120" x2="95" y2="40" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="95" y1="40" x2="165" y2="40" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="165" y1="40" x2="220" y2="120" stroke="#1d4ed8" stroke-width="2"/>

    <line x1="45" y1="40" x2="95" y2="40" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="95" y1="40" x2="95" y2="120" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="165" y1="40" x2="165" y2="120" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>

    <text x="26" y="44" font-size="10">25</text>
    <text x="91" y="133" font-size="10">4</text>
    <text x="158" y="133" font-size="10">10</text>
    <text x="214" y="133" font-size="10">14</text>
  </svg>`;
}

function generateBoxPlotSvgSet2() {
  return `
  <svg width="270" height="120" viewBox="0 0 270 120" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <!-- Number line -->
    <line x1="30" y1="85" x2="245" y2="85" stroke="#0f172a" stroke-width="1.4"/>
    
    <!-- Scale ticks: 10, 20, 30, 40, 50 -->
    <line x1="40" y1="82" x2="40" y2="88" stroke="#0f172a" stroke-width="1.2"/><text x="35" y="100" font-size="9">10</text>
    <line x1="85" y1="82" x2="85" y2="88" stroke="#0f172a" stroke-width="1.2"/><text x="80" y="100" font-size="9">20</text>
    <line x1="130" y1="82" x2="130" y2="88" stroke="#0f172a" stroke-width="1.2"/><text x="125" y="100" font-size="9">30</text>
    <line x1="175" y1="82" x2="175" y2="88" stroke="#0f172a" stroke-width="1.2"/><text x="170" y="100" font-size="9">40</text>
    <line x1="220" y1="82" x2="220" y2="88" stroke="#0f172a" stroke-width="1.2"/><text x="215" y="100" font-size="9">50</text>

    <!-- Box plot: Min 12 (49), Q1 20 (85), Med 28 (121), Q3 36 (157), Max 45 (197.5) -->
    <line x1="49" y1="35" x2="49" y2="55" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="49" y1="45" x2="85" y2="45" stroke="#1e293b" stroke-width="1.5"/>

    <rect x="85" y="28" width="72" height="34" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.6"/>
    <line x1="121" y1="28" x2="121" y2="62" stroke="#dc2626" stroke-width="2"/>

    <line x1="157" y1="45" x2="197" y2="45" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="197" y1="35" x2="197" y2="55" stroke="#1e293b" stroke-width="1.5"/>

    <text x="43" y="24" font-size="8.5" font-weight="bold">12</text>
    <text x="79" y="24" font-size="8.5" font-weight="bold">20</text>
    <text x="115" y="24" font-size="8.5" font-weight="bold" fill="#dc2626">28</text>
    <text x="151" y="24" font-size="8.5" font-weight="bold">36</text>
    <text x="191" y="24" font-size="8.5" font-weight="bold">45</text>
  </svg>`;
}

// 40 questions data for SET 2
const questionsSet2 = [
  {
    num: 1,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Rajah menunjukkan graf bagi fungsi kuadratik <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 8<i>x</i> + 3. Nyatakan koordinat titik minimum bagi graf tersebut.`,
    en: `The diagram shows the graph of quadratic function <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 8<i>x</i> + 3. State the coordinates of the minimum point of the graph.`,
    diagram: generateParabolaSvgSet2(),
    options: [
      { key: "A", text: "(2, &minus;5)" },
      { key: "B", text: "(&minus;2, 27)" },
      { key: "C", text: "(4, 3)" },
      { key: "D", text: "(2, 3)" }
    ],
    answer: "A",
    solution: "Paksi simetri: <i>x</i> = &minus;<i>b</i>/(2<i>a</i>) = &minus;(&minus;8)/(2 &times; 2) = 2. Nilai minimum <i>f</i>(2) = 2(2)<sup>2</sup> &minus; 8(2) + 3 = 8 &minus; 16 + 3 = &minus;5. Titik minimum = (2, &minus;5)."
  },
  {
    num: 2,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Selesaikan persamaan kuadratik berikut:<br><center>3<i>x</i><sup>2</sup> &minus; 5<i>x</i> = 2</center>`,
    en: `Solve the following quadratic equation:<br><center>3<i>x</i><sup>2</sup> &minus; 5<i>x</i> = 2</center>`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = &minus;2, &nbsp; <i>x</i> = <sup>1</sup>/<sub>3</sub>" },
      { key: "B", text: "<i>x</i> = 2, &nbsp; <i>x</i> = &minus;<sup>1</sup>/<sub>3</sub>" },
      { key: "C", text: "<i>x</i> = 2, &nbsp; <i>x</i> = 3" },
      { key: "D", text: "<i>x</i> = &minus;1, &nbsp; <i>x</i> = <sup>2</sup>/<sub>3</sub>" }
    ],
    answer: "B",
    solution: "3<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 2 = 0 &rArr; (3<i>x</i> + 1)(<i>x</i> &minus; 2) = 0 &rArr; <i>x</i> = &minus;<sup>1</sup>/<sub>3</sub> atau <i>x</i> = 2."
  },
  {
    num: 3,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Graf fungsi kuadratik <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4 digerakkan secara menegak ke atas sebanyak 7 unit. Apakah persamaan fungsi kuadratik yang baharu?`,
    en: `The graph of quadratic function <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4 is translated vertically upwards by 7 units. What is the equation of the new quadratic function?`,
    diagram: "",
    options: [
      { key: "A", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 11" },
      { key: "B", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3" },
      { key: "C", text: "<i>g</i>(<i>x</i>) = (<i>x</i> + 7)<sup>2</sup> &minus; 4" },
      { key: "D", text: "<i>g</i>(<i>x</i>) = 7<i>x</i><sup>2</sup> &minus; 4" }
    ],
    answer: "B",
    solution: "Perubahan menegak memengaruhi nilai <i>c</i>: <i>g</i>(<i>x</i>) = <i>f</i>(<i>x</i>) + 7 = (<i>x</i><sup>2</sup> &minus; 4) + 7 = <i>x</i><sup>2</sup> + 3."
  },
  {
    num: 4,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Sebuah segi empat tepat mempunyai panjang (<i>x</i> + 4) cm dan lebar (<i>x</i> &minus; 1) cm. Diberi luas segi empat tepat itu ialah 36 cm<sup>2</sup>. Cari nilai positif bagi <i>x</i>.`,
    en: `A rectangle has a length of (<i>x</i> + 4) cm and a width of (<i>x</i> &minus; 1) cm. Given the area of the rectangle is 36 cm<sup>2</sup>. Find the positive value of <i>x</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "8" }
    ],
    answer: "B",
    solution: "(<i>x</i> + 4)(<i>x</i> &minus; 1) = 36 &rArr; <i>x</i><sup>2</sup> + 3<i>x</i> &minus; 4 &minus; 36 = 0 &rArr; <i>x</i><sup>2</sup> + 3<i>x</i> &minus; 40 = 0 &rArr; (<i>x</i> + 8)(<i>x</i> &minus; 5) = 0 &rArr; <i>x</i> = 5 (panjang positif)."
  },
  {
    num: 5,
    chapter: "Bab 2: Asas Nombor",
    bm: `Nyatakan nilai digit 4 bagi nombor 2413<sub>5</sub> dalam asas sepuluh.`,
    en: `State the value of digit 4 in the number 2413<sub>5</sub> in base ten.`,
    diagram: "",
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "80" },
      { key: "C", text: "100" },
      { key: "D", text: "500" }
    ],
    answer: "C",
    solution: "Nilai tempat bagi digit 4 ialah 5<sup>2</sup> = 25. Nilai digit = 4 &times; 25 = 100<sub>10</sub>."
  },
  {
    num: 6,
    chapter: "Bab 2: Asas Nombor",
    bm: `Hitung nilai 563<sub>8</sub> + 147<sub>8</sub>.`,
    en: `Calculate the value of 563<sub>8</sub> + 147<sub>8</sub>.`,
    diagram: "",
    options: [
      { key: "A", text: "722<sub>8</sub>" },
      { key: "B", text: "730<sub>8</sub>" },
      { key: "C", text: "732<sub>8</sub>" },
      { key: "D", text: "1032<sub>8</sub>" }
    ],
    answer: "C",
    solution: "3 + 7 = 10 = 1(8) + 2 (tulis 2, bawa 1). 1 + 6 + 4 = 11 = 1(8) + 3 (tulis 3, bawa 1). 1 + 5 + 1 = 7. Maka 732<sub>8</sub>."
  },
  {
    num: 7,
    chapter: "Bab 2: Asas Nombor",
    bm: `Tukarkan 110101<sub>2</sub> kepada nombor dalam asas lapan.`,
    en: `Convert 110101<sub>2</sub> to a number in base eight.`,
    diagram: "",
    options: [
      { key: "A", text: "53<sub>8</sub>" },
      { key: "B", text: "65<sub>8</sub>" },
      { key: "C", text: "67<sub>8</sub>" },
      { key: "D", text: "125<sub>8</sub>" }
    ],
    answer: "B",
    solution: "Kumpulkan 3 bit dari kanan: 110 | 101. 110<sub>2</sub> = 4 + 2 = 6, 101<sub>2</sub> = 4 + 1 = 5. Maka 65<sub>8</sub>."
  },
  {
    num: 8,
    chapter: "Bab 2: Asas Nombor",
    bm: `Diberi 10110<sub>2</sub> &minus; <i>p</i><sub>2</sub> = 1101<sub>2</sub>. Cari nilai <i>p</i>.`,
    en: `Given 10110<sub>2</sub> &minus; <i>p</i><sub>2</sub> = 1101<sub>2</sub>. Find the value of <i>p</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "1001" },
      { key: "B", text: "1011" },
      { key: "C", text: "111" },
      { key: "D", text: "10001" }
    ],
    answer: "A",
    solution: "10110<sub>2</sub> = 16 + 4 + 2 = 22<sub>10</sub>. 1101<sub>2</sub> = 8 + 4 + 1 = 13<sub>10</sub>. <i>p</i> = 22 &minus; 13 = 9<sub>10</sub> = 1001<sub>2</sub>."
  },
  {
    num: 9,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Antara pernyataan berikut, yang manakah merupakan suatu <b>pernyataan palsu</b>?`,
    en: `Which of the following is a <b>false statement</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "{2, 3} &sub; {1, 2, 3, 4}" },
      { key: "B", text: "12 ialah gandaan bagi 3 dan 8" },
      { key: "C", text: "17 ialah nombor perdana atau nombor genap" },
      { key: "D", text: "Jika <i>x</i> = 3, maka <i>x</i><sup>2</sup> = 9" }
    ],
    answer: "B",
    solution: "'12 gandaan 3' (Benar) DAN '12 gandaan 8' (Palsu) &rArr; Pernyataan gabungan 'dan' adalah PALSU."
  },
  {
    num: 10,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Diberi implikasi: &ldquo;Jika <i>x</i> ialah gandaan bagi 6, maka <i>x</i> ialah nombor genap.&rdquo; Tentukan <b>kontrapositif</b> bagi implikasi tersebut.`,
    en: `Given the implication: &ldquo;If <i>x</i> is a multiple of 6, then <i>x</i> is an even number.&rdquo; Determine the <b>contrapositive</b> of the implication.`,
    diagram: "",
    options: [
      { key: "A", text: "Jika <i>x</i> bukan nombor genap, maka <i>x</i> bukan gandaan bagi 6." },
      { key: "B", text: "Jika <i>x</i> ialah nombor genap, maka <i>x</i> ialah gandaan bagi 6." },
      { key: "C", text: "Jika <i>x</i> bukan gandaan bagi 6, maka <i>x</i> bukan nombor genap." },
      { key: "D", text: "<i>x</i> gandaan bagi 6 jika dan hanya jika <i>x</i> nombor genap." }
    ],
    answer: "A",
    solution: "Kontrapositif bagi 'Jika <i>p</i>, maka <i>q</i>' ialah 'Jika &sim;<i>q</i>, maka &sim;<i>p</i>'."
  },
  {
    num: 11,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Diberi hujah berikut:<br>
         <b>Premis 1:</b> Semua segi tiga sama sisi mempunyai tiga paksi simetri.<br>
         <b>Premis 2:</b> Segi tiga <i>PQR</i> ialah sebuah segi tiga sama sisi.<br>
         <b>Kesimpulan:</b> Segi tiga <i>PQR</i> mempunyai tiga paksi simetri.<br>
         Tentukan bentuk hujah deduktif ini.`,
    en: `Given argument: Premise 1: All equilateral triangles have three axes of symmetry. Premise 2: Triangle <i>PQR</i> is an equilateral triangle. Conclusion: Triangle <i>PQR</i> has three axes of symmetry. Determine the form of this deductive argument.`,
    diagram: "",
    options: [
      { key: "A", text: "Bentuk I / <i>Form I</i>" },
      { key: "B", text: "Bentuk II / <i>Form II</i>" },
      { key: "C", text: "Bentuk III / <i>Form III</i>" },
      { key: "D", text: "Hujah Induktif / <i>Inductive Argument</i>" }
    ],
    answer: "A",
    solution: "Bentuk I mengikut format: Premis 1: Semua A adalah B; Premis 2: C ialah A; Kesimpulan: C ialah B."
  },
  {
    num: 12,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Diberi pola nombor: 5 = 4(1) + 1, &nbsp; 9 = 4(2) + 1, &nbsp; 13 = 4(3) + 1, &nbsp; 17 = 4(4) + 1, &hellip;<br>
         Buat satu kesimpulan secara induktif bagi sebutan ke-<i>n</i> bagi jujukan nombor itu.`,
    en: `Given pattern: 5 = 4(1) + 1, 9 = 4(2) + 1, 13 = 4(3) + 1, ... Make an inductive conclusion for the <i>n</i>-th term of the number sequence.`,
    diagram: "",
    options: [
      { key: "A", text: "4<i>n</i> + 1, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "B", text: "4<i>n</i> &minus; 1, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "C", text: "5<i>n</i> &minus; 1, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "D", text: "<i>n</i><sup>2</sup> + 4, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" }
    ],
    answer: "A",
    solution: "Setiap sebutan mematuhi rumus 4<i>n</i> + 1 dengan <i>n</i> = 1, 2, 3, 4, &hellip;"
  },
  {
    num: 13,
    chapter: "Bab 4: Operasi Set",
    bm: `Rajah menunjukkan gambar rajah Venn dengan bilangan unsur dalam setiap rantau. Cari nilai bagi <i>n</i>(<i>A</i> &cup; <i>B</i>)&prime;.`,
    en: `The diagram shows a Venn diagram with the number of elements in each region. Find the value of <i>n</i>(<i>A</i> &cup; <i>B</i>)&prime;.`,
    diagram: generateVennSvgSet2(),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "6" },
      { key: "C", text: "11" },
      { key: "D", text: "24" }
    ],
    answer: "B",
    solution: "(<i>A</i> &cup; <i>B</i>)&prime; ialah rantau di luar bulatan <i>A</i> dan <i>B</i>, iaitu 6 unsur."
  },
  {
    num: 14,
    chapter: "Bab 4: Operasi Set",
    bm: `Diberi set <i>M</i> = {<i>x</i> : <i>x</i> ialah faktor perdana bagi 30}. Cari bilangan subset bagi set <i>M</i>.`,
    en: `Given set <i>M</i> = {<i>x</i> : <i>x</i> is a prime factor of 30}. Find the number of subsets of set <i>M</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "6" },
      { key: "C", text: "8" },
      { key: "D", text: "16" }
    ],
    answer: "C",
    solution: "Faktor perdana bagi 30 ialah {2, 3, 5}, maka <i>n</i>(<i>M</i>) = 3. Bilangan subset = 2<sup><i>n</i></sup> = 2<sup>3</sup> = 8."
  },
  {
    num: 15,
    chapter: "Bab 4: Operasi Set",
    bm: `Dalam satu kaji selidik terhadap 80 orang murid, 45 orang murid gemar Matematik, 38 orang gemar Sains, dan 12 orang tidak gemar kedua-duanya. Cari bilangan murid yang gemar <b>kedua-dua</b> mata pelajaran itu.`,
    en: `In a survey of 80 students, 45 like Mathematics, 38 like Science, and 12 like neither. Find the number of students who like <b>both</b> subjects.`,
    diagram: "",
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "15" },
      { key: "C", text: "18" },
      { key: "D", text: "23" }
    ],
    answer: "B",
    solution: "<i>n</i>(<i>M</i> &cup; <i>S</i>) = 80 &minus; 12 = 68. <i>n</i>(<i>M</i> &cap; <i>S</i>) = <i>n</i>(<i>M</i>) + <i>n</i>(<i>S</i>) &minus; <i>n</i>(<i>M</i> &cup; <i>S</i>) = 45 + 38 &minus; 68 = 15."
  },
  {
    num: 16,
    chapter: "Bab 4: Operasi Set",
    bm: `Rajah Venn menunjukkan set <i>P</i>, <i>Q</i> dan <i>R</i>. Rantau yang berlorek mewakili operasi set yang mana?`,
    en: `The Venn diagram shows sets <i>P</i>, <i>Q</i> and <i>R</i>. Which set operation is represented by the shaded region?`,
    diagram: generateShadedVennSvgSet2(),
    options: [
      { key: "A", text: "(<i>P</i> &cap; <i>Q</i>) &cup; <i>R</i>" },
      { key: "B", text: "(<i>P</i> &cup; <i>Q</i>) &cap; <i>R</i>" },
      { key: "C", text: "(<i>P</i> &cap; <i>R</i>) &cup; <i>Q</i>" },
      { key: "D", text: "<i>P</i> &cup; (<i>Q</i> &cap; <i>R</i>)" }
    ],
    answer: "B",
    solution: "Rantau yang berlorek merangkumi bahagian dalam set <i>R</i> yang bertindih dengan sama ada <i>P</i> atau <i>Q</i>, iaitu (<i>P</i> &cup; <i>Q</i>) &cap; <i>R</i>."
  },
  {
    num: 17,
    chapter: "Bab 5: Teori Graf",
    bm: `Suatu graf mempunyai 6 bucu dengan darjah bucu masing-masing ialah 2, 3, 3, 4, 4, dan <i>k</i>. Diberi graf tersebut mempunyai 10 tepi. Cari nilai <i>k</i>.`,
    en: `A graph has 6 vertices with degrees 2, 3, 3, 4, 4, and <i>k</i> respectively. Given that the graph has 10 edges. Find the value of <i>k</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    answer: "C",
    solution: "&sum; <i>d</i>(<i>v</i>) = 2<i>E</i> &rArr; 2 + 3 + 3 + 4 + 4 + <i>k</i> = 2(10) = 20 &rArr; 16 + <i>k</i> = 20 &rArr; <i>k</i> = 4."
  },
  {
    num: 18,
    chapter: "Bab 5: Teori Graf",
    bm: `Antara pernyataan berikut mengenai suatu <b>pokok</b> dalam teori graf, yang manakah <b>palsu</b>?`,
    en: `Which of the following statements regarding a <b>tree</b> in graph theory is <b>false</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "Pokok ialah suatu graf mudah." },
      { key: "B", text: "Pokok dengan <i>n</i> bucu mengandungi (<i>n</i> &minus; 1) tepi." },
      { key: "C", text: "Setiap pasangan bucu disambungkan oleh lebih daripada satu laluan." },
      { key: "D", text: "Pokok tidak mengandungi sebarang kitaran atau gelung." }
    ],
    answer: "C",
    solution: "C adalah palsu kerana setiap pasangan bucu dalam pokok hanya disambungkan oleh TEPAT SATU laluan unik."
  },
  {
    num: 19,
    chapter: "Bab 5: Teori Graf",
    bm: `Rajah menunjukkan suatu rangkaian jalan raya antara bandar <i>P</i> dan bandar <i>T</i> berserta jarak dalam km. Cari jarak terpendek, dalam km, dari <i>P</i> ke <i>T</i>.`,
    en: `The diagram shows a road network between town <i>P</i> and town <i>T</i> with distances in km. Find the shortest distance, in km, from <i>P</i> to <i>T</i>.`,
    diagram: generateWeightedGraphSvgSet2(),
    options: [
      { key: "A", text: "16" },
      { key: "B", text: "17" },
      { key: "C", text: "18" },
      { key: "D", text: "21" }
    ],
    answer: "B",
    solution: "Laluan <i>P</i> &rarr; <i>R</i> &rarr; <i>S</i> &rarr; <i>T</i> = 5 + 4 + 8 = 17 km (Laluan lain: <i>P</i>-<i>Q</i>-<i>T</i> = 18 km, <i>P</i>-<i>Q</i>-<i>S</i>-<i>T</i> = 21 km)."
  },
  {
    num: 20,
    chapter: "Bab 5: Teori Graf",
    bm: `Diberi graf <i>G</i> mempunyai set bucu <i>V</i> = {<i>A, B, C, D</i>} dan set tepi <i>E</i> = {(<i>A,B</i>), (<i>B,C</i>), (<i>C,D</i>), (<i>D,A</i>)}. Antara rajah berikut, yang manakah <b>bukan</b> subgraf bagi <i>G</i>?`,
    en: `Given graph <i>G</i> with vertex set <i>V</i> = {<i>A, B, C, D</i>} and edge set <i>E</i> = {(<i>A,B</i>), (<i>B,C</i>), (<i>C,D</i>), (<i>D,A</i>)}. Which of the following is <b>not</b> a subgraph of <i>G</i>?`,
    diagram: generateSubgraphComparisonSvgSet2(),
    options: [
      { key: "A", text: "Rajah A / <i>Diagram A</i>" },
      { key: "B", text: "Rajah B / <i>Diagram B</i>" },
      { key: "C", text: "Rajah C / <i>Diagram C</i>" },
      { key: "D", text: "Rajah D / <i>Diagram D</i>" }
    ],
    answer: "C",
    solution: "Rajah C mengandungi tepi (<i>A,C</i>) yang tidak wujud dalam graf asal <i>G</i>, maka ia bukan subgraf."
  },
  {
    num: 21,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Rajah menunjukkan rantau berlorek <i>R</i> pada satah Cartes. Antara sistem ketaksamaan linear berikut, yang manakah mentakrifkan rantau <i>R</i>?`,
    en: `The diagram shows shaded region <i>R</i> on a Cartesian plane. Which of the following systems of linear inequalities defines region <i>R</i>?`,
    diagram: generateLinearInequalitySvgSet2(),
    options: [
      { key: "A", text: "<i>y</i> &le; 2<i>x</i> + 4, &nbsp; <i>y</i> &ge; 1, &nbsp; <i>x</i> &ge; 0" },
      { key: "B", text: "<i>y</i> &ge; 2<i>x</i> + 4, &nbsp; <i>y</i> &le; 1, &nbsp; <i>x</i> &ge; 0" },
      { key: "C", text: "<i>y</i> < 2<i>x</i> + 4, &nbsp; <i>y</i> > 1, &nbsp; <i>x</i> &le; 0" },
      { key: "D", text: "<i>y</i> &le; 2<i>x</i> &minus; 4, &nbsp; <i>y</i> &ge; 1, &nbsp; <i>x</i> &ge; 0" }
    ],
    answer: "A",
    solution: "Rantau berada di bawah/pada garis <i>y</i> = 2<i>x</i> + 4 (<i>y</i> &le; 2<i>x</i> + 4), di atas/pada garis <i>y</i> = 1 (<i>y</i> &ge; 1), dan di sebelah kanan paksi-<i>y</i> (<i>x</i> &ge; 0)."
  },
  {
    num: 22,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Antara titik berikut, yang manakah memuaskan ketaksamaan 3<i>x</i> &minus; 2<i>y</i> < 6?`,
    en: `Which of the following points satisfies the inequality 3<i>x</i> &minus; 2<i>y</i> < 6?`,
    diagram: "",
    options: [
      { key: "A", text: "(3, 1)" },
      { key: "B", text: "(4, 2)" },
      { key: "C", text: "(1, 2)" },
      { key: "D", text: "(5, 3)" }
    ],
    answer: "C",
    solution: "Gantikan (1, 2): 3(1) &minus; 2(2) = 3 &minus; 4 = &minus;1 < 6 (Benar). Titik lain: (3,1)&rArr;7&not;<6, (4,2)&rArr;8&not;<6, (5,3)&rArr;9&not;<6."
  },
  {
    num: 23,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Garis lurus sempang (<i>dashed line</i>) digunakan semasa melukis graf ketaksamaan linear apabila simbol ketaksamaan ialah:`,
    en: `A dashed line is used when drawing the graph of a linear inequality when the inequality symbol is:`,
    diagram: "",
    options: [
      { key: "A", text: "&le; atau &ge;" },
      { key: "B", text: "< atau >" },
      { key: "C", text: "= sahaja" },
      { key: "D", text: "&ne; sahaja" }
    ],
    answer: "B",
    solution: "Simbol ketaksamaan ketat (< atau >) tidak merangkumi titik pada garis sempadan, maka garis sempang digunakan."
  },
  {
    num: 24,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Sebuah kedai roti menjual <i>x</i> biji kek cawan dan <i>y</i> buku roti. Harga sebiji kek cawan ialah RM 2 dan sebuku roti ialah RM 5. Jumlah jualan mestilah sekurang-kurangnya RM 120, dan bilangan buku roti tidak melebihi dua kali bilangan kek cawan. Tulis dua ketaksamaan linear selain <i>x</i> &ge; 0 dan <i>y</i> &ge; 0.`,
    en: `A bakery sells <i>x</i> cupcakes and <i>y</i> loaves of bread. Price of cupcake is RM 2 and loaf of bread is RM 5. Total sales must be at least RM 120, and loaves of bread cannot exceed twice cupcakes. Write two linear inequalities other than <i>x</i> &ge; 0 and <i>y</i> &ge; 0.`,
    diagram: "",
    options: [
      { key: "A", text: "2<i>x</i> + 5<i>y</i> &ge; 120 &nbsp;dan&nbsp; <i>y</i> &le; 2<i>x</i>" },
      { key: "B", text: "2<i>x</i> + 5<i>y</i> > 120 &nbsp;dan&nbsp; <i>y</i> &ge; 2<i>x</i>" },
      { key: "C", text: "5<i>x</i> + 2<i>y</i> &ge; 120 &nbsp;dan&nbsp; <i>y</i> &le; 2<i>x</i>" },
      { key: "D", text: "2<i>x</i> + 5<i>y</i> &le; 120 &nbsp;dan&nbsp; <i>y</i> < 2<i>x</i>" }
    ],
    answer: "A",
    solution: "Sekurang-kurangnya RM 120: 2<i>x</i> + 5<i>y</i> &ge; 120. Roti tidak melebihi 2 kali kek cawan: <i>y</i> &le; 2<i>x</i>."
  },
  {
    num: 25,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah menunjukkan graf jarak-masa bagi perjalanan sebuah kereta. Hitung laju purata, dalam km/j, bagi keseluruhan perjalanan itu.`,
    en: `The diagram shows the distance-time graph of a car's journey. Calculate the average speed, in km/h, for the whole journey.`,
    diagram: generateDistanceTimeSvgSet2(),
    options: [
      { key: "A", text: "50" },
      { key: "B", text: "55" },
      { key: "C", text: "60" },
      { key: "D", text: "65" }
    ],
    answer: "C",
    solution: "Laju purata = Jumlah jarak / Jumlah masa = 150 km / 2.5 jam = 60 km/j."
  },
  {
    num: 26,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Berdasarkan graf jarak-masa pada Soalan 25, nyatakan tempoh masa, dalam minit, apabila kereta itu berada dalam keadaan pegun.`,
    en: `Based on the distance-time graph in Question 25, state the duration of time, in minutes, when the car is stationary.`,
    diagram: "",
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "30" },
      { key: "C", text: "45" },
      { key: "D", text: "60" }
    ],
    answer: "B",
    solution: "Keadaan pegun berlaku dari <i>t</i> = 1.5 jam hingga <i>t</i> = 2.0 jam &rArr; 0.5 jam &times; 60 minit = 30 minit."
  },
  {
    num: 27,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah menunjukkan graf laju-masa bagi pergerakan suatu zarah. Hitung pecutan, dalam m s<sup>&minus;2</sup>, zarah itu dalam tempoh 5 saat pertama.`,
    en: `The diagram shows the speed-time graph of a particle. Calculate the acceleration, in m s<sup>&minus;2</sup>, of the particle in the first 5 seconds.`,
    diagram: generateSpeedTimeAccSvgSet2(),
    options: [
      { key: "A", text: "2.4" },
      { key: "B", text: "4.0" },
      { key: "C", text: "6.4" },
      { key: "D", text: "8.8" }
    ],
    answer: "B",
    solution: "Pecutan = Kecerunan graf laju-masa = (32 &minus; 12) / 5 = 20 / 5 = 4.0 m s<sup>&minus;2</sup>."
  },
  {
    num: 28,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah menunjukkan graf laju-masa bagi sebuah motosikal. Hitung jumlah jarak yang dilalui, dalam meter, dalam tempoh 14 saat itu.`,
    en: `The diagram shows the speed-time graph of a motorcycle. Calculate the total distance travelled, in metres, in the 14 seconds.`,
    diagram: generateSpeedTimeTrapeziumSvgSet2(),
    options: [
      { key: "A", text: "200" },
      { key: "B", text: "225" },
      { key: "C", text: "250" },
      { key: "D", text: "300" }
    ],
    answer: "C",
    solution: "Jumlah jarak = Luas trapezium di bawah graf = <sup>1</sup>/<sub>2</sub> &times; [(10 &minus; 4) + 14] &times; 25 = <sup>1</sup>/<sub>2</sub> &times; 20 &times; 25 = 250 m."
  },
  {
    num: 29,
    chapter: "Bab 8: Sukatan Serakan",
    bm: `Diberi satu set data: 4, 6, 7, 9, 11, 13, 15, 18, 20. Cari julat antara kuartil bagi set data tersebut.`,
    en: `Given a set of data: 4, 6, 7, 9, 11, 13, 15, 18, 20. Find the interquartile range of the data set.`,
    diagram: "",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9.5" },
      { key: "C", text: "10" },
      { key: "D", text: "16" }
    ],
    answer: "C",
    solution: "Median = 11. Kuartil pertama <i>Q</i><sub>1</sub> = (6 + 7)/2 = 6.5. Kuartil ketiga <i>Q</i><sub>3</sub> = (15 + 18)/2 = 16.5. Julat antara kuartil = 16.5 &minus; 6.5 = 10."
  },
  {
    num: 30,
    chapter: "Bab 8: Sukatan Serakan",
    bm: `Rajah menunjukkan satu plot kotak bagi suatu set markah ujian. Cari julat antara kuartil bagi markah ujian tersebut.`,
    en: `The diagram shows a box plot for a set of test marks. Find the interquartile range of the test marks.`,
    diagram: generateBoxPlotSvgSet2(),
    options: [
      { key: "A", text: "16" },
      { key: "B", text: "25" },
      { key: "C", text: "28" },
      { key: "D", text: "33" }
    ],
    answer: "A",
    solution: "Dari plot kotak: <i>Q</i><sub>1</sub> = 20, <i>Q</i><sub>3</sub> = 36. Julat antara kuartil = <i>Q</i><sub>3</sub> &minus; <i>Q</i><sub>1</sub> = 36 &minus; 20 = 16."
  },
  {
    num: 31,
    chapter: "Bab 8: Sukatan Serakan",
    bm: `Diberi sisihan piawai bagi suatu set data ialah 3.2. Jika setiap nilai data didarab dengan 3 dan kemudian ditambah dengan 5, apakah nilai sisihan piawai yang baharu?`,
    en: `Given the standard deviation of a set of data is 3.2. If each data value is multiplied by 3 and then added by 5, what is the new standard deviation?`,
    diagram: "",
    options: [
      { key: "A", text: "3.2" },
      { key: "B", text: "8.2" },
      { key: "C", text: "9.6" },
      { key: "D", text: "14.6" }
    ],
    answer: "C",
    solution: "Penambahan pemalar tidak mengubah serakan. Pendaraban dengan <i>k</i> mendarab sisihan piawai dengan <i>k</i>: &sigma;<sub>baru</sub> = 3 &times; 3.2 = 9.6."
  },
  {
    num: 32,
    chapter: "Bab 8: Sukatan Serakan",
    bm: `Diberi satu set 10 nombor dengan &sum;<i>x</i> = 120 dan &sum;<i>x</i><sup>2</sup> = 1540. Hitung varians bagi set data itu.`,
    en: `Given a set of 10 numbers with &sum;<i>x</i> = 120 and &sum;<i>x</i><sup>2</sup> = 1540. Calculate the variance of the data set.`,
    diagram: "",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "12" },
      { key: "C", text: "14.4" },
      { key: "D", text: "100" }
    ],
    answer: "A",
    solution: "Min x̄ = 120 / 10 = 12. Varians &sigma;<sup>2</sup> = (&sum;<i>x</i><sup>2</sup> / <i>N</i>) &minus; (x̄)<sup>2</sup> = (1540 / 10) &minus; 12<sup>2</sup> = 154 &minus; 144 = 10."
  },
  {
    num: 33,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sebuah kotak mengandungi 8 keping kad merah, 6 keping kad biru, dan 10 keping kad kuning. Sekeping kad dipilih secara rawak. Cari kebarangkalian memilih kad merah <b>atau</b> kad biru.`,
    en: `A box contains 8 red cards, 6 blue cards, and 10 yellow cards. A card is picked at random. Find the probability of choosing a red card <b>or</b> a blue card.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>1</sup>/<sub>3</sub>" },
      { key: "B", text: "<sup>7</sup>/<sub>12</sub>" },
      { key: "C", text: "<sup>5</sup>/<sub>8</sub>" },
      { key: "D", text: "<sup>3</sup>/<sub>4</sub>" }
    ],
    answer: "B",
    solution: "Jumlah kad = 8 + 6 + 10 = 24. Peristiwa saling eksklusif: <i>P</i>(Merah &cup; Biru) = (8 + 6) / 24 = 14 / 24 = <sup>7</sup>/<sub>12</sub>."
  },
  {
    num: 34,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sekeping syiling adil dan sebiji dadu adil dilambung serentak. Cari kebarangkalian mendapat angka (<i>Heads</i>) <b>dan</b> nombor perdana pada dadu.`,
    en: `A fair coin and a fair dice are tossed simultaneously. Find the probability of getting Heads <b>and</b> a prime number on the dice.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>1</sup>/<sub>6</sub>" },
      { key: "B", text: "<sup>1</sup>/<sub>4</sub>" },
      { key: "C", text: "<sup>1</sup>/<sub>3</sub>" },
      { key: "D", text: "<sup>1</sup>/<sub>2</sub>" }
    ],
    answer: "B",
    solution: "Peristiwa tak bersandar: <i>P</i>(Angka) = <sup>1</sup>/<sub>2</sub>. Nombor perdana dadu {2, 3, 5} &rArr; <i>P</i>(Perdana) = <sup>3</sup>/<sub>6</sub> = <sup>1</sup>/<sub>2</sub>. <i>P</i> = <sup>1</sup>/<sub>2</sub> &times; <sup>1</sup>/<sub>2</sub> = <sup>1</sup>/<sub>4</sub>."
  },
  {
    num: 35,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sebuah beg mengandungi 5 biji guli hijau dan 4 biji guli putih. Dua biji guli dikeluarkan secara rawak satu demi satu <b>tanpa pengembalian</b>. Cari kebarangkalian bahawa kedua-dua guli itu berwarna hijau.`,
    en: `A bag contains 5 green marbles and 4 white marbles. Two marbles are chosen at random one by one <b>without replacement</b>. Find the probability that both marbles are green.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>25</sup>/<sub>81</sub>" },
      { key: "B", text: "<sup>5</sup>/<sub>18</sub>" },
      { key: "C", text: "<sup>1</sup>/<sub>3</sub>" },
      { key: "D", text: "<sup>4</sup>/<sub>9</sub>" }
    ],
    answer: "B",
    solution: "Guli pertama hijau = 5/9. Baki guli hijau = 4, jumlah baki = 8. Guli kedua hijau = 4/8. <i>P</i> = <sup>5</sup>/<sub>9</sub> &times; <sup>4</sup>/<sub>8</sub> = <sup>20</sup>/<sub>72</sub> = <sup>5</sup>/<sub>18</sub>."
  },
  {
    num: 36,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Kebarangkalian Amin lulus ujian ialah <sup>3</sup>/<sub>5</sub> dan kebarangkalian Basri lulus ialah <sup>3</sup>/<sub>4</sub>. Cari kebarangkalian bahawa <b>sekurang-kurangnya seorang</b> daripada mereka lulus ujian itu.`,
    en: `The probability of Amin passing an exam is <sup>3</sup>/<sub>5</sub> and Basri passing is <sup>3</sup>/<sub>4</sub>. Find the probability that <b>at least one</b> of them passes the exam.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>9</sup>/<sub>20</sub>" },
      { key: "B", text: "<sup>7</sup>/<sub>10</sub>" },
      { key: "C", text: "<sup>9</sup>/<sub>10</sub>" },
      { key: "D", text: "<sup>19</sup>/<sub>20</sub>" }
    ],
    answer: "C",
    solution: "<i>P</i>(sekurang-kurangnya seorang lulus) = 1 &minus; <i>P</i>(kedua-dua gagal) = 1 &minus; [(1 &minus; <sup>3</sup>/<sub>5</sub>) &times; (1 &minus; <sup>3</sup>/<sub>4</sub>)] = 1 &minus; [<sup>2</sup>/<sub>5</sub> &times; <sup>1</sup>/<sub>4</sub>] = 1 &minus; <sup>1</sup>/<sub>10</sub> = <sup>9</sup>/<sub>10</sub>."
  },
  {
    num: 37,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Encik Razak mempunyai pendapatan aktif sebanyak RM 4,500 dan pendapatan pasif RM 600 sebulan. Jumlah perbelanjaan tetapnya ialah RM 2,400 dan perbelanjaan tidak tetap ialah RM 1,800. Hitung aliran tunai bulanan Encik Razak.`,
    en: `Encik Razak has an active income of RM 4,500 and passive income of RM 600 per month. His fixed expenses are RM 2,400 and variable expenses are RM 1,800. Calculate Encik Razak's monthly cash flow.`,
    diagram: "",
    options: [
      { key: "A", text: "RM 300 (Aliran tunai positif)" },
      { key: "B", text: "RM 900 (Aliran tunai positif)" },
      { key: "C", text: "RM 900 (Aliran tunai negatif)" },
      { key: "D", text: "RM 1,500 (Aliran tunai positif)" }
    ],
    answer: "B",
    solution: "Jumlah pendapatan = 4,500 + 600 = RM 5,100. Jumlah perbelanjaan = 2,400 + 1,800 = RM 4,200. Aliran tunai = 5,100 &minus; 4,200 = +RM 900 (Lebihan/Positif)."
  },
  {
    num: 38,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Antara pernyataan berikut, yang manakah menerangkan konsep <b>'M'</b> dalam penetapan matlamat kewangan berasaskan konsep <b>SMART</b>?`,
    en: `Which of the following describes the concept <b>'M'</b> in setting financial goals based on the <b>SMART</b> approach?`,
    diagram: "",
    options: [
      { key: "A", text: "Khusus (<i>Specific</i>) &ndash; matlamat jelas" },
      { key: "B", text: "Boleh diukur (<i>Measurable</i>) &ndash; boleh dikira dalam nilai wang" },
      { key: "C", text: "Boleh dicapai (<i>Attainable</i>) &ndash; matlamat realistik" },
      { key: "D", text: "Bermakna (<i>Meaningful</i>) &ndash; memberi impak" }
    ],
    answer: "B",
    solution: "'M' bermaksud <i>Measurable</i> (boleh diukur) di mana matlamat boleh diukur secara kuantitatif dalam nilai jumlah wang yang khusus."
  },
  {
    num: 39,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Puan Aisyah mempunyai perbelanjaan bulanan sebanyak RM 3,200. Mengikut prinsip perancangan kewangan yang bijak, berapakah jumlah dana kecemasan minimum (3 bulan perbelanjaan) yang patut disimpannya?`,
    en: `Puan Aisyah has monthly expenses of RM 3,200. According to prudent financial planning principles, what is the minimum emergency fund (3 months expenses) she should maintain?`,
    diagram: "",
    options: [
      { key: "A", text: "RM 6,400" },
      { key: "B", text: "RM 9,600" },
      { key: "C", text: "RM 12,800" },
      { key: "D", text: "RM 19,200" }
    ],
    answer: "B",
    solution: "Dana kecemasan minimum = 3 &times; RM 3,200 = RM 9,600."
  },
  {
    num: 40,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Farhan ingin membeli sebuah komputer riba berharga RM 3,600 dalam tempoh 15 bulan dari sekarang. Dia telah mempunyai simpanan sedia ada sebanyak RM 600. Berapakah simpanan bulanan yang perlu diperuntukkan oleh Farhan?`,
    en: `Farhan wants to buy a laptop worth RM 3,600 in 15 months from now. He already has existing savings of RM 600. How much monthly savings should Farhan set aside?`,
    diagram: "",
    options: [
      { key: "A", text: "RM 180" },
      { key: "B", text: "RM 200" },
      { key: "C", text: "RM 240" },
      { key: "D", text: "RM 260" }
    ],
    answer: "B",
    solution: "Baki wang yang diperlukan = RM 3,600 &minus; RM 600 = RM 3,000. Simpanan bulanan = RM 3,000 / 15 = RM 200 sebulan."
  }
];

const examPagesSet2 = [
  { pageNum: 4, questions: [1, 2, 3] },
  { pageNum: 5, questions: [4, 5, 6, 7, 8] },
  { pageNum: 6, questions: [9, 10, 11, 12] },
  { pageNum: 7, questions: [13, 14, 15, 16] },
  { pageNum: 8, questions: [17, 18] },
  { pageNum: 9, questions: [19, 20] },
  { pageNum: 10, questions: [21, 22, 23, 24] },
  { pageNum: 11, questions: [25, 26] },
  { pageNum: 12, questions: [27, 28] },
  { pageNum: 13, questions: [29, 30, 31, 32] },
  { pageNum: 14, questions: [33, 34, 35, 36] },
  { pageNum: 15, questions: [37, 38, 39, 40] }
];

function generateHtmlSet2() {
  let html = `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>Kertas 1 Matematik Tingkatan 4 (1449/1) - Set 2</title>
<style>
  @page {
    size: A4 portrait;
    margin: 1.1cm 1.3cm 1.1cm 1.3cm;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Times New Roman", Times, serif;
    font-size: 10.2pt;
    line-height: 1.28;
    color: #0f172a;
    background: #fff;
    margin: 0;
    padding: 0;
  }

  .page-container {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .page-break {
    page-break-after: always;
    break-after: page;
  }

  .running-header {
    display: flex;
    justify-content: space-between;
    font-size: 8.5pt;
    font-weight: bold;
    border-bottom: 1.2px solid #000;
    padding-bottom: 3px;
    margin-bottom: 8px;
  }

  .running-footer {
    display: flex;
    justify-content: space-between;
    font-size: 8pt;
    border-top: 1px solid #64748b;
    padding-top: 3px;
    margin-top: 6px;
    color: #334155;
  }

  .cover-border {
    border: 3px double #000;
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .exam-title-box {
    margin: 14px 0 10px 0;
    text-align: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 10px 0;
  }

  .exam-title-bm {
    font-size: 16pt;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 2px;
    text-transform: uppercase;
  }

  .exam-title-en {
    font-size: 12pt;
    font-style: italic;
    color: #334155;
  }

  .candidate-table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
  }

  .candidate-table td {
    border: 1.2px solid #000;
    padding: 6px 10px;
    font-size: 10pt;
  }

  .instructions-box {
    margin-top: 8px;
    font-size: 9.3pt;
    line-height: 1.3;
  }

  .instructions-title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4px;
    text-decoration: underline;
  }

  .instructions-list {
    margin: 0;
    padding-left: 18px;
  }

  .instructions-list li {
    margin-bottom: 4px;
  }

  .formula-section-title {
    font-size: 9.5pt;
    font-weight: bold;
    background: #f1f5f9;
    padding: 2.5px 6px;
    border-left: 4px solid #1e3a8a;
    margin: 8px 0 4px 0;
    text-transform: uppercase;
  }

  .formula-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 18px;
    font-size: 9pt;
    margin-bottom: 6px;
  }

  .formula-item {
    display: flex;
    align-items: baseline;
  }

  .formula-num {
    font-weight: bold;
    width: 22px;
    flex-shrink: 0;
  }

  .question-item {
    margin-bottom: 11px;
  }

  .q-header {
    display: flex;
    align-items: flex-start;
  }

  .q-num {
    font-weight: bold;
    font-size: 10.5pt;
    width: 24px;
    flex-shrink: 0;
  }

  .q-body {
    flex-grow: 1;
  }

  .q-bm {
    font-size: 10pt;
    margin-bottom: 2px;
  }

  .q-en {
    font-size: 9pt;
    font-style: italic;
    color: #374151;
    margin-bottom: 4px;
  }

  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 14px;
    margin-top: 4px;
    margin-left: 24px;
  }

  .options-grid.single-col {
    grid-template-columns: 1fr;
  }

  .option-choice {
    display: flex;
    align-items: flex-start;
    font-size: 9.5pt;
  }

  .opt-letter {
    font-weight: bold;
    width: 18px;
    flex-shrink: 0;
  }

  .exam-diagram {
    display: block;
    margin: 0 auto;
  }

  .omr-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 8px;
  }

  .omr-col {
    border: 1px solid #cbd5e1;
    padding: 5px 7px;
    background: #f8fafc;
    border-radius: 4px;
  }

  .omr-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.5px;
    font-size: 8.5pt;
  }

  .omr-qnum {
    font-weight: bold;
    width: 20px;
  }

  .omr-bubbles {
    display: flex;
    gap: 4px;
  }

  .bubble {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1.2px solid #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7pt;
    font-weight: bold;
    color: #334155;
  }

  .solutions-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .answers-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8pt;
  }

  .answers-table th {
    background: #1e3a8a;
    color: #fff;
    padding: 4px 5px;
    border: 1px solid #1e3a8a;
    text-align: left;
    font-size: 8pt;
  }

  .answers-table td {
    padding: 3px 5px;
    border: 1px solid #cbd5e1;
    vertical-align: top;
  }

  .answers-table tr:nth-child(even) {
    background: #f8fafc;
  }

  .badge-ans {
    display: inline-block;
    background: #047857;
    color: #fff;
    font-weight: bold;
    padding: 1px 5px;
    border-radius: 2px;
    font-size: 7.5pt;
  }
</style>
</head>
<body>
`;

  // PAGE 1: COVER PAGE
  html += `
  <div class="page-container page-break">
    <div class="cover-border">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12pt; font-weight:bold; letter-spacing:2px;">SULIT</span>
          <span style="font-size:12pt; font-weight:bold;">1449/1 (SET 2)</span>
        </div>

        <div class="exam-title-box">
          <div style="font-size: 10.5pt; font-weight: bold; letter-spacing: 1px; margin-bottom: 2px;">PEPERIKSAAN AKHIR TAHUN TINGKATAN 4</div>
          <div style="font-size: 9.5pt; font-style: italic; color:#475569; margin-bottom: 8px;">FORM 4 FINAL YEAR EXAMINATION &bull; SET 2</div>
          <div class="exam-title-bm">MATEMATIK</div>
          <div class="exam-title-en">MATHEMATICS</div>
          <div style="font-size: 11pt; font-weight: bold; margin-top: 4px;">KERTAS 1 / <i>PAPER 1</i></div>
        </div>

        <div style="text-align:center; font-size:10.5pt; font-weight:bold; margin: 6px 0 12px 0;">
          Satu jam tiga puluh minit<br>
          <span style="font-style:italic; font-weight:normal; font-size:9.5pt; color:#475569;">One hour and thirty minutes</span>
        </div>

        <table class="candidate-table">
          <tr>
            <td style="width: 28%; font-weight: bold; background:#f8fafc;">NAMA / <i>NAME</i>:</td>
            <td></td>
          </tr>
          <tr>
            <td style="font-weight: bold; background:#f8fafc;">TINGKATAN / <i>FORM</i>:</td>
            <td></td>
          </tr>
          <tr>
            <td style="font-weight: bold; background:#f8fafc;">ANGKA GILIRAN / <i>INDEX</i>:</td>
            <td></td>
          </tr>
        </table>

        <div class="instructions-box">
          <div class="instructions-title">ARAHAN KEPADA CALON / <i>INSTRUCTIONS TO CANDIDATES</i></div>
          <ol class="instructions-list">
            <li>Kertas soalan ini mengandungi <b>40 soalan</b>.<br>
                <i>This question paper consists of <b>40 questions</b>.</i></li>
            <li>Jawab <b>SEMUA</b> soalan.<br>
                <i>Answer <b>ALL</b> questions.</i></li>
            <li>Tiap-tiap soalan diikuti oleh empat pilihan jawapan, iaitu <b>A, B, C</b> dan <b>D</b>. Bagi setiap soalan, pilih <b>satu</b> jawapan sahaja. Hitamkan jawapan anda pada borang jawapan OMR yang disediakan.<br>
                <i>Each question is followed by four alternative answers, <b>A, B, C</b> and <b>D</b>. For each question, choose <b>one</b> answer only. Blacken your answer on the OMR answer sheet provided.</i></li>
            <li>Rajah yang mengiringi soalan tidak dilukis mengikut skala kecuali dinyatakan.<br>
                <i>The diagrams in the questions provided are not drawn to scale unless stated.</i></li>
            <li>Satu senarai rumus disediakan di halaman 2 dan 3.<br>
                <i>A list of mathematical formulae is provided on pages 2 and 3.</i></li>
            <li>Penggunaan kalkulator saintifik yang tidak boleh diprogramkan dibenarkan.<br>
                <i>The use of non-programmable scientific calculators is permitted.</i></li>
          </ol>
        </div>
      </div>

      <div style="border-top:1.2px solid #000; padding-top:5px; display:flex; justify-content:space-between; font-size:8.5pt;">
        <span>1449/1 &copy; Hak Cipta Peperiksaan Tingkatan 4 (Set 2)</span>
        <span style="font-weight:bold; text-align:right;">[Lihat halaman sebelah / <i>Turn over</i><br>SULIT</span>
      </div>
    </div>
  </div>
  `;

  // PAGE 2: FORMULA SHEET 1
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>1449/1 (SET 2)</span>
        <span>RUMUS MATEMATIK / <i>MATHEMATICAL FORMULAE</i></span>
        <span>SULIT</span>
      </div>

      <div style="text-align:center; margin-bottom:6px;">
        <h3 style="margin:0; text-transform:uppercase; font-size:11pt;">RUMUS MATEMATIK / <i>MATHEMATICAL FORMULAE</i></h3>
        <p style="margin:1px 0; font-size:8pt; font-style:italic; color:#475569;">Rumus-rumus berikut boleh membantu anda untuk menjawab soalan.<br>
        The following formulae may be helpful in answering the questions.</p>
      </div>

      <div class="formula-section-title">NOMBOR DAN OPERASI / <i>NUMBERS AND OPERATIONS</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">1</span> <span><i>a<sup>m</sup></i> &times; <i>a<sup>n</sup></i> = <i>a</i><sup><i>m</i> + <i>n</i></sup></span></div>
        <div class="formula-item"><span class="formula-num">2</span> <span><i>a<sup>m</sup></i> &divide; <i>a<sup>n</sup></i> = <i>a</i><sup><i>m</i> &minus; <i>n</i></sup></span></div>
        <div class="formula-item"><span class="formula-num">3</span> <span>(<i>a<sup>m</sup></i>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup></span></div>
        <div class="formula-item"><span class="formula-num">4</span> <span><i>a</i><sup>0</sup> = 1, &nbsp; <i>a</i> &ne; 0</span></div>
        <div class="formula-item"><span class="formula-num">5</span> <span><i>a</i><sup>&minus;<i>n</i></sup> = <sup>1</sup>/<sub><i>a<sup>n</sup></i></sub></span></div>
        <div class="formula-item"><span class="formula-num">6</span> <span><i>a</i><sup><sup><i>m</i></sup>/<sub><i>n</i></sub></sup> = (<i>a</i><sup><sup>1</sup>/<sub><i>n</i></sub></sup>)<sup><i>m</i></sup> = &radic;[<i>n</i>]{<i>a<sup>m</sup></i>}</span></div>
      </div>

      <div class="formula-section-title">PERKAITAN DAN ALGEBRA / <i>RELATIONSHIP AND ALGEBRA</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">7</span> <span>Jarak / <i>Distance</i> = &radic;[(<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>)<sup>2</sup>]</span></div>
        <div class="formula-item"><span class="formula-num">8</span> <span>Titik tengah / <i>Midpoint</i> = ( <sup><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub></sup>/<sub>2</sub> , <sup><i>y</i><sub>1</sub> + <i>y</i><sub>2</sub></sup>/<sub>2</sub> )</span></div>
        <div class="formula-item"><span class="formula-num">9</span> <span>Laju purata / <i>Average speed</i> = <sup>Jumlah jarak</sup>/<sub>Jumlah masa</sub> = <sup>Total distance</sup>/<sub>Total time</sub></span></div>
        <div class="formula-item"><span class="formula-num">10</span> <span>Kecerunan / <i>Gradient</i>, <i>m</i> = <sup><i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub></sup>/<sub><i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub></sub></span></div>
        <div class="formula-item"><span class="formula-num">11</span> <span><i>m</i> = &minus; <sup>pintasan-<i>y</i></sup>/<sub>pintasan-<i>x</i></sub> = &minus; <sup><i>y</i>-intercept</sup>/<sub><i>x</i>-intercept</sub></span></div>
        <div class="formula-item"><span class="formula-num">12</span> <span>Paksi simetri / <i>Axis of symmetry</i>: <i>x</i> = &minus;<sup><i>b</i></sup>/<sub>2<i>a</i></sub></span></div>
      </div>

      <div class="formula-section-title">SUKATAN DAN GEOMETRI / <i>MEASUREMENT AND GEOMETRY</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">13</span> <span>Teorem Pythagoras: <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></div>
        <div class="formula-item"><span class="formula-num">14</span> <span>Hasil tambah sudut pedalaman poligon = (<i>n</i> &minus; 2) &times; 180&deg;</span></div>
        <div class="formula-item"><span class="formula-num">15</span> <span>Lilitan bulatan / <i>Circumference</i> = 2&pi;<i>j</i> = &pi;<i>d</i></span></div>
        <div class="formula-item"><span class="formula-num">16</span> <span>Luas bulatan / <i>Area of circle</i> = &pi;<i>j</i><sup>2</sup></span></div>
        <div class="formula-item"><span class="formula-num">17</span> <span>Luas trapezium = <sup>1</sup>/<sub>2</sub> &times; (<i>a</i> + <i>b</i>) &times; <i>t</i></span></div>
        <div class="formula-item"><span class="formula-num">18</span> <span>Luas permukaan silinder = 2&pi;<i>j</i><sup>2</sup> + 2&pi;<i>jt</i></span></div>
        <div class="formula-item"><span class="formula-num">19</span> <span>Isi padu silinder / <i>Volume</i> = &pi;<i>j</i><sup>2</sup><i>t</i></span></div>
        <div class="formula-item"><span class="formula-num">20</span> <span>Isi padu kon / <i>Volume of cone</i> = <sup>1</sup>/<sub>3</sub>&pi;<i>j</i><sup>2</sup><i>t</i></span></div>
        <div class="formula-item"><span class="formula-num">21</span> <span>Isi padu sfera / <i>Sphere</i> = <sup>4</sup>/<sub>3</sub>&pi;<i>j</i><sup>3</sup></span></div>
        <div class="formula-item"><span class="formula-num">22</span> <span>Teori Graf: Bilangan darjah &sum; <i>d</i>(<i>v</i>) = 2<i>E</i></span></div>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 (SET 2)</span>
      <span>2</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // PAGE 3: FORMULA SHEET 2
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>1449/1 (SET 2)</span>
        <span>RUMUS MATEMATIK / <i>MATHEMATICAL FORMULAE</i></span>
        <span>SULIT</span>
      </div>

      <div class="formula-section-title">STATISTIK DAN KEBARANGKALIAN / <i>STATISTICS AND PROBABILITY</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">23</span> <span>Min / <i>Mean</i>: x̄ = <sup>&sum; <i>x</i></sup>/<sub><i>N</i></sub></span></div>
        <div class="formula-item"><span class="formula-num">24</span> <span>Varians / <i>Variance</i>: &sigma;<sup>2</sup> = <sup>&sum; (<i>x</i> &minus; x̄)<sup>2</sup></sup>/<sub><i>N</i></sub> = <sup>&sum; <i>x</i><sup>2</sup></sup>/<sub><i>N</i></sub> &minus; (x̄)<sup>2</sup></span></div>
        <div class="formula-item"><span class="formula-num">25</span> <span>Sisihan piawai / <i>Standard deviation</i>: &sigma; = &radic;[ &sigma;<sup>2</sup> ]</span></div>
        <div class="formula-item"><span class="formula-num">26</span> <span>Julat / <i>Range</i> = Nilai terbesar &minus; Nilai terkecil</span></div>
        <div class="formula-item"><span class="formula-num">27</span> <span>Julat antara kuartil / <i>Interquartile range</i> = <i>Q</i><sub>3</sub> &minus; <i>Q</i><sub>1</sub></span></div>
        <div class="formula-item"><span class="formula-num">28</span> <span>Kebarangkalian suatu peristiwa / <i>Probability</i>: <i>P</i>(<i>A</i>) = <sup><i>n</i>(<i>A</i>)</sup>/<sub><i>n</i>(<i>S</i>)</sub></span></div>
        <div class="formula-item"><span class="formula-num">29</span> <span>Peristiwa pelengkap / <i>Complementary event</i>: <i>P</i>(<i>A</i>&prime;) = 1 &minus; <i>P</i>(<i>A</i>)</span></div>
        <div class="formula-item"><span class="formula-num">30</span> <span>Peristiwa tak bersandar / <i>Independent events</i>: <i>P</i>(<i>A</i> &cap; <i>B</i>) = <i>P</i>(<i>A</i>) &times; <i>P</i>(<i>B</i>)</span></div>
        <div class="formula-item"><span class="formula-num">31</span> <span>Peristiwa saling eksklusif / <i>Mutually exclusive</i>: <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>)</span></div>
        <div class="formula-item"><span class="formula-num">32</span> <span>Peristiwa tidak saling eksklusif: <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>)</span></div>
      </div>

      <div class="formula-section-title">MATEMATIK PENGGUNA / <i>CONSUMER MATHEMATICS</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">33</span> <span>Aliran tunai / <i>Cash flow</i> = Jumlah pendapatan &minus; Jumlah perbelanjaan</span></div>
        <div class="formula-item"><span class="formula-num">34</span> <span>Aliran tunai positif (Lebihan) / <i>Surplus</i>: Pendapatan > Perbelanjaan</span></div>
        <div class="formula-item"><span class="formula-num">35</span> <span>Aliran tunai negatif (Defisit) / <i>Deficit</i>: Pendapatan < Perbelanjaan</span></div>
        <div class="formula-item"><span class="formula-num">36</span> <span>Dana kecemasan / <i>Emergency fund</i> = 3 hingga 6 kali perbelanjaan bulanan</span></div>
        <div class="formula-item"><span class="formula-num">37</span> <span>Konsep SMART: <b>S</b>pecific, <b>M</b>easurable, <b>A</b>ttainable, <b>R</b>ealistic, <b>T</b>ime-bound</span></div>
      </div>

      <div style="margin-top:28px; padding:10px; border:1.2px dashed #94a3b8; background:#f8fafc; text-align:center; font-size:9pt;">
        <b>PERINGATAN UNTUK CALON / <i>REMINDER FOR CANDIDATES</i>:</b><br>
        Kertas soalan bermula di halaman 4. Pastikan anda menyemak nombor soalan pada kertas soalan dengan nombor soalan pada borang jawapan OMR.<br>
        <i>The question paper begins on page 4. Ensure you check the question numbers on the paper with the OMR answer sheet.</i>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 (SET 2)</span>
      <span>3</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // QUESTION PAGES (Pages 4 to 15)
  examPagesSet2.forEach(p => {
    html += `
    <div class="page-container page-break">
      <div>
        <div class="running-header">
          <span>1449/1 (SET 2)</span>
          <span>PEPERIKSAAN AKHIR TAHUN TINGKATAN 4 &bull; SET 2</span>
          <span>SULIT</span>
        </div>
    `;

    p.questions.forEach(qNum => {
      const q = questionsSet2.find(item => item.num === qNum);
      const isSingleCol = q.options.some(opt => opt.text.length > 40);

      html += `
      <div class="question-item">
        <div class="q-header">
          <div class="q-num">${q.num}.</div>
          <div class="q-body">
            <div class="q-bm">${q.bm}</div>
            <div class="q-en">${q.en}</div>
            ${q.diagram ? q.diagram : ''}
            <div class="options-grid ${isSingleCol ? 'single-col' : ''}">
              ${q.options.map(opt => `
                <div class="option-choice">
                  <span class="opt-letter"><b>${opt.key}</b></span>
                  <span>${opt.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      `;
    });

    html += `
      </div>
      <div class="running-footer">
        <span>1449/1 (SET 2) &copy; Hak Cipta</span>
        <span>${p.pageNum}</span>
        <span>${p.pageNum === 15 ? 'KERTAS SOALAN TAMAT / <i>END OF QUESTION PAPER</i>' : '[Lihat halaman sebelah / <i>Turn over</i>'}</span>
      </div>
    </div>
    `;
  });

  // PAGE 16: OMR ANSWER SHEET
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>1449/1 (SET 2)</span>
        <span>BORANG JAWAPAN OMR / <i>OMR ANSWER SHEET</i></span>
        <span>SULIT</span>
      </div>

      <div style="border: 2px solid #000; padding: 8px 12px; margin-bottom: 6px; background: #fafafa;">
        <div style="text-align: center; margin-bottom: 4px;">
          <h3 style="margin: 0; font-size: 11.5pt;">LEMBAGA PEPERIKSAAN SEKOLAH MENENGAH</h3>
          <h4 style="margin: 2px 0; font-size: 10pt;">LEMBARAN JAWAPAN OBJEKTIF (OMR) - MATEMATIK KERTAS 1 (SET 2)</h4>
        </div>

        <div style="display:flex; justify-content:space-between; font-size:9pt; border-top:1px solid #999; padding-top:4px;">
          <div><b>NAMA:</b> ................................................................................</div>
          <div><b>TINGKATAN:</b> ............................</div>
          <div><b>TARIKH:</b> ............................</div>
        </div>
      </div>

      <div style="font-size: 8pt; margin-bottom: 4px; color: #475569; text-align: center;">
        <b>PANDUAN MENGHITAMKAN JAWAPAN / <i>GUIDELINES:</i></b>
        Gunakan pensel 2B sahaja. Hitamkan ruangan jawapan dengan betul dan penuh seperti: 
        <span style="display:inline-block; width:11px; height:11px; border-radius:50%; background:#000; vertical-align:middle;"></span>.
      </div>

      <div class="omr-grid">
  `;

  for (let col = 0; col < 4; col++) {
    html += `<div class="omr-col">`;
    const startQ = col * 10 + 1;
    const endQ = startQ + 9;
    for (let q = startQ; q <= endQ; q++) {
      html += `
        <div class="omr-row">
          <span class="omr-qnum">${q}.</span>
          <div class="omr-bubbles">
            <span class="bubble">A</span>
            <span class="bubble">B</span>
            <span class="bubble">C</span>
            <span class="bubble">D</span>
          </div>
        </div>
      `;
    }
    html += `</div>`;
  }

  html += `
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 (SET 2) &copy; Borang OMR</span>
      <span>16</span>
      <span>[Halaman Skema Jawapan Menyusul / <i>Solutions Follow</i></span>
    </div>
  </div>
  `;

  // PAGE 17: ANSWER SCHEME (Q1 - Q20)
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>1449/1 (SET 2)</span>
        <span>SKEMA JAWAPAN &amp; JALAN KERJA LENGKAP (SOALAN 1 &ndash; 20)</span>
        <span>SULIT</span>
      </div>

      <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:4px 8px; margin-bottom:6px; border-radius:3px; font-size:8pt;">
        <b>SKEMA PEMARKAHAN &amp; JALAN KERJA LENGKAP / <i>MARK SCHEME &amp; COMPLETE SOLUTIONS</i> &bull; SET 2</b>
      </div>

      <div class="solutions-columns">
        <table class="answers-table">
          <thead>
            <tr>
              <th style="width:28px;">No.</th>
              <th style="width:40px;">Jaw.</th>
              <th>Penerangan &amp; Jalan Kerja Lengkap</th>
            </tr>
          </thead>
          <tbody>
  `;

  for (let i = 0; i < 10; i++) {
    const q = questionsSet2[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>

        <table class="answers-table">
          <thead>
            <tr>
              <th style="width:28px;">No.</th>
              <th style="width:40px;">Jaw.</th>
              <th>Penerangan &amp; Jalan Kerja Lengkap</th>
            </tr>
          </thead>
          <tbody>
  `;

  for (let i = 10; i < 20; i++) {
    const q = questionsSet2[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 (SET 2) &copy; Skema Jawapan</span>
      <span>17</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // PAGE 18: ANSWER SCHEME (Q21 - Q40)
  html += `
  <div class="page-container">
    <div>
      <div class="running-header">
        <span>1449/1 (SET 2)</span>
        <span>SKEMA JAWAPAN &amp; JALAN KERJA LENGKAP (SOALAN 21 &ndash; 40)</span>
        <span>SULIT</span>
      </div>

      <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:4px 8px; margin-bottom:6px; border-radius:3px; font-size:8pt;">
        <b>SKEMA PEMARKAHAN &amp; JALAN KERJA LENGKAP / <i>MARK SCHEME &amp; COMPLETE SOLUTIONS</i> &bull; SET 2</b>
      </div>

      <div class="solutions-columns">
        <table class="answers-table">
          <thead>
            <tr>
              <th style="width:28px;">No.</th>
              <th style="width:40px;">Jaw.</th>
              <th>Penerangan &amp; Jalan Kerja Lengkap</th>
            </tr>
          </thead>
          <tbody>
  `;

  for (let i = 20; i < 30; i++) {
    const q = questionsSet2[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>

        <table class="answers-table">
          <thead>
            <tr>
              <th style="width:28px;">No.</th>
              <th style="width:40px;">Jaw.</th>
              <th>Penerangan &amp; Jalan Kerja Lengkap</th>
            </tr>
          </thead>
          <tbody>
  `;

  for (let i = 30; i < 40; i++) {
    const q = questionsSet2[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 (SET 2) &copy; Skema Jawapan</span>
      <span>18</span>
      <span>AKHIR SKEMA PEPERIKSAAN SET 2 / <i>END OF SET 2 SCHEME</i></span>
    </div>
  </div>
</body>
</html>
  `;

  return html;
}

try {
  console.log("Generating HTML file for Set 2...");
  const htmlContent = generateHtmlSet2();
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`HTML generated at: ${htmlPath}`);

  console.log("Rendering PDF via Microsoft Edge headless...");
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const htmlUrl = "file:///" + htmlPath.replace(/\\/g, '/');

  const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlUrl}"`;
  execSync(cmd, { stdio: 'inherit' });

  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`PDF created successfully for Set 2! Size: ${stats.size} bytes at: ${pdfPath}`);
  }
} catch (e) {
  console.error("Build failed:", e);
  process.exit(1);
}
