const fs = require('fs');
const path = require('path');

// SVGs definitions for web
function generateParabolaSvg() {
  return `
  <svg width="280" height="170" viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="25" y1="130" x2="255" y2="130" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow)"/>
    <text x="260" y="134" font-size="12" font-weight="bold">x</text>
    <line x1="60" y1="155" x2="60" y2="20" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow)"/>
    <text x="52" y="15" font-size="12" font-weight="bold">f(x)</text>
    <text x="48" y="142" font-size="11">O</text>
    <path d="M 75 142 Q 142 -10 209 142" fill="none" stroke="#2563eb" stroke-width="2.2"/>
    <line x1="142" y1="130" x2="142" y2="55" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="60" y1="55" x2="142" y2="55" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="142" cy="55" r="3.5" fill="#1e293b"/>
    <text x="147" y="50" font-size="11" font-weight="bold">(3, 4)</text>
    <text x="82" y="144" font-size="11">1</text>
    <text x="195" y="144" font-size="11">5</text>
    <text x="48" y="59" font-size="11">4</text>
    <text x="136" y="144" font-size="11">3</text>
    <text x="156" y="96" font-size="11" font-style="italic" fill="#1d4ed8">f(x) = &minus;x² + 6x &minus; 5</text>
  </svg>`;
}

function generateVennSvg() {
  return `
  <svg width="260" height="160" viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <clipPath id="circleP"><circle cx="100" cy="68" r="46"/></clipPath>
    </defs>
    <rect x="8" y="8" width="244" height="144" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="4"/>
    <text x="18" y="26" font-size="13" font-weight="bold">&xi;</text>
    <g clip-path="url(#circleP)">
      <circle cx="156" cy="68" r="46" fill="#93c5fd" />
    </g>
    <circle cx="128" cy="108" r="40" fill="#f8fafc" stroke="none"/>
    <circle cx="100" cy="68" r="46" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="156" cy="68" r="46" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="128" cy="108" r="40" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <text x="72" y="44" font-size="13" font-weight="bold">P</text>
    <text x="176" y="44" font-size="13" font-weight="bold">Q</text>
    <text x="124" y="144" font-size="13" font-weight="bold">R</text>
  </svg>`;
}

function generateTreeComparisonSvg() {
  return `
  <div class="tree-grid">
    <div class="tree-box">
      <svg width="100" height="90" viewBox="0 0 100 90">
        <text x="6" y="15" font-weight="bold">A</text>
        <line x1="22" y1="65" x2="50" y2="24" stroke="#334155" stroke-width="1.6"/>
        <line x1="50" y1="24" x2="76" y2="65" stroke="#334155" stroke-width="1.6"/>
        <line x1="76" y1="65" x2="22" y2="65" stroke="#334155" stroke-width="1.6"/>
        <line x1="76" y1="65" x2="92" y2="42" stroke="#334155" stroke-width="1.6"/>
        <circle cx="22" cy="65" r="4" fill="#1e293b"/>
        <circle cx="50" cy="24" r="4" fill="#1e293b"/>
        <circle cx="76" cy="65" r="4" fill="#1e293b"/>
        <circle cx="92" cy="42" r="4" fill="#1e293b"/>
      </svg>
    </div>
    <div class="tree-box">
      <svg width="100" height="90" viewBox="0 0 100 90">
        <text x="6" y="15" font-weight="bold">B</text>
        <line x1="18" y1="32" x2="44" y2="32" stroke="#334155" stroke-width="1.6"/>
        <line x1="66" y1="32" x2="88" y2="64" stroke="#334155" stroke-width="1.6"/>
        <circle cx="18" cy="32" r="4" fill="#1e293b"/>
        <circle cx="44" cy="32" r="4" fill="#1e293b"/>
        <circle cx="66" cy="32" r="4" fill="#1e293b"/>
        <circle cx="88" cy="64" r="4" fill="#1e293b"/>
      </svg>
    </div>
    <div class="tree-box">
      <svg width="100" height="90" viewBox="0 0 100 90">
        <text x="6" y="15" font-weight="bold">C</text>
        <line x1="50" y1="18" x2="25" y2="48" stroke="#334155" stroke-width="1.8"/>
        <line x1="50" y1="18" x2="75" y2="48" stroke="#334155" stroke-width="1.8"/>
        <line x1="25" y1="48" x2="16" y2="76" stroke="#334155" stroke-width="1.8"/>
        <line x1="25" y1="48" x2="40" y2="76" stroke="#334155" stroke-width="1.8"/>
        <circle cx="50" cy="18" r="4" fill="#1e293b"/>
        <circle cx="25" cy="48" r="4" fill="#1e293b"/>
        <circle cx="75" cy="48" r="4" fill="#1e293b"/>
        <circle cx="16" cy="76" r="4" fill="#1e293b"/>
        <circle cx="40" cy="76" r="4" fill="#1e293b"/>
      </svg>
    </div>
    <div class="tree-box">
      <svg width="100" height="90" viewBox="0 0 100 90">
        <text x="6" y="15" font-weight="bold">D</text>
        <polygon points="24,24 74,24 74,66 24,66" fill="none" stroke="#334155" stroke-width="1.6"/>
        <circle cx="24" cy="24" r="4" fill="#1e293b"/>
        <circle cx="74" cy="24" r="4" fill="#1e293b"/>
        <circle cx="74" cy="66" r="4" fill="#1e293b"/>
        <circle cx="24" cy="66" r="4" fill="#1e293b"/>
      </svg>
    </div>
  </div>`;
}

function generateWeightedNetworkSvg() {
  return `
  <svg width="300" height="155" viewBox="0 0 300 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="32" y1="80" x2="112" y2="34" stroke="#334155" stroke-width="1.6"/>
    <line x1="32" y1="80" x2="130" y2="122" stroke="#334155" stroke-width="1.6"/>
    <line x1="112" y1="34" x2="130" y2="122" stroke="#334155" stroke-width="1.6"/>
    <line x1="112" y1="34" x2="202" y2="38" stroke="#334155" stroke-width="1.6"/>
    <line x1="130" y1="122" x2="202" y2="38" stroke="#334155" stroke-width="1.6"/>
    <line x1="130" y1="122" x2="265" y2="80" stroke="#334155" stroke-width="1.6"/>
    <line x1="202" y1="38" x2="265" y2="80" stroke="#334155" stroke-width="1.6"/>

    <text x="66" y="50" font-size="11" font-weight="bold" fill="#b91c1c">10</text>
    <text x="68" y="108" font-size="11" font-weight="bold" fill="#b91c1c">14</text>
    <text x="127" y="78" font-size="11" font-weight="bold" fill="#b91c1c">3</text>
    <text x="154" y="30" font-size="11" font-weight="bold" fill="#b91c1c">11</text>
    <text x="171" y="90" font-size="11" font-weight="bold" fill="#b91c1c">6</text>
    <text x="195" y="118" font-size="11" font-weight="bold" fill="#b91c1c">12</text>
    <text x="238" y="54" font-size="11" font-weight="bold" fill="#b91c1c">8</text>

    <circle cx="32" cy="80" r="13" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
    <text x="28" y="85" font-size="12" font-weight="bold">P</text>
    <circle cx="112" cy="34" r="13" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
    <text x="107" y="39" font-size="12" font-weight="bold">Q</text>
    <circle cx="130" cy="122" r="13" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
    <text x="125" y="127" font-size="12" font-weight="bold">R</text>
    <circle cx="202" cy="38" r="13" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
    <text x="198" y="43" font-size="12" font-weight="bold">S</text>
    <circle cx="265" cy="80" r="13" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
    <text x="261" y="85" font-size="12" font-weight="bold">T</text>
  </svg>`;
}

function generateDirectedGraphSvg() {
  return `
  <svg width="260" height="155" viewBox="0 0 260 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="34" y1="34" x2="130" y2="78" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>
    <line x1="34" y1="122" x2="130" y2="78" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>
    <line x1="130" y1="78" x2="226" y2="40" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>
    <line x1="130" y1="78" x2="226" y2="114" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>
    <path d="M 124 86 Q 78 120 40 126" fill="none" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>
    <line x1="226" y1="114" x2="226" y2="40" stroke="#334155" stroke-width="1.6" marker-end="url(#arr)"/>

    <circle cx="34" cy="34" r="13" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <text x="29" y="39" font-size="12" font-weight="bold">A</text>
    <circle cx="130" cy="78" r="14" fill="#fed7aa" stroke="#c2410c" stroke-width="2.2"/>
    <text x="125" y="83" font-size="13" font-weight="bold">B</text>
    <circle cx="34" cy="122" r="13" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <text x="29" y="127" font-size="12" font-weight="bold">C</text>
    <circle cx="226" cy="40" r="13" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <text x="221" y="45" font-size="12" font-weight="bold">D</text>
    <circle cx="226" cy="114" r="13" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <text x="221" y="119" font-size="12" font-weight="bold">E</text>
  </svg>`;
}

function generateInequalityRegionSvg() {
  return `
  <svg width="260" height="180" viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="axisArr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
      <pattern id="hatch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="7" stroke="#3b82f6" stroke-width="1.6" />
      </pattern>
    </defs>
    <line x1="22" y1="142" x2="238" y2="142" stroke="#0f172a" stroke-width="1.5" marker-end="url(#axisArr)"/>
    <text x="243" y="146" font-size="12" font-weight="bold">x</text>
    <line x1="44" y1="168" x2="44" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#axisArr)"/>
    <text x="37" y="14" font-size="12" font-weight="bold">y</text>
    <text x="33" y="154" font-size="11">O</text>

    <polygon points="44,44 104,83 60,142 44,142" fill="url(#hatch)" stroke="#2563eb" stroke-width="1" fill-opacity="0.6"/>
    <line x1="27" y1="32" x2="204" y2="148" stroke="#0f172a" stroke-width="1.8"/>
    <text x="146" y="62" font-size="11" font-style="italic">y = &minus;x + 5</text>
    <line x1="31" y1="178" x2="138" y2="36" stroke="#0f172a" stroke-width="1.8"/>
    <text x="116" y="36" font-size="11" font-style="italic">y = 2x &minus; 1</text>
    <text x="29" y="47" font-size="10">5</text>
    <text x="189" y="154" font-size="10">5</text>
    <text x="100" y="154" font-size="10">2</text>
    <text x="29" y="88" font-size="10">3</text>
    <line x1="104" y1="142" x2="104" y2="83" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="44" y1="83" x2="104" y2="83" stroke="#94a3b8" stroke-dasharray="3 3"/>
  </svg>`;
}

function generateDistTimeSvg() {
  return `
  <svg width="280" height="165" viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="42" y1="132" x2="255" y2="132" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m1)"/>
    <text x="194" y="150" font-size="11">Masa / Time (min)</text>
    <line x1="42" y1="132" x2="42" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m1)"/>
    <text x="6" y="14" font-size="11">Jarak / Distance (km)</text>
    <text x="31" y="144" font-size="11">O</text>

    <line x1="42" y1="132" x2="114" y2="74" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="114" y1="74" x2="156" y2="74" stroke="#1d4ed8" stroke-width="2"/>
    <line x1="156" y1="74" x2="230" y2="28" stroke="#1d4ed8" stroke-width="2"/>

    <line x1="42" y1="74" x2="114" y2="74" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="42" y1="28" x2="230" y2="28" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="114" y1="132" x2="114" y2="74" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="156" y1="132" x2="156" y2="74" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="230" y1="132" x2="230" y2="28" stroke="#94a3b8" stroke-dasharray="3 3"/>

    <text x="24" y="78" font-size="10">36</text>
    <text x="24" y="32" font-size="10">80</text>
    <text x="107" y="145" font-size="10">40</text>
    <text x="149" y="145" font-size="10">60</text>
    <text x="223" y="145" font-size="10">90</text>
  </svg>`;
}

function generateDistTimeLorrySvg() {
  return `
  <svg width="270" height="155" viewBox="0 0 270 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="42" y1="124" x2="245" y2="124" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m2)"/>
    <text x="186" y="142" font-size="11">Masa / Time (j / h)</text>
    <line x1="42" y1="124" x2="42" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m2)"/>
    <text x="8" y="14" font-size="11">Jarak / Distance (km)</text>
    <text x="31" y="136" font-size="11">O</text>

    <line x1="42" y1="124" x2="94" y2="80" stroke="#047857" stroke-width="2"/>
    <line x1="94" y1="80" x2="127" y2="80" stroke="#047857" stroke-width="2"/>
    <line x1="127" y1="80" x2="210" y2="28" stroke="#047857" stroke-width="2"/>

    <line x1="42" y1="80" x2="94" y2="80" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="42" y1="28" x2="210" y2="28" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="94" y1="124" x2="94" y2="80" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="127" y1="124" x2="127" y2="80" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="210" y1="124" x2="210" y2="28" stroke="#94a3b8" stroke-dasharray="3 3"/>

    <text x="20" y="84" font-size="10">60</text>
    <text x="14" y="32" font-size="10">160</text>
    <text x="88" y="138" font-size="10">1.0</text>
    <text x="120" y="138" font-size="10">1.4</text>
    <text x="207" y="138" font-size="11" font-weight="bold" font-style="italic">t</text>
  </svg>`;
}

function generateSpeedTimeParticleSvg() {
  return `
  <svg width="280" height="155" viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="38" y1="124" x2="255" y2="124" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m3)"/>
    <text x="198" y="142" font-size="11">Masa / Time (s)</text>
    <line x1="38" y1="124" x2="38" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m3)"/>
    <text x="6" y="14" font-size="11">Laju / Speed (m s⁻¹)</text>
    <text x="28" y="136" font-size="11">O</text>

    <line x1="38" y1="92" x2="94" y2="34" stroke="#b91c1c" stroke-width="2"/>
    <line x1="94" y1="34" x2="172" y2="34" stroke="#b91c1c" stroke-width="2"/>
    <line x1="172" y1="34" x2="235" y2="124" stroke="#b91c1c" stroke-width="2"/>

    <line x1="38" y1="34" x2="94" y2="34" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="94" y1="124" x2="94" y2="34" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="172" y1="124" x2="172" y2="34" stroke="#94a3b8" stroke-dasharray="3 3"/>

    <text x="22" y="96" font-size="10">8</text>
    <text x="19" y="38" font-size="10">18</text>
    <text x="90" y="138" font-size="10">6</text>
    <text x="166" y="138" font-size="10">14</text>
    <text x="230" y="138" font-size="10">20</text>
  </svg>`;
}

function generateSpeedTimeTrapezoidSvg() {
  return `
  <svg width="280" height="155" viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <defs>
      <marker id="m4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    <line x1="38" y1="124" x2="255" y2="124" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m4)"/>
    <text x="198" y="142" font-size="11">Masa / Time (s)</text>
    <line x1="38" y1="124" x2="38" y2="18" stroke="#0f172a" stroke-width="1.5" marker-end="url(#m4)"/>
    <text x="6" y="14" font-size="11">Laju / Speed (m s⁻¹)</text>
    <text x="28" y="136" font-size="11">O</text>

    <polygon points="38,124 110,38 230,38 230,124" fill="#e0f2fe" stroke="none"/>
    <line x1="38" y1="124" x2="110" y2="38" stroke="#0284c7" stroke-width="2.2"/>
    <line x1="110" y1="38" x2="230" y2="38" stroke="#0284c7" stroke-width="2.2"/>
    <line x1="230" y1="38" x2="230" y2="124" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3"/>

    <line x1="38" y1="38" x2="110" y2="38" stroke="#94a3b8" stroke-dasharray="3 3"/>
    <line x1="110" y1="124" x2="110" y2="38" stroke="#94a3b8" stroke-dasharray="3 3"/>

    <text x="19" y="42" font-size="10">20</text>
    <text x="105" y="138" font-size="10">10</text>
    <text x="225" y="138" font-size="10">25</text>
  </svg>`;
}

function generateBoxPlotSvg() {
  return `
  <svg width="300" height="130" viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="95" x2="275" y2="95" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="25" y1="91" x2="25" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="22" y="112" font-size="10">0</text>
    <line x1="73" y1="91" x2="73" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="68" y="112" font-size="10">20</text>
    <line x1="121" y1="91" x2="121" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="116" y="112" font-size="10">40</text>
    <line x1="169" y1="91" x2="169" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="164" y="112" font-size="10">60</text>
    <line x1="217" y1="91" x2="217" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="212" y="112" font-size="10">80</text>
    <line x1="265" y1="91" x2="265" y2="99" stroke="#0f172a" stroke-width="1.5"/><text x="257" y="112" font-size="10">100</text>

    <line x1="73" y1="46" x2="133" y2="46" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="205" y1="46" x2="253" y2="46" stroke="#0f172a" stroke-width="1.8"/>

    <line x1="73" y1="30" x2="73" y2="62" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="253" y1="30" x2="253" y2="62" stroke="#0f172a" stroke-width="1.8"/>

    <rect x="133" y="20" width="72" height="52" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="169" y1="20" x2="169" y2="72" stroke="#dc2626" stroke-width="2.2"/>

    <text x="67" y="16" font-size="10" font-weight="bold">20</text>
    <text x="127" y="15" font-size="10" font-weight="bold">45</text>
    <text x="164" y="15" font-size="10" font-weight="bold" fill="#dc2626">60</text>
    <text x="199" y="15" font-size="10" font-weight="bold">75</text>
    <text x="247" y="16" font-size="10" font-weight="bold">95</text>
  </svg>`;
}

// 40 questions enriched with pedagogical hints and step-by-step teaching guides
const questions = [
  {
    num: 1,
    chapter: "Bab 1: Fungsi dan Persamaan Kuadratik",
    bm: `Rajah 1 menunjukkan graf fungsi kuadratik <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 5.<br>Nyatakan persamaan paksi simetri dan nilai maksimum bagi fungsi itu.`,
    en: `Diagram 1 shows the graph of a quadratic function <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 5.<br>State the equation of the axis of symmetry and the maximum value of the function.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateParabolaSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 1 / <i>Diagram 1</i></span></div>`,
    options: [
      { key: "A", text: "x = 3, Nilai maksimum / Maximum value = 4" },
      { key: "B", text: "x = 3, Nilai maksimum / Maximum value = 5" },
      { key: "C", text: "x = &minus;3, Nilai maksimum / Maximum value = 4" },
      { key: "D", text: "x = &minus;3, Nilai maksimum / Maximum value = &minus;5" }
    ],
    answer: "A",
    concept: "Bagi fungsi kuadratik f(x) = ax² + bx + c dengan a < 0, graf mempunyai titik maksimum (puncak). Persamaan paksi simetri ialah garisan menegak x = &minus;b / (2a).",
    stepByStep: "1. Kenal pasti pekali: a = &minus;1, b = 6, c = &minus;5.<br>2. Cari paksi simetri: x = &minus;6 / [2(&minus;1)] = &minus;6 / (&minus;2) = 3.<br>3. Cari nilai maksimum dengan menggantikan x = 3 ke dalam fungsi:<br>&nbsp;&nbsp;&nbsp;&nbsp;f(3) = &minus;(3)² + 6(3) &minus; 5 = &minus;9 + 18 &minus; 5 = 4.<br>Maka, persamaan paksi simetri ialah x = 3 dan nilai maksimum ialah 4.",
    tip: "Berhati-hati dengan tanda negatif pada &minus;(3)². Kuasa dua hanya dikenakan pada 3, iaitu &minus;(9) = &minus;9, bukan (&minus;3)² = +9."
  },
  {
    num: 2,
    chapter: "Bab 1: Fungsi dan Persamaan Kuadratik",
    bm: `Selesaikan persamaan kuadratik berikut: [3<i>x</i>(<i>x</i> &minus; 1)] / 2 = 2 &minus; <i>x</i>`,
    en: `Solve the quadratic equation: [3<i>x</i>(<i>x</i> &minus; 1)] / 2 = 2 &minus; <i>x</i>`,
    diagram: "",
    options: [
      { key: "A", text: "x = &minus;1, &nbsp; x = 4/3" },
      { key: "B", text: "x = 1, &nbsp; x = &minus;4/3" },
      { key: "C", text: "x = &minus;2, &nbsp; x = 2/3" },
      { key: "D", text: "x = 2, &nbsp; x = &minus;2/3" }
    ],
    answer: "A",
    concept: "Untuk menyelesaikan persamaan kuadratik, hilangkan pecahan terlebih dahulu dan kembangkan ungkapan ke dalam bentuk am: ax² + bx + c = 0 sebelum pemfaktoran.",
    stepByStep: "1. Darab silang kedua-dua belah dengan 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;3x(x &minus; 1) = 2(2 &minus; x)<br>2. Kembangkan kurungan:<br>&nbsp;&nbsp;&nbsp;&nbsp;3x² &minus; 3x = 4 &minus; 2x<br>3. Pindahkan semua sebutan ke sebelah kiri:<br>&nbsp;&nbsp;&nbsp;&nbsp;3x² &minus; 3x + 2x &minus; 4 = 0 &rArr; 3x² &minus; x &minus; 4 = 0<br>4. Faktorkan:<br>&nbsp;&nbsp;&nbsp;&nbsp;(3x &minus; 4)(x + 1) = 0<br>5. Punca-punca persamaan:<br>&nbsp;&nbsp;&nbsp;&nbsp;3x &minus; 4 = 0 &rArr; x = 4/3<br>&nbsp;&nbsp;&nbsp;&nbsp;x + 1 = 0 &rArr; x = &minus;1.",
    tip: "Semak semula jawapan dengan kalkulator saintifik: Tekan MODE &rarr; EQN &rarr; Degree 2, masukkan a = 3, b = &minus;1, c = &minus;4."
  },
  {
    num: 3,
    chapter: "Bab 1: Fungsi dan Persamaan Kuadratik",
    bm: `Graf bagi fungsi kuadratik <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 5 digerakkan secara menegak ke bawah sebanyak 9 unit untuk menghasilkan fungsi baharu <i>g</i>(<i>x</i>). Graf <i>g</i>(<i>x</i>) menyilang paksi-<i>x</i> pada titik <i>P</i> dan <i>Q</i>. Cari jarak antara titik <i>P</i> dan <i>Q</i>.`,
    en: `The graph of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 5 is translated downwards by 9 units to form <i>g</i>(<i>x</i>). The graph intersects the <i>x</i>-axis at <i>P</i> and <i>Q</i>. Find the distance between <i>P</i> and <i>Q</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "2 unit / units" },
      { key: "B", text: "4 unit / units" },
      { key: "C", text: "5 unit / units" },
      { key: "D", text: "8 unit / units" }
    ],
    answer: "B",
    concept: "Translasi menegak ke bawah sebanyak k unit menukar f(x) kepada g(x) = f(x) &minus; k. Titik persilangan paksi-x diperoleh apabila g(x) = 0.",
    stepByStep: "1. Bentuk fungsi baharu: g(x) = (x² + 5) &minus; 9 = x² &minus; 4.<br>2. Titik persilangan paksi-x berlaku apabila g(x) = 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;x² &minus; 4 = 0 &rArr; x² = 4 &rArr; x = &plusmn;2.<br>3. Koordinat titik ialah P(&minus;2, 0) dan Q(2, 0).<br>4. Jarak antara P dan Q = 2 &minus; (&minus;2) = 4 unit.",
    tip: "Jarak antara dua titik pada paksi mengufuk dihitung dengan menolak koordinat x yang lebih kecil daripada koordinat x yang lebih besar: x₂ &minus; x₁."
  },
  {
    num: 4,
    chapter: "Bab 1: Fungsi dan Persamaan Kuadratik",
    bm: `Panjang sebuah segi empat tepat adalah (<i>x</i> + 5) cm dan lebarnya (<i>x</i> &minus; 2) cm. Diberi luasnya 44 cm<sup>2</sup>, hitung perimeter, dalam cm, segi empat tepat itu.`,
    en: `A rectangle has length (<i>x</i> + 5) cm and width (<i>x</i> &minus; 2) cm. Given its area is 44 cm<sup>2</sup>, calculate its perimeter, in cm.`,
    diagram: "",
    options: [
      { key: "A", text: "24 cm" },
      { key: "B", text: "30 cm" },
      { key: "C", text: "44 cm" },
      { key: "D", text: "60 cm" }
    ],
    answer: "B",
    concept: "Luas segi empat tepat = Panjang &times; Lebar. Perimeter = 2(Panjang + Lebar). Nilai x yang mewakili panjang mestilah positif.",
    stepByStep: "1. Bentuk persamaan luas:<br>&nbsp;&nbsp;&nbsp;&nbsp;(x + 5)(x &minus; 2) = 44<br>&nbsp;&nbsp;&nbsp;&nbsp;x² + 3x &minus; 10 = 44 &rArr; x² + 3x &minus; 54 = 0<br>2. Faktorkan:<br>&nbsp;&nbsp;&nbsp;&nbsp;(x + 9)(x &minus; 6) = 0 &rArr; x = 6 atau x = &minus;9.<br>3. Kerana panjang mesti positif, ambil x = 6.<br>4. Kira dimensi segi empat tepat:<br>&nbsp;&nbsp;&nbsp;&nbsp;Panjang = 6 + 5 = 11 cm, Lebar = 6 &minus; 2 = 4 cm.<br>5. Perimeter = 2(11 + 4) = 2(15) = 30 cm.",
    tip: "Jangan berhenti selepas mencari nilai x = 6! Soalan bertanyakan PERIMETER segi empat tepat, bukan nilai x."
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
    concept: "Nilai tempat bagi sesuatu digit dalam nombor asas b dikira dari kanan bermula dengan b⁰, b¹, b², b³, ... Nilai digit = Digit &times; Nilai tempat.",
    stepByStep: "1. Kenal pasti kedudukan digit yang bergaris dalam 4<u>3</u>21₅:<br>&nbsp;&nbsp;&nbsp;&nbsp;Digit 1: tempat ke-0 &rarr; 5⁰ = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;Digit 2: tempat ke-1 &rarr; 5¹ = 5<br>&nbsp;&nbsp;&nbsp;&nbsp;Digit 3 (bergaris): tempat ke-2 &rarr; 5² = 25<br>2. Hitung nilai digit:<br>&nbsp;&nbsp;&nbsp;&nbsp;Nilai digit = 3 &times; 5² = 3 &times; 25 = 75₁₀.",
    tip: "Kerap kali murid terkeliru antara 'nilai tempat' (25) dengan 'nilai digit' (75). Pastikan darabkan digit tersebut dengan nilai tempatnya!"
  },
  {
    num: 6,
    chapter: "Bab 2: Asas Nombor",
    bm: `Ungkapkan 111011<sub>2</sub> sebagai satu nombor dalam asas lapan.`,
    en: `Express 111011<sub>2</sub> as a number in base eight.`,
    diagram: "",
    options: [
      { key: "A", text: "57₈" },
      { key: "B", text: "71₈" },
      { key: "C", text: "73₈" },
      { key: "D", text: "75₈" }
    ],
    answer: "C",
    concept: "Kerana 2³ = 8, nombor asas dua boleh ditukar ke asas lapan secara pantas dengan mengumpulkan setiap 3 digit bit bermula dari sebelah KANAN.",
    stepByStep: "1. Bahagikan 111011₂ kepada kumpulan 3 bit dari kanan:<br>&nbsp;&nbsp;&nbsp;&nbsp;[111] dan [011]<br>2. Tukar setiap kumpulan 3 bit ke nombor perpuluhan:<br>&nbsp;&nbsp;&nbsp;&nbsp;Kumpulan kiri [111]₂ = 1(4) + 1(2) + 1(1) = 7<br>&nbsp;&nbsp;&nbsp;&nbsp;Kumpulan kanan [011]₂ = 0(4) + 1(2) + 1(1) = 3<br>3. Gabungkan digit: 73₈.",
    tip: "Ingat kod cepat 3-bit: 4-2-1. Contohnya 011 ialah 2+1=3, dan 111 ialah 4+2+1=7."
  },
  {
    num: 7,
    chapter: "Bab 2: Asas Nombor",
    bm: `Hitung 423<sub>5</sub> &minus; 144<sub>5</sub> dan nyatakan jawapannya dalam asas lima.`,
    en: `Calculate 423<sub>5</sub> &minus; 144<sub>5</sub> and state the answer in base five.`,
    diagram: "",
    options: [
      { key: "A", text: "214₅" },
      { key: "B", text: "224₅" },
      { key: "C", text: "234₅" },
      { key: "D", text: "324₅" }
    ],
    answer: "B",
    concept: "Kaedah paling selamat: Tukar kedua-dua nombor ke asas 10, lakukan penolakan, kemudian tukar semula jawapan ke asas 5.",
    stepByStep: "1. Tukar ke asas 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;423₅ = 4(25) + 2(5) + 3 = 100 + 10 + 3 = 113₁₀<br>&nbsp;&nbsp;&nbsp;&nbsp;144₅ = 1(25) + 4(5) + 4 = 25 + 20 + 4 = 49₁₀<br>2. Tolak dalam asas 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;113 &minus; 49 = 64₁₀<br>3. Tukar 64₁₀ ke asas 5 (pembahagian berulang dengan 5):<br>&nbsp;&nbsp;&nbsp;&nbsp;64 &divide; 5 = 12 baki 4<br>&nbsp;&nbsp;&nbsp;&nbsp;12 &divide; 5 = 2 baki 2<br>&nbsp;&nbsp;&nbsp;&nbsp;2 &divide; 5 = 0 baki 2<br>Maka, baca dari bawah ke atas: 224₅.",
    tip: "Jika menggunakan penolakan lazim terus dalam asas 5: apabila meminjam 1 dari tiang sebelah kiri, nilainya ialah 5 (bukan 10!)."
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
    concept: "Apabila persamaan mengandungi pelbagai asas nombor yang berbeza, tukarkan setiap nombor ke asas 10 untuk menyelesaikan persamaan.",
    stepByStep: "1. Tukar 101₂ ke asas 10: 1(4) + 0(2) + 1(1) = 5₁₀.<br>2. Tukar 35₇ ke asas 10: 3(7) + 5(1) = 21 + 5 = 26₁₀.<br>3. Selesaikan persamaan linear:<br>&nbsp;&nbsp;&nbsp;&nbsp;5 + p₈ = 26 &rArr; p₁₀ = 26 &minus; 5 = 21₁₀.<br>4. Tukar 21₁₀ ke asas 8:<br>&nbsp;&nbsp;&nbsp;&nbsp;21 &divide; 8 = 2 baki 5<br>&nbsp;&nbsp;&nbsp;&nbsp;2 &divide; 8 = 0 baki 2<br>Maka p = 25₈. Nilai p ialah 25.",
    tip: "Berhati-hati: 21 ialah nilai dalam asas 10. Soalan menyatakan p₈ (asas 8), jadi 21₁₀ mesti ditukar kepada 25₈."
  },
  {
    num: 9,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Antara pernyataan majmuk berikut, yang manakah adalah <b>benar</b>?`,
    en: `Which of the following compound statements is <b>true</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "3² = 6 dan / and 4 > 2" },
      { key: "B", text: "9 ialah nombor perdana atau 12 ialah gandaan 4" },
      { key: "C", text: "Semua poligon mempunyai 5 sisi atau &minus;3 > &minus;1" },
      { key: "D", text: "5 &times; 0 = 5 dan 7 ialah nombor ganjil" }
    ],
    answer: "B",
    concept: "Jadual Kebenaran: Pernyataan dengan perkataan 'ATAU' adalah BENAR jika sekurang-kurangnya SATU pernyataan komponennya adalah benar. Pernyataan dengan 'DAN' memerlukan kedua-duanya benar.",
    stepByStep: "Analisis setiap pilihan:<br>&bull; A: 3² = 6 (Palsu) DAN 4 > 2 (Benar) &rarr; Palsu DAN Benar = PALSU.<br>&bull; B: 9 nombor perdana (Palsu) ATAU 12 gandaan 4 (Benar) &rarr; Palsu ATAU Benar = BENAR! ✓<br>&bull; C: Semua poligon ada 5 sisi (Palsu) ATAU &minus;3 > &minus;1 (Palsu) &rarr; PALSU.<br>&bull; D: 5 &times; 0 = 5 (Palsu) DAN 7 nombor ganjil (Benar) &rarr; PALSU.",
    tip: "Untuk operasi 'ATAU', anda hanya perlu mencari satu fakta yang benar sahaja untuk menjadikan keseluruhan pernyataan majmuk itu benar."
  },
  {
    num: 10,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Tentukan akas bagi implikasi: &ldquo;Jika <i>x</i> ialah faktor bagi 12, maka <i>x</i> ialah faktor bagi 24.&rdquo;`,
    en: `Determine the converse of: &ldquo;If <i>x</i> is a factor of 12, then <i>x</i> is a factor of 24.&rdquo;`,
    diagram: "",
    options: [
      { key: "A", text: "Jika x bukan faktor 12, maka x bukan faktor 24." },
      { key: "B", text: "Jika x ialah faktor 24, maka x ialah faktor 12." },
      { key: "C", text: "Jika x bukan faktor 24, maka x bukan faktor 12." },
      { key: "D", text: "x faktor 12 jika dan hanya jika x faktor 24." }
    ],
    answer: "B",
    concept: "Hubungan Implikasi (Jika p, maka q):<br>&bull; Akas (Converse): Jika q, maka p.<br>&bull; Songsangan (Inverse): Jika ~p, maka ~q.<br>&bull; Kontrapositif: Jika ~q, maka ~p.",
    stepByStep: "1. Implikasi asal: Jika p (x faktor 12), maka q (x faktor 24).<br>2. Akas diperoleh dengan menukar kedudukan anteseden (p) dan akibat (q):<br>&nbsp;&nbsp;&nbsp;&nbsp;'Jika q, maka p'<br>3. Maka akasnya ialah: 'Jika x ialah faktor bagi 24, maka x ialah faktor bagi 12.'",
    tip: "Akas HANYA menukar kedudukan (terbalikkan urutan ayat), tanpa menafikan (tanpa menambah perkataan 'bukan')."
  },
  {
    num: 11,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Lengkapkan hujah deduktif berikut:<br><b>Premis 1:</b> Jika <i>m</i> ialah gandaan 6, maka <i>m</i> boleh dibahagi tepat dengan 3.<br><b>Premis 2:</b> 42 ialah gandaan 6.<br><b>Kesimpulan:</b> ............................................................................`,
    en: `Complete the argument: Premise 1: If <i>m</i> is a multiple of 6, then <i>m</i> is divisible by 3. Premise 2: 42 is a multiple of 6. Conclusion: ...`,
    diagram: "",
    options: [
      { key: "A", text: "42 tidak boleh dibahagi tepat dengan 3" },
      { key: "B", text: "42 boleh dibahagi tepat dengan 3" },
      { key: "C", text: "m bukan gandaan 6" },
      { key: "D", text: "m boleh dibahagi tepat dengan 3" }
    ],
    answer: "B",
    concept: "Hujah Deduktif Bentuk II (Modus Ponens):<br>Premis 1: Jika p, maka q.<br>Premis 2: p adalah benar.<br>Kesimpulan: q adalah benar.",
    stepByStep: "1. Dalam Premis 1: p = 'm gandaan 6', q = 'm boleh dibahagi tepat dengan 3'.<br>2. Premis 2 mengesahkan p bagi nombor 42: '42 ialah gandaan 6'.<br>3. Kesimpulan mesti mengesahkan q bagi nombor yang sama: '42 boleh dibahagi tepat dengan 3'.",
    tip: "Pastikan kesimpulan menyatakan subjek khusus (42) dan bukannya huruf pemboleh ubah m."
  },
  {
    num: 12,
    chapter: "Bab 3: Penaakulan Matematik",
    bm: `Diberi pola: 5 = 3(1)<sup>2</sup> + 2, &nbsp; 14 = 3(2)<sup>2</sup> + 2, &nbsp; 29 = 3(3)<sup>2</sup> + 2, &nbsp; 50 = 3(4)<sup>2</sup> + 2, &hellip;<br>Buat satu kesimpulan secara induksi bagi sebutan ke-<i>n</i> jujukan itu.`,
    en: `Given the pattern: 5 = 3(1)<sup>2</sup> + 2, 14 = 3(2)<sup>2</sup> + 2, ... Make a conclusion by induction for the <i>n</i>-th term.`,
    diagram: "",
    options: [
      { key: "A", text: "3n² + 2, &nbsp; n = 1, 2, 3, 4, ..." },
      { key: "B", text: "3n + 2, &nbsp; n = 1, 2, 3, 4, ..." },
      { key: "C", text: "3n² &minus; 2, &nbsp; n = 1, 2, 3, 4, ..." },
      { key: "D", text: "2n² + 3, &nbsp; n = 1, 2, 3, 4, ..." }
    ],
    answer: "A",
    concept: "Penaakulan induktif melibatkan pemerhatian pola nombor khusus untuk membina formula am bagi sebutan ke-n.",
    stepByStep: "1. Teliti bahagian yang malar (tidak berubah): nombor 3, kuasa dua ², dan penambahan + 2.<br>2. Teliti bahagian yang berubah mengikut urutan: (1), (2), (3), (4) ... gantikan dengan pemboleh ubah n.<br>3. Pola am: 3n² + 2 di mana n = 1, 2, 3, 4, ...",
    tip: "Dalam soalan SPM, ungkapan induksi yang lengkap MESTI menyatakan julat n (iaitu n = 1, 2, 3, 4, ...)."
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
    concept: "P &cap; Q' merujuk kepada semua unsur yang berada di dalam set P TETAPI TIDAK berada di dalam set Q (sama dengan P \\ Q).",
    stepByStep: "1. Senaraikan set P (nombor ganjil dari 1 hingga 20):<br>&nbsp;&nbsp;&nbsp;&nbsp;P = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19} &rarr; Jumlah = 10 unsur.<br>2. Senaraikan set Q (gandaan 3):<br>&nbsp;&nbsp;&nbsp;&nbsp;Q = {3, 6, 9, 12, 15, 18}.<br>3. Cari unsur P yang juga gandaan 3 (P &cap; Q):<br>&nbsp;&nbsp;&nbsp;&nbsp;{3, 9, 15} &rarr; 3 unsur.<br>4. Unsur P yang BUKAN gandaan 3 (P &cap; Q'):<br>&nbsp;&nbsp;&nbsp;&nbsp;{1, 5, 7, 11, 13, 17, 19} &rarr; 10 &minus; 3 = 7 unsur.",
    tip: "Q' bermaksud pelengkap bagi Q (semua nombor yang bukan gandaan 3). Maka cari nombor ganjil yang tidak boleh dibahagi dengan 3."
  },
  {
    num: 14,
    chapter: "Bab 4: Operasi Set",
    bm: `Rajah 2 menunjukkan gambar rajah Venn dengan &xi; = <i>P</i> &cup; <i>Q</i> &cup; <i>R</i>.<br>Antara berikut, yang manakah mewakili kawasan berlorek?`,
    en: `Diagram 2 shows a Venn diagram with &xi; = <i>P</i> &cup; <i>Q</i> &cup; <i>R</i>.<br>Which represents the shaded region?`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateVennSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 2 / <i>Diagram 2</i></span></div>`,
    options: [
      { key: "A", text: "(P &cap; Q) &cap; R'" },
      { key: "B", text: "(P &cup; Q) &cap; R" },
      { key: "C", text: "(P &cap; Q) &cup; R" },
      { key: "D", text: "P' &cap; (Q &cup; R)" }
    ],
    answer: "A",
    concept: "Kawasan persilangan dua set P dan Q diwakili oleh P &cap; Q. Jika sebahagian kawasan itu dikeluarkan kerana bertindih dengan R, ia didarab silang dengan pelengkap R (iaitu &cap; R').",
    stepByStep: "1. Perhatikan kedudukan kawasan berlorek: ia berada di dalam bulatan P dan bulatan Q serentak &rarr; (P &cap; Q).<br>2. Perhatikan bulatan R: kawasan berlorek langsung tidak memasuki bulatan R &rarr; di luar R (&cap; R').<br>3. Gabungkan kedua-dua syarat: (P &cap; Q) &cap; R'.",
    tip: "Kaedah menomborkan kawasan: Labelkan setiap ruang dengan nombor 1, 2, 3, 4, 5, 6, 7 untuk menguji pilihan jawapan dengan pantas."
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
    concept: "Formula kesatuan set: n(A &cup; B) = n(A) + n(B) &minus; n(A &cap; B).",
    stepByStep: "1. Cari bilangan murid yang menyertai sekurang-kurangnya satu kelab:<br>&nbsp;&nbsp;&nbsp;&nbsp;n(S &cup; M) = 45 &minus; 5 = 40 orang.<br>2. Masukkan ke dalam rumus kesatuan:<br>&nbsp;&nbsp;&nbsp;&nbsp;40 = n(Sains) + n(Math) &minus; n(Kedua-duanya)<br>&nbsp;&nbsp;&nbsp;&nbsp;40 = 28 + 20 &minus; n(S &cap; M)<br>&nbsp;&nbsp;&nbsp;&nbsp;40 = 48 &minus; n(S &cap; M)<br>3. n(S &cap; M) = 48 &minus; 40 = 8 orang.",
    tip: "Jangan lupa tolak 5 orang murid yang TIDAK menyertai mana-mana kelab sebelum mengira persilangan."
  },
  {
    num: 16,
    chapter: "Bab 4: Operasi Set",
    bm: `Diberi bahawa set <i>A</i> &sub; <i>B</i> dan <i>B</i> &cap; <i>C</i> = &empty;. Antara pernyataan berikut, yang manakah <b>pasti benar</b>?`,
    en: `Given that <i>A</i> &sub; <i>B</i> and <i>B</i> &cap; <i>C</i> = &empty;. Which statement is <b>definitely true</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "A &cap; C &ne; &empty;" },
      { key: "B", text: "A &sub; C" },
      { key: "C", text: "A &cap; C = &empty;" },
      { key: "D", text: "B &sub; A" }
    ],
    answer: "C",
    concept: "A &sub; B bermaksud set A terletak sepenuhnya di dalam set B. B &cap; C = &empty; bermaksud set B dan set C saling berpisah (tiada unsur sepunya).",
    stepByStep: "1. Kerana semua unsur dalam A adalah unsur dalam B (A &sub; B),<br>2. Dan B tidak berkongsi sebarang unsur dengan C (B &cap; C = &empty;),<br>3. Maka A juga mustahil berkongsi unsur dengan C.<br>4. Oleh itu, A &cap; C = &empty; (set kosong).",
    tip: "Lakarkan rajah Venn: Lukis bulatan A di dalam bulatan B, dan lukis bulatan C jauh di luar B. Jelas kelihatan A dan C tidak bersilang."
  },
  {
    num: 17,
    chapter: "Bab 5: Rangkaian dalam Teori Graf",
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
    concept: "Teorem Jumlah Darjah (Handshaking Lemma): Jumlah darjah bagi semua bucu dalam suatu graf ialah dua kali bilangan tepi: &sum; d(v) = 2E.",
    stepByStep: "1. Diberi E = 9 tepi, maka jumlah darjah ialah:<br>&nbsp;&nbsp;&nbsp;&nbsp;&sum; d(v) = 2 &times; 9 = 18.<br>2. Jumlahkan darjah bagi 6 bucu yang diberi:<br>&nbsp;&nbsp;&nbsp;&nbsp;3 + 2 + 4 + 3 + k + 2 = 14 + k.<br>3. Selesaikan persamaan linear:<br>&nbsp;&nbsp;&nbsp;&nbsp;14 + k = 18 &rArr; k = 18 &minus; 14 = 4.",
    tip: "Ingat prinsip penting: Jumlah darjah bagi sebarang graf sentiasa merupakan nombor GENAP kerana setiap satu tepi menyambungkan 2 bucu."
  },
  {
    num: 18,
    chapter: "Bab 5: Rangkaian dalam Teori Graf",
    bm: `Antara graf berikut, yang manakah merupakan suatu <b>pokok</b> (<i>tree</i>)?`,
    en: `Which of the following graphs is a <b>tree</b>?`,
    diagram: generateTreeComparisonSvg(),
    options: [
      { key: "A", text: "Graf A / Graph A" },
      { key: "B", text: "Graf B / Graph B" },
      { key: "C", text: "Graf C / Graph C" },
      { key: "D", text: "Graf D / Graph D" }
    ],
    answer: "C",
    concept: "Ciri-ciri Pokok (Tree) dalam Teori Graf:<br>1. Graf bersambung (connected).<br>2. Tiada kitaran / gelung (acyclic).<br>3. Bilangan tepi mesti tepat: E = V &minus; 1.",
    stepByStep: "Analisis setiap graf:<br>&bull; Graf A: Mengandungi kitaran segi tiga &rarr; BUKAN pokok.<br>&bull; Graf B: Terputus / tidak bersambung (2 komponen berasingan) &rarr; BUKAN pokok.<br>&bull; Graf C: Mempunyai 5 bucu dan 4 tepi (E = 5 &minus; 1 = 4), bersambung dan tiada kitaran &rarr; POKOK! ✓<br>&bull; Graf D: Mempunyai kitaran tertutup segi empat &rarr; BUKAN pokok.",
    tip: "Pokok ialah graf paling ringkas yang menghubungkan semua bucu tanpa membentuk sebarang laluan berulang/kitaran tertutup."
  },
  {
    num: 19,
    chapter: "Bab 5: Rangkaian dalam Teori Graf",
    bm: `Rajah 3 menunjukkan rangkaian jalan raya antara bandar <i>P, Q, R, S</i> dan <i>T</i> (jarak dalam km). Cari jarak terpendek, dalam km, dari <i>P</i> ke <i>T</i>.`,
    en: `Diagram 3 shows a road network between towns <i>P, Q, R, S</i> and <i>T</i>. Find the shortest distance from <i>P</i> to <i>T</i>.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateWeightedNetworkSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 3 / <i>Diagram 3</i></span></div>`,
    options: [
      { key: "A", text: "25 km" },
      { key: "B", text: "26 km" },
      { key: "C", text: "28 km" },
      { key: "D", text: "29 km" }
    ],
    answer: "A",
    concept: "Untuk mencari jarak terpendek dalam graf berpemberat, senaraikan semua laluan yang sah dari bucu mula ke bucu akhir dan bandingkan jumlah beratnya.",
    stepByStep: "Kira jumlah berat setiap laluan dari P ke T:<br>&bull; Laluan 1 (P &rarr; Q &rarr; S &rarr; T): 10 + 11 + 8 = 29 km<br>&bull; Laluan 2 (P &rarr; Q &rarr; R &rarr; T): 10 + 3 + 12 = 25 km (Terpendek!) ✓<br>&bull; Laluan 3 (P &rarr; R &rarr; T): 14 + 12 = 26 km<br>&bull; Laluan 4 (P &rarr; Q &rarr; R &rarr; S &rarr; T): 10 + 3 + 6 + 8 = 27 km<br>Jarak terpendek ialah 25 km melalui laluan P &rarr; Q &rarr; R &rarr; T.",
    tip: "Walaupun laluan P &rarr; R hanya mempunyai 2 tepi (14+12=26), laluan 3 tepi P &rarr; Q &rarr; R &rarr; T (10+3+12=25) sebenarnya lebih pendek!"
  },
  {
    num: 20,
    chapter: "Bab 5: Rangkaian dalam Teori Graf",
    bm: `Rajah 4 menunjukkan graf berarah. Tentukan <i>d</i><sub>in</sub>(<i>B</i>) dan <i>d</i><sub>out</sub>(<i>B</i>) bagi bucu <i>B</i>.`,
    en: `Diagram 4 shows a directed graph. Determine <i>d</i><sub>in</sub>(<i>B</i>) and <i>d</i><sub>out</sub>(<i>B</i>) for vertex <i>B</i>.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateDirectedGraphSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 4 / <i>Diagram 4</i></span></div>`,
    options: [
      { key: "A", text: "d_in(B) = 2, &nbsp; d_out(B) = 3" },
      { key: "B", text: "d_in(B) = 3, &nbsp; d_out(B) = 2" },
      { key: "C", text: "d_in(B) = 1, &nbsp; d_out(B) = 4" },
      { key: "D", text: "d_in(B) = 3, &nbsp; d_out(B) = 3" }
    ],
    answer: "A",
    concept: "Dalam graf berarah:<br>&bull; d_in (darjah masuk): Bilangan tepi berarah yang menunjuk MASUK ke bucu tersebut.<br>&bull; d_out (darjah keluar): Bilangan tepi berarah yang KELUAR daripada bucu tersebut.",
    stepByStep: "Perhatikan bucu B pada Rajah 4:<br>1. Tepi yang MASUK ke B: dari bucu A (A &rarr; B) dan dari bucu C (C &rarr; B) &rarr; d_in(B) = 2.<br>2. Tepi yang KELUAR dari B: ke bucu D (B &rarr; D), ke bucu E (B &rarr; E), dan ke bucu C (B &rarr; C) &rarr; d_out(B) = 3.<br>Maka, d_in(B) = 2 dan d_out(B) = 3.",
    tip: "Periksa arah kepala anak panah dengan teliti. Tepi antara B dan C mempunyai dua anak panah berasingan (satu masuk, satu keluar)."
  },
  {
    num: 21,
    chapter: "Bab 6: Ketaksamaan Linear dalam Dua Pemboleh Ubah",
    bm: `Rajah 5 menunjukkan rantau berlorek pada suatu satah Cartes.<br>Antara sistem ketaksamaan berikut, yang manakah mentakrifkan rantau berlorek itu?`,
    en: `Diagram 5 shows a shaded region on a Cartesian plane.<br>Which system of inequalities defines the shaded region?`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateInequalityRegionSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 5 / <i>Diagram 5</i></span></div>`,
    options: [
      { key: "A", text: "y &le; &minus;x + 5, &nbsp; y &ge; 2x &minus; 1, &nbsp; x &ge; 0" },
      { key: "B", text: "y &ge; &minus;x + 5, &nbsp; y &le; 2x &minus; 1, &nbsp; x &ge; 0" },
      { key: "C", text: "y < &minus;x + 5, &nbsp; y > 2x &minus; 1, &nbsp; y &ge; 0" },
      { key: "D", text: "y &le; &minus;x + 5, &nbsp; y &le; 2x &minus; 1, &nbsp; x &ge; 0" }
    ],
    answer: "A",
    concept: "Garis padu melibatkan simbol &le; atau &ge;. Kawasan di bawah garisan menggunakan &le;, kawasan di atas garisan menggunakan &ge;. Paksi-y ialah garisan x = 0 (sebelah kanan ialah x &ge; 0).",
    stepByStep: "1. Garisan y = &minus;x + 5: Rantau berlorek berada di sebelah BAWAH garis padu &rarr; y &le; &minus;x + 5.<br>2. Garisan y = 2x &minus; 1: Rantau berlorek berada di sebelah ATAS garis padu &rarr; y &ge; 2x &minus; 1.<br>3. Paksi-y: Rantau berlorek berada di sebelah KANAN &rarr; x &ge; 0.<br>Maka sistem ketaksamaan ialah: y &le; &minus;x + 5, y &ge; 2x &minus; 1, x &ge; 0.",
    tip: "Garis padu = ada tanda sama dengan (&le; atau &ge;). Garis putus-putus = tiada tanda sama dengan (< atau >)."
  },
  {
    num: 22,
    chapter: "Bab 6: Ketaksamaan Linear dalam Dua Pemboleh Ubah",
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
    concept: "Titik (x, y) memuaskan sistem ketaksamaan apabila penggantian nilai x dan y menjadikan SEMUA ketaksamaan dalam sistem itu benar serentak.",
    stepByStep: "Uji titik (1, 3):<br>1. 2y + x &le; 8 &rArr; 2(3) + 1 = 6 + 1 = 7 &le; 8 (BENAR)<br>2. y > x &minus; 2 &rArr; 3 > 1 &minus; 2 = &minus;1 (BENAR)<br>3. x &ge; 1 &rArr; 1 &ge; 1 (BENAR)<br>Semua 3 ketaksamaan dipenuhi oleh titik (1, 3).<br><br>Mengapa pilihan lain salah:<br>&bull; (2, 4): 2(4) + 2 = 10 &le; 8 (SALAH)<br>&bull; (3, 0): 0 > 3 &minus; 2 = 1 (SALAH)<br>&bull; (0, 2): x &ge; 1 tidak dipenuhi kerana 0 < 1 (SALAH).",
    tip: "Mulakan dengan menyemak ketaksamaan yang paling mudah terlebih dahulu, iaitu x &ge; 1. Ini membolehkan anda menyingkirkan titik (0, 2) serta-merta!"
  },
  {
    num: 23,
    chapter: "Bab 6: Ketaksamaan Linear dalam Dua Pemboleh Ubah",
    bm: `Puan Salmah menjual <i>x</i> bungkus nasi lemak dan <i>y</i> bungkus mee goreng. Jumlah bungkusan adalah selebih-lebihnya 120. Bilangan nasi lemak sekurang-kurangnya dua kali mee goreng. Tulis dua ketaksamaan linear yang mewakili situasi itu.`,
    en: `Puan Salmah sells <i>x</i> packets nasi lemak and <i>y</i> packets mee goreng. Total is at most 120. Nasi lemak is at least twice mee goreng. Write two inequalities.`,
    diagram: "",
    options: [
      { key: "A", text: "x + y &le; 120 &nbsp; dan / and &nbsp; x &ge; 2y" },
      { key: "B", text: "x + y < 120 &nbsp; dan / and &nbsp; x &le; 2y" },
      { key: "C", text: "x + y &ge; 120 &nbsp; dan / and &nbsp; y &ge; 2x" },
      { key: "D", text: "x + y &le; 120 &nbsp; dan / and &nbsp; y &ge; 2x" }
    ],
    answer: "A",
    concept: "Terjemahan istilah bahasa kepada simbol matematik:<br>&bull; 'selebih-lebihnya / tidak lebih daripada / at most' &rarr; &le;<br>&bull; 'sekurang-kurangnya / tidak kurang daripada / at least' &rarr; &ge;",
    stepByStep: "1. Jumlah bungkusan (x + y) selebih-lebihnya 120 &rArr; x + y &le; 120.<br>2. Bilangan nasi lemak (x) sekurang-kurangnya (&ge;) dua kali mee goreng (2y) &rArr; x &ge; 2y.<br>Maka jawapan ialah: x + y &le; 120 dan x &ge; 2y.",
    tip: "Awas: Jangan terbalik meletakkan faktor pendarab. 'Nasi lemak (x) sekurang-kurangnya dua kali mee goreng (y)' bermakna x &ge; 2y, BUKAN y &ge; 2x."
  },
  {
    num: 24,
    chapter: "Bab 6: Ketaksamaan Linear dalam Dua Pemboleh Ubah",
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
    concept: "Teori Pengaturcaraan Linear: Nilai optimum (maksimum atau minimum) bagi suatu fungsi objektif linear sentiasa dicapai pada salah satu titik bucu (bucu poligon) rantau tersaur.",
    stepByStep: "Gantikan setiap koordinat bucu ke dalam fungsi objektif K = 4x + 3y:<br>&bull; Pada (0, 0): K = 4(0) + 3(0) = 0<br>&bull; Pada (5, 0): K = 4(5) + 3(0) = 20<br>&bull; Pada (4, 3): K = 4(4) + 3(3) = 16 + 9 = 25 (Maksimum!) ✓<br>&bull; Pada (0, 5): K = 4(0) + 3(5) = 15<br>Nilai maksimum ialah 25.",
    tip: "Hanya uji koordinat bucu sahaja. Anda tidak perlu menguji titik-titik di bahagian dalam rantau berlorek."
  },
  {
    num: 25,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 6 menunjukkan graf jarak-masa bagi perjalanan sebuah motosikal dari Bandar A ke Bandar B. Hitung laju, dalam km/j, motosikal itu bagi 40 minit yang pertama.`,
    en: `Diagram 6 shows the distance-time graph of a motorcycle. Calculate the speed, in km/h, for the first 40 minutes.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateDistTimeSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 6 / <i>Diagram 6</i></span></div>`,
    options: [
      { key: "A", text: "45 km/j / km/h" },
      { key: "B", text: "54 km/j / km/h" },
      { key: "C", text: "60 km/j / km/h" },
      { key: "D", text: "72 km/j / km/h" }
    ],
    answer: "B",
    concept: "Pada graf jarak-masa, Kecerunan graf mewakili Laju. Laju = Jarak dilalui / Masa diambil.",
    stepByStep: "1. Dari graf, dalam 40 minit pertama:<br>&nbsp;&nbsp;&nbsp;&nbsp;Jarak dilalui = 36 km &minus; 0 km = 36 km.<br>2. Masa diambil = 40 minit.<br>3. Tukar unit masa kepada jam:<br>&nbsp;&nbsp;&nbsp;&nbsp;Masa = 40 / 60 jam = 2/3 jam.<br>4. Kira laju:<br>&nbsp;&nbsp;&nbsp;&nbsp;Laju = 36 &divide; (2/3) = 36 &times; (3/2) = 54 km/j.",
    tip: "Perangkap paling kerap: Murid terus membahagi 36 dengan 40 tanpa menukar minit kepada jam! Pastikan unit masa selaras dengan km/j."
  },
  {
    num: 26,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 7 menunjukkan graf jarak-masa bagi sebuah lori dalam tempoh <i>t</i> jam. Diberi laju purata bagi keseluruhan perjalanan ialah 64 km/j, cari nilai <i>t</i>.`,
    en: `Diagram 7 shows the distance-time graph of a lorry for <i>t</i> hours. Given average speed for the whole journey is 64 km/h, find <i>t</i>.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateDistTimeLorrySvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 7 / <i>Diagram 7</i></span></div>`,
    options: [
      { key: "A", text: "2.0" },
      { key: "B", text: "2.2" },
      { key: "C", text: "2.5" },
      { key: "D", text: "3.0" }
    ],
    answer: "C",
    concept: "Laju Purata = Jumlah Jarak Dilalui / Jumlah Masa Diambil. Tempoh pegun (berhenti rehat) tetap dikira dalam jumlah masa perjalanan.",
    stepByStep: "1. Jumlah jarak dari graf = 160 km.<br>2. Jumlah masa keseluruhan = t jam.<br>3. Gunakan rumus laju purata:<br>&nbsp;&nbsp;&nbsp;&nbsp;Laju purata = Jumlah Jarak / Jumlah Masa<br>&nbsp;&nbsp;&nbsp;&nbsp;64 = 160 / t<br>4. Selesaikan untuk t:<br>&nbsp;&nbsp;&nbsp;&nbsp;t = 160 / 64 = 2.5 jam.",
    tip: "Walaupun lori berhenti rehat dari jam 1.0 hingga 1.4, jumlah masa t tetap merangkumi keseluruhan tempoh termasuk masa rehat."
  },
  {
    num: 27,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 8 menunjukkan graf laju-masa bagi suatu zarah. Hitung kadar perubahan laju, dalam m s<sup>&minus;2</sup>, zarah itu dalam 6 saat terakhir.`,
    en: `Diagram 8 shows the speed-time graph of a particle. Calculate the rate of change of speed, in m s<sup>&minus;2</sup>, in the last 6 seconds.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateSpeedTimeParticleSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 8 / <i>Diagram 8</i></span></div>`,
    options: [
      { key: "A", text: "&minus;3" },
      { key: "B", text: "&minus;2" },
      { key: "C", text: "3" },
      { key: "D", text: "6" }
    ],
    answer: "A",
    concept: "Pada graf laju-masa, Kecerunan graf mewakili Kadar Perubahan Laju (Pecutan). Pecutan = (Laju Akhir &minus; Laju Awal) / Masa.",
    stepByStep: "1. Tempoh 6 saat terakhir ialah dari t = 14 hingga t = 20 saat (masa = 20 &minus; 14 = 6 s).<br>2. Pada t = 14 s, laju awal (u) = 18 m s⁻¹.<br>3. Pada t = 20 s, laju akhir (v) = 0 m s⁻¹.<br>4. Pecutan = (v &minus; u) / t = (0 &minus; 18) / 6 = &minus;18 / 6 = &minus;3 m s⁻².",
    tip: "Tanda negatif bermaksud objek mengalami nyahpecutan (laju semakin berkurang sehingga berhenti)."
  },
  {
    num: 28,
    chapter: "Bab 7: Graf Gerakan",
    bm: `Rajah 9 menunjukkan graf laju-masa bagi sebuah kereta dalam 25 saat. Hitung jumlah jarak, dalam meter, yang dilalui kereta itu.`,
    en: `Diagram 9 shows the speed-time graph of a car for 25 seconds. Calculate the total distance, in metres, travelled.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateSpeedTimeTrapezoidSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 9 / <i>Diagram 9</i></span></div>`,
    options: [
      { key: "A", text: "250" },
      { key: "B", text: "350" },
      { key: "C", text: "400" },
      { key: "D", text: "500" }
    ],
    answer: "C",
    concept: "Pada graf laju-masa, Jumlah Jarak Dilalui bersamaan dengan LUAS DI BAWAH GRAF. Bentuk graf ini ialah trapezium.",
    stepByStep: "1. Bentuk di bawah graf ialah trapezium dengan sisi selari a dan b:<br>&nbsp;&nbsp;&nbsp;&nbsp;Sisi selari atas (a) = 25 &minus; 10 = 15 s<br>&nbsp;&nbsp;&nbsp;&nbsp;Sisi selari bawah (b) = 25 s<br>&nbsp;&nbsp;&nbsp;&nbsp;Tinggi (h) = 20 m s⁻¹<br>2. Luas trapezium = 1/2 &times; (a + b) &times; h<br>&nbsp;&nbsp;&nbsp;&nbsp;Luas = 1/2 &times; (15 + 25) &times; 20<br>&nbsp;&nbsp;&nbsp;&nbsp;Luas = 1/2 &times; 40 &times; 20 = 400 meter.",
    tip: "Anda juga boleh membahagikan bentuk kepada segi tiga (0 hingga 10s: 1/2 &times; 10 &times; 20 = 100m) dan segi empat tepat (10 hingga 25s: 15 &times; 20 = 300m). Jumlah = 100 + 300 = 400m."
  },
  {
    num: 29,
    chapter: "Bab 8: Sukatan Serakan Data Tak Terkumpul",
    bm: `Cari julat antara kuartil bagi set data: 3, 5, 6, 8, 10, 12, 15, 17, 19, 21, 24.`,
    en: `Find the interquartile range for the data: 3, 5, 6, 8, 10, 12, 15, 17, 19, 21, 24.`,
    diagram: "",
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "13" },
      { key: "C", text: "15" },
      { key: "D", text: "21" }
    ],
    answer: "B",
    concept: "Julat antara kuartil (IQR) = Kuartil Ketiga (Q₃) &minus; Kuartil Pertama (Q₁).",
    stepByStep: "1. Data telah disusun (N = 11 data):<br>&nbsp;&nbsp;&nbsp;&nbsp;3, 5, 6, 8, 10, [12], 15, 17, 19, 21, 24<br>2. Median (nilai ke-6) = 12.<br>3. Separuh bawah (5 data): 3, 5, [6], 8, 10 &rArr; Kuartil pertama Q₁ = 6.<br>4. Separuh atas (5 data): 15, 17, [19], 21, 24 &rArr; Kuartil ketiga Q₃ = 19.<br>5. Julat antara kuartil = Q₃ &minus; Q₁ = 19 &minus; 6 = 13.",
    tip: "Jika bilangan data ganjil, jangan masukkan nilai median tengah ke dalam separuh bawah atau separuh atas semasa mencari kuartil."
  },
  {
    num: 30,
    chapter: "Bab 8: Sukatan Serakan Data Tak Terkumpul",
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
    concept: "Min: x̄ = &sum;x / N. Varians: &sigma;² = (&sum;x² / N) &minus; (x̄)². Sisihan piawai: &sigma; = &radic;(&sigma;²).",
    stepByStep: "1. Hitung min (x̄):<br>&nbsp;&nbsp;&nbsp;&nbsp;x̄ = 140 / 10 = 14.<br>2. Hitung varians (&sigma;²):<br>&nbsp;&nbsp;&nbsp;&nbsp;&sigma;² = (2320 / 10) &minus; 14² = 232 &minus; 196 = 36.<br>3. Hitung sisihan piawai (&sigma;):<br>&nbsp;&nbsp;&nbsp;&nbsp;&sigma; = &radic;36 = 6.",
    tip: "Pastikan anda mengambil punca kuasa dua bagi varians (36) untuk mendapatkan sisihan piawai (6). 36 ialah varians, bukan sisihan piawai."
  },
  {
    num: 31,
    chapter: "Bab 8: Sukatan Serakan Data Tak Terkumpul",
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
    concept: "Kesan perubahan data: Penambahan pemalar (+k) MENGUBAH min tetapi TIDAK mengubah ukuran serakan (sisihan piawai kekal). Pendaraban pemalar (&times;k) MENGUBAH min dan juga sisihan piawai.",
    stepByStep: "1. Min terkesan oleh pendaraban dan penambahan:<br>&nbsp;&nbsp;&nbsp;&nbsp;Min baharu = (18 &times; 3) + 4 = 54 + 4 = 58.<br>2. Sisihan piawai HANYA terkesan oleh pendaraban (penambahan +4 tidak mengubah serakan):<br>&nbsp;&nbsp;&nbsp;&nbsp;Sisihan piawai baharu = 2.5 &times; 3 = 7.5.<br>Maka: Min = 58, Sisihan piawai = 7.5.",
    tip: "Ingat peraturan emas: Menambah atau menolak nombor hanya menganjak kedudukan graf secara keseluruhan tanpa melebarkan atau menyempitkan serakannya."
  },
  {
    num: 32,
    chapter: "Bab 8: Sukatan Serakan Data Tak Terkumpul",
    bm: `Rajah 10 menunjukkan suatu plot kotak bagi markah ujian.<br>Tentukan julat dan julat antara kuartil bagi data itu.`,
    en: `Diagram 10 shows a box plot for test marks.<br>Determine the range and interquartile range.`,
    diagram: `<div style="text-align:center; margin:10px 0;">${generateBoxPlotSvg()}<br><span style="font-weight:600; font-size:12px; color:#475569;">Rajah 10 / <i>Diagram 10</i></span></div>`,
    options: [
      { key: "A", text: "Julat = 75, &nbsp; Julat antara kuartil = 30" },
      { key: "B", text: "Julat = 75, &nbsp; Julat antara kuartil = 15" },
      { key: "C", text: "Julat = 55, &nbsp; Julat antara kuartil = 30" },
      { key: "D", text: "Julat = 95, &nbsp; Julat antara kuartil = 45" }
    ],
    answer: "A",
    concept: "Plot kotak (Box plot) memaparkan 5 nombor ringkasan: Nilai Minimum, Q₁, Median, Q₃, dan Nilai Maksimum. Julat = Maks &minus; Min. Julat antara kuartil = Q₃ &minus; Q₁.",
    stepByStep: "1. Baca nilai daripada plot kotak:<br>&nbsp;&nbsp;&nbsp;&nbsp;Nilai minimum = 20<br>&nbsp;&nbsp;&nbsp;&nbsp;Kuartil pertama (Q₁) = 45<br>&nbsp;&nbsp;&nbsp;&nbsp;Median = 60<br>&nbsp;&nbsp;&nbsp;&nbsp;Kuartil ketiga (Q₃) = 75<br>&nbsp;&nbsp;&nbsp;&nbsp;Nilai maksimum = 95<br>2. Kira Julat = 95 &minus; 20 = 75.<br>3. Kira Julat antara kuartil = Q₃ &minus; Q₁ = 75 &minus; 45 = 30.",
    tip: "Kotak segi empat di tengah mewakili julat antara kuartil (Q₁ ke Q₃), manakala garis misai luar menunjukkan nilai ekstrem (Min dan Maks)."
  },
  {
    num: 33,
    chapter: "Bab 9: Kebarangkalian Peristiwa Bergabung",
    bm: `Sekeping syiling adil dan sebiji dadu adil dilambung serentak. Cari kebarangkalian mendapat angka (<i>head</i>) pada syiling dan nombor perdana pada dadu.`,
    en: `A fair coin and a fair die are tossed. Find the probability of getting a head on the coin and a prime number on the die.`,
    diagram: "",
    options: [
      { key: "A", text: "1/6" },
      { key: "B", text: "1/4" },
      { key: "C", text: "1/3" },
      { key: "D", text: "1/2" }
    ],
    answer: "B",
    concept: "Peristiwa tak bersandar: Kebarangkalian berlakunya peristiwa A dan B serentak ialah hasil darab kebarangkalian individu: P(A &cap; B) = P(A) &times; P(B).",
    stepByStep: "1. Kebarangkalian mendapat angka pada syiling:<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Angka) = 1/2.<br>2. Nombor perdana pada dadu adil (dari 1 hingga 6):<br>&nbsp;&nbsp;&nbsp;&nbsp;Nombor perdana ialah {2, 3, 5} (3 nombor daripada 6).<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Perdana) = 3/6 = 1/2.<br>3. Kerana kedua-dua peristiwa tidak bersandar:<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Angka &cap; Perdana) = P(Angka) &times; P(Perdana) = 1/2 &times; 1/2 = 1/4.",
    tip: "Ingat bahawa nombor 1 BUKAN nombor perdana. Nombor perdana pada dadu hanya 2, 3, dan 5."
  },
  {
    num: 34,
    chapter: "Bab 9: Kebarangkalian Peristiwa Bergabung",
    bm: `Sebuah kotak mengandungi 6 guli merah dan 4 guli biru. Dua guli dipilih secara rawak <b>tanpa pengembalian</b>. Cari kebarangkalian kedua-duanya berwarna merah.`,
    en: `A box contains 6 red and 4 blue marbles. Two marbles are chosen <b>without replacement</b>. Find the probability that both are red.`,
    diagram: "",
    options: [
      { key: "A", text: "9/25" },
      { key: "B", text: "1/3" },
      { key: "C", text: "2/5" },
      { key: "D", text: "5/18" }
    ],
    answer: "B",
    concept: "Peristiwa bersandar (tanpa pengembalian): Jumlah guli dan bilangan guli dalam kotak berkurang sebanyak 1 selepas cabutan pertama.",
    stepByStep: "1. Jumlah awal guli = 6 merah + 4 biru = 10 guli.<br>2. Kebarangkalian guli pertama merah = 6 / 10.<br>3. Selepas 1 guli merah dikeluarkan tanpa pengembalian:<br>&nbsp;&nbsp;&nbsp;&nbsp;Baki guli merah = 5, baki jumlah guli = 9.<br>4. Kebarangkalian guli kedua merah = 5 / 9.<br>5. P(Kedua-dua merah) = (6 / 10) &times; (5 / 9) = 30 / 90 = 1/3.",
    tip: "Frasa 'tanpa pengembalian' ialah kata kunci utama. Pastikan penyebut pada cabutan kedua dikurangkan kepada 9!"
  },
  {
    num: 35,
    chapter: "Bab 9: Kebarangkalian Peristiwa Bergabung",
    bm: `Sekeping kad dipilih secara rawak dari kad 1 hingga 25. Peristiwa <i>A</i> = gandaan 5, peristiwa <i>B</i> = nombor kuasa dua sempurna. Hitung <i>P</i>(<i>A</i> &cup; <i>B</i>).`,
    en: `A card is drawn from cards 1 to 25. Event <i>A</i> = multiple of 5, event <i>B</i> = perfect square. Calculate <i>P</i>(<i>A</i> &cup; <i>B</i>).`,
    diagram: "",
    options: [
      { key: "A", text: "8/25" },
      { key: "B", text: "9/25" },
      { key: "C", text: "2/5" },
      { key: "D", text: "11/25" }
    ],
    answer: "B",
    concept: "Hukum Penambahan Kebarangkalian: P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B). Tolak persilangan supaya unsur sepunya tidak dikira dua kali.",
    stepByStep: "1. Ruang sampel: n(S) = 25.<br>2. Peristiwa A (gandaan 5): {5, 10, 15, 20, 25} &rArr; n(A) = 5.<br>3. Peristiwa B (kuasa dua sempurna): {1, 4, 9, 16, 25} &rArr; n(B) = 5.<br>4. Unsur sepunya A &cap; B: {25} &rArr; n(A &cap; B) = 1.<br>5. n(A &cup; B) = 5 + 5 &minus; 1 = 9.<br>6. P(A &cup; B) = 9 / 25.",
    tip: "Nombor 25 ialah gandaan 5 dan juga kuasa dua sempurna (5² = 25). Pastikan tolak 1 supaya ia tidak dikira dua kali!"
  },
  {
    num: 36,
    chapter: "Bab 9: Kebarangkalian Peristiwa Bergabung",
    bm: `Kebarangkalian Farhan lulus Matematik ialah <sup>3</sup>/<sub>4</sub> dan lulus Sains ialah <sup>4</sup>/<sub>5</sub>. Diberi peristiwa tak bersandar, cari kebarangkalian dia lulus <b>sekurang-kurangnya satu</b> ujian.`,
    en: `Probability Farhan passes Math is 3/4 and Science is 4/5. Find the probability he passes <b>at least one</b> test.`,
    diagram: "",
    options: [
      { key: "A", text: "3/5" },
      { key: "B", text: "17/20" },
      { key: "C", text: "19/20" },
      { key: "D", text: "1/20" }
    ],
    answer: "C",
    concept: "Teknik Kebarangkalian Pelengkap: P(Sekurang-kurangnya satu berjaya) = 1 &minus; P(Kedua-duanya gagal).",
    stepByStep: "1. Kira kebarangkalian gagal setiap subjek:<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Gagal Math) = 1 &minus; 3/4 = 1/4<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Gagal Sains) = 1 &minus; 4/5 = 1/5<br>2. Kebarangkalian gagal kedua-dua subjek:<br>&nbsp;&nbsp;&nbsp;&nbsp;P(Gagal kedua-dua) = 1/4 &times; 1/5 = 1/20<br>3. Gunakan pelengkap untuk mencari sekurang-kurangnya satu lulus:<br>&nbsp;&nbsp;&nbsp;&nbsp;P(&ge; 1 lulus) = 1 &minus; 1/20 = 19/20.",
    tip: "Kaedah pelengkap (1 &minus; gagal semua) adalah jauh lebih pantas berbanding mengira tiga kebarangkalian berasingan (lulus Math saja + lulus Sains saja + lulus dua-dua)."
  },
  {
    num: 37,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Encik Hisham menetapkan matlamat kewangan: &ldquo;Menyimpan RM 7,200 dalam tempoh 12 bulan untuk wang pendahuluan kereta dengan menyimpan RM 600 setiap bulan.&rdquo; Antara komponen konsep <b>SMART</b>, yang manakah diwakili oleh &ldquo;dalam tempoh 12 bulan&rdquo;?`,
    en: `Encik Hisham sets a goal: "Save RM 7,200 within 12 months for car down payment by saving RM 600 monthly." Which <b>SMART</b> component is "within 12 months"?`,
    diagram: "",
    options: [
      { key: "A", text: "S &ndash; Khusus / Specific" },
      { key: "B", text: "M &ndash; Boleh diukur / Measurable" },
      { key: "C", text: "A &ndash; Boleh dicapai / Attainable" },
      { key: "D", text: "T &ndash; Berikat masa / Time-bound" }
    ],
    answer: "D",
    concept: "Konsep SMART dalam perancangan kewangan:<br>&bull; S (Specific) - Khusus<br>&bull; M (Measurable) - Boleh diukur nilai wang<br>&bull; A (Attainable) - Boleh dicapai<br>&bull; R (Realistic) - Realistik<br>&bull; T (Time-bound) - Berikat masa (ada tempoh sasaran).",
    stepByStep: "1. 'Dalam tempoh 12 bulan' menetapkan garis masa atau jangka masa tamat bagi mencapai matlamat.<br>2. Komponen SMART yang mewakili jangka masa ialah T (Time-bound / Berikat masa).",
    tip: "Jangan terkeliru: RM 7,200 ialah M (Measurable / Boleh diukur), manakala 12 bulan ialah T (Time-bound / Berikat masa)."
  },
  {
    num: 38,
    chapter: "Bab 10: Pengurusan Kewangan",
    bm: `Jadual 1 menunjukkan pendapatan dan perbelanjaan bulanan Cik Nadia.
         <div style="margin:10px auto; max-width:380px;">
           <table style="width:100%; border-collapse:collapse; font-size:12px; text-align:left; border:1px solid #cbd5e1;">
             <tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:5px 8px;">Perkara / Item</th><th style="border:1px solid #cbd5e1; padding:5px 8px;">Jumlah (RM)</th></tr>
             <tr><td style="border:1px solid #cbd5e1; padding:5px 8px;">Pendapatan aktif</td><td style="border:1px solid #cbd5e1; padding:5px 8px;">3,800</td></tr>
             <tr><td style="border:1px solid #cbd5e1; padding:5px 8px;">Pendapatan pasif</td><td style="border:1px solid #cbd5e1; padding:5px 8px;">500</td></tr>
             <tr><td style="border:1px solid #cbd5e1; padding:5px 8px;">Simpanan tetap (10%)</td><td style="border:1px solid #cbd5e1; padding:5px 8px;">430</td></tr>
             <tr><td style="border:1px solid #cbd5e1; padding:5px 8px;">Perbelanjaan tetap</td><td style="border:1px solid #cbd5e1; padding:5px 8px;">1,600</td></tr>
             <tr><td style="border:1px solid #cbd5e1; padding:5px 8px;">Perbelanjaan tidak tetap</td><td style="border:1px solid #cbd5e1; padding:5px 8px;">1,400</td></tr>
           </table>
           <div style="text-align:center; font-weight:600; font-size:11px; margin-top:4px; color:#475569;">Jadual 1 / <i>Table 1</i></div>
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
    concept: "Aliran Tunai Bersih = Jumlah Pendapatan &minus; Jumlah Aliran Keluar (Simpanan + Perbelanjaan). Jika nilai positif, ia merupakan Lebihan (Surplus); jika negatif, Defisit.",
    stepByStep: "1. Jumlah Pendapatan = 3,800 + 500 = RM 4,300.<br>2. Jumlah Aliran Keluar = Simpanan (430) + Perbelanjaan Tetap (1,600) + Perbelanjaan Tidak Tetap (1,400) = RM 3,430.<br>3. Aliran Tunai Bersih = RM 4,300 &minus; RM 3,430 = +RM 870.<br>Nilai positif menandakan aliran tunai LEBIHAN (Surplus) sebanyak RM 870.",
    tip: "Pastikan simpanan tetap dimasukkan dalam aliran keluar semasa mengira baki tunai akhir."
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
    concept: "Dana Kecemasan Minimum = 3 &times; Perbelanjaan Bulanan. Dana Kecemasan Maksimum = 6 &times; Perbelanjaan Bulanan.",
    stepByStep: "1. Perbelanjaan bulanan = RM 3,200.<br>2. Jumlah minimum disyorkan ialah 3 bulan perbelanjaan:<br>&nbsp;&nbsp;&nbsp;&nbsp;Dana Kecemasan = 3 &times; RM 3,200 = RM 9,600.",
    tip: "Perhatikan kata kunci 'MINIMUM' dalam soalan (3 bulan). Jika soalan meminta maksimum, barulah darab dengan 6 (RM 19,200)."
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
    concept: "Simpanan Bulanan Diperlukan = Harga Matlamat / Tempoh Bulan. Simpanan Tambahan = Simpanan Diperlukan &minus; Lebihan Bulanan Sedia Ada.",
    stepByStep: "1. Hitung simpanan yang perlu dibuat setiap bulan:<br>&nbsp;&nbsp;&nbsp;&nbsp;Simpanan sebulan = RM 3,000 &divide; 5 bulan = RM 600 sebulan.<br>2. Lebihan wang sedia ada Azman = RM 450 sebulan.<br>3. Simpanan tambahan yang diperlukan:<br>&nbsp;&nbsp;&nbsp;&nbsp;Simpanan tambahan = RM 600 &minus; RM 450 = RM 150 sebulan.",
    tip: "Soalan menanyakan SIMPANAN TAMBAHAN yang perlu dicari, bukan jumlah simpanan penuh (RM 600). Tolak lebihan sedia ada RM 450."
  }
];

const questionsJson = JSON.stringify(questions);

const indexHtmlContent = `<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ujian Interaktif & Pembelajaran: Matematik Tingkatan 4 (1449/1)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Times+New+Roman&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #1e3a8a;
      --primary-light: #3b82f6;
      --primary-subtle: #eff6ff;
      --success: #059669;
      --success-light: #10b981;
      --success-subtle: #ecfdf5;
      --danger: #dc2626;
      --danger-subtle: #fef2f2;
      --warning: #d97706;
      --warning-subtle: #fffbeb;
      --purple: #7c3aed;
      --purple-subtle: #f5f3ff;
      --slate-50: #f8fafc;
      --slate-100: #f1f5f9;
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-500: #64748b;
      --slate-700: #334155;
      --slate-800: #1e293b;
      --slate-900: #0f172a;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #f8fafc;
      color: var(--slate-900);
      line-height: 1.5;
    }

    /* Header */
    header {
      background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
      color: #fff;
      padding: 1.25rem 1rem;
      position: sticky;
      top: 0;
      z-index: 40;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    }

    .header-container {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .header-brand h1 {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .header-brand p {
      font-size: 0.85rem;
      color: #93c5fd;
      font-weight: 500;
    }

    .header-tools {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .mode-toggle-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      padding: 0.45rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mode-toggle-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .mode-toggle-btn.active-learn {
      background: #10b981;
      border-color: #34d399;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
    }

    .timer-badge {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      padding: 0.45rem 0.85rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid rgba(255,255,255,0.2);
    }

    .timer-badge.urgent {
      background: #ef4444;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.5rem 0.9rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      border: none;
      text-decoration: none;
    }

    .btn-pdf {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .btn-pdf:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .btn-submit {
      background: #10b981;
      color: #fff;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);
    }

    .btn-submit:hover {
      background: #059669;
      transform: translateY(-1px);
    }

    /* Layout */
    .main-layout {
      max-width: 1240px;
      margin: 1.5rem auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 1.5rem;
      align-items: start;
    }

    @media (max-width: 960px) {
      .main-layout {
        grid-template-columns: 1fr;
      }
    }

    /* Candidate Info & Learning Mode Banner */
    .mode-banner {
      background: linear-gradient(135deg, #ecfdf5 0%, #eff6ff 100%);
      border: 1.5px solid #a7f3d0;
      border-radius: 0.75rem;
      padding: 1rem 1.25rem;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    .mode-banner-text h3 {
      font-size: 0.95rem;
      font-weight: 800;
      color: #065f46;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .mode-banner-text p {
      font-size: 0.85rem;
      color: #047857;
      margin-top: 0.15rem;
    }

    .candidate-card {
      background: #fff;
      border-radius: 0.75rem;
      padding: 1rem 1.25rem;
      border: 1px solid var(--slate-200);
      margin-bottom: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .candidate-inputs {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      flex-grow: 1;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .input-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--slate-700);
    }

    .input-group input {
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--slate-300);
      border-radius: 0.375rem;
      font-size: 0.875rem;
      outline: none;
      font-family: inherit;
    }

    .input-group input:focus {
      border-color: var(--primary-light);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }

    /* Question Cards */
    .question-card {
      background: #fff;
      border-radius: 0.85rem;
      padding: 1.5rem;
      border: 1.5px solid var(--slate-200);
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      transition: all 0.2s;
      scroll-margin-top: 85px;
    }

    .question-card:hover {
      border-color: var(--slate-300);
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .question-card.active-focus {
      border-color: var(--primary-light);
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
    }

    .question-card.state-correct {
      border-color: #10b981;
      border-left: 6px solid #10b981;
    }

    .question-card.state-wrong {
      border-color: #ef4444;
      border-left: 6px solid #ef4444;
    }

    .q-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .chapter-tag {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--primary);
      background: var(--primary-subtle);
      padding: 0.25rem 0.7rem;
      border-radius: 9999px;
    }

    .q-status-badge {
      display: none;
      font-size: 0.8rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      animation: popIn 0.3s ease;
    }

    @keyframes popIn {
      0% { transform: scale(0.85); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    .q-status-badge.badge-correct {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }

    .q-status-badge.badge-wrong {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }

    .q-title-row {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .q-number-pill {
      background: var(--slate-800);
      color: #fff;
      font-weight: 800;
      font-size: 0.95rem;
      min-width: 2.2rem;
      height: 2.2rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s;
    }

    .question-card.state-correct .q-number-pill {
      background: #059669;
    }

    .question-card.state-wrong .q-number-pill {
      background: #dc2626;
    }

    .q-text-wrapper {
      flex-grow: 1;
    }

    .q-text-bm {
      font-size: 1.025rem;
      font-weight: 600;
      color: var(--slate-900);
      margin-bottom: 0.25rem;
    }

    .q-text-en {
      font-size: 0.925rem;
      font-style: italic;
      color: var(--slate-500);
      margin-bottom: 0.75rem;
    }

    .diagram-container {
      margin: 1rem 0;
      text-align: center;
      background: #fafafa;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--slate-200);
    }

    /* Option Cards */
    .options-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.6rem;
      margin-top: 1rem;
    }

    @media (min-width: 640px) {
      .options-list.grid-2 {
        grid-template-columns: 1fr 1fr;
      }
    }

    .option-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border: 1.5px solid var(--slate-200);
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      background: #fff;
      position: relative;
    }

    .option-card:hover {
      border-color: var(--primary-light);
      background: #f8fafc;
    }

    .option-card.selected {
      border-color: var(--primary);
      background: var(--primary-subtle);
    }

    .option-card.opt-correct {
      border-color: #10b981 !important;
      background: #ecfdf5 !important;
    }

    .option-card.opt-wrong {
      border-color: #ef4444 !important;
      background: #fef2f2 !important;
    }

    .opt-indicator {
      width: 1.85rem;
      height: 1.85rem;
      border-radius: 50%;
      border: 1.5px solid var(--slate-300);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--slate-700);
      flex-shrink: 0;
      transition: all 0.15s;
    }

    .option-card.selected .opt-indicator {
      background: var(--primary);
      border-color: var(--primary);
      color: #fff;
    }

    .option-card.opt-correct .opt-indicator {
      background: #10b981 !important;
      border-color: #10b981 !important;
      color: #fff !important;
    }

    .option-card.opt-wrong .opt-indicator {
      background: #ef4444 !important;
      border-color: #ef4444 !important;
      color: #fff !important;
    }

    .opt-label {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--slate-800);
      flex-grow: 1;
    }

    .opt-feedback-tag {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.15rem 0.5rem;
      border-radius: 9999px;
      margin-left: 0.5rem;
    }

    .opt-feedback-tag.tag-correct {
      background: #d1fae5;
      color: #065f46;
    }

    .opt-feedback-tag.tag-wrong {
      background: #fee2e2;
      color: #991b1b;
    }

    /* Educational Tutorial Card */
    .teaching-box {
      display: none;
      margin-top: 1.25rem;
      background: #fdfefe;
      border: 1.5px solid #bfdbfe;
      border-radius: 0.75rem;
      padding: 1.25rem;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .teaching-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1.5px solid #dbeafe;
    }

    .teaching-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: #1e40af;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .teaching-badge-result {
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
    }

    .teach-section {
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .teach-section:last-child {
      margin-bottom: 0;
    }

    .teach-section h5 {
      font-size: 0.825rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #3b82f6;
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .teach-content {
      background: #f8fafc;
      padding: 0.65rem 0.85rem;
      border-radius: 0.5rem;
      border: 1px solid #e2e8f0;
      color: #1e293b;
    }

    .teach-tip {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      color: #92400e;
      padding: 0.65rem 0.85rem;
      border-radius: 0.5rem;
      font-size: 0.85rem;
    }

    /* Sidebar Navigation */
    .sticky-sidebar {
      position: sticky;
      top: 5.5rem;
      background: #fff;
      border-radius: 0.75rem;
      padding: 1.25rem;
      border: 1px solid var(--slate-200);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--slate-200);
    }

    .sidebar-header h3 {
      font-size: 0.95rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    .progress-stats {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary);
    }

    .progress-bar-bg {
      height: 6px;
      background: var(--slate-200);
      border-radius: 9999px;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .progress-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      width: 0%;
      transition: width 0.3s ease;
    }

    .nav-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.4rem;
      max-height: 380px;
      overflow-y: auto;
      padding-right: 0.25rem;
    }

    .nav-btn {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      border: 1.5px solid var(--slate-300);
      border-radius: 0.375rem;
      background: #fff;
      cursor: pointer;
      transition: all 0.15s;
      position: relative;
    }

    .nav-btn:hover {
      border-color: var(--primary);
      background: var(--slate-100);
    }

    .nav-btn.answered-correct {
      background: #10b981;
      color: #fff;
      border-color: #10b981;
    }

    .nav-btn.answered-wrong {
      background: #ef4444;
      color: #fff;
      border-color: #ef4444;
    }

    .nav-btn.answered-neutral {
      background: #2563eb;
      color: #fff;
      border-color: #2563eb;
    }

    .sidebar-legend {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--slate-200);
      font-size: 0.75rem;
      color: var(--slate-500);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .dot-unanswered { background: var(--slate-300); }
    .dot-correct { background: #10b981; }
    .dot-wrong { background: #ef4444; }

    /* Results Dashboard */
    .results-section {
      display: none;
      animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-scorecard {
      background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
      color: #fff;
      border-radius: 1rem;
      padding: 2.5rem 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
      box-shadow: 0 10px 25px rgba(30, 58, 138, 0.2);
    }

    .score-circle {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: 4px solid #60a5fa;
      margin: 1rem auto;
    }

    .score-big {
      font-size: 2.75rem;
      font-weight: 800;
      line-height: 1;
    }

    .score-max {
      font-size: 0.9rem;
      color: #93c5fd;
      font-weight: 600;
    }

    .grade-badge {
      display: inline-block;
      padding: 0.4rem 1.25rem;
      border-radius: 9999px;
      font-size: 1.15rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      margin-top: 0.75rem;
    }

    .grade-A-plus { background: #10b981; color: #fff; }
    .grade-A { background: #059669; color: #fff; }
    .grade-B { background: #3b82f6; color: #fff; }
    .grade-C { background: #f59e0b; color: #fff; }
    .grade-D { background: #f97316; color: #fff; }
    .grade-E { background: #ef4444; color: #fff; }

    /* Chapter Analysis */
    .analysis-card {
      background: #fff;
      border-radius: 0.75rem;
      padding: 1.5rem;
      border: 1px solid var(--slate-200);
      margin-bottom: 2rem;
    }

    .analysis-card h3 {
      font-size: 1.15rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: var(--slate-800);
    }

    .chapter-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .chapter-name {
      flex: 1;
      font-weight: 600;
      color: var(--slate-700);
    }

    .chapter-bar-container {
      flex: 1.5;
      height: 8px;
      background: var(--slate-100);
      border-radius: 9999px;
      overflow: hidden;
    }

    .chapter-bar-val {
      height: 100%;
      background: #3b82f6;
      border-radius: 9999px;
    }

    .chapter-score-text {
      width: 50px;
      text-align: right;
      font-weight: 700;
    }

    /* Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 50;
      padding: 1rem;
    }

    .modal-box {
      background: #fff;
      border-radius: 1rem;
      padding: 1.75rem;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
      text-align: center;
    }

    .modal-box h3 {
      font-size: 1.25rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    .modal-box p {
      font-size: 0.95rem;
      color: var(--slate-500);
      margin-bottom: 1.5rem;
    }

    .modal-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .tree-grid {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="header-container">
      <div class="header-brand">
        <h1>📐 MATEMATIK TINGKATAN 4 (1449/1)</h1>
        <p>Peperiksaan Akhir Tahun &bull; Mod Pembelajaran &amp; Kuiz Interaktif</p>
      </div>

      <div class="header-tools">
        <!-- Learning mode toggle -->
        <button class="mode-toggle-btn active-learn" id="modeToggleBtn" onclick="toggleLearningMode()">
          <span id="modeIcon">🎓</span> <span id="modeText">Mod Belajar (Aktif)</span>
        </button>

        <div class="timer-badge" id="examTimer">
          ⏱️ <span id="timerText">01:30:00</span>
        </div>
        <a href="Kertas_1_Matematik_Tingkatan_4.pdf" target="_blank" class="btn btn-pdf" download>
          📄 Muat Turun PDF
        </a>
        <button id="submitBtnHeader" class="btn btn-submit" onclick="confirmSubmit()">
          ✓ Hantar Jawapan
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN EXAM VIEW -->
  <main class="main-layout" id="examView">
    <!-- Questions Column -->
    <div class="questions-column">
      
      <!-- Interactive Learning Banner -->
      <div class="mode-banner" id="modeBanner">
        <div class="mode-banner-text">
          <h3>🎓 Mod Belajar &amp; Bimbingan Interaktif Diaktifkan!</h3>
          <p>Setiap kali anda klik jawapan, sistem akan terus memaklumkan sama ada jawapan anda <b>Betul</b> atau <b>Salah</b>, memaparkan jawapan sebenar, serta memberi jalan kerja dan petua menyelesaikan soalan!</p>
        </div>
      </div>

      <!-- Candidate Details -->
      <div class="candidate-card">
        <div class="candidate-inputs">
          <div class="input-group">
            <label for="studentName">Nama Calon:</label>
            <input type="text" id="studentName" placeholder="Masukkan nama anda..." />
          </div>
          <div class="input-group">
            <label for="studentClass">Kelas:</label>
            <input type="text" id="studentClass" placeholder="Contoh: 4 Sains 1" style="width: 140px;" />
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--slate-500);">
          <b>Masa:</b> 1 Jam 30 Minit | <b>Markah Penuh:</b> 40
        </div>
      </div>

      <!-- Question List Container -->
      <div id="questionsContainer"></div>

      <!-- Bottom Submit Button -->
      <div style="text-align: center; margin: 2.5rem 0;">
        <button class="btn btn-submit" style="font-size: 1.1rem; padding: 0.85rem 2.5rem;" onclick="confirmSubmit()">
          ✓ Tamat &amp; Lihat Laporan Prestasi Keseluruhan
        </button>
      </div>
    </div>

    <!-- Sticky Navigation Palette -->
    <aside class="sticky-sidebar">
      <div class="sidebar-header">
        <h3>Peta Soalan</h3>
        <span class="progress-stats" id="progressCount">0 / 40</span>
      </div>

      <div class="progress-bar-bg">
        <div class="progress-bar-fill" id="progressBar"></div>
      </div>

      <div class="nav-grid" id="navGrid"></div>

      <div class="sidebar-legend">
        <div class="legend-item"><span class="dot dot-unanswered"></span> Belum</div>
        <div class="legend-item"><span class="dot dot-correct"></span> Betul</div>
        <div class="legend-item"><span class="dot dot-wrong"></span> Salah</div>
      </div>
    </aside>
  </main>

  <!-- RESULTS DASHBOARD VIEW -->
  <section class="results-section" id="resultsView" style="max-width: 900px; margin: 2rem auto; padding: 0 1rem;">
    <!-- Scorecard -->
    <div class="hero-scorecard">
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.25rem;">KEPUTUSAN PEPERIKSAAN MATEMATIK</h2>
      <p style="color: #93c5fd; font-size: 0.95rem;" id="resStudentInfo">Calon: -</p>

      <div class="score-circle">
        <span class="score-big" id="scoreDisplay">0</span>
        <span class="score-max">/ 40 Markah</span>
      </div>

      <div>
        <div class="grade-badge" id="gradeBadge">GRED: -</div>
      </div>

      <div style="display:flex; justify-content:center; gap:2rem; margin-top:1.5rem; font-size:0.95rem; color:#cbd5e1;">
        <div><b>Peratusan:</b> <span id="resPercent">0%</span></div>
        <div><b>Masa Digunakan:</b> <span id="resTimeUsed">-</span></div>
        <div><b>Status:</b> <span id="resStatus" style="font-weight:700;">-</span></div>
      </div>

      <div style="margin-top: 1.75rem; display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-pdf" onclick="retakeExam()">🔄 Uji Semula (Retake)</button>
        <a href="Kertas_1_Matematik_Tingkatan_4.pdf" target="_blank" class="btn btn-submit" download>📥 Muat Turun Kertas PDF</a>
        <button class="btn btn-pdf" onclick="window.print()">🖨️ Cetak Keputusan</button>
      </div>
    </div>

    <!-- Chapter Breakdown -->
    <div class="analysis-card">
      <h3>Analisis Prestasi Mengikut Bab (Bab 1 &ndash; 10)</h3>
      <div id="chapterAnalysisList"></div>
    </div>

    <!-- Review Section Header -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <h3 style="font-size:1.25rem; font-weight:800;">Semakan Keseluruhan Semua Soalan</h3>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn btn-pdf" style="color:var(--slate-800); border-color:var(--slate-300);" onclick="filterReview('all')">Semua (40)</button>
        <button class="btn btn-pdf" style="color:var(--success); border-color:var(--success);" onclick="filterReview('correct')">Betul Sahaja</button>
        <button class="btn btn-pdf" style="color:var(--danger); border-color:var(--danger);" onclick="filterReview('wrong')">Salah Sahaja</button>
      </div>
    </div>

    <!-- Reviewed Questions List -->
    <div id="reviewedQuestionsContainer"></div>
  </section>

  <!-- CONFIRM SUBMISSION MODAL -->
  <div class="modal-overlay" id="confirmModal">
    <div class="modal-box">
      <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📝</div>
      <h3>Tamatkan Peperiksaan &amp; Jana Keputusan?</h3>
      <p id="modalMsg">Adakah anda bersedia untuk menamatkan sesi ini dan melihat analisis penuh?</p>
      <div class="modal-buttons">
        <button class="btn btn-pdf" style="color: var(--slate-700); border-color: var(--slate-300);" onclick="closeModal()">
          Batal &amp; Teruskan Belajar
        </button>
        <button class="btn btn-submit" onclick="submitExam()">
          Ya, Tamatkan Sekarang
        </button>
      </div>
    </div>
  </div>

  <script>
    const questionsData = ${questionsJson};

    // State
    const userAnswers = {};
    let isLearningMode = true; // Default: instant feedback & teaching enabled!
    let timeLeft = 90 * 60; // 90 minutes
    let timerInterval = null;
    let examSubmitted = false;

    // Initialize Questions on DOM Load
    window.addEventListener('DOMContentLoaded', () => {
      renderQuestions();
      renderNavGrid();
      startTimer();
    });

    function toggleLearningMode() {
      isLearningMode = !isLearningMode;
      const btn = document.getElementById('modeToggleBtn');
      const text = document.getElementById('modeText');
      const banner = document.getElementById('modeBanner');

      if (isLearningMode) {
        btn.classList.add('active-learn');
        text.innerText = 'Mod Belajar (Aktif)';
        banner.style.display = 'flex';
      } else {
        btn.classList.remove('active-learn');
        text.innerText = 'Mod Peperiksaan Sahaja';
        banner.style.display = 'none';
      }

      // Re-apply visual states according to mode
      questionsData.forEach(q => {
        if (userAnswers[q.num]) {
          applyQuestionFeedback(q.num, userAnswers[q.num]);
        }
      });
    }

    function renderQuestions() {
      const container = document.getElementById('questionsContainer');
      container.innerHTML = '';

      questionsData.forEach(q => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = 'qcard-' + q.num;

        const isSingleCol = q.options.some(opt => opt.text.length > 40);

        card.innerHTML = \`
          <div class="q-top-row">
            <span class="chapter-tag">\${q.chapter}</span>
            <span class="q-status-badge" id="statusBadge-\${q.num}"></span>
          </div>

          <div class="q-title-row">
            <div class="q-number-pill" id="pill-\${q.num}">\${q.num}</div>
            <div class="q-text-wrapper">
              <div class="q-text-bm">\${q.bm}</div>
              <div class="q-text-en">\${q.en}</div>
            </div>
          </div>

          \${q.diagram ? \`<div class="diagram-container">\${q.diagram}</div>\` : ''}

          <div class="options-list \${isSingleCol ? '' : 'grid-2'}">
            \${q.options.map(opt => \`
              <div class="option-card" id="optCard-\${q.num}-\${opt.key}" onclick="chooseOption(\${q.num}, '\${opt.key}')">
                <div class="opt-indicator">\${opt.key}</div>
                <div class="opt-label">\${opt.text}</div>
                <span class="opt-feedback-tag" id="optFeedback-\${q.num}-\${opt.key}" style="display:none;"></span>
              </div>
            \`).join('')}
          </div>

          <!-- Educational Teaching Box (Expands when answered in Learning Mode) -->
          <div class="teaching-box" id="teachBox-\${q.num}">
            <div class="teaching-header">
              <div class="teaching-title">
                <span>💡 Bimbingan Guru &amp; Langkah Penyelesaian</span>
              </div>
              <span class="teaching-badge-result" id="teachBadge-\${q.num}"></span>
            </div>

            <div class="teach-section">
              <h5>🎯 Konsep Asas &amp; Rumus Berkaitan:</h5>
              <div class="teach-content">\${q.concept}</div>
            </div>

            <div class="teach-section">
              <h5>📝 Langkah Demi Langkah Pengiraan:</h5>
              <div class="teach-content">\${q.stepByStep}</div>
            </div>

            <div class="teach-section">
              <h5>⚠️ Petua Peperiksaan &amp; Kesilapan Lazim:</h5>
              <div class="teach-tip"><strong>Tip Peperiksaan:</strong> \${q.tip}</div>
            </div>
          </div>
        \`;

        container.appendChild(card);
      });
    }

    function renderNavGrid() {
      const grid = document.getElementById('navGrid');
      grid.innerHTML = '';

      questionsData.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.id = 'navBtn-' + q.num;
        btn.innerText = q.num;
        btn.onclick = () => scrollToQuestion(q.num);
        grid.appendChild(btn);
      });
    }

    function scrollToQuestion(num) {
      const el = document.getElementById('qcard-' + num);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('active-focus');
        setTimeout(() => el.classList.remove('active-focus'), 1000);
      }
    }

    function chooseOption(qNum, key) {
      if (examSubmitted) return;

      userAnswers[qNum] = key;
      applyQuestionFeedback(qNum, key);
      updateProgress();
    }

    function applyQuestionFeedback(qNum, chosenKey) {
      const q = questionsData.find(item => item.num === qNum);
      const isCorrect = chosenKey === q.answer;
      const card = document.getElementById('qcard-' + qNum);
      const teachBox = document.getElementById('teachBox-' + qNum);
      const teachBadge = document.getElementById('teachBadge-' + qNum);
      const statusBadge = document.getElementById('statusBadge-' + qNum);
      const navBtn = document.getElementById('navBtn-' + qNum);

      // Reset option styles
      const options = ['A', 'B', 'C', 'D'];
      options.forEach(opt => {
        const optCard = document.getElementById(\`optCard-\${qNum}-\${opt}\`);
        const feedbackTag = document.getElementById(\`optFeedback-\${qNum}-\${opt}\`);
        optCard.classList.remove('selected', 'opt-correct', 'opt-wrong');
        feedbackTag.style.display = 'none';
        feedbackTag.className = 'opt-feedback-tag';
      });

      const selectedOptCard = document.getElementById(\`optCard-\${qNum}-\${chosenKey}\`);
      selectedOptCard.classList.add('selected');

      if (isLearningMode) {
        // INSTANT LEARNING FEEDBACK!
        if (isCorrect) {
          card.classList.remove('state-wrong');
          card.classList.add('state-correct');
          selectedOptCard.classList.add('opt-correct');

          const tag = document.getElementById(\`optFeedback-\${qNum}-\${chosenKey}\`);
          tag.innerText = '✓ Jawapan Tepat!';
          tag.classList.add('tag-correct');
          tag.style.display = 'inline-block';

          statusBadge.className = 'q-status-badge badge-correct';
          statusBadge.innerHTML = '✓ BETUL (+1)';
          statusBadge.style.display = 'inline-flex';

          teachBadge.innerText = '✓ Tahniah! Jawapan Tepat';
          teachBadge.style.background = '#d1fae5';
          teachBadge.style.color = '#065f46';

          if (navBtn) {
            navBtn.className = 'nav-btn answered-correct';
          }
        } else {
          card.classList.remove('state-correct');
          card.classList.add('state-wrong');
          selectedOptCard.classList.add('opt-wrong');

          const wrongTag = document.getElementById(\`optFeedback-\${qNum}-\${chosenKey}\`);
          wrongTag.innerText = '✗ Kurang Tepat';
          wrongTag.classList.add('tag-wrong');
          wrongTag.style.display = 'inline-block';

          // Reveal correct answer gently in green
          const correctOptCard = document.getElementById(\`optCard-\${qNum}-\${q.answer}\`);
          correctOptCard.classList.add('opt-correct');
          const correctTag = document.getElementById(\`optFeedback-\${qNum}-\${q.answer}\`);
          correctTag.innerText = '✓ Jawapan Sebenar';
          correctTag.classList.add('tag-correct');
          correctTag.style.display = 'inline-block';

          statusBadge.className = 'q-status-badge badge-wrong';
          statusBadge.innerHTML = '✗ SALAH &bull; Jawapan: ' + q.answer;
          statusBadge.style.display = 'inline-flex';

          teachBadge.innerText = '⚠️ Semak Jawapan Sebenar: (' + q.answer + ')';
          teachBadge.style.background = '#fee2e2';
          teachBadge.style.color = '#991b1b';

          if (navBtn) {
            navBtn.className = 'nav-btn answered-wrong';
          }
        }

        // Show teaching card
        teachBox.style.display = 'block';
      } else {
        // Exam mode: no immediate hints
        card.classList.remove('state-correct', 'state-wrong');
        teachBox.style.display = 'none';
        statusBadge.style.display = 'none';
        if (navBtn) {
          navBtn.className = 'nav-btn answered-neutral';
        }
      }
    }

    function updateProgress() {
      const answeredCount = Object.keys(userAnswers).length;
      document.getElementById('progressCount').innerText = \`\${answeredCount} / 40\`;
      const pct = (answeredCount / 40) * 100;
      document.getElementById('progressBar').style.width = pct + '%';
    }

    function startTimer() {
      const timerEl = document.getElementById('timerText');
      const badge = document.getElementById('examTimer');

      timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert("Masa peperiksaan telah tamat! Jawapan anda akan dihantar secara automatik.");
          submitExam();
          return;
        }

        timeLeft--;
        const hours = Math.floor(timeLeft / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;

        timerEl.innerText = \`\${String(hours).padStart(2, '0')}:\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;

        if (timeLeft < 10 * 60) {
          badge.classList.add('urgent');
        }
      }, 1000);
    }

    function confirmSubmit() {
      const modal = document.getElementById('confirmModal');
      const msg = document.getElementById('modalMsg');

      const answeredCount = Object.keys(userAnswers).length;
      const unAnswered = 40 - answeredCount;

      if (unAnswered > 0) {
        msg.innerHTML = \`<span style="color:#dc2626; font-weight:700;">Pemberitahuan:</span> Anda masih mempunyai <b>\${unAnswered} soalan</b> yang belum dijawab.<br>Adakah anda ingin menamatkan latihan sekarang untuk melihat analisis prestasi penuh?\`;
      } else {
        msg.innerText = "Tahniah! Anda telah menjawab kesemua 40 soalan. Adakah anda bersedia untuk menjana slip keputusan dan analisis bab?";
      }

      modal.style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('confirmModal').style.display = 'none';
    }

    function submitExam() {
      closeModal();
      clearInterval(timerInterval);
      examSubmitted = true;

      // Calculate score
      let score = 0;
      const chapterStats = {};

      questionsData.forEach(q => {
        const isCorrect = userAnswers[q.num] === q.answer;
        if (isCorrect) score++;

        if (!chapterStats[q.chapter]) {
          chapterStats[q.chapter] = { total: 0, correct: 0 };
        }
        chapterStats[q.chapter].total++;
        if (isCorrect) chapterStats[q.chapter].correct++;
      });

      // Hide exam view, show results
      document.getElementById('examView').style.display = 'none';
      document.getElementById('submitBtnHeader').style.display = 'none';
      const resultsView = document.getElementById('resultsView');
      resultsView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Populate results
      const studentName = document.getElementById('studentName').value.trim() || 'Calon Pelajar';
      const studentClass = document.getElementById('studentClass').value.trim() || '-';
      document.getElementById('resStudentInfo').innerText = \`Calon: \${studentName} | Kelas: \${studentClass}\`;

      document.getElementById('scoreDisplay').innerText = score;
      const percent = Math.round((score / 40) * 100);
      document.getElementById('resPercent').innerText = percent + '%';

      const timeUsedSeconds = (90 * 60) - timeLeft;
      const mUsed = Math.floor(timeUsedSeconds / 60);
      const sUsed = timeUsedSeconds % 60;
      document.getElementById('resTimeUsed').innerText = \`\${mUsed} min \${sUsed} saat\`;

      // Grade determination
      const badge = document.getElementById('gradeBadge');
      let grade = 'G';
      let status = 'PERLU ULANG KAJI';
      let gradeClass = 'grade-E';

      if (percent >= 85) { grade = 'A+ (Cemerlang Tertinggi)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A-plus'; }
      else if (percent >= 75) { grade = 'A (Cemerlang)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A'; }
      else if (percent >= 70) { grade = 'A- (Cemerlang)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A'; }
      else if (percent >= 65) { grade = 'B+ (Kepujian Tertinggi)'; status = 'KEPUJIAN'; gradeClass = 'grade-B'; }
      else if (percent >= 60) { grade = 'B (Kepujian Tinggi)'; status = 'KEPUJIAN'; gradeClass = 'grade-B'; }
      else if (percent >= 55) { grade = 'C+ (Kepujian Atas)'; status = 'KEPUJIAN'; gradeClass = 'grade-C'; }
      else if (percent >= 50) { grade = 'C (Kepujian)'; status = 'LULUS'; gradeClass = 'grade-C'; }
      else if (percent >= 45) { grade = 'D (Lulus Atas)'; status = 'LULUS'; gradeClass = 'grade-D'; }
      else if (percent >= 40) { grade = 'E (Lulus)'; status = 'LULUS'; gradeClass = 'grade-D'; }
      else { grade = 'G (Gagal)'; status = 'BELUM MENCAPAI TAHAP'; gradeClass = 'grade-E'; }

      badge.innerText = 'GRED: ' + grade;
      badge.className = 'grade-badge ' + gradeClass;
      document.getElementById('resStatus').innerText = status;

      // Chapter breakdown
      const chapList = document.getElementById('chapterAnalysisList');
      chapList.innerHTML = '';
      Object.keys(chapterStats).forEach(ch => {
        const item = chapterStats[ch];
        const chPct = Math.round((item.correct / item.total) * 100);
        const row = document.createElement('div');
        row.className = 'chapter-row';
        row.innerHTML = \`
          <span class="chapter-name">\${ch}</span>
          <div class="chapter-bar-container">
            <div class="chapter-bar-val" style="width: \${chPct}%; background: \${chPct >= 75 ? '#10b981' : chPct >= 50 ? '#3b82f6' : '#ef4444'};"></div>
          </div>
          <span class="chapter-score-text">\${item.correct} / \${item.total}</span>
        \`;
        chapList.appendChild(row);
      });

      // Render reviewed questions
      renderFinalReviewCards();
    }

    function renderFinalReviewCards() {
      const container = document.getElementById('reviewedQuestionsContainer');
      container.innerHTML = '';

      questionsData.forEach(q => {
        const userChoice = userAnswers[q.num];
        const isCorrect = userChoice === q.answer;

        const card = document.createElement('div');
        card.className = 'question-card ' + (isCorrect ? 'state-correct' : 'state-wrong');
        card.dataset.status = isCorrect ? 'correct' : 'wrong';

        card.innerHTML = \`
          <div class="q-top-row">
            <span class="chapter-tag">\${q.chapter}</span>
            <span style="font-weight:700; font-size:0.85rem; color: \${isCorrect ? '#059669' : '#dc2626'};">
              \${isCorrect ? '✓ JAWAPAN BETUL (+1)' : '✗ JAWAPAN SALAH (0)'}
            </span>
          </div>

          <div class="q-title-row">
            <div class="q-number-pill" style="background: \${isCorrect ? '#059669' : '#dc2626'};">\${q.num}</div>
            <div class="q-text-wrapper">
              <div class="q-text-bm">\${q.bm}</div>
              <div class="q-text-en">\${q.en}</div>
            </div>
          </div>

          \${q.diagram ? \`<div class="diagram-container">\${q.diagram}</div>\` : ''}

          <div class="options-list">
            \${q.options.map(opt => {
              let optClass = '';
              let badge = '';
              if (opt.key === q.answer) {
                optClass = 'opt-correct';
                badge = ' <b style="color:#059669;">(✓ Jawapan Sebenar)</b>';
              } else if (opt.key === userChoice && !isCorrect) {
                optClass = 'opt-wrong';
                badge = ' <b style="color:#dc2626;">(✗ Pilihan Anda)</b>';
              }
              return \`
                <div class="option-card \${optClass}" style="cursor:default;">
                  <div class="opt-indicator">\${opt.key}</div>
                  <div class="opt-label">\${opt.text} \${badge}</div>
                </div>
              \`;
            }).join('')}
          </div>

          <div class="teaching-box" style="display:block; margin-top:1rem;">
            <div class="teaching-header">
              <div class="teaching-title"><span>💡 Penerangan Konsep &amp; Jalan Kerja Lengkap</span></div>
            </div>
            <div class="teach-section">
              <h5>🎯 Konsep Asas:</h5>
              <div class="teach-content">\${q.concept}</div>
            </div>
            <div class="teach-section">
              <h5>📝 Langkah Demi Langkah:</h5>
              <div class="teach-content">\${q.stepByStep}</div>
            </div>
            <div class="teach-section">
              <h5>⚠️ Tip Penting:</h5>
              <div class="teach-tip">\${q.tip}</div>
            </div>
          </div>
        \`;

        container.appendChild(card);
      });
    }

    function filterReview(type) {
      const cards = document.querySelectorAll('#reviewedQuestionsContainer .question-card');
      cards.forEach(c => {
        if (type === 'all') {
          c.style.display = 'block';
        } else if (type === 'correct') {
          c.style.display = c.dataset.status === 'correct' ? 'block' : 'none';
        } else if (type === 'wrong') {
          c.style.display = c.dataset.status === 'wrong' ? 'block' : 'none';
        }
      });
    }

    function retakeExam() {
      if (confirm("Adakah anda ingin mengulangi sesi latihan ini semula? Semua pilihan semasa akan ditetapkan semula.")) {
        location.reload();
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtmlContent, 'utf8');
console.log("Interactive Learning website generated successfully at: " + path.join(__dirname, 'index.html'));
