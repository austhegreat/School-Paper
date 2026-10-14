const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputDir = __dirname;
const htmlPath = path.join(outputDir, 'Modul_Bab_1_Fungsi_Kuadratik_Tingkatan_4.html');
const pdfPath = path.join(outputDir, 'Modul_Bab_1_Fungsi_Kuadratik_Tingkatan_4.pdf');

// Helpers for SVGs specific to Chapter 1
function svgWidthComparison() {
  return `
  <svg width="250" height="135" viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="105" x2="230" y2="105" stroke="#0f172a" stroke-width="1.3"/>
    <text x="235" y="108" font-size="10" font-family="Times New Roman">x</text>
    <line x1="125" y1="125" x2="125" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="120" y="12" font-size="10" font-family="Times New Roman">y</text>
    <text x="115" y="116" font-size="9" font-family="Times New Roman">O</text>
    <!-- Wider parabola f(x) = ax^2 -->
    <path d="M 45 35 Q 125 155 205 35" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <text x="195" y="30" font-size="9.5" font-family="Times New Roman" fill="#2563eb">f(x) = ax²</text>
    <!-- Narrower parabola g(x) = bx^2 -->
    <path d="M 75 35 Q 125 140 175 35" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="145" y="25" font-size="9.5" font-family="Times New Roman" fill="#dc2626">g(x) = bx²</text>
  </svg>`;
}

function svgSymmetryRoots() {
  return `
  <svg width="260" height="130" viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="90" x2="240" y2="90" stroke="#0f172a" stroke-width="1.3"/>
    <text x="245" y="93" font-size="10" font-family="Times New Roman">x</text>
    <line x1="75" y1="120" x2="75" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="70" y="12" font-size="10" font-family="Times New Roman">y</text>
    <text x="65" y="101" font-size="9" font-family="Times New Roman">O</text>
    <!-- Parabola passing through (-2, 0) at x=50, (6, 0) at x=190, vertex at x=120, y=115 -->
    <path d="M 35 60 Q 120 150 205 60" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
    <!-- Axis of symmetry at x = 120 -->
    <line x1="120" y1="20" x2="120" y2="115" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="50" cy="90" r="3" fill="#0f172a"/>
    <text x="35" y="85" font-size="9.5" font-family="Times New Roman">(&minus;2, 0)</text>
    <circle cx="190" cy="90" r="3" fill="#0f172a"/>
    <text x="180" y="85" font-size="9.5" font-family="Times New Roman">(6, 0)</text>
    <text x="112" y="15" font-size="9.5" font-weight="bold" font-family="Times New Roman">x = ?</text>
  </svg>`;
}

function svgVerticalShift() {
  return `
  <svg width="250" height="135" viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="70" x2="230" y2="70" stroke="#0f172a" stroke-width="1.3"/>
    <text x="235" y="73" font-size="10" font-family="Times New Roman">x</text>
    <line x1="125" y1="125" x2="125" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="120" y="12" font-size="10" font-family="Times New Roman">y</text>
    <!-- Curve 1: vertex at (125, 95) => c = -3 -->
    <path d="M 65 35 Q 125 135 185 35" fill="none" stroke="#64748b" stroke-width="1.6"/>
    <circle cx="125" cy="95" r="2.5" fill="#64748b"/><text x="130" y="98" font-size="8.5" font-family="Times New Roman">&minus;3</text>
    <!-- Curve 2: shifted up to (125, 45) => c = +5 -->
    <path d="M 65 15 Q 125 65 185 15" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <circle cx="125" cy="45" r="2.5" fill="#2563eb"/><text x="130" y="47" font-size="8.5" font-family="Times New Roman">5</text>
    <!-- Arrow indicating shift -->
    <line x1="125" y1="90" x2="125" y2="52" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="2 2"/>
  </svg>`;
}

function svgParabolaVertexIntercepts() {
  return `
  <svg width="250" height="135" viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="65" x2="230" y2="65" stroke="#0f172a" stroke-width="1.3"/>
    <text x="235" y="68" font-size="10" font-family="Times New Roman">x</text>
    <line x1="125" y1="125" x2="125" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="120" y="12" font-size="10" font-family="Times New Roman">y</text>
    <path d="M 65 20 Q 125 140 185 20" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
    <circle cx="85" cy="65" r="2.8" fill="#0f172a"/><text x="73" y="60" font-size="9" font-family="Times New Roman">&minus;2</text>
    <circle cx="165" cy="65" r="2.8" fill="#0f172a"/><text x="168" y="60" font-size="9" font-family="Times New Roman">2</text>
    <circle cx="125" cy="105" r="3" fill="#dc2626"/><text x="131" y="108" font-size="9" font-weight="bold" font-family="Times New Roman">&minus;4</text>
  </svg>`;
}

function svgParabolaRootsNegative() {
  return `
  <svg width="250" height="135" viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="95" x2="230" y2="95" stroke="#0f172a" stroke-width="1.3"/>
    <text x="235" y="98" font-size="10" font-family="Times New Roman">x</text>
    <line x1="90" y1="125" x2="90" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="85" y="12" font-size="10" font-family="Times New Roman">y</text>
    <text x="80" y="105" font-size="9" font-family="Times New Roman">O</text>
    <!-- Inverted parabola cutting x at -2 (x=60), 4 (x=160), peak at (1, 9) => x=110, y=35 -->
    <path d="M 45 115 Q 110 -15 175 115" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
    <circle cx="60" cy="95" r="2.8" fill="#0f172a"/><text x="48" y="90" font-size="9" font-family="Times New Roman">&minus;2</text>
    <circle cx="160" cy="95" r="2.8" fill="#0f172a"/><text x="163" y="90" font-size="9" font-family="Times New Roman">4</text>
    <circle cx="90" cy="40" r="2.5" fill="#0f172a"/><text x="95" y="44" font-size="8.5" font-family="Times New Roman">8</text>
  </svg>`;
}

function svgTouchingXAxis() {
  return `
  <svg width="250" height="130" viewBox="0 0 250 130" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="20" y1="90" x2="230" y2="90" stroke="#0f172a" stroke-width="1.3"/>
    <text x="235" y="93" font-size="10" font-family="Times New Roman">x</text>
    <line x1="75" y1="120" x2="75" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="70" y="12" font-size="10" font-family="Times New Roman">y</text>
    <text x="65" y="100" font-size="9" font-family="Times New Roman">O</text>
    <!-- Parabola touching x-axis tangentially at (135, 90) -->
    <path d="M 85 25 Q 135 155 185 25" fill="none" stroke="#059669" stroke-width="2"/>
    <circle cx="135" cy="90" r="3.5" fill="#047857"/>
    <text x="125" y="106" font-size="9.5" font-weight="bold" font-family="Times New Roman">x = 3</text>
    <text x="150" y="45" font-size="9" font-style="italic" fill="#047857" font-family="Times New Roman">b² &minus; 4ac = 0</text>
  </svg>`;
}

function svgProjectileHeight() {
  return `
  <svg width="260" height="140" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="35" y1="110" x2="245" y2="110" stroke="#0f172a" stroke-width="1.3"/>
    <text x="225" y="124" font-size="9.5" font-family="Times New Roman">t (saat / s)</text>
    <line x1="45" y1="120" x2="45" y2="15" stroke="#0f172a" stroke-width="1.3"/>
    <text x="35" y="12" font-size="9.5" font-family="Times New Roman">h (m)</text>
    <text x="35" y="118" font-size="9" font-family="Times New Roman">O</text>
    <!-- Projectile trajectory: from (45, 110) to peak (125, 30) to landing (205, 110) -->
    <path d="M 45 110 Q 125 -45 205 110" fill="none" stroke="#2563eb" stroke-width="2"/>
    <line x1="125" y1="110" x2="125" y2="30" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="45" y1="30" x2="125" y2="30" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="125" cy="30" r="3" fill="#1e3a8a"/>
    <text x="130" y="28" font-size="9" font-weight="bold" font-family="Times New Roman">(3, 45)</text>
    <text x="122" y="122" font-size="9" font-family="Times New Roman">3</text>
    <text x="202" y="122" font-size="9" font-family="Times New Roman">6</text>
    <text x="30" y="34" font-size="9" font-family="Times New Roman">45</text>
  </svg>`;
}

function svgDiverTrajectory() {
  return `
  <svg width="250" height="135" viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <line x1="30" y1="105" x2="235" y2="105" stroke="#0284c7" stroke-width="1.5"/>
    <text x="180" y="118" font-size="8.5" fill="#0369a1" font-family="Times New Roman">Paras air / Water surface</text>
    <line x1="45" y1="120" x2="45" y2="20" stroke="#0f172a" stroke-width="1.3"/>
    <text x="35" y="15" font-size="9" font-family="Times New Roman">h(t)</text>
    <!-- Diver starts at (45, 75) => h=3, peaks at (90, 50) => h=4 at t=1, lands at (180, 105) => t=3 -->
    <path d="M 45 75 Q 90 25 180 105" fill="none" stroke="#d97706" stroke-width="2"/>
    <circle cx="45" cy="75" r="3" fill="#b45309"/>
    <text x="28" y="78" font-size="9" font-weight="bold" font-family="Times New Roman">3 m</text>
    <circle cx="180" cy="105" r="2.8" fill="#0284c7"/>
    <text x="175" y="120" font-size="9" font-family="Times New Roman">3 s</text>
  </svg>`;
}

function svgRightTriangle() {
  return `
  <svg width="230" height="125" viewBox="0 0 230 125" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <!-- Triangle vertices at (40, 105), (170, 105), (40, 25) -->
    <polygon points="40,105 170,105 40,25" fill="#f8fafc" stroke="#1e293b" stroke-width="1.6"/>
    <!-- Right angle marker -->
    <rect x="40" y="93" width="12" height="12" fill="none" stroke="#1e293b" stroke-width="1.2"/>
    <text x="12" y="70" font-size="9.5" font-family="Times New Roman">x cm</text>
    <text x="90" y="118" font-size="9.5" font-family="Times New Roman">(x + 2) cm</text>
    <text x="115" y="60" font-size="9.5" font-family="Times New Roman">(x + 4) cm</text>
  </svg>`;
}

function svgGardenPath() {
  return `
  <svg width="240" height="135" viewBox="0 0 240 135" xmlns="http://www.w3.org/2000/svg" class="exam-diagram">
    <!-- Outer walkway -->
    <rect x="25" y="15" width="190" height="105" fill="#e2e8f0" stroke="#475569" stroke-width="1.4" rx="2"/>
    <!-- Inner pool -->
    <rect x="55" y="35" width="130" height="65" fill="#bae6fd" stroke="#0284c7" stroke-width="1.4"/>
    <text x="95" y="72" font-size="9.5" font-weight="bold" fill="#0369a1" font-family="Times New Roman">Kolam / Pool<br>10 m &times; 6 m</text>
    <!-- Width indicators -->
    <text x="36" y="72" font-size="9" font-weight="bold" fill="#dc2626" font-family="Times New Roman">x</text>
    <text x="195" y="72" font-size="9" font-weight="bold" fill="#dc2626" font-family="Times New Roman">x</text>
    <text x="115" y="27" font-size="9" font-weight="bold" fill="#dc2626" font-family="Times New Roman">x</text>
    <text x="115" y="113" font-size="9" font-weight="bold" fill="#dc2626" font-family="Times New Roman">x</text>
  </svg>`;
}

// 30 Chapter 1 Exam Questions
const questions = [
  {
    num: 1,
    bm: `Antara ungkapan berikut, yang manakah merupakan suatu <b>ungkapan kuadratik dalam satu pemboleh ubah</b>?`,
    en: `Which of the following expressions is a <b>quadratic expression in one variable</b>?`,
    diagram: "",
    options: [
      { key: "A", text: "3<i>x</i><sup>2</sup> &minus; 5<i>x</i> + 2" },
      { key: "B", text: "2<i>x</i><sup>3</sup> &minus; 4<i>x</i> + 1" },
      { key: "C", text: "<i>x</i><sup>2</sup> + 2<i>y</i> &minus; 5" },
      { key: "D", text: "<sup>2</sup>/<sub><i>x</i><sup>2</sup></sub> + 3<i>x</i> &minus; 1" }
    ],
    answer: "A",
    solution: "Ungkapan kuadratik dalam satu pemboleh ubah mesti mempunyai satu pemboleh ubah dengan kuasa tertinggi 2: 3x² &minus; 5x + 2. Pilihan B berkuasa 3, C mempunyai dua pemboleh ubah, D mempunyai kuasa negatif (&minus;2)."
  },
  {
    num: 2,
    bm: `Ungkapkan persamaan kuadratik 2<i>x</i>(<i>x</i> &minus; 3) = 5 &minus; <i>x</i> dalam bentuk am <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 dan nyatakan nilai <i>a</i>, <i>b</i> dan <i>c</i>.`,
    en: `Express 2<i>x</i>(<i>x</i> &minus; 3) = 5 &minus; <i>x</i> in general form <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 and state values of <i>a</i>, <i>b</i> and <i>c</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>a</i> = 2, <i>b</i> = &minus;5, <i>c</i> = &minus;5" },
      { key: "B", text: "<i>a</i> = 2, <i>b</i> = &minus;7, <i>c</i> = 5" },
      { key: "C", text: "<i>a</i> = 2, <i>b</i> = &minus;6, <i>c</i> = &minus;5" },
      { key: "D", text: "<i>a</i> = 2, <i>b</i> = 5, <i>c</i> = 5" }
    ],
    answer: "A",
    solution: "2x(x &minus; 3) = 5 &minus; x &rArr; 2x² &minus; 6x = 5 &minus; x &rArr; 2x² &minus; 5x &minus; 5 = 0. Maka a = 2, b = &minus;5, c = &minus;5."
  },
  {
    num: 3,
    bm: `Tentukan jenis titik pegun dan koordinatnya bagi fungsi kuadratik <i>f</i>(<i>x</i>) = &minus;3<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 1.`,
    en: `Determine the type of stationary point and its coordinates for <i>f</i>(<i>x</i>) = &minus;3<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 1.`,
    diagram: "",
    options: [
      { key: "A", text: "Titik maksimum / <i>Maximum point</i> (1, 2)" },
      { key: "B", text: "Titik minimum / <i>Minimum point</i> (1, 2)" },
      { key: "C", text: "Titik maksimum / <i>Maximum point</i> (&minus;1, &minus;10)" },
      { key: "D", text: "Titik minimum / <i>Minimum point</i> (2, &minus;1)" }
    ],
    answer: "A",
    solution: "a = &minus;3 < 0 &rArr; Graf berbentuk &cap; (Titik maksimum). Paksi simetri: x = &minus;b/(2a) = &minus;6/(2(&minus;3)) = 1. f(1) = &minus;3(1)² + 6(1) &minus; 1 = 2. Titik maksimum = (1, 2)."
  },
  {
    num: 4,
    bm: `Rajah menunjukkan graf bagi dua fungsi kuadratik <i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> dan <i>g</i>(<i>x</i>) = <i>bx</i><sup>2</sup>. Antara pernyataan berikut, yang manakah <b>benar</b>?`,
    en: `The diagram shows graphs of <i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> and <i>g</i>(<i>x</i>) = <i>bx</i><sup>2</sup>. Which statement is <b>true</b>?`,
    diagram: svgWidthComparison(),
    options: [
      { key: "A", text: "<i>a</i> > <i>b</i> > 0" },
      { key: "B", text: "<i>b</i> > <i>a</i> > 0" },
      { key: "C", text: "<i>a</i> < 0 dan / <i>and</i> <i>b</i> > 0" },
      { key: "D", text: "<i>a</i> = <i>b</i>" }
    ],
    answer: "B",
    solution: "Kedua-dua graf terbuka ke atas (a > 0, b > 0). Graf g(x) lebih sempit dan curam daripada f(x), maka nilai pekali b lebih besar daripada a (|b| > |a| &rArr; b > a > 0)."
  },
  {
    num: 5,
    bm: `Diberi fungsi kuadratik <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 12<i>x</i> + 7. Tentukan persamaan paksi simetri bagi graf tersebut.`,
    en: `Given <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 12<i>x</i> + 7. Determine the equation of axis of symmetry of the graph.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = &minus;3" },
      { key: "B", text: "<i>x</i> = &minus;6" },
      { key: "C", text: "<i>x</i> = 3" },
      { key: "D", text: "<i>x</i> = 6" }
    ],
    answer: "C",
    solution: "Paksi simetri: x = &minus;b / (2a) = &minus;(&minus;12) / (2 &times; 2) = 12 / 4 = 3."
  },
  {
    num: 6,
    bm: `Rajah menunjukkan graf bagi suatu fungsi kuadratik yang memotong paksi-<i>x</i> pada (&minus;2, 0) dan (6, 0). Nyatakan persamaan paksi simetrinya.`,
    en: `The diagram shows the graph of a quadratic function intersecting the <i>x</i>-axis at (&minus;2, 0) and (6, 0). State its axis of symmetry.`,
    diagram: svgSymmetryRoots(),
    options: [
      { key: "A", text: "<i>x</i> = 1" },
      { key: "B", text: "<i>x</i> = 2" },
      { key: "C", text: "<i>x</i> = 3" },
      { key: "D", text: "<i>x</i> = 4" }
    ],
    answer: "B",
    solution: "Paksi simetri terletak tepat di tengah dua pintasan-x: x = (x₁ + x₂) / 2 = (&minus;2 + 6) / 2 = 4 / 2 = 2."
  },
  {
    num: 7,
    bm: `Cari koordinat titik puncak bagi fungsi kuadratik <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4<i>x</i> &minus; 5.`,
    en: `Find the coordinates of the turning point of <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4<i>x</i> &minus; 5.`,
    diagram: "",
    options: [
      { key: "A", text: "(&minus;2, &minus;9)" },
      { key: "B", text: "(2, 7)" },
      { key: "C", text: "(&minus;2, &minus;5)" },
      { key: "D", text: "(4, &minus;5)" }
    ],
    answer: "A",
    solution: "x = &minus;b / (2a) = &minus;4 / (2(1)) = &minus;2. f(&minus;2) = (&minus;2)² + 4(&minus;2) &minus; 5 = 4 &minus; 8 &minus; 5 = &minus;9. Titik puncak = (&minus;2, &minus;9)."
  },
  {
    num: 8,
    bm: `Fungsi kuadratik <i>f</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> + <i>px</i> &minus; 8 mempunyai paksi simetri pada <i>x</i> = &minus;2. Cari nilai <i>p</i>.`,
    en: `Quadratic function <i>f</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> + <i>px</i> &minus; 8 has an axis of symmetry at <i>x</i> = &minus;2. Find the value of <i>p</i>.`,
    diagram: "",
    options: [
      { key: "A", text: "&minus;12" },
      { key: "B", text: "&minus;6" },
      { key: "C", text: "6" },
      { key: "D", text: "12" }
    ],
    answer: "D",
    solution: "x = &minus;b / (2a) &rArr; &minus;2 = &minus;p / (2 &times; 3) &rArr; &minus;2 = &minus;p / 6 &rArr; p = 12."
  },
  {
    num: 9,
    bm: `Rajah menunjukkan graf <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 3. Jika nilai <i>c</i> diubah kepada +5, apakah perubahan yang berlaku pada graf tersebut?`,
    en: `The diagram shows <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 3. If value of <i>c</i> changes to +5, what change occurs to the graph?`,
    diagram: svgVerticalShift(),
    options: [
      { key: "A", text: "Graf bergerak 8 unit secara menegak ke atas" },
      { key: "B", text: "Graf bergerak 5 unit secara menegak ke atas" },
      { key: "C", text: "Graf bergerak 8 unit secara mengufuk ke kanan" },
      { key: "D", text: "Bukaan graf menjadi lebih sempit" }
    ],
    answer: "A",
    solution: "Pintasan-y asal = &minus;3, pintasan-y baharu = +5. Perubahan menegak = 5 &minus; (&minus;3) = 8 unit ke atas."
  },
  {
    num: 10,
    bm: `Diberi fungsi kuadratik <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4<i>x</i> + 3. Jika fungsi itu diubah kepada <i>g</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 4<i>x</i> &minus; 3, apakah kesan terhadap bentuk graf?`,
    en: `Given <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4<i>x</i> + 3. If changed to <i>g</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 4<i>x</i> &minus; 3, what is the effect on the graph shape?`,
    diagram: "",
    options: [
      { key: "A", text: "Graf berubah dari bentuk &cap; kepada &cup;" },
      { key: "B", text: "Graf berubah dari bentuk &cup; kepada &cap; melalui pantulan pada paksi-<i>x</i>" },
      { key: "C", text: "Paksi simetri graf beralih ke kiri paksi-<i>y</i>" },
      { key: "D", text: "Bukaan graf menjadi dua kali lebih lebar" }
    ],
    answer: "B",
    solution: "Pekali a berubah tanda dari +1 kepada &minus;1. Bentuk graf terpantul secara menegak pada paksi-x daripada bentuk &cup; kepada bentuk &cap;."
  },
  {
    num: 11,
    bm: `Diberi <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>bx</i> + 4. Jika nilai <i>b</i> bertambah daripada &minus;6 kepada +6, apakah yang berlaku kepada paksi simetri graf?`,
    en: `Given <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>bx</i> + 4. If value of <i>b</i> increases from &minus;6 to +6, what happens to the axis of symmetry?`,
    diagram: "",
    options: [
      { key: "A", text: "Paksi simetri beralih dari sebelah kanan ke sebelah kiri paksi-<i>y</i>" },
      { key: "B", text: "Paksi simetri beralih dari sebelah kiri ke sebelah kanan paksi-<i>y</i>" },
      { key: "C", text: "Paksi simetri tidak mengalami sebarang perubahan" },
      { key: "D", text: "Paksi simetri menjadi bertindih dengan paksi-<i>x</i>" }
    ],
    answer: "A",
    solution: "Paksi asal: x = &minus;(&minus;6)/2 = 3 (kanan paksi-y). Paksi baharu: x = &minus;6/2 = &minus;3 (kiri paksi-y). Maka beralih dari kanan ke kiri."
  },
  {
    num: 12,
    bm: `Rajah menunjukkan graf bagi suatu fungsi kuadratik dengan titik minimum (0, &minus;4) dan pintasan-<i>x</i> pada &minus;2 dan 2. Tentukan fungsinya.`,
    en: `The diagram shows a quadratic graph with minimum point (0, &minus;4) and <i>x</i>-intercepts at &minus;2 and 2. Determine its function.`,
    diagram: svgParabolaVertexIntercepts(),
    options: [
      { key: "A", text: "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4" },
      { key: "B", text: "<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 4" },
      { key: "C", text: "<i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> &minus; 4" },
      { key: "D", text: "<i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> &minus; 4" }
    ],
    answer: "B",
    solution: "Punca ialah &plusmn;2 &rArr; (x + 2)(x &minus; 2) = x² &minus; 4. Pada x = 0, y = &minus;4. Maka f(x) = x² &minus; 4."
  },
  {
    num: 13,
    bm: `Graf <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> digerakkan 3 unit ke kanan dan 5 unit ke atas. Apakah fungsi kuadratik baharu dalam bentuk am?`,
    en: `Graph <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> is translated 3 units right and 5 units up. What is the new function in general form?`,
    diagram: "",
    options: [
      { key: "A", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 6<i>x</i> + 8" },
      { key: "B", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 6<i>x</i> + 14" },
      { key: "C", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 6<i>x</i> + 14" },
      { key: "D", text: "<i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3<i>x</i> + 5" }
    ],
    answer: "C",
    solution: "g(x) = (x &minus; 3)² + 5 = x² &minus; 6x + 9 + 5 = x² &minus; 6x + 14."
  },
  {
    num: 14,
    bm: `Rajah menunjukkan graf bagi <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 2<i>x</i> + 8. Nyatakan punca-punca bagi persamaan kuadratik &minus;<i>x</i><sup>2</sup> + 2<i>x</i> + 8 = 0.`,
    en: `The diagram shows graph of <i>f</i>(<i>x</i>) = &minus;<i>x</i><sup>2</sup> + 2<i>x</i> + 8. State roots of &minus;<i>x</i><sup>2</sup> + 2<i>x</i> + 8 = 0.`,
    diagram: svgParabolaRootsNegative(),
    options: [
      { key: "A", text: "<i>x</i> = 2, <i>x</i> = &minus;4" },
      { key: "B", text: "<i>x</i> = &minus;2, <i>x</i> = 4" },
      { key: "C", text: "<i>x</i> = 0, <i>x</i> = 8" },
      { key: "D", text: "<i>x</i> = 1, <i>x</i> = 9" }
    ],
    answer: "B",
    solution: "Punca ialah pintasan-x pada graf: &minus;x² + 2x + 8 = 0 &rArr; x² &minus; 2x &minus; 8 = 0 &rArr; (x &minus; 4)(x + 2) = 0 &rArr; x = &minus;2, x = 4."
  },
  {
    num: 15,
    bm: `Antara nilai <i>x</i> berikut, yang manakah merupakan suatu punca bagi persamaan kuadratik 2<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 3 = 0?`,
    en: `Which of the following values of <i>x</i> is a root of 2<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 3 = 0?`,
    diagram: "",
    options: [
      { key: "A", text: "&minus;3" },
      { key: "B", text: "<sup>1</sup>/<sub>2</sub>" },
      { key: "C", text: "3" },
      { key: "D", text: "&minus;2" }
    ],
    answer: "C",
    solution: "(2x + 1)(x &minus; 3) = 0 &rArr; x = &minus;1/2 atau x = 3. Maka x = 3 ialah punca."
  },
  {
    num: 16,
    bm: `Selesaikan persamaan kuadratik: <i>x</i><sup>2</sup> &minus; 7<i>x</i> + 12 = 0.`,
    en: `Solve the quadratic equation: <i>x</i><sup>2</sup> &minus; 7<i>x</i> + 12 = 0.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = 3, <i>x</i> = 4" },
      { key: "B", text: "<i>x</i> = &minus;3, <i>x</i> = &minus;4" },
      { key: "C", text: "<i>x</i> = 2, <i>x</i> = 6" },
      { key: "D", text: "<i>x</i> = &minus;2, <i>x</i> = &minus;6" }
    ],
    answer: "A",
    solution: "(x &minus; 3)(x &minus; 4) = 0 &rArr; x = 3, x = 4."
  },
  {
    num: 17,
    bm: `Selesaikan persamaan kuadratik: 2<i>x</i><sup>2</sup> &minus; 7<i>x</i> + 3 = 0.`,
    en: `Solve the quadratic equation: 2<i>x</i><sup>2</sup> &minus; 7<i>x</i> + 3 = 0.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = &minus;<sup>1</sup>/<sub>2</sub>, <i>x</i> = &minus;3" },
      { key: "B", text: "<i>x</i> = <sup>1</sup>/<sub>2</sub>, <i>x</i> = 3" },
      { key: "C", text: "<i>x</i> = 1, <i>x</i> = 6" },
      { key: "D", text: "<i>x</i> = &minus;1, <i>x</i> = 3" }
    ],
    answer: "B",
    solution: "(2x &minus; 1)(x &minus; 3) = 0 &rArr; x = 1/2, x = 3."
  },
  {
    num: 18,
    bm: `Selesaikan persamaan pecahan algebra: <sup>(<i>x</i> + 1)</sup>/<sub>2</sub> = <sup>6</sup>/<sub><i>x</i></sub>.`,
    en: `Solve the algebraic fraction equation: <sup>(<i>x</i> + 1)</sup>/<sub>2</sub> = <sup>6</sup>/<sub><i>x</i></sub>.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i> = &minus;4, <i>x</i> = 3" },
      { key: "B", text: "<i>x</i> = 4, <i>x</i> = &minus;3" },
      { key: "C", text: "<i>x</i> = 2, <i>x</i> = &minus;6" },
      { key: "D", text: "<i>x</i> = 1, <i>x</i> = 12" }
    ],
    answer: "A",
    solution: "x(x + 1) = 12 &rArr; x² + x &minus; 12 = 0 &rArr; (x + 4)(x &minus; 3) = 0 &rArr; x = &minus;4, x = 3."
  },
  {
    num: 19,
    bm: `Diberi punca-punca bagi suatu persamaan kuadratik ialah &minus;3 dan 5. Bentukkan persamaan kuadratik tersebut dalam bentuk am.`,
    en: `Given the roots of a quadratic equation are &minus;3 and 5. Form the quadratic equation in general form.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i><sup>2</sup> + 2<i>x</i> &minus; 15 = 0" },
      { key: "B", text: "<i>x</i><sup>2</sup> &minus; 2<i>x</i> &minus; 15 = 0" },
      { key: "C", text: "<i>x</i><sup>2</sup> &minus; 8<i>x</i> + 15 = 0" },
      { key: "D", text: "<i>x</i><sup>2</sup> + 8<i>x</i> &minus; 15 = 0" }
    ],
    answer: "B",
    solution: "(x &minus; (&minus;3))(x &minus; 5) = (x + 3)(x &minus; 5) = x² &minus; 2x &minus; 15 = 0."
  },
  {
    num: 20,
    bm: `Diberi bahawa <i>x</i> = 2 ialah salah satu punca bagi persamaan 3<i>x</i><sup>2</sup> + <i>kx</i> &minus; 10 = 0. Cari nilai <i>k</i> dan punca yang satu lagi.`,
    en: `Given <i>x</i> = 2 is a root of 3<i>x</i><sup>2</sup> + <i>kx</i> &minus; 10 = 0. Find the value of <i>k</i> and the other root.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>k</i> = &minus;1, punca kedua = &minus;<sup>5</sup>/<sub>3</sub>" },
      { key: "B", text: "<i>k</i> = 1, punca kedua = <sup>5</sup>/<sub>3</sub>" },
      { key: "C", text: "<i>k</i> = &minus;2, punca kedua = &minus;5" },
      { key: "D", text: "<i>k</i> = 2, punca kedua = &minus;<sup>3</sup>/<sub>5</sub>" }
    ],
    answer: "A",
    solution: "Gantikan x = 2: 3(4) + 2k &minus; 10 = 0 &rArr; 2k + 2 = 0 &rArr; k = &minus;1. Persamaan: 3x² &minus; x &minus; 10 = 0 &rArr; (3x + 5)(x &minus; 2) = 0 &rArr; punca kedua = &minus;5/3."
  },
  {
    num: 21,
    bm: `Bentukkan persamaan kuadratik yang mempunyai punca-punca <sup>1</sup>/<sub>2</sub> dan &minus;<sup>4</sup>/<sub>3</sub>.`,
    en: `Form a quadratic equation with roots <sup>1</sup>/<sub>2</sub> and &minus;<sup>4</sup>/<sub>3</sub>.`,
    diagram: "",
    options: [
      { key: "A", text: "6<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 4 = 0" },
      { key: "B", text: "6<i>x</i><sup>2</sup> + 5<i>x</i> &minus; 4 = 0" },
      { key: "C", text: "5<i>x</i><sup>2</sup> + 6<i>x</i> &minus; 4 = 0" },
      { key: "D", text: "6<i>x</i><sup>2</sup> + 5<i>x</i> + 4 = 0" }
    ],
    answer: "B",
    solution: "(2x &minus; 1)(3x + 4) = 0 &rArr; 6x² + 8x &minus; 3x &minus; 4 = 0 &rArr; 6x² + 5x &minus; 4 = 0."
  },
  {
    num: 22,
    bm: `Rajah menunjukkan graf fungsi kuadratik yang menyentuh paksi-<i>x</i> pada satu titik sahaja secara tangen. Apakah jenis punca bagi persamaan <i>f</i>(<i>x</i>) = 0?`,
    en: `The diagram shows a quadratic graph touching the <i>x</i>-axis at only one point. What is the nature of roots for <i>f</i>(<i>x</i>) = 0?`,
    diagram: svgTouchingXAxis(),
    options: [
      { key: "A", text: "Dua punca nyata yang sama / <i>Two equal real roots</i> (<i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 0)" },
      { key: "B", text: "Dua punca nyata yang berbeza / <i>Two distinct real roots</i> (<i>b</i><sup>2</sup> &minus; 4<i>ac</i> > 0)" },
      { key: "C", text: "Tiada punca nyata / <i>No real roots</i> (<i>b</i><sup>2</sup> &minus; 4<i>ac</i> < 0)" },
      { key: "D", text: "Punca khayalan / <i>Imaginary roots</i>" }
    ],
    answer: "A",
    solution: "Graf menyentuh paksi-x pada satu titik sahaja bermaksud persamaan mempunyai dua punca nyata yang sama (b² &minus; 4ac = 0)."
  },
  {
    num: 23,
    bm: `Sebiji bola dibaling tegak ke atas dari tanah. Tingginya, <i>h</i> dalam meter, selepas <i>t</i> saat diberi oleh <i>h</i>(<i>t</i>) = &minus;5<i>t</i><sup>2</sup> + 30<i>t</i>. Hitung tinggi maksimum yang dicapai oleh bola itu.`,
    en: `A ball is thrown vertically upwards from ground. Height <i>h</i> (m) after <i>t</i> seconds is <i>h</i>(<i>t</i>) = &minus;5<i>t</i><sup>2</sup> + 30<i>t</i>. Calculate maximum height reached.`,
    diagram: svgProjectileHeight(),
    options: [
      { key: "A", text: "30 m pada / <i>at</i> <i>t</i> = 3 s" },
      { key: "B", text: "45 m pada / <i>at</i> <i>t</i> = 3 s" },
      { key: "C", text: "50 m pada / <i>at</i> <i>t</i> = 5 s" },
      { key: "D", text: "90 m pada / <i>at</i> <i>t</i> = 6 s" }
    ],
    answer: "B",
    solution: "Masa tinggi maksimum: t = &minus;b / (2a) = &minus;30 / (2(&minus;5)) = 3 saat. h(3) = &minus;5(3)² + 30(3) = &minus;45 + 90 = 45 meter."
  },
  {
    num: 24,
    bm: `Ketinggian roket mainan dari tanah dimodelkan oleh <i>h</i> = &minus;5<i>t</i><sup>2</sup> + 15<i>t</i> + 20. Cari masa, dalam saat, apabila roket itu mendarat semula di tanah.`,
    en: `Height of toy rocket is <i>h</i> = &minus;5<i>t</i><sup>2</sup> + 15<i>t</i> + 20. Find time in seconds when rocket lands on the ground.`,
    diagram: "",
    options: [
      { key: "A", text: "2 saat / <i>seconds</i>" },
      { key: "B", text: "3 saat / <i>seconds</i>" },
      { key: "C", text: "4 saat / <i>seconds</i>" },
      { key: "D", text: "5 saat / <i>seconds</i>" }
    ],
    answer: "C",
    solution: "Mendarat di tanah &rArr; h = 0 &rArr; &minus;5t² + 15t + 20 = 0 &rArr; t² &minus; 3t &minus; 4 = 0 &rArr; (t &minus; 4)(t + 1) = 0. Kerana t > 0, t = 4 saat."
  },
  {
    num: 25,
    bm: `Diberi fungsi kuadratik <i>f</i>(<i>x</i>) = 2(<i>x</i> &minus; 3)<sup>2</sup> + 4. Nyatakan nilai minimum fungsi tersebut dan julat nilainya.`,
    en: `Given <i>f</i>(<i>x</i>) = 2(<i>x</i> &minus; 3)<sup>2</sup> + 4. State its minimum value and range.`,
    diagram: "",
    options: [
      { key: "A", text: "Nilai minimum = 4, julat: <i>f</i>(<i>x</i>) &ge; 4" },
      { key: "B", text: "Nilai minimum = 3, julat: <i>f</i>(<i>x</i>) &ge; 3" },
      { key: "C", text: "Nilai minimum = &minus;4, julat: <i>f</i>(<i>x</i>) &le; 4" },
      { key: "D", text: "Nilai minimum = 2, julat: <i>f</i>(<i>x</i>) &ge; 2" }
    ],
    answer: "A",
    solution: "Bentuk verteks a(x &minus; h)² + k. Nilai minimum = k = 4 (pada x = 3). Oleh itu, julat f(x) &ge; 4."
  },
  {
    num: 26,
    bm: `Rajah menunjukkan trajektori seorang penerjun papan anjal yang dimodelkan oleh <i>h</i>(<i>t</i>) = &minus;<i>t</i><sup>2</sup> + 2<i>t</i> + 3. Berapakah ketinggian papan anjal dari paras air?`,
    en: `The diagram shows a diver's trajectory modeled by <i>h</i>(<i>t</i>) = &minus;<i>t</i><sup>2</sup> + 2<i>t</i> + 3. What is the height of the diving board above water?`,
    diagram: svgDiverTrajectory(),
    options: [
      { key: "A", text: "2 meter" },
      { key: "B", text: "3 meter" },
      { key: "C", text: "4 meter" },
      { key: "D", text: "5 meter" }
    ],
    answer: "B",
    solution: "Ketinggian papan anjal ialah ketinggian pada t = 0 saat: h(0) = &minus;(0)² + 2(0) + 3 = 3 meter."
  },
  {
    num: 27,
    bm: `Sebidang tanah segi empat tepat mempunyai perimeter 36 m dan luas 80 m<sup>2</sup>. Jika panjang tanah itu ialah <i>x</i> m, bentukkan persamaan kuadratik dan cari panjangnya.`,
    en: `A rectangular land has perimeter 36 m and area 80 m<sup>2</sup>. If length is <i>x</i> m, form quadratic equation and find length.`,
    diagram: "",
    options: [
      { key: "A", text: "<i>x</i><sup>2</sup> &minus; 18<i>x</i> + 80 = 0, panjang = 10 m" },
      { key: "B", text: "<i>x</i><sup>2</sup> &minus; 36<i>x</i> + 80 = 0, panjang = 20 m" },
      { key: "C", text: "<i>x</i><sup>2</sup> + 18<i>x</i> &minus; 80 = 0, panjang = 8 m" },
      { key: "D", text: "<i>x</i><sup>2</sup> &minus; 18<i>x</i> + 80 = 0, panjang = 16 m" }
    ],
    answer: "A",
    solution: "Lebar = 18 &minus; x. Luas = x(18 &minus; x) = 80 &rArr; x² &minus; 18x + 80 = 0 &rArr; (x &minus; 10)(x &minus; 8) = 0. Panjang = 10 m (lebar = 8 m)."
  },
  {
    num: 28,
    bm: `Rajah menunjukkan sebuah segi tiga bersudut tegak dengan sisi <i>x</i> cm, (<i>x</i> + 2) cm dan hipotenus (<i>x</i> + 4) cm. Hitung nilai positif bagi <i>x</i>.`,
    en: `The diagram shows a right-angled triangle with sides <i>x</i> cm, (<i>x</i> + 2) cm and hypotenuse (<i>x</i> + 4) cm. Calculate positive value of <i>x</i>.`,
    diagram: svgRightTriangle(),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6" },
      { key: "C", text: "8" },
      { key: "D", text: "10" }
    ],
    answer: "B",
    solution: "x² + (x + 2)² = (x + 4)² &rArr; x² + x² + 4x + 4 = x² + 8x + 16 &rArr; x² &minus; 4x &minus; 12 = 0 &rArr; (x &minus; 6)(x + 2) = 0 &rArr; x = 6."
  },
  {
    num: 29,
    bm: `Sebuah kolam renang berukuran 10 m &times; 6 m dikelilingi laluan pejalan kaki selebar <i>x</i> m. Jumlah luas kolam dan laluan ialah 96 m<sup>2</sup>. Cari lebar laluan <i>x</i>.`,
    en: `A 10 m &times; 6 m pool is surrounded by a path of uniform width <i>x</i> m. Total area is 96 m<sup>2</sup>. Find width of path <i>x</i>.`,
    diagram: svgGardenPath(),
    options: [
      { key: "A", text: "1 m" },
      { key: "B", text: "1.5 m" },
      { key: "C", text: "2 m" },
      { key: "D", text: "2.5 m" }
    ],
    answer: "A",
    solution: "(10 + 2x)(6 + 2x) = 96 &rArr; 60 + 32x + 4x² = 96 &rArr; 4x² + 32x &minus; 36 = 0 &rArr; x² + 8x &minus; 9 = 0 &rArr; (x + 9)(x &minus; 1) = 0 &rArr; x = 1 m."
  },
  {
    num: 30,
    bm: `Keuntungan harian sebuah kilang cermin mata diberi oleh <i>P</i>(<i>x</i>) = &minus;2<i>x</i><sup>2</sup> + 100<i>x</i> &minus; 450, dengan <i>x</i> ialah bilangan unit cermin mata. Cari bilangan unit yang memaksimumkan keuntungan dan nilai keuntungan maksimum itu.`,
    en: `Daily profit is <i>P</i>(<i>x</i>) = &minus;2<i>x</i><sup>2</sup> + 100<i>x</i> &minus; 450, where <i>x</i> is units produced. Find units for max profit and the maximum profit.`,
    diagram: "",
    options: [
      { key: "A", text: "20 unit, RM 750" },
      { key: "B", text: "25 unit, RM 800" },
      { key: "C", text: "30 unit, RM 850" },
      { key: "D", text: "50 unit, RM 800" }
    ],
    answer: "B",
    solution: "x = &minus;b / (2a) = &minus;100 / (2(&minus;2)) = 25 unit. P(25) = &minus;2(625) + 100(25) &minus; 450 = &minus;1250 + 2500 &minus; 450 = RM 800."
  }
];

// Page allocation:
// Page 1: Cover & Formula Sheet
// Pages 2-9: 30 Questions
// Page 10: OMR Sheet
// Pages 11-12: Full Solution Scheme
const modulePages = [
  { pageNum: 2, questions: [1, 2, 3, 4] },
  { pageNum: 3, questions: [5, 6, 7, 8] },
  { pageNum: 4, questions: [9, 10, 11, 12] },
  { pageNum: 5, questions: [13, 14, 15, 16] },
  { pageNum: 6, questions: [17, 18, 19, 20] },
  { pageNum: 7, questions: [21, 22, 23] },
  { pageNum: 8, questions: [24, 25, 26, 27] },
  { pageNum: 9, questions: [28, 29, 30] }
];

function generateHtml() {
  let html = `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>Modul Latih Tubi Topikal: Bab 1 Fungsi dan Persamaan Kuadratik (Tingkatan 4)</title>
<style>
  @page {
    size: A4 portrait;
    margin: 1.1cm 1.3cm 1.1cm 1.3cm;
  }
  
  * { box-sizing: border-box; }

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
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .module-title-box {
    margin: 10px 0;
    text-align: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 10px 0;
  }

  .module-title-bm {
    font-size: 15.5pt;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
    text-transform: uppercase;
  }

  .module-title-en {
    font-size: 11pt;
    font-style: italic;
    color: #334155;
  }

  .candidate-table {
    width: 100%;
    border-collapse: collapse;
    margin: 8px 0;
  }

  .candidate-table td {
    border: 1.2px solid #000;
    padding: 5px 8px;
    font-size: 9.5pt;
  }

  .formula-box {
    border: 1.2px solid #1e3a8a;
    background: #f8fafc;
    border-radius: 4px;
    padding: 8px 12px;
    margin-top: 10px;
  }

  .formula-title {
    font-size: 9.5pt;
    font-weight: bold;
    color: #1e3a8a;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 4px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .formula-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 14px;
    font-size: 8.5pt;
  }

  .question-item {
    margin-bottom: 10px;
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

  .q-body { flex-grow: 1; }
  .q-bm { font-size: 10pt; margin-bottom: 2px; }
  .q-en { font-size: 9pt; font-style: italic; color: #374151; margin-bottom: 4px; }

  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 14px;
    margin-top: 4px;
    margin-left: 20px;
  }

  .options-grid.single-col { grid-template-columns: 1fr; }

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
    margin: 2px auto;
  }

  /* OMR Grid */
  .omr-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .omr-col {
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
    background: #f8fafc;
    border-radius: 4px;
  }

  .omr-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.5px;
    font-size: 9pt;
  }

  .omr-qnum { font-weight: bold; width: 22px; }
  .omr-bubbles { display: flex; gap: 5px; }

  .bubble {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.2px solid #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7.5pt;
    font-weight: bold;
    color: #334155;
  }

  .answers-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.2pt;
  }

  .answers-table th {
    background: #1e3a8a;
    color: #fff;
    padding: 4px 6px;
    border: 1px solid #1e3a8a;
    text-align: left;
    font-size: 8.5pt;
  }

  .answers-table td {
    padding: 3.5px 6px;
    border: 1px solid #cbd5e1;
    vertical-align: top;
  }

  .answers-table tr:nth-child(even) { background: #f8fafc; }

  .badge-ans {
    display: inline-block;
    background: #047857;
    color: #fff;
    font-weight: bold;
    padding: 1px 6px;
    border-radius: 2px;
    font-size: 8pt;
  }
</style>
</head>
<body>
`;

  // PAGE 1: COVER & FORMULAE
  html += `
  <div class="page-container page-break">
    <div class="cover-border">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11pt; font-weight:bold; letter-spacing:1.5px;">MODUL LATIH TUBI TOPIKAL SPM</span>
          <span style="font-size:11pt; font-weight:bold;">TINGKATAN 4</span>
        </div>

        <div class="module-title-box">
          <div style="font-size: 9.5pt; font-weight: bold; letter-spacing: 1px; color:#1e40af; margin-bottom: 2px;">MATEMATIK KSSM &bull; BAB 1</div>
          <div class="module-title-bm">FUNGSI DAN PERSAMAAN KUADRATIK DALAM SATU PEMBOLEH UBAH</div>
          <div class="module-title-en">Quadratic Functions and Equations in One Variable</div>
          <div style="font-size: 10pt; font-weight: bold; margin-top: 5px;">30 SOALAN PEPERIKSAAN OBJEKTIF &bull; <i>30 EXAM OBJECTIVE QUESTIONS</i></div>
        </div>

        <div style="text-align:center; font-size:10pt; font-weight:bold; margin: 4px 0 8px 0;">
          Masa yang dicadangkan: 1 jam 15 minit (75 minit)<br>
          <span style="font-style:italic; font-weight:normal; font-size:9pt; color:#475569;">Suggested time: 1 hour 15 minutes</span>
        </div>

        <table class="candidate-table">
          <tr>
            <td style="width: 25%; font-weight: bold; background:#f8fafc;">NAMA / <i>NAME</i>:</td>
            <td></td>
          </tr>
          <tr>
            <td style="font-weight: bold; background:#f8fafc;">KELAS / <i>CLASS</i>:</td>
            <td></td>
          </tr>
          <tr>
            <td style="font-weight: bold; background:#f8fafc;">TARIKH / <i>DATE</i>:</td>
            <td></td>
          </tr>
        </table>

        <!-- Summary & Formula Box -->
        <div class="formula-box">
          <div class="formula-title">📐 RUMUS &amp; KONSEP PENTING BAB 1 / <i>KEY FORMULAE &amp; CONCEPTS</i></div>
          <div class="formula-grid">
            <div>&bull; <b>Bentuk Am:</b> <i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>, &nbsp; <i>a</i> &ne; 0</div>
            <div>&bull; <b>Paksi Simetri:</b> <i>x</i> = &minus;<sup><i>b</i></sup>/<sub>2<i>a</i></sub></div>
            <div>&bull; <b>Titik Minimum:</b> <i>a</i> > 0 (Bentuk &cup;)</div>
            <div>&bull; <b>Titik Maksimum:</b> <i>a</i> < 0 (Bentuk &cap;)</div>
            <div>&bull; <b>Pintasan-<i>y</i>:</b> Koordinat (0, <i>c</i>)</div>
            <div>&bull; <b>Lebar Graf:</b> |<i>a</i>| bertambah &rArr; Graf semakin sempit</div>
            <div>&bull; <b>Punca Kuadratik:</b> <i>x</i> = <sup>&minus;<i>b</i> &plusmn; &radic;[<i>b</i><sup>2</sup> &minus; 4<i>ac</i>]</sup>/<sub>2<i>a</i></sub></div>
            <div>&bull; <b>Pembezalayan:</b> <i>b</i><sup>2</sup> &minus; 4<i>ac</i> > 0 (2 punca), = 0 (1 punca), < 0 (tiada punca)</div>
            <div>&bull; <b>Bentuk dari Punca:</b> <i>x</i><sup>2</sup> &minus; (HTP)<i>x</i> + (HDP) = 0</div>
            <div>&bull; <b>Titik Simetri Punca:</b> <i>x</i> = <sup>(<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub>)</sup>/<sub>2</sub></div>
          </div>
        </div>

        <div style="margin-top:12px; font-size:8.5pt; color:#334155; line-height:1.35; border:1px dashed #cbd5e1; padding:6px 10px; background:#fff;">
          <b>ARAHAN KEPADA CALON:</b><br>
          1. Jawab semua 30 soalan. Bagi setiap soalan, pilih satu jawapan sahaja (A, B, C atau D).<br>
          2. Gunakan borang jawapan OMR yang disediakan di halaman 10.<br>
          3. Skema jawapan dan jalan kerja lengkap disediakan di halaman 11 dan 12 untuk semakan kendiri.
        </div>
      </div>

      <div style="border-top:1.2px solid #000; padding-top:4px; display:flex; justify-content:space-between; font-size:8pt;">
        <span>Matematik Tingkatan 4 &bull; Bab 1</span>
        <span style="font-weight:bold; text-align:right;">[Lihat halaman sebelah / <i>Turn over</i><br>SULIT</span>
      </div>
    </div>
  </div>
  `;

  // QUESTION PAGES (Pages 2 to 9)
  modulePages.forEach(p => {
    html += `
    <div class="page-container page-break">
      <div>
        <div class="running-header">
          <span>MATEMATIK TINGKATAN 4</span>
          <span>BAB 1: FUNGSI DAN PERSAMAAN KUADRATIK</span>
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
        <span>Matematik Tingkatan 4 &bull; Bab 1</span>
        <span>${p.pageNum}</span>
        <span>${p.pageNum === 9 ? 'KERTAS SOALAN TAMAT / <i>END OF QUESTIONS</i>' : '[Lihat halaman sebelah / <i>Turn over</i>'}</span>
      </div>
    </div>
    `;
  });

  // PAGE 10: OMR SHEET (30 QUESTIONS)
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>MATEMATIK TINGKATAN 4</span>
        <span>BORANG JAWAPAN OMR / <i>OMR ANSWER SHEET</i></span>
        <span>SULIT</span>
      </div>

      <div style="border: 2px solid #000; padding: 10px 14px; margin-bottom: 8px; background: #fafafa;">
        <div style="text-align: center; margin-bottom: 6px;">
          <h3 style="margin: 0; font-size: 11pt;">LEMBARAN JAWAPAN OBJEKTIF (OMR)</h3>
          <h4 style="margin: 2px 0; font-size: 9.5pt; color:#1e40af;">BAB 1: FUNGSI DAN PERSAMAAN KUADRATIK (30 SOALAN)</h4>
        </div>

        <div style="display:flex; justify-content:space-between; font-size:9pt; border-top:1px solid #999; padding-top:6px;">
          <div><b>NAMA:</b> ................................................................................</div>
          <div><b>KELAS:</b> ............................</div>
          <div><b>MARKAH:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 30</div>
        </div>
      </div>

      <div style="font-size: 8.5pt; margin-bottom: 8px; color: #475569; text-align: center;">
        <b>PANDUAN MENGHITAMKAN JAWAPAN / <i>GUIDELINES:</i></b>
        Gunakan pensel 2B sahaja. Hitamkan bulatan dengan penuh: 
        <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#000; vertical-align:middle;"></span>.
      </div>

      <div class="omr-grid">
  `;

  for (let col = 0; col < 3; col++) {
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
      <span>Matematik Tingkatan 4 &bull; Bab 1</span>
      <span>10</span>
      <span>[Skema Jawapan &amp; Jalan Kerja Menyusul / <i>Solutions Follow</i></span>
    </div>
  </div>
  `;

  // PAGE 11: ANSWER SCHEME (Q1 - Q15)
  html += `
  <div class="page-container page-break">
    <div>
      <div class="running-header">
        <span>MATEMATIK TINGKATAN 4 &bull; BAB 1</span>
        <span>SKEMA JAWAPAN &amp; JALAN KERJA LENGKAP (SOALAN 1 &ndash; 15)</span>
        <span>SULIT</span>
      </div>

      <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:4px 8px; margin-bottom:8px; border-radius:3px; font-size:8.5pt;">
        <b>SKEMA PEMARKAHAN &amp; PENERANGAN LENGKAP / <i>FULL MARK SCHEME &amp; EXPLANATIONS</i> (Q1 &ndash; Q15)</b>
      </div>

      <table class="answers-table">
        <thead>
          <tr>
            <th style="width:30px; text-align:center;">No.</th>
            <th style="width:45px; text-align:center;">Jaw.</th>
            <th>Penerangan Konsep &amp; Jalan Kerja Terperinci</th>
          </tr>
        </thead>
        <tbody>
  `;

  for (let i = 0; i < 15; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td>${q.solution}</td>
      </tr>
    `;
  }

  html += `
        </tbody>
      </table>
    </div>

    <div class="running-footer">
      <span>Matematik Tingkatan 4 &bull; Bab 1</span>
      <span>11</span>
      <span>[Lihat halaman sebelah / <i>Turn over</i></span>
    </div>
  </div>
  `;

  // PAGE 12: ANSWER SCHEME (Q16 - Q30)
  html += `
  <div class="page-container">
    <div>
      <div class="running-header">
        <span>MATEMATIK TINGKATAN 4 &bull; BAB 1</span>
        <span>SKEMA JAWAPAN &amp; JALAN KERJA LENGKAP (SOALAN 16 &ndash; 30)</span>
        <span>SULIT</span>
      </div>

      <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:4px 8px; margin-bottom:8px; border-radius:3px; font-size:8.5pt;">
        <b>SKEMA PEMARKAHAN &amp; PENERANGAN LENGKAP / <i>FULL MARK SCHEME &amp; EXPLANATIONS</i> (Q16 &ndash; Q30)</b>
      </div>

      <table class="answers-table">
        <thead>
          <tr>
            <th style="width:30px; text-align:center;">No.</th>
            <th style="width:45px; text-align:center;">Jaw.</th>
            <th>Penerangan Konsep &amp; Jalan Kerja Terperinci</th>
          </tr>
        </thead>
        <tbody>
  `;

  for (let i = 15; i < 30; i++) {
    const q = questions[i];
    html += `
      <tr>
        <td style="font-weight:bold; text-align:center;">${q.num}</td>
        <td style="text-align:center;"><span class="badge-ans">${q.answer}</span></td>
        <td>${q.solution}</td>
      </tr>
    `;
  }

  html += `
        </tbody>
      </table>
    </div>

    <div class="running-footer">
      <span>Matematik Tingkatan 4 &bull; Bab 1</span>
      <span>12</span>
      <span>TAMAT MODUL BAB 1 / <i>END OF CHAPTER 1 MODULE</i></span>
    </div>
  </div>
</body>
</html>
  `;

  return html;
}

try {
  console.log("Generating HTML file for Chapter 1 module...");
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
    console.log(`PDF created successfully for Chapter 1! Size: ${stats.size} bytes at: ${pdfPath}`);
  }
} catch (e) {
  console.error("Build failed:", e);
  process.exit(1);
}
