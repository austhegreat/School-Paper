const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputDir = __dirname;
const htmlPath = path.join(outputDir, 'Kertas_1_Matematik_Tingkatan_4.html');
const pdfPath = path.join(outputDir, 'Kertas_1_Matematik_Tingkatan_4.pdf');

// Helpers for SVGs
function generateParabolaSvg() {
  return `
  <svg width="270" height="160" viewBox="0 0 270 160" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="25" y1="125" x2="245" y2="125" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow)"/>
    <text x="250" y="129" font-size="11" font-family="Times New Roman, serif" font-weight="bold">x</text>
    <line x1="55" y1="150" x2="55" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow)"/>
    <text x="48" y="13" font-size="11" font-family="Times New Roman, serif" font-weight="bold">f(x)</text>
    <text x="45" y="136" font-size="10" font-family="Times New Roman, serif">O</text>

    <path d="M 72 136 Q 138 -15 204 136" fill="none" stroke="#1d4ed8" stroke-width="2"/>

    <line x1="138" y1="125" x2="138" y2="52" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="55" y1="52" x2="138" y2="52" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="138" cy="52" r="3" fill="#1e293b"/>
    <text x="143" y="48" font-size="10" font-weight="bold" font-family="Times New Roman, serif">(3, 4)</text>

    <text x="78" y="137" font-size="10" font-family="Times New Roman, serif">1</text>
    <text x="190" y="137" font-size="10" font-family="Times New Roman, serif">5</text>
    <text x="44" y="56" font-size="10" font-family="Times New Roman, serif">4</text>
    <text x="133" y="137" font-size="10" font-family="Times New Roman, serif">3</text>
    
    <text x="152" y="92" font-size="10" font-style="italic" fill="#1e40af" font-family="Times New Roman, serif">f(x) = &minus;x² + 6x &minus; 5</text>
  </svg>`;
}

function generateVennSvg() {
  return `
  <svg width="250" height="155" viewBox="0 0 250 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <clipPath id="circleP"><circle cx="95" cy="65" r="44"/></clipPath>
    </defs>
    <rect x="8" y="8" width="234" height="138" fill="#f8fafc" stroke="#334155" stroke-width="1.4" rx="3"/>
    <text x="18" y="24" font-size="12" font-weight="bold" font-family="Times New Roman, serif">&xi;</text>

    <g clip-path="url(#circleP)">
      <circle cx="150" cy="65" r="44" fill="#93c5fd" />
    </g>
    <circle cx="122" cy="104" r="38" fill="#f8fafc" stroke="none"/>

    <circle cx="95" cy="65" r="44" fill="none" stroke="#0f172a" stroke-width="1.4"/>
    <circle cx="150" cy="65" r="44" fill="none" stroke="#0f172a" stroke-width="1.4"/>
    <circle cx="122" cy="104" r="38" fill="none" stroke="#0f172a" stroke-width="1.4"/>

    <text x="68" y="42" font-size="12" font-weight="bold" font-family="Times New Roman, serif">P</text>
    <text x="170" y="42" font-size="12" font-weight="bold" font-family="Times New Roman, serif">Q</text>
    <text x="118" y="138" font-size="12" font-weight="bold" font-family="Times New Roman, serif">R</text>
  </svg>`;
}

function generateTreeComparisonSvg() {
  return `
  <div style="display:flex; justify-content:space-around; align-items:center; margin:4px 0;">
    <div style="text-align:center;">
      <svg width="95" height="85" viewBox="0 0 95 85">
        <text x="6" y="14" font-weight="bold" font-size="11">A</text>
        <line x1="22" y1="62" x2="48" y2="22" stroke="#334155" stroke-width="1.5"/>
        <line x1="48" y1="22" x2="72" y2="62" stroke="#334155" stroke-width="1.5"/>
        <line x1="72" y1="62" x2="22" y2="62" stroke="#334155" stroke-width="1.5"/>
        <line x1="72" y1="62" x2="88" y2="40" stroke="#334155" stroke-width="1.5"/>
        <circle cx="22" cy="62" r="3.5" fill="#1e293b"/>
        <circle cx="48" cy="22" r="3.5" fill="#1e293b"/>
        <circle cx="72" cy="62" r="3.5" fill="#1e293b"/>
        <circle cx="88" cy="40" r="3.5" fill="#1e293b"/>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="95" height="85" viewBox="0 0 95 85">
        <text x="6" y="14" font-weight="bold" font-size="11">B</text>
        <line x1="18" y1="30" x2="42" y2="30" stroke="#334155" stroke-width="1.5"/>
        <line x1="62" y1="30" x2="82" y2="60" stroke="#334155" stroke-width="1.5"/>
        <circle cx="18" cy="30" r="3.5" fill="#1e293b"/>
        <circle cx="42" cy="30" r="3.5" fill="#1e293b"/>
        <circle cx="62" cy="30" r="3.5" fill="#1e293b"/>
        <circle cx="82" cy="60" r="3.5" fill="#1e293b"/>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="95" height="85" viewBox="0 0 95 85">
        <text x="6" y="14" font-weight="bold" font-size="11">C</text>
        <line x1="48" y1="18" x2="24" y2="46" stroke="#334155" stroke-width="1.6"/>
        <line x1="48" y1="18" x2="72" y2="46" stroke="#334155" stroke-width="1.6"/>
        <line x1="24" y1="46" x2="15" y2="72" stroke="#334155" stroke-width="1.6"/>
        <line x1="24" y1="46" x2="38" y2="72" stroke="#334155" stroke-width="1.6"/>
        <circle cx="48" cy="18" r="3.5" fill="#1e293b"/>
        <circle cx="24" cy="46" r="3.5" fill="#1e293b"/>
        <circle cx="72" cy="46" r="3.5" fill="#1e293b"/>
        <circle cx="15" cy="72" r="3.5" fill="#1e293b"/>
        <circle cx="38" cy="72" r="3.5" fill="#1e293b"/>
      </svg>
    </div>
    <div style="text-align:center;">
      <svg width="95" height="85" viewBox="0 0 95 85">
        <text x="6" y="14" font-weight="bold" font-size="11">D</text>
        <polygon points="22,22 70,22 70,62 22,62" fill="none" stroke="#334155" stroke-width="1.5"/>
        <circle cx="22" cy="22" r="3.5" fill="#1e293b"/>
        <circle cx="70" cy="22" r="3.5" fill="#1e293b"/>
        <circle cx="70" cy="62" r="3.5" fill="#1e293b"/>
        <circle cx="22" cy="62" r="3.5" fill="#1e293b"/>
      </svg>
    </div>
  </div>`;
}

function generateWeightedNetworkSvg() {
  return `
  <svg width="290" height="150" viewBox="0 0 290 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="32" y1="78" x2="108" y2="32" stroke="#334155" stroke-width="1.5"/>
    <line x1="32" y1="78" x2="125" y2="118" stroke="#334155" stroke-width="1.5"/>
    <line x1="108" y1="32" x2="125" y2="118" stroke="#334155" stroke-width="1.5"/>
    <line x1="108" y1="32" x2="195" y2="36" stroke="#334155" stroke-width="1.5"/>
    <line x1="125" y1="118" x2="195" y2="36" stroke="#334155" stroke-width="1.5"/>
    <line x1="125" y1="118" x2="255" y2="78" stroke="#334155" stroke-width="1.5"/>
    <line x1="195" y1="36" x2="255" y2="78" stroke="#334155" stroke-width="1.5"/>

    <text x="64" y="48" font-size="10" font-weight="bold" fill="#b91c1c">10</text>
    <text x="65" y="105" font-size="10" font-weight="bold" fill="#b91c1c">14</text>
    <text x="122" y="75" font-size="10" font-weight="bold" fill="#b91c1c">3</text>
    <text x="148" y="28" font-size="10" font-weight="bold" fill="#b91c1c">11</text>
    <text x="165" y="86" font-size="10" font-weight="bold" fill="#b91c1c">6</text>
    <text x="188" y="114" font-size="10" font-weight="bold" fill="#b91c1c">12</text>
    <text x="230" y="52" font-size="10" font-weight="bold" fill="#b91c1c">8</text>

    <circle cx="32" cy="78" r="12" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
    <text x="28" y="82" font-size="11" font-weight="bold">P</text>

    <circle cx="108" cy="32" r="12" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
    <text x="104" y="36" font-size="11" font-weight="bold">Q</text>

    <circle cx="125" cy="118" r="12" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
    <text x="121" y="122" font-size="11" font-weight="bold">R</text>

    <circle cx="195" cy="36" r="12" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
    <text x="191" y="40" font-size="11" font-weight="bold">S</text>

    <circle cx="255" cy="78" r="12" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
    <text x="252" y="82" font-size="11" font-weight="bold">T</text>
  </svg>`;
}

function generateDirectedGraphSvg() {
  return `
  <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="14" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="32" y1="32" x2="125" y2="75" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="32" y1="118" x2="125" y2="75" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="125" y1="75" x2="218" y2="38" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="125" y1="75" x2="218" y2="110" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>
    <path d="M 120 82 Q 74 116 38 121" fill="none" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="218" y1="110" x2="218" y2="38" stroke="#334155" stroke-width="1.5" marker-end="url(#arr)"/>

    <circle cx="32" cy="32" r="12" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.6"/>
    <text x="28" y="36" font-size="11" font-weight="bold">A</text>

    <circle cx="125" cy="75" r="13" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
    <text x="121" y="79" font-size="12" font-weight="bold">B</text>

    <circle cx="32" cy="118" r="12" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.6"/>
    <text x="28" y="122" font-size="11" font-weight="bold">C</text>

    <circle cx="218" cy="38" r="12" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.6"/>
    <text x="214" y="42" font-size="11" font-weight="bold">D</text>

    <circle cx="218" cy="110" r="12" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.6"/>
    <text x="214" y="114" font-size="11" font-weight="bold">E</text>
  </svg>`;
}

function generateInequalityRegionSvg() {
  return `
  <svg width="250" height="175" viewBox="0 0 250 175" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="axisArr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
      <pattern id="hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#3b82f6" stroke-width="1.5" />
      </pattern>
    </defs>
    <line x1="22" y1="138" x2="228" y2="138" stroke="#0f172a" stroke-width="1.4" marker-end="url(#axisArr)"/>
    <text x="233" y="142" font-size="11" font-weight="bold">x</text>
    <line x1="42" y1="162" x2="42" y2="18" stroke="#0f172a" stroke-width="1.4" marker-end="url(#axisArr)"/>
    <text x="36" y="14" font-size="11" font-weight="bold">y</text>
    <text x="32" y="149" font-size="10">O</text>

    <polygon points="42,42 100,81 57,138 42,138" fill="url(#hatch)" stroke="#2563eb" stroke-width="1" fill-opacity="0.6"/>

    <line x1="26" y1="31" x2="195" y2="144" stroke="#0f172a" stroke-width="1.6"/>
    <text x="140" y="60" font-size="10" font-style="italic">y = &minus;x + 5</text>

    <line x1="30" y1="172" x2="132" y2="35" stroke="#0f172a" stroke-width="1.6"/>
    <text x="112" y="35" font-size="10" font-style="italic">y = 2x &minus; 1</text>

    <text x="28" y="44" font-size="9.5">5</text>
    <text x="180" y="149" font-size="9.5">5</text>
    <text x="96" y="149" font-size="9.5">2</text>
    <text x="28" y="85" font-size="9.5">3</text>
    <line x1="100" y1="138" x2="100" y2="81" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="42" y1="81" x2="100" y2="81" stroke="#94a3b8" stroke-dasharray="2 2"/>
  </svg>`;
}

function generateDistTimeSvg() {
  return `
  <svg width="270" height="160" viewBox="0 0 270 160" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="40" y1="128" x2="245" y2="128" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m1)"/>
    <text x="186" y="145" font-size="10">Masa / Time (min)</text>
    <line x1="40" y1="128" x2="40" y2="18" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m1)"/>
    <text x="6" y="14" font-size="10">Jarak / Distance (km)</text>
    <text x="30" y="139" font-size="10">O</text>

    <line x1="40" y1="128" x2="110" y2="72" stroke="#1d4ed8" stroke-width="1.8"/>
    <line x1="110" y1="72" x2="150" y2="72" stroke="#1d4ed8" stroke-width="1.8"/>
    <line x1="150" y1="72" x2="220" y2="28" stroke="#1d4ed8" stroke-width="1.8"/>

    <line x1="40" y1="72" x2="110" y2="72" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="40" y1="28" x2="220" y2="28" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="110" y1="128" x2="110" y2="72" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="150" y1="128" x2="150" y2="72" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="220" y1="128" x2="220" y2="28" stroke="#94a3b8" stroke-dasharray="2 2"/>

    <text x="23" y="76" font-size="9.5">36</text>
    <text x="23" y="32" font-size="9.5">80</text>
    <text x="103" y="140" font-size="9.5">40</text>
    <text x="144" y="140" font-size="9.5">60</text>
    <text x="214" y="140" font-size="9.5">90</text>
  </svg>`;
}

function generateDistTimeLorrySvg() {
  return `
  <svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="40" y1="120" x2="235" y2="120" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m2)"/>
    <text x="180" y="137" font-size="10">Masa / Time (j / h)</text>
    <line x1="40" y1="120" x2="40" y2="18" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m2)"/>
    <text x="8" y="14" font-size="10">Jarak / Distance (km)</text>
    <text x="30" y="131" font-size="10">O</text>

    <line x1="40" y1="120" x2="90" y2="78" stroke="#047857" stroke-width="1.8"/>
    <line x1="90" y1="78" x2="122" y2="78" stroke="#047857" stroke-width="1.8"/>
    <line x1="122" y1="78" x2="200" y2="28" stroke="#047857" stroke-width="1.8"/>

    <line x1="40" y1="78" x2="90" y2="78" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="40" y1="28" x2="200" y2="28" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="90" y1="120" x2="90" y2="78" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="122" y1="120" x2="122" y2="78" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="200" y1="120" x2="200" y2="28" stroke="#94a3b8" stroke-dasharray="2 2"/>

    <text x="19" y="82" font-size="9.5">60</text>
    <text x="13" y="32" font-size="9.5">160</text>
    <text x="84" y="133" font-size="9.5">1.0</text>
    <text x="115" y="133" font-size="9.5">1.4</text>
    <text x="198" y="133" font-size="10" font-weight="bold" font-style="italic">t</text>
  </svg>`;
}

function generateSpeedTimeParticleSvg() {
  return `
  <svg width="270" height="150" viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="36" y1="120" x2="245" y2="120" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m3)"/>
    <text x="190" y="137" font-size="10">Masa / Time (s)</text>
    <line x1="36" y1="120" x2="36" y2="18" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m3)"/>
    <text x="6" y="14" font-size="10">Laju / Speed (m s⁻¹)</text>
    <text x="27" y="131" font-size="10">O</text>

    <line x1="36" y1="88" x2="90" y2="32" stroke="#b91c1c" stroke-width="1.8"/>
    <line x1="90" y1="32" x2="165" y2="32" stroke="#b91c1c" stroke-width="1.8"/>
    <line x1="165" y1="32" x2="225" y2="120" stroke="#b91c1c" stroke-width="1.8"/>

    <line x1="36" y1="32" x2="90" y2="32" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="90" y1="120" x2="90" y2="32" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="165" y1="120" x2="165" y2="32" stroke="#94a3b8" stroke-dasharray="2 2"/>

    <text x="21" y="92" font-size="9.5">8</text>
    <text x="18" y="36" font-size="9.5">18</text>
    <text x="86" y="133" font-size="9.5">6</text>
    <text x="160" y="133" font-size="9.5">14</text>
    <text x="220" y="133" font-size="9.5">20</text>
  </svg>`;
}

function generateSpeedTimeTrapezoidSvg() {
  return `
  <svg width="270" height="150" viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="36" y1="120" x2="245" y2="120" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m4)"/>
    <text x="190" y="137" font-size="10">Masa / Time (s)</text>
    <line x1="36" y1="120" x2="36" y2="18" stroke="#0f172a" stroke-width="1.4" marker-end="url(#m4)"/>
    <text x="6" y="14" font-size="10">Laju / Speed (m s⁻¹)</text>
    <text x="27" y="131" font-size="10">O</text>

    <polygon points="36,120 105,36 220,36 220,120" fill="#e0f2fe" stroke="none"/>

    <line x1="36" y1="120" x2="105" y2="36" stroke="#0284c7" stroke-width="2"/>
    <line x1="105" y1="36" x2="220" y2="36" stroke="#0284c7" stroke-width="2"/>
    <line x1="220" y1="36" x2="220" y2="120" stroke="#0284c7" stroke-width="1.4" stroke-dasharray="3 3"/>

    <line x1="36" y1="36" x2="105" y2="36" stroke="#94a3b8" stroke-dasharray="2 2"/>
    <line x1="105" y1="120" x2="105" y2="36" stroke="#94a3b8" stroke-dasharray="2 2"/>

    <text x="18" y="40" font-size="9.5">20</text>
    <text x="100" y="133" font-size="9.5">10</text>
    <text x="215" y="133" font-size="9.5">25</text>
  </svg>`;
}

function generateBoxPlotSvg() {
  return `
  <svg width="290" height="120" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="90" x2="265" y2="90" stroke="#0f172a" stroke-width="1.4"/>
    <line x1="25" y1="86" x2="25" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="22" y="105" font-size="9.5">0</text>
    <line x1="71" y1="86" x2="71" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="66" y="105" font-size="9.5">20</text>
    <line x1="117" y1="86" x2="117" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="112" y="105" font-size="9.5">40</text>
    <line x1="163" y1="86" x2="163" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="158" y="105" font-size="9.5">60</text>
    <line x1="209" y1="86" x2="209" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="204" y="105" font-size="9.5">80</text>
    <line x1="255" y1="86" x2="255" y2="94" stroke="#0f172a" stroke-width="1.4"/><text x="247" y="105" font-size="9.5">100</text>

    <line x1="71" y1="42" x2="128.5" y2="42" stroke="#0f172a" stroke-width="1.6"/>
    <line x1="197.5" y1="42" x2="243.5" y2="42" stroke="#0f172a" stroke-width="1.6"/>

    <line x1="71" y1="28" x2="71" y2="56" stroke="#0f172a" stroke-width="1.6"/>
    <line x1="243.5" y1="28" x2="243.5" y2="56" stroke="#0f172a" stroke-width="1.6"/>

    <rect x="128.5" y="18" width="69" height="48" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.6"/>
    <line x1="163" y1="18" x2="163" y2="66" stroke="#dc2626" stroke-width="2"/>

    <text x="65" y="14" font-size="9" font-weight="bold">20</text>
    <text x="122" y="13" font-size="9" font-weight="bold">45</text>
    <text x="158" y="13" font-size="9" font-weight="bold" fill="#dc2626">60</text>
    <text x="192" y="13" font-size="9" font-weight="bold">75</text>
    <text x="238" y="14" font-size="9" font-weight="bold">95</text>
  </svg>`;
}

// Complete 40 questions
const questions = [
  {
    num: 1,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Rajah 1 menunjukkan graf fungsi kuadratik <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 5.<br>
         Nyatakan persamaan paksi simetri dan nilai maksimum bagi fungsi itu.`,
    en: `Diagram 1 shows the graph of a quadratic function <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 5.<br>
         State the equation of the axis of symmetry and the maximum value of the function.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateParabolaSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 1 / <i>Diagram 1</i></span></div>`,
    options: [
      { key: "A", text: "<i>x</i> = 3, Nilai maksimum = 4" },
      { key: "B", text: "<i>x</i> = 3, Nilai maksimum = 5" },
      { key: "C", text: "<i>x</i> = &minus;3, Nilai maksimum = 4" },
      { key: "D", text: "<i>x</i> = &minus;3, Nilai maksimum = &minus;5" }
    ],
    answer: "A",
    solution: "Paksi simetri: <i>x</i> = &minus;<i>b</i> / (2<i>a</i>) = &minus;6 / [2(&minus;1)] = 3.<br>Nilai maksimum = <i>f</i>(3) = &minus;(3)<sup>2</sup> + 6(3) &minus; 5 = 4."
  },
  {
    num: 2,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Selesaikan persamaan kuadratik berikut:
         <div style="margin: 3px 0; font-weight: bold; text-align:center;">
           <span style="display:inline-block; vertical-align:middle; text-align:center;">
             <span style="display:block; border-bottom:1px solid #000; padding:0 3px;">3<i>x</i>(<i>x</i> &minus; 1)</span>
             <span style="display:block;">2</span>
           </span>
           = 2 &minus; <i>x</i>
         </div>`,
    en: `Solve the quadratic equation: [3<i>x</i>(<i>x</i> &minus; 1)] / 2 = 2 &minus; <i>x</i>`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = &minus;1, &nbsp; <i>x</i> = <sup>4</sup>/<sub>3</sub>" },
      { key: "B", text: "<i>x</i> = 1, &nbsp; <i>x</i> = &minus;<sup>4</sup>/<sub>3</sub>" },
      { key: "C", text: "<i>x</i> = &minus;2, &nbsp; <i>x</i> = <sup>2</sup>/<sub>3</sub>" },
      { key: "D", text: "<i>x</i> = 2, &nbsp; <i>x</i> = &minus;<sup>2</sup>/<sub>3</sub>" }
    ],
    answer: "A",
    solution: "3<i>x</i><sup>2</sup> &minus; 3<i>x</i> = 4 &minus; 2<i>x</i> &rArr; 3<i>x</i><sup>2</sup> &minus; <i>x</i> &minus; 4 = 0 &rArr; (3<i>x</i> &minus; 4)(<i>x</i> + 1) = 0 &rArr; <i>x</i> = 4/3, &minus;1."
  },
  {
    num: 3,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Graf bagi fungsi kuadratik <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 5 digerakkan secara menegak ke bawah sebanyak 9 unit untuk menghasilkan fungsi <i>g</i>(<i>x</i>). Graf <i>g</i>(<i>x</i>) menyilang paksi-<i>x</i> pada titik <i>P</i> dan <i>Q</i>. Cari jarak antara <i>P</i> dan <i>Q</i>.`,
    en: `The graph of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 5 is translated downwards by 9 units to form <i>g</i>(<i>x</i>). The graph intersects the <i>x</i>-axis at <i>P</i> and <i>Q</i>. Find the distance between <i>P</i> and <i>Q</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "2 unit / <i>units</i>" },
      { key: "B", text: "4 unit / <i>units</i>" },
      { key: "C", text: "5 unit / <i>units</i>" },
      { key: "D", text: "8 unit / <i>units</i>" }
    ],
    answer: "B",
    solution: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4. Punca: <i>x</i> = &plusmn;2. Jarak <i>PQ</i> = 2 &minus; (&minus;2) = 4 unit."
  },
  {
    num: 4,
    chapter: "Bab 1: Fungsi Kuadratik",
    bm: `Panjang sebuah segi empat tepat ialah (<i>x</i> + 5) cm dan lebarnya (<i>x</i> &minus; 2) cm. Diberi luasnya 44 cm<sup>2</sup>, hitung perimeter, dalam cm, segi empat tepat itu.`,
    en: `A rectangle has length (<i>x</i> + 5) cm and width (<i>x</i> &minus; 2) cm. Given its area is 44 cm<sup>2</sup>, calculate its perimeter, in cm.`,
    diagram: "",
    options: [
      { key: "A", text: "24 cm" },
      { key: "B", text: "30 cm" },
      { key: "C", text: "44 cm" },
      { key: "D", text: "60 cm" }
    ],
    answer: "B",
    solution: "(<i>x</i> + 5)(<i>x</i> &minus; 2) = 44 &rArr; <i>x</i><sup>2</sup> + 3<i>x</i> &minus; 54 = 0 &rArr; <i>x</i> = 6. Panjang = 11, Lebar = 4. Perimeter = 2(11 + 4) = 30 cm."
  },
  {
    num: 5,
    chapter: "Bab 2: Asas Nombor",
    bm: `Nyatakan nilai digit yang bergaris dalam nombor 4<u>3</u>21<sub>5</sub>, dalam asas sepuluh.`,
    en: `State the value of the underlined digit in 4<u>3</u>21<sub>5</sub>, in base ten.`,
    diagram: "",
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "25" },
      { key: "C", text: "75" },
      { key: "D", text: "375" }
    ],
    answer: "C",
    solution: "Nilai digit = 3 &times; 5<sup>2</sup> = 3 &times; 25 = 75<sub>10</sub>."
  },
  {
    num: 6,
    chapter: "Bab 2: Asas Nombor",
    bm: `Ungkapkan 111011<sub>2</sub> sebagai satu nombor dalam asas lapan.`,
    en: `Express 111011<sub>2</sub> as a number in base eight.`,
    diagram: "",
    options: [
      { key: "A", text: "57<sub>8</sub>" },
      { key: "B", text: "71<sub>8</sub>" },
      { key: "C", text: "73<sub>8</sub>" },
      { key: "D", text: "75<sub>8</sub>" }
    ],
    answer: "C",
    solution: "Kumpulan 3 bit: [111]<sub>2</sub> = 7, [011]<sub>2</sub> = 3 &rArr; 73<sub>8</sub>."
  },
  {
    num: 7,
    chapter: "Bab 2: Asas Nombor",
    bm: `Hitung 423<sub>5</sub> &minus; 144<sub>5</sub> dan nyatakan jawapannya dalam asas lima.`,
    en: `Calculate 423<sub>5</sub> &minus; 144<sub>5</sub> and state the answer in base five.`,
    diagram: "",
    options: [
      { key: "A", text: "214<sub>5</sub>" },
      { key: "B", text: "224<sub>5</sub>" },
      { key: "C", text: "234<sub>5</sub>" },
      { key: "D", text: "324<sub>5</sub>" }
    ],
    answer: "B",
    solution: "113<sub>10</sub> &minus; 49<sub>10</sub> = 64<sub>10</sub>. Tukar 64<sub>10</sub> ke asas 5 &rArr; 224<sub>5</sub>."
  },
  {
    num: 8,
    chapter: "Bab 2: Asas Nombor",
    bm: `Diberi bahawa 101<sub>2</sub> + <i>p</i><sub>8</sub> = 35<sub>7</sub>, cari nilai <i>p</i>.`,
    en: `Given that 101<sub>2</sub> + <i>p</i><sub>8</sub> = 35<sub>7</sub>, find the value of <i>p</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "21" },
      { key: "B", text: "25" },
      { key: "C", text: "31" },
      { key: "D", text: "32" }
    ],
    answer: "B",
    solution: "5<sub>10</sub> + <i>p</i><sub>8</sub> = 26<sub>10</sub> &rArr; <i>p</i><sub>10</sub> = 21 &rArr; 25<sub>8</sub>. Maka <i>p</i> = 25."
  },
  {
    num: 9,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Antara pernyataan majmuk berikut, yang manakah adalah <b>benar</b>?`,
    en: `Which of the following compound statements is <b>true</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "3<sup>2</sup> = 6 dan / <i>and</i> 4 > 2" },
      { key: "B", text: "9 ialah nombor perdana atau 12 ialah gandaan 4" },
      { key: "C", text: "Semua poligon mempunyai 5 sisi atau &minus;3 > &minus;1" },
      { key: "D", text: "5 &times; 0 = 5 dan 7 ialah nombor ganjil" }
    ],
    answer: "B",
    solution: "'9 nombor perdana' (Palsu) ATAU '12 gandaan 4' (Benar) &rArr; BENAR."
  },
  {
    num: 10,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Tentukan akas bagi implikasi: &ldquo;Jika <i>x</i> ialah faktor bagi 12, maka <i>x</i> ialah faktor bagi 24.&rdquo;`,
    en: `Determine the converse of: &ldquo;If <i>x</i> is a factor of 12, then <i>x</i> is a factor of 24.&rdquo;`,
    diagram: "",
    options: [
      { key: "A", text: "Jika <i>x</i> bukan faktor 12, maka <i>x</i> bukan faktor 24." },
      { key: "B", text: "Jika <i>x</i> ialah faktor 24, maka <i>x</i> ialah faktor 12." },
      { key: "C", text: "Jika <i>x</i> bukan faktor 24, maka <i>x</i> bukan faktor 12." },
      { key: "D", text: "<i>x</i> faktor 12 jika dan hanya jika <i>x</i> faktor 24." }
    ],
    answer: "B",
    solution: "Akas bagi 'Jika <i>p</i>, maka <i>q</i>' ialah 'Jika <i>q</i>, maka <i>p</i>'."
  },
  {
    num: 11,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Lengkapkan hujah deduktif berikut:<br>
         <b>Premis 1:</b> Jika <i>m</i> ialah gandaan 6, maka <i>m</i> boleh dibahagi tepat dengan 3.<br>
         <b>Premis 2:</b> 42 ialah gandaan 6.<br>
         <b>Kesimpulan:</b> ............................................................................`,
    en: `Complete the deductive argument: Premise 1: If <i>m</i> is a multiple of 6, then <i>m</i> is divisible by 3. Premise 2: 42 is a multiple of 6. Conclusion: ...`,
    diagram: "",
    options: [
      { key: "A", text: "42 tidak boleh dibahagi tepat dengan 3" },
      { key: "B", text: "42 boleh dibahagi tepat dengan 3" },
      { key: "C", text: "<i>m</i> bukan gandaan 6" },
      { key: "D", text: "<i>m</i> boleh dibahagi tepat dengan 3" }
    ],
    answer: "B",
    solution: "Hujah Bentuk II: Anteseden dipenuhi (42 gandaan 6), maka akibatnya benar (42 boleh dibahagi tepat dengan 3)."
  },
  {
    num: 12,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Diberi pola: 5 = 3(1)<sup>2</sup> + 2, &nbsp; 14 = 3(2)<sup>2</sup> + 2, &nbsp; 29 = 3(3)<sup>2</sup> + 2, &nbsp; 50 = 3(4)<sup>2</sup> + 2, &hellip;<br>
         Buat satu kesimpulan secara induksi bagi sebutan ke-<i>n</i> jujukan itu.`,
    en: `Given the pattern: 5 = 3(1)<sup>2</sup> + 2, 14 = 3(2)<sup>2</sup> + 2, ... Make a conclusion by induction for the <i>n</i>-th term.`,
    diagram: "",
    options: [
      { key: "A", text: "3<i>n</i><sup>2</sup> + 2, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "B", text: "3<i>n</i> + 2, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "C", text: "3<i>n</i><sup>2</sup> &minus; 2, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" },
      { key: "D", text: "2<i>n</i><sup>2</sup> + 3, &nbsp; <i>n</i> = 1, 2, 3, 4, &hellip;" }
    ],
    answer: "A",
    solution: "Pola berulang: 3<i>n</i><sup>2</sup> + 2 dengan <i>n</i> = 1, 2, 3, 4, &hellip;"
  },
  {
    num: 13,
    chapter: "Bab 4: Operasi Set",
    bm: `Diberi set semesta &xi; = {<i>x</i> : 1 &le; <i>x</i> &le; 20, <i>x</i> ialah integer}, set <i>P</i> = {<i>x</i> : <i>x</i> ialah nombor ganjil} dan set <i>Q</i> = {<i>x</i> : <i>x</i> ialah gandaan 3}. Cari <i>n</i>(<i>P</i> &cap; <i>Q</i>&prime;).`,
    en: `Given &xi; = {<i>x</i> : 1 &le; <i>x</i> &le; 20, <i>x</i> is an integer}, <i>P</i> = {odd numbers} and <i>Q</i> = {multiples of 3}. Find <i>n</i>(<i>P</i> &cap; <i>Q</i>&prime;).`,
    diagram: "",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "10" }
    ],
    answer: "C",
    solution: "<i>P</i> = 10 unsur ganjil. Ganjil gandaan 3: {3, 9, 15}. Maka <i>P</i> &cap; <i>Q</i>&prime; = 10 &minus; 3 = 7 unsur."
  },
  {
    num: 14,
    chapter: "Bab 4: Operasi Set",
    bm: `Rajah 2 menunjukkan gambar rajah Venn dengan &xi; = <i>P</i> &cup; <i>Q</i> &cup; <i>R</i>.<br>Antara berikut, yang manakah mewakili kawasan berlorek?`,
    en: `Diagram 2 shows a Venn diagram with &xi; = <i>P</i> &cup; <i>Q</i> &cup; <i>R</i>.<br>Which represents the shaded region?`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateVennSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 2 / <i>Diagram 2</i></span></div>`,
    options: [
      { key: "A", text: "(<i>P</i> &cap; <i>Q</i>) &cap; <i>R</i>&prime;" },
      { key: "B", text: "(<i>P</i> &cup; <i>Q</i>) &cap; <i>R</i>" },
      { key: "C", text: "(<i>P</i> &cap; <i>Q</i>) &cup; <i>R</i>" },
      { key: "D", text: "<i>P</i>&prime; &cap; (<i>Q</i> &cup; <i>R</i>)" }
    ],
    answer: "A",
    solution: "Kawasan persilangan <i>P</i> dan <i>Q</i> di luar <i>R</i> &rArr; (<i>P</i> &cap; <i>Q</i>) &cap; <i>R</i>&prime;."
  },
  {
    num: 15,
    chapter: "Bab 4: Operasi Set",
    bm: `Dalam sebuah kelas 45 murid, 28 orang menyertai Kelab Sains, 20 orang Kelab Matematik, dan 5 orang tidak menyertai mana-mana kelab. Hitung bilangan murid yang menyertai kedua-dua kelab.`,
    en: `In a class of 45 students, 28 join Science Club, 20 join Math Club, and 5 join neither. How many join both clubs?`,
    diagram: "",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "8" },
      { key: "C", text: "12" },
      { key: "D", text: "17" }
    ],
    answer: "B",
    solution: "45 &minus; 5 = 40. <i>n</i>(<i>S</i> &cap; <i>M</i>) = 28 + 20 &minus; 40 = 8."
  },
  {
    num: 16,
    chapter: "Bab 4: Operasi Set",
    bm: `Diberi bahawa set <i>A</i> &sub; <i>B</i> dan <i>B</i> &cap; <i>C</i> = &empty;. Antara pernyataan berikut, yang manakah <b>pasti benar</b>?`,
    en: `Given that <i>A</i> &sub; <i>B</i> and <i>B</i> &cap; <i>C</i> = &empty;. Which statement is <b>definitely true</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "<i>A</i> &cap; <i>C</i> &ne; &empty;" },
      { key: "B", text: "<i>A</i> &sub; <i>C</i>" },
      { key: "C", text: "<i>A</i> &cap; <i>C</i> = &empty;" },
      { key: "D", text: "<i>B</i> &sub; <i>A</i>" }
    ],
    answer: "C",
    solution: "Semua unsur <i>A</i> berada dalam <i>B</i>, dan <i>B</i> tidak berkongsi unsur dengan <i>C</i>, maka <i>A</i> &cap; <i>C</i> = &empty;."
  },
  {
    num: 17,
    chapter: "Bab 5: Rangkaian Teori Graf",
    bm: `Satu graf tak terarah mempunyai 6 bucu dengan darjah 3, 2, 4, 3, <i>k</i> dan 2. Diberi graf itu mempunyai 9 tepi, cari nilai <i>k</i>.`,
    en: `An undirected graph has 6 vertices with degrees 3, 2, 4, 3, <i>k</i>, 2. Given it has 9 edges, find <i>k</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    answer: "C",
    solution: "&sum; <i>d</i>(<i>v</i>) = 2(9) = 18 &rArr; 14 + <i>k</i> = 18 &rArr; <i>k</i> = 4."
  },
  {
    num: 18,
    chapter: "Bab 5: Rangkaian Teori Graf",
    bm: `Antara graf berikut, yang manakah merupakan suatu <b>pokok</b> (<i>tree</i>)?`,
    en: `Which of the following graphs is a <b>tree</b>?`,
    diagram: generateTreeComparisonSvg(),
    options: [
      { key: "A", text: "Graf A / <i>Graph A</i>" },
      { key: "B", text: "Graf B / <i>Graph B</i>" },
      { key: "C", text: "Graf C / <i>Graph C</i>" },
      { key: "D", text: "Graf D / <i>Graph D</i>" }
    ],
    answer: "C",
    solution: "Graf C mempunyai 5 bucu dan 4 tepi, bersambung dan tiada kitaran &rArr; Pokok."
  },
  {
    num: 19,
    chapter: "Bab 5: Rangkaian Teori Graf",
    bm: `Rajah 3 menunjukkan rangkaian jalan raya antara bandar <i>P, Q, R, S</i> dan <i>T</i> (jarak dalam km). Cari jarak terpendek, dalam km, dari <i>P</i> ke <i>T</i>.`,
    en: `Diagram 3 shows a road network between towns <i>P, Q, R, S</i> and <i>T</i>. Find the shortest distance from <i>P</i> to <i>T</i>.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateWeightedNetworkSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 3 / <i>Diagram 3</i></span></div>`,
    options: [
      { key: "A", text: "25 km" },
      { key: "B", text: "26 km" },
      { key: "C", text: "28 km" },
      { key: "D", text: "29 km" }
    ],
    answer: "A",
    solution: "Laluan <i>P</i> &rarr; <i>Q</i> &rarr; <i>R</i> &rarr; <i>T</i> = 10 + 3 + 12 = 25 km."
  },
  {
    num: 20,
    chapter: "Bab 5: Rangkaian Teori Graf",
    bm: `Rajah 4 menunjukkan graf berarah. Tentukan <i>d</i><sub>in</sub>(<i>B</i>) dan <i>d</i><sub>out</sub>(<i>B</i>) bagi bucu <i>B</i>.`,
    en: `Diagram 4 shows a directed graph. Determine <i>d</i><sub>in</sub>(<i>B</i>) and <i>d</i><sub>out</sub>(<i>B</i>) for vertex <i>B</i>.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateDirectedGraphSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 4 / <i>Diagram 4</i></span></div>`,
    options: [
      { key: "A", text: "<i>d</i><sub>in</sub>(<i>B</i>) = 2, &nbsp; <i>d</i><sub>out</sub>(<i>B</i>) = 3" },
      { key: "B", text: "<i>d</i><sub>in</sub>(<i>B</i>) = 3, &nbsp; <i>d</i><sub>out</sub>(<i>B</i>) = 2" },
      { key: "C", text: "<i>d</i><sub>in</sub>(<i>B</i>) = 1, &nbsp; <i>d</i><sub>out</sub>(<i>B</i>) = 4" },
      { key: "D", text: "<i>d</i><sub>in</sub>(<i>B</i>) = 3, &nbsp; <i>d</i><sub>out</sub>(<i>B</i>) = 3" }
    ],
    answer: "A",
    solution: "Masuk ke <i>B</i> = 2 (dari <i>A</i>, <i>C</i>). Keluar dari <i>B</i> = 3 (ke <i>D</i>, <i>E</i>, <i>C</i>)."
  },
  {
    num: 21,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Rajah 5 menunjukkan rantau berlorek pada suatu satah Cartes.<br>Antara sistem ketaksamaan berikut, yang manakah mentakrifkan rantau berlorek itu?`,
    en: `Diagram 5 shows a shaded region on a Cartesian plane.<br>Which system of inequalities defines the shaded region?`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateInequalityRegionSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 5 / <i>Diagram 5</i></span></div>`,
    options: [
      { key: "A", text: "<i>y</i> &le; &minus;<i>x</i> + 5, &nbsp; <i>y</i> &ge; 2<i>x</i> &minus; 1, &nbsp; <i>x</i> &ge; 0" },
      { key: "B", text: "<i>y</i> &ge; &minus;<i>x</i> + 5, &nbsp; <i>y</i> &le; 2<i>x</i> &minus; 1, &nbsp; <i>x</i> &ge; 0" },
      { key: "C", text: "<i>y</i> < &minus;<i>x</i> + 5, &nbsp; <i>y</i> > 2<i>x</i> &minus; 1, &nbsp; <i>y</i> &ge; 0" },
      { key: "D", text: "<i>y</i> &le; &minus;<i>x</i> + 5, &nbsp; <i>y</i> &le; 2<i>x</i> &minus; 1, &nbsp; <i>x</i> &ge; 0" }
    ],
    answer: "A",
    solution: "Bawah <i>y</i> = &minus;<i>x</i> + 5 (&le;), atas <i>y</i> = 2<i>x</i> &minus; 1 (&ge;), dan kanan paksi-<i>y</i> (<i>x</i> &ge; 0)."
  },
  {
    num: 22,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Antara titik koordinat berikut, yang manakah memuaskan ketiga-tiga ketaksamaan: 2<i>y</i> + <i>x</i> &le; 8, &nbsp; <i>y</i> > <i>x</i> &minus; 2, &nbsp; dan &nbsp; <i>x</i> &ge; 1?`,
    en: `Which point satisfies all three inequalities: 2<i>y</i> + <i>x</i> &le; 8, <i>y</i> > <i>x</i> &minus; 2, and <i>x</i> &ge; 1?`,
    diagram: "",
    options: [
      { key: "A", text: "(1, 3)" },
      { key: "B", text: "(2, 4)" },
      { key: "C", text: "(3, 0)" },
      { key: "D", text: "(0, 2)" }
    ],
    answer: "A",
    solution: "Titik (1, 3): 2(3) + 1 = 7 &le; 8 (Benar); 3 > &minus;1 (Benar); 1 &ge; 1 (Benar)."
  },
  {
    num: 23,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Puan Salmah menjual <i>x</i> bungkus nasi lemak dan <i>y</i> bungkus mee goreng. Jumlah bungkusan adalah selebih-lebihnya 120. Bilangan nasi lemak sekurang-kurangnya dua kali mee goreng. Tulis dua ketaksamaan linear yang mewakili situasi itu.`,
    en: `Puan Salmah sells <i>x</i> packets nasi lemak and <i>y</i> packets mee goreng. Total is at most 120. Nasi lemak is at least twice mee goreng. Write two inequalities.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> + <i>y</i> &le; 120 &nbsp; dan / <i>and</i> &nbsp; <i>x</i> &ge; 2<i>y</i>" },
      { key: "B", text: "<i>x</i> + <i>y</i> < 120 &nbsp; dan / <i>and</i> &nbsp; <i>x</i> &le; 2<i>y</i>" },
      { key: "C", text: "<i>x</i> + <i>y</i> &ge; 120 &nbsp; dan / <i>and</i> &nbsp; <i>y</i> &ge; 2<i>x</i>" },
      { key: "D", text: "<i>x</i> + <i>y</i> &le; 120 &nbsp; dan / <i>and</i> &nbsp; <i>y</i> &ge; 2<i>x</i>" }
    ],
    answer: "A",
    solution: "Selebih-lebihnya: &le; 120. Sekurang-kurangnya dua kali: <i>x</i> &ge; 2<i>y</i>."
  },
  {
    num: 24,
    chapter: "Bab 6: Ketaksamaan Linear",
    bm: `Rantau berlorek dalam graf ketaksamaan mempunyai bucu (0, 0), (5, 0), (4, 3), dan (0, 5). Cari nilai maksimum bagi fungsi <i>K</i> = 4<i>x</i> + 3<i>y</i>.`,
    en: `A shaded region has vertices at (0, 0), (5, 0), (4, 3), and (0, 5). Find the maximum value of <i>K</i> = 4<i>x</i> + 3<i>y</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "22" },
      { key: "C", text: "25" },
      { key: "D", text: "28" }
    ],
    answer: "C",
    solution: "Pada (4, 3): <i>K</i> = 4(4) + 3(3) = 16 + 9 = 25 (Nilai maksimum)."
  },
  {
    num: 25,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 6 menunjukkan graf jarak-masa bagi perjalanan sebuah motosikal dari Bandar A ke Bandar B. Hitung laju, dalam km/j, motosikal itu bagi 40 minit yang pertama.`,
    en: `Diagram 6 shows the distance-time graph of a motorcycle. Calculate the speed, in km/h, for the first 40 minutes.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateDistTimeSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 6 / <i>Diagram 6</i></span></div>`,
    options: [
      { key: "A", text: "45 km/j / <i>km/h</i>" },
      { key: "B", text: "54 km/j / <i>km/h</i>" },
      { key: "C", text: "60 km/j / <i>km/h</i>" },
      { key: "D", text: "72 km/j / <i>km/h</i>" }
    ],
    answer: "B",
    solution: "Laju = 36 km &divide; (40/60 j) = 36 &times; (3/2) = 54 km/j."
  },
  {
    num: 26,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 7 menunjukkan graf jarak-masa bagi sebuah lori dalam tempoh <i>t</i> jam. Diberi laju purata bagi keseluruhan perjalanan ialah 64 km/j, cari nilai <i>t</i>.`,
    en: `Diagram 7 shows the distance-time graph of a lorry for <i>t</i> hours. Given average speed for the whole journey is 64 km/h, find <i>t</i>.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateDistTimeLorrySvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 7 / <i>Diagram 7</i></span></div>`,
    options: [
      { key: "A", text: "2.0" },
      { key: "B", text: "2.2" },
      { key: "C", text: "2.5" },
      { key: "D", text: "3.0" }
    ],
    answer: "C",
    solution: "Laju purata = 160 / <i>t</i> = 64 &rArr; <i>t</i> = 160 / 64 = 2.5 jam."
  },
  {
    num: 27,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 8 menunjukkan graf laju-masa bagi suatu zarah. Hitung kadar perubahan laju, dalam m s<sup>&minus;2</sup>, zarah itu dalam 6 saat terakhir.`,
    en: `Diagram 8 shows the speed-time graph of a particle. Calculate the rate of change of speed, in m s<sup>&minus;2</sup>, in the last 6 seconds.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateSpeedTimeParticleSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 8 / <i>Diagram 8</i></span></div>`,
    options: [
      { key: "A", text: "&minus;3" },
      { key: "B", text: "&minus;2" },
      { key: "C", text: "3" },
      { key: "D", text: "6" }
    ],
    answer: "A",
    solution: "Kadar perubahan laju = (0 &minus; 18) / 6 = &minus;3 m s<sup>&minus;2</sup>."
  },
  {
    num: 28,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 9 menunjukkan graf laju-masa bagi sebuah kereta dalam 25 saat. Hitung jumlah jarak, dalam meter, yang dilalui kereta itu.`,
    en: `Diagram 9 shows the speed-time graph of a car for 25 seconds. Calculate the total distance, in metres, travelled.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateSpeedTimeTrapezoidSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 9 / <i>Diagram 9</i></span></div>`,
    options: [
      { key: "A", text: "250" },
      { key: "B", text: "350" },
      { key: "C", text: "400" },
      { key: "D", text: "500" }
    ],
    answer: "C",
    solution: "Luas bawah graf = <sup>1</sup>/<sub>2</sub> &times; [(25 &minus; 10) + 25] &times; 20 = 400 meter."
  },
  {
    num: 29,
    chapter: "Bab 8: Sukatan Serakan Data",
    bm: `Cari julat antara kuartil bagi data: 3, 5, 6, 8, 10, 12, 15, 17, 19, 21, 24.`,
    en: `Find the interquartile range for data: 3, 5, 6, 8, 10, 12, 15, 17, 19, 21, 24.`,
    diagram: "",
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "13" },
      { key: "C", text: "15" },
      { key: "D", text: "21" }
    ],
    answer: "B",
    solution: "Median = 12. <i>Q</i><sub>1</sub> = 6, <i>Q</i><sub>3</sub> = 19. Julat antara kuartil = 19 &minus; 6 = 13."
  },
  {
    num: 30,
    chapter: "Bab 8: Sukatan Serakan Data",
    bm: `Diberi 10 nombor dengan &sum; <i>x</i> = 140 dan &sum; <i>x</i><sup>2</sup> = 2320. Hitung sisihan piawai bagi set nombor itu.`,
    en: `Given 10 numbers with &sum; <i>x</i> = 140 and &sum; <i>x</i><sup>2</sup> = 2320. Calculate the standard deviation.`,
    diagram: "",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6" },
      { key: "C", text: "16" },
      { key: "D", text: "36" }
    ],
    answer: "B",
    solution: "x̄ = 14. Varians &sigma;<sup>2</sup> = (2320/10) &minus; 14<sup>2</sup> = 36 &rArr; Sisihan piawai = &radic;36 = 6."
  },
  {
    num: 31,
    chapter: "Bab 8: Sukatan Serakan Data",
    bm: `Min dan sisihan piawai bagi suatu set data masing-masing ialah 18 dan 2.5. Jika setiap nilai didarab dengan 3 dan ditambah dengan 4, cari min dan sisihan piawai yang baharu.`,
    en: `The mean and standard deviation are 18 and 2.5. If each value is multiplied by 3 and added by 4, find the new mean and standard deviation.`,
    diagram: "",
    options: [
      { key: "A", text: "Min = 58, &nbsp; Sisihan piawai = 7.5" },
      { key: "B", text: "Min = 58, &nbsp; Sisihan piawai = 11.5" },
      { key: "C", text: "Min = 54, &nbsp; Sisihan piawai = 7.5" },
      { key: "D", text: "Min = 54, &nbsp; Sisihan piawai = 2.5" }
    ],
    answer: "A",
    solution: "Min baharu = 18 &times; 3 + 4 = 58. Sisihan piawai baharu = 2.5 &times; 3 = 7.5."
  },
  {
    num: 32,
    chapter: "Bab 8: Sukatan Serakan Data",
    bm: `Rajah 10 menunjukkan suatu plot kotak bagi markah ujian.<br>Tentukan julat dan julat antara kuartil bagi data itu.`,
    en: `Diagram 10 shows a box plot for test marks.<br>Determine the range and interquartile range.`,
    diagram: `<div style="text-align:center; margin:4px 0;">${generateBoxPlotSvg()}<br><span style="font-weight:bold; font-size:10.5px;">Rajah 10 / <i>Diagram 10</i></span></div>`,
    options: [
      { key: "A", text: "Julat = 75, &nbsp; Julat antara kuartil = 30" },
      { key: "B", text: "Julat = 75, &nbsp; Julat antara kuartil = 15" },
      { key: "C", text: "Julat = 55, &nbsp; Julat antara kuartil = 30" },
      { key: "D", text: "Julat = 95, &nbsp; Julat antara kuartil = 45" }
    ],
    answer: "A",
    solution: "Julat = 95 &minus; 20 = 75. Julat antara kuartil = 75 &minus; 45 = 30."
  },
  {
    num: 33,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sekeping syiling adil dan sebiji dadu adil dilambung serentak. Cari kebarangkalian mendapat angka (<i>head</i>) pada syiling dan nombor perdana pada dadu.`,
    en: `A fair coin and a fair die are tossed. Find the probability of getting a head on the coin and a prime number on the die.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>1</sup>/<sub>6</sub>" },
      { key: "B", text: "<sup>1</sup>/<sub>4</sub>" },
      { key: "C", text: "<sup>1</sup>/<sub>3</sub>" },
      { key: "D", text: "<sup>1</sup>/<sub>2</sub>" }
    ],
    answer: "B",
    solution: "<i>P</i>(Angka &cap; Perdana) = 1/2 &times; 3/6 = 1/2 &times; 1/2 = 1/4."
  },
  {
    num: 34,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sebuah kotak mengandungi 6 guli merah dan 4 guli biru. Dua guli dipilih secara rawak <b>tanpa pengembalian</b>. Cari kebarangkalian kedua-duanya berwarna merah.`,
    en: `A box contains 6 red and 4 blue marbles. Two marbles are chosen <b>without replacement</b>. Find the probability that both are red.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>9</sup>/<sub>25</sub>" },
      { key: "B", text: "<sup>1</sup>/<sub>3</sub>" },
      { key: "C", text: "<sup>2</sup>/<sub>5</sub>" },
      { key: "D", text: "<sup>5</sup>/<sub>18</sub>" }
    ],
    answer: "B",
    solution: "<i>P</i>(Kedua-dua merah) = (6/10) &times; (5/9) = 30/90 = 1/3."
  },
  {
    num: 35,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Sekeping kad dipilih secara rawak dari kad 1 hingga 25. Peristiwa <i>A</i> = gandaan 5, peristiwa <i>B</i> = nombor kuasa dua sempurna. Hitung <i>P</i>(<i>A</i> &cup; <i>B</i>).`,
    en: `A card is drawn from cards 1 to 25. Event <i>A</i> = multiple of 5, event <i>B</i> = perfect square. Calculate <i>P</i>(<i>A</i> &cup; <i>B</i>).`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>8</sup>/<sub>25</sub>" },
      { key: "B", text: "<sup>9</sup>/<sub>25</sub>" },
      { key: "C", text: "<sup>2</sup>/<sub>5</sub>" },
      { key: "D", text: "<sup>11</sup>/<sub>25</sub>" }
    ],
    answer: "B",
    solution: "<i>n</i>(<i>A</i>) = 5, <i>n</i>(<i>B</i>) = 5, <i>A</i> &cap; <i>B</i> = {25}. <i>n</i>(<i>A</i> &cup; <i>B</i>) = 5 + 5 &minus; 1 = 9 &rArr; 9/25."
  },
  {
    num: 36,
    chapter: "Bab 9: Kebarangkalian",
    bm: `Kebarangkalian Farhan lulus Matematik ialah <sup>3</sup>/<sub>4</sub> dan lulus Sains ialah <sup>4</sup>/<sub>5</sub>. Diberi peristiwa tak bersandar, cari kebarangkalian dia lulus <b>sekurang-kurangnya satu</b> ujian.`,
    en: `Probability Farhan passes Math is 3/4 and Science is 4/5. Find the probability he passes <b>at least one</b> test.`,
    diagram: "",
    options: [
      { key: "A", text: "<sup>3</sup>/<sub>5</sub>" },
      { key: "B", text: "<sup>17</sup>/<sub>20</sub>" },
      { key: "C", text: "<sup>19</sup>/<sub>20</sub>" },
      { key: "D", text: "<sup>1</sup>/<sub>20</sub>" }
    ],
    answer: "C",
    solution: "1 &minus; <i>P</i>(Gagal kedua-duanya) = 1 &minus; (1/4 &times; 1/5) = 1 &minus; 1/20 = 19/20."
  },
  {
    num: 37,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Encik Hisham menetapkan matlamat kewangan: &ldquo;Menyimpan RM 7,200 dalam tempoh 12 bulan untuk wang pendahuluan kereta dengan menyimpan RM 600 setiap bulan.&rdquo; Antara komponen konsep <b>SMART</b>, yang manakah diwakili oleh &ldquo;dalam tempoh 12 bulan&rdquo;?`,
    en: `Encik Hisham sets a goal: "Save RM 7,200 within 12 months for car down payment by saving RM 600 monthly." Which <b>SMART</b> component is "within 12 months"?`,
    diagram: "",
    options: [
      { key: "A", text: "S &ndash; Khusus / <i>Specific</i>" },
      { key: "B", text: "M &ndash; Boleh diukur / <i>Measurable</i>" },
      { key: "C", text: "A &ndash; Boleh dicapai / <i>Attainable</i>" },
      { key: "D", text: "T &ndash; Berikat masa / <i>Time-bound</i>" }
    ],
    answer: "D",
    solution: "'Dalam tempoh 12 bulan' ialah jangka masa matlamat, iaitu T (<i>Time-bound</i> / Berikat masa)."
  },
  {
    num: 38,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Jadual 1 menunjukkan pendapatan dan perbelanjaan bulanan Cik Nadia.
         <div style="margin:3px auto; max-width:360px;">
           <table style="width:100%; border-collapse:collapse; font-size:10px; text-align:left; border:1px solid #334155;">
             <tr style="background:#f1f5f9;"><th style="border:1px solid #334155; padding:2px 5px;">Perkara / <i>Item</i></th><th style="border:1px solid #334155; padding:2px 5px;">Jumlah (RM)</th></tr>
             <tr><td style="border:1px solid #334155; padding:2px 5px;">Pendapatan aktif</td><td style="border:1px solid #334155; padding:2px 5px;">3,800</td></tr>
             <tr><td style="border:1px solid #334155; padding:2px 5px;">Pendapatan pasif</td><td style="border:1px solid #334155; padding:2px 5px;">500</td></tr>
             <tr><td style="border:1px solid #334155; padding:2px 5px;">Simpanan tetap (10%)</td><td style="border:1px solid #334155; padding:2px 5px;">430</td></tr>
             <tr><td style="border:1px solid #334155; padding:2px 5px;">Perbelanjaan tetap</td><td style="border:1px solid #334155; padding:2px 5px;">1,600</td></tr>
             <tr><td style="border:1px solid #334155; padding:2px 5px;">Perbelanjaan tidak tetap</td><td style="border:1px solid #334155; padding:2px 5px;">1,400</td></tr>
           </table>
           <div style="text-align:center; font-weight:bold; font-size:9.5px; margin-top:1px;">Jadual 1 / <i>Table 1</i></div>
         </div>
         Hitung aliran tunai bulanan Cik Nadia dan nyatakan statusnya.`,
    en: `Table 1 shows monthly finances of Cik Nadia. Calculate monthly cash flow and state its status.`,
    diagram: "",
    options: [
      { key: "A", text: "Defisit RM 440" },
      { key: "B", text: "Lebihan RM 440" },
      { key: "C", text: "Lebihan RM 870" },
      { key: "D", text: "Lebihan RM 1,300" }
    ],
    answer: "C",
    solution: "Pendapatan = RM 4,300. Aliran keluar = RM 3,430. Aliran tunai = +RM 870 (Lebihan / <i>Surplus</i>)."
  },
  {
    num: 39,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Pakar kewangan mengesyorkan simpanan dana kecemasan sekurang-kurangnya 3 hingga 6 bulan perbelanjaan bulanan. Diberi perbelanjaan bulanan Encik Daniel ialah RM 3,200, hitung jumlah <b>minimum</b> dana kecemasan yang diperlukannya.`,
    en: `Emergency fund recommended is 3 to 6 months of expenses. Given Encik Daniel's monthly expenses are RM 3,200, calculate the <b>minimum</b> emergency fund.`,
    diagram: "",
    options: [
      { key: "A", text: "RM 6,400" },
      { key: "B", text: "RM 9,600" },
      { key: "C", text: "RM 12,800" },
      { key: "D", text: "RM 19,200" }
    ],
    answer: "B",
    solution: "Minimum dana kecemasan = 3 &times; RM 3,200 = RM 9,600."
  },
  {
    num: 40,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Azman ingin membeli sebuah komputer riba berharga RM 3,000 dalam tempoh 5 bulan. Aliran tunai lebihan bulanannya pada masa ini ialah RM 450. Berapakah simpanan tambahan setiap bulan yang perlu dijana oleh Azman untuk mencapai matlamatnya?`,
    en: `Azman wants to buy a RM 3,000 laptop in 5 months. His current monthly surplus is RM 450. How much additional monthly savings does he need to achieve his goal?`,
    diagram: "",
    options: [
      { key: "A", text: "RM 100" },
      { key: "B", text: "RM 150" },
      { key: "C", text: "RM 200" },
      { key: "D", text: "RM 250" }
    ],
    answer: "B",
    solution: "Simpanan sebulan diperlukan = RM 3,000 / 5 = RM 600. Simpanan tambahan = RM 600 &minus; RM 450 = RM 150 sebulan."
  }
];

const examPages = [
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

function generateHtml() {
  let html = `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>Kertas 1 Matematik Tingkatan 4 (1449/1)</title>
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

  /* Running header & footer */
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

  /* Cover page styling */
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

  /* Formula page */
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

  /* Question styling */
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

  /* OMR Sheet styling */
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

  /* Answer scheme 2-column layout */
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
          <span style="font-size:12pt; font-weight:bold;">1449/1</span>
        </div>

        <div class="exam-title-box">
          <div style="font-size: 10.5pt; font-weight: bold; letter-spacing: 1px; margin-bottom: 2px;">PEPERIKSAAN AKHIR TAHUN TINGKATAN 4</div>
          <div style="font-size: 9.5pt; font-style: italic; color:#475569; margin-bottom: 8px;">FORM 4 FINAL YEAR EXAMINATION</div>
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
        <span>1449/1 &copy; Hak Cipta Peperiksaan Tingkatan 4</span>
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
        <span>1449/1</span>
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
        <div class="formula-item"><span class="formula-num">12</span> <span>Paksi simetri / <i>Axis of symmetry</i>, <i>x</i> = &minus; <sup><i>b</i></sup>/<sub>2<i>a</i></sub></span></div>
      </div>

      <div class="formula-section-title">SUKATAN DAN GEOMETRI / <i>MEASUREMENT AND GEOMETRY</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">13</span> <span>Luas segi tiga / <i>Area of triangle</i> = <sup>1</sup>/<sub>2</sub> &times; tapak &times; tinggi</span></div>
        <div class="formula-item"><span class="formula-num">14</span> <span>Luas segi empat selari / <i>Area of parallelogram</i> = tapak &times; tinggi</span></div>
        <div class="formula-item"><span class="formula-num">15</span> <span>Luas trapezium / <i>Area of trapezium</i> = <sup>1</sup>/<sub>2</sub> &times; (hasil tambah sisi selari) &times; tinggi</span></div>
        <div class="formula-item"><span class="formula-num">16</span> <span>Lilitan bulatan / <i>Circumference</i> = &pi;<i>d</i> = 2&pi;<i>j</i></span></div>
        <div class="formula-item"><span class="formula-num">17</span> <span>Luas bulatan / <i>Area of circle</i> = &pi;<i>j</i><sup>2</sup></span></div>
        <div class="formula-item"><span class="formula-num">18</span> <span>Panjang lengkok / <i>Arc length</i> = <sup>&theta;</sup>/<sub>360&deg;</sub> &times; 2&pi;<i>j</i></span></div>
        <div class="formula-item"><span class="formula-num">19</span> <span>Luas sektor / <i>Area of sector</i> = <sup>&theta;</sup>/<sub>360&deg;</sub> &times; &pi;<i>j</i><sup>2</sup></span></div>
        <div class="formula-item"><span class="formula-num">20</span> <span>Luas permukaan melengkung silinder = 2&pi;<i>jt</i></span></div>
      </div>

      <div class="formula-section-title">TEORI GRAF / <i>GRAPH THEORY</i></div>
      <div class="formula-grid">
        <div class="formula-item"><span class="formula-num">21</span> <span>Bilangan darjah / <i>Sum of degrees</i>: &sum; <i>d</i>(<i>v</i>) = 2<i>E</i></span></div>
        <div class="formula-item"><span class="formula-num">22</span> <span>Pokok / <i>Tree</i>: Bilangan tepi / <i>Edges</i>, <i>E</i> = <i>V</i> &minus; 1</span></div>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1</span>
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
        <span>1449/1</span>
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
      <span>1449/1</span>
      <span>3</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // QUESTION PAGES (Pages 4 to 15)
  examPages.forEach(p => {
    html += `
    <div class="page-container page-break">
      <div>
        <div class="running-header">
          <span>1449/1</span>
          <span>PEPERIKSAAN AKHIR TAHUN TINGKATAN 4</span>
          <span>SULIT</span>
        </div>
    `;

    p.questions.forEach(qNum => {
      const q = questions.find(item => item.num === qNum);
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
        <span>1449/1 &copy; Hak Cipta</span>
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
        <span>1449/1</span>
        <span>BORANG JAWAPAN OMR / <i>OMR ANSWER SHEET</i></span>
        <span>SULIT</span>
      </div>

      <div style="border: 2px solid #000; padding: 8px 12px; margin-bottom: 6px; background: #fafafa;">
        <div style="text-align: center; margin-bottom: 4px;">
          <h3 style="margin: 0; font-size: 11.5pt;">LEMBAGA PEPERIKSAAN SEKOLAH MENENGAH</h3>
          <h4 style="margin: 2px 0; font-size: 10pt;">LEMBARAN JAWAPAN OBJEKTIF (OMR) - MATEMATIK KERTAS 1 (1449/1)</h4>
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

      <div style="margin-top: 18px; border: 1.5px solid #000; padding: 8px; display:flex; justify-content:space-around; align-items:center;">
        <div style="text-align:center;">
          <div style="font-size:9pt; font-weight:bold;">JUMLAH MARKAH</div>
          <div style="font-size:20pt; font-weight:bold; height:38px; width:90px; border:1.5px solid #000; margin:3px auto; display:flex; align-items:center; justify-content:center;">/ 40</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9pt; font-weight:bold;">TANDATANGAN PEMERIKSA</div>
          <div style="height:36px; width:180px; border-bottom:1.5px dashed #000; margin:3px auto;"></div>
          <div style="font-size:8pt; color:#666;">( Tarikh: ....................................... )</div>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1</span>
      <span>16</span>
      <span>SULIT</span>
    </div>
  </div>
  `;

  // PAGE 17: SKEMA JAWAPAN & PENYELESAIAN (Q1 - 20) in 2-column layout
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>1449/1 [SKEMA]</span>
        <span>SKEMA JAWAPAN & JALAN KERJA LENGKAP (SOALAN 1 &ndash; 20)</span>
        <span>UNTUK GURU & CALON</span>
      </div>

      <div style="text-align:center; margin-bottom:8px;">
        <h3 style="margin:0; text-transform:uppercase; font-size:11pt; color:#1e3a8a;">SKEMA JAWAPAN & PENYELESAIAN LENGKAP</h3>
        <p style="margin:1px 0; font-size:8pt; font-style:italic; color:#475569;">Form 4 Mathematics Paper 1 (1449/1) &ndash; Answer Key & Solutions (Q1 &ndash; Q20)</p>
      </div>

      <div class="solutions-columns">
        <div>
          <table class="answers-table">
            <thead>
              <tr>
                <th style="width:10%; text-align:center;">No.</th>
                <th style="width:14%; text-align:center;">Jaw.</th>
                <th>Penyelesaian / <i>Working Steps</i></th>
              </tr>
            </thead>
            <tbody>
  `;

  for (let i = 0; i < 10; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="text-align:center; font-weight:bold;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
            </tbody>
          </table>
        </div>
        <div>
          <table class="answers-table">
            <thead>
              <tr>
                <th style="width:10%; text-align:center;">No.</th>
                <th style="width:14%; text-align:center;">Jaw.</th>
                <th>Penyelesaian / <i>Working Steps</i></th>
              </tr>
            </thead>
            <tbody>
  `;

  for (let i = 10; i < 20; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="text-align:center; font-weight:bold;">${q.num}</td>
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
    </div>

    <div class="running-footer">
      <span>1449/1 [SKEMA]</span>
      <span>17</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // PAGE 18: SKEMA JAWAPAN (Q21 - 40) + Quick Answer Key
  html += `
  <div class="page-container">
    <div>
      <div class="running-header">
        <span>1449/1 [SKEMA]</span>
        <span>SKEMA JAWAPAN & JALAN KERJA LENGKAP (SOALAN 21 &ndash; 40)</span>
        <span>UNTUK GURU & CALON</span>
      </div>

      <div class="solutions-columns">
        <div>
          <table class="answers-table">
            <thead>
              <tr>
                <th style="width:10%; text-align:center;">No.</th>
                <th style="width:14%; text-align:center;">Jaw.</th>
                <th>Penyelesaian / <i>Working Steps</i></th>
              </tr>
            </thead>
            <tbody>
  `;

  for (let i = 20; i < 30; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="text-align:center; font-weight:bold;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td><b>${q.chapter}</b><br>${q.solution}</td>
      </tr>
    `;
  }

  html += `
            </tbody>
          </table>
        </div>
        <div>
          <table class="answers-table">
            <thead>
              <tr>
                <th style="width:10%; text-align:center;">No.</th>
                <th style="width:14%; text-align:center;">Jaw.</th>
                <th>Penyelesaian / <i>Working Steps</i></th>
              </tr>
            </thead>
            <tbody>
  `;

  for (let i = 30; i < 40; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="text-align:center; font-weight:bold;">${q.num}</td>
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

      <div style="margin-top:10px; padding:6px 10px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:4px; font-size:8pt;">
        <b>RINGKASAN KUNCI JAWAPAN (QUICK ANSWER KEY):</b><br>
        <div style="display:grid; grid-template-columns: repeat(8, 1fr); gap: 2.5px; margin-top:4px; font-family: monospace; font-size:8.5pt; text-align:center;">
  `;

  for (let i = 0; i < 40; i++) {
    html += `<span style="background:#fff; padding:1.5px 2px; border:1px solid #cbd5e1; border-radius:2px;"><b>${questions[i].num}:</b> ${questions[i].answer}</span>`;
  }

  html += `
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span>1449/1 [SKEMA]</span>
      <span>18</span>
      <span>TAMAT / <i>END</i></span>
    </div>
  </div>
</body>
</html>
  `;

  return html;
}

try {
  console.log("Generating HTML file...");
  const htmlContent = generateHtml();
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`HTML generated at: ${htmlPath}`);

  console.log("Rendering PDF via Microsoft Edge headless...");
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const htmlUrl = "file:///" + htmlPath.replace(/\\/g, '/');

  const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlUrl}"`;
  execSync(cmd, { stdio: 'inherit' });

  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`PDF created successfully! Size: ${stats.size} bytes at: ${pdfPath}`);
  }
} catch (e) {
  console.error("Build failed:", e);
  process.exit(1);
}
