const fs = require('fs');
const path = require('path');

const questionsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions_data.json'), 'utf8'));

const indexHtml = `<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Matematik Tingkatan 4 (1449/1) - Mod Pembelajaran &amp; Kuiz Interaktif</title>
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
      --slate-50: #f8fafc;
      --slate-100: #f1f5f9;
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-500: #64748b;
      --slate-700: #334155;
      --slate-800: #1e293b;
      --slate-900: #0f172a;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #f8fafc;
      color: var(--slate-900);
      line-height: 1.5;
    }

    header {
      background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
      color: #fff;
      padding: 1rem;
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
      font-size: 0.825rem;
      color: #93c5fd;
      font-weight: 500;
    }

    .header-tools {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    /* Set Switcher */
    .set-switcher {
      display: inline-flex;
      background: rgba(0, 0, 0, 0.3);
      padding: 3px;
      border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .set-btn {
      background: transparent;
      color: #cbd5e1;
      border: none;
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }

    .set-btn.active-set {
      background: #fff;
      color: #1e3a8a;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
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
      transition: all 0.15s;
      border: none;
      text-decoration: none;
    }

    .btn-pdf {
      background: rgba(255, 255, 255, 0.18);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.35);
    }
    .btn-pdf:hover { background: rgba(255, 255, 255, 0.3); }

    .btn-submit {
      background: #10b981;
      color: #fff;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);
    }
    .btn-submit:hover { background: #059669; }

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
      .main-layout { grid-template-columns: 1fr; }
    }

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
    }

    .candidate-card {
      background: #fff;
      border-radius: 0.75rem;
      padding: 1.25rem;
      border: 1px solid var(--slate-200);
      margin-bottom: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .candidate-inputs {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--slate-700);
    }

    .input-group input {
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--slate-300);
      border-radius: 0.375rem;
      font-size: 0.875rem;
      outline: none;
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
    }

    .q-status-badge.badge-correct {
      display: inline-flex;
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }

    .q-status-badge.badge-wrong {
      display: inline-flex;
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }

    .q-title-row {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      margin-bottom: 1rem;
    }

    .q-number-pill {
      background: var(--primary);
      color: #fff;
      font-weight: 800;
      font-size: 0.9rem;
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .q-text-bm {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--slate-900);
      margin-bottom: 0.35rem;
      line-height: 1.45;
    }

    .q-text-en {
      font-size: 0.925rem;
      font-style: italic;
      color: var(--slate-500);
      line-height: 1.4;
    }

    .diagram-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.25rem 0;
      padding: 0.75rem;
      background: #f8fafc;
      border: 1px solid var(--slate-200);
      border-radius: 0.5rem;
      overflow-x: auto;
    }

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-top: 1rem;
    }

    .options-list.grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }

    @media (max-width: 640px) {
      .options-list.grid-2 { grid-template-columns: 1fr; }
    }

    .option-card {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1rem;
      border-radius: 0.6rem;
      border: 1.5px solid var(--slate-200);
      background: #fff;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
    }

    .option-card:hover {
      border-color: var(--primary-light);
      background: #f0f7ff;
    }

    .option-card.selected {
      border-color: var(--primary-light);
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

    .opt-feedback-tag.tag-correct { background: #d1fae5; color: #065f46; }
    .opt-feedback-tag.tag-wrong { background: #fee2e2; color: #991b1b; }

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

    .teach-section:last-child { margin-bottom: 0; }

    .teach-section h5 {
      font-size: 0.825rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #3b82f6;
      margin-bottom: 0.25rem;
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
      border: 1px solid #fde68a;
      color: #92400e;
      padding: 0.65rem 0.85rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
    }

    /* Sticky Navigator Sidebar */
    .sticky-sidebar {
      position: sticky;
      top: 5rem;
      background: #fff;
      border-radius: 0.85rem;
      border: 1px solid var(--slate-200);
      padding: 1.25rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.85rem;
    }

    .progress-bar-bg {
      height: 8px;
      background: var(--slate-200);
      border-radius: 9999px;
      overflow: hidden;
      margin-bottom: 1.25rem;
    }

    .progress-bar-fill {
      height: 100%;
      background: #10b981;
      width: 0%;
      transition: width 0.25s ease;
    }

    .nav-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.5rem;
    }

    .nav-btn {
      aspect-ratio: 1;
      border-radius: 0.4rem;
      border: 1px solid var(--slate-300);
      background: #fff;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--slate-700);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }

    .nav-btn:hover { border-color: var(--primary); background: var(--slate-100); }
    .nav-btn.answered-correct { background: #10b981; color: #fff; border-color: #10b981; }
    .nav-btn.answered-wrong { background: #ef4444; color: #fff; border-color: #ef4444; }
    .nav-btn.answered-neutral { background: #2563eb; color: #fff; border-color: #2563eb; }

    .sidebar-legend {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--slate-200);
      font-size: 0.75rem;
      color: var(--slate-500);
    }

    .legend-item { display: flex; align-items: center; gap: 0.3rem; }
    .dot { width: 8px; height: 8px; border-radius: 50%; }
    .dot-unanswered { background: var(--slate-300); }
    .dot-correct { background: #10b981; }
    .dot-wrong { background: #ef4444; }

    /* Results View */
    .results-section { display: none; }
    .hero-scorecard {
      background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
      color: #fff;
      border-radius: 1rem;
      padding: 2.5rem 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    .score-circle {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 4px solid #3b82f6;
      margin: 1.5rem auto 1rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
    }

    .score-big { font-size: 3rem; font-weight: 800; line-height: 1; color: #fff; }
    .score-total { font-size: 0.9rem; color: #93c5fd; }

    .grade-badge {
      display: inline-block;
      font-size: 1.15rem;
      font-weight: 800;
      padding: 0.4rem 1.5rem;
      border-radius: 9999px;
      margin-top: 0.5rem;
    }

    .grade-A-plus, .grade-A { background: #10b981; color: #fff; }
    .grade-B { background: #3b82f6; color: #fff; }
    .grade-C { background: #f59e0b; color: #fff; }
    .grade-D, .grade-E { background: #ef4444; color: #fff; }

    .stats-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: #fff;
      border-radius: 0.75rem;
      padding: 1.25rem;
      border: 1px solid var(--slate-200);
      text-align: center;
    }

    .stat-card h4 { font-size: 0.8rem; text-transform: uppercase; color: var(--slate-500); margin-bottom: 0.35rem; }
    .stat-card .val { font-size: 1.75rem; font-weight: 800; color: var(--slate-800); }

    .chapter-breakdown-card {
      background: #fff;
      border-radius: 0.75rem;
      padding: 1.5rem;
      border: 1px solid var(--slate-200);
      margin-bottom: 2rem;
    }

    .chapter-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .chapter-name { flex: 1; font-weight: 600; color: var(--slate-700); }
    .chapter-bar-container { flex: 1.5; height: 8px; background: var(--slate-100); border-radius: 9999px; overflow: hidden; }
    .chapter-bar-val { height: 100%; border-radius: 9999px; }
    .chapter-score-text { width: 50px; text-align: right; font-weight: 700; }

    /* Modal */
    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: none; align-items: center; justify-content: center;
      z-index: 50; padding: 1rem;
    }

    .modal-box {
      background: #fff; border-radius: 1rem; padding: 1.75rem;
      max-width: 440px; width: 100%; text-align: center;
    }

    .modal-box h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; }
    .modal-box p { font-size: 0.95rem; color: var(--slate-500); margin-bottom: 1.5rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: center; }

    .tree-grid {
      display: flex; justify-content: space-around; align-items: center; gap: 0.5rem; flex-wrap: wrap;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="header-container">
      <div class="header-brand">
        <h1>📐 MATEMATIK TINGKATAN 4 (1449/1)</h1>
        <p id="subHeaderTitle">Peperiksaan Akhir Tahun &bull; Set 1 &amp; Set 2 &bull; Mod Pembelajaran &amp; Kuiz</p>
      </div>

      <div class="header-tools">
        <!-- Set Switcher -->
        <div class="set-switcher">
          <button class="set-btn active-set" id="btnSet1" onclick="switchExamSet('set1')">📘 Set 1</button>
          <button class="set-btn" id="btnSet2" onclick="switchExamSet('set2')">📙 Set 2</button>
        </div>

        <!-- Learning mode toggle -->
        <button class="mode-toggle-btn active-learn" id="modeToggleBtn" onclick="toggleLearningMode()">
          <span id="modeIcon">🎓</span> <span id="modeText">Mod Belajar (Aktif)</span>
        </button>

        <div class="timer-badge" id="examTimer">
          ⏱️ <span id="timerText">01:30:00</span>
        </div>

        <a href="Kertas_1_Matematik_Tingkatan_4.pdf" id="headerPdfBtn" target="_blank" class="btn btn-pdf" download>
          📄 Muat Turun PDF (Set 1)
        </a>

        <button id="submitBtnHeader" class="btn btn-submit" onclick="confirmSubmit()">
          ✓ Hantar Jawapan
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN EXAM VIEW -->
  <main class="main-layout" id="examView">
    <div class="questions-column">
      <!-- Interactive Learning Banner -->
      <div class="mode-banner" id="modeBanner">
        <div class="mode-banner-text">
          <h3 id="bannerTitle">🎓 Mod Belajar &amp; Bimbingan Interaktif Diaktifkan! (Set 1)</h3>
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
        <h3 id="sideNavTitle">Peta Soalan (Set 1)</h3>
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
    <div class="hero-scorecard">
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.25rem;">KEPUTUSAN PEPERIKSAAN MATEMATIK</h2>
      <p style="color: #93c5fd; font-size: 0.95rem;" id="resStudentInfo">Calon: -</p>

      <div class="score-circle">
        <span class="score-big" id="scoreDisplay">0</span>
        <span class="score-total">/ 40</span>
      </div>

      <div id="gradeBadge" class="grade-badge">GRED: -</div>
      <p style="margin-top: 0.75rem; font-weight: 600; color: #e2e8f0;" id="resStatus">-</p>
    </div>

    <div class="stats-cards-grid">
      <div class="stat-card">
        <h4>Peratusan Markah</h4>
        <div class="val" id="resPercent" style="color: #3b82f6;">0%</div>
      </div>
      <div class="stat-card">
        <h4>Jawapan Betul</h4>
        <div class="val" id="resCorrect" style="color: #10b981;">0</div>
      </div>
      <div class="stat-card">
        <h4>Jawapan Salah</h4>
        <div class="val" id="resWrong" style="color: #ef4444;">0</div>
      </div>
      <div class="stat-card">
        <h4>Masa Digunakan</h4>
        <div class="val" id="resTimeUsed" style="font-size: 1.25rem;">00:00</div>
      </div>
    </div>

    <div class="chapter-breakdown-card">
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--slate-800);">
        📊 Prestasi Mengikut Bab
      </h3>
      <div id="chapterAnalysisList"></div>
    </div>

    <!-- Review Questions Filter -->
    <div style="margin: 2rem 0 1rem 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <h3 style="font-size: 1.25rem; font-weight: 800;">📝 Semakan Terperinci &amp; Jalan Kerja Lengkap</h3>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn" style="background:#e2e8f0; color:#1e293b;" onclick="filterReview('all')">Semua (40)</button>
        <button class="btn" style="background:#d1fae5; color:#065f46;" onclick="filterReview('correct')">Betul Sahaja</button>
        <button class="btn" style="background:#fee2e2; color:#991b1b;" onclick="filterReview('wrong')">Salah Sahaja</button>
      </div>
    </div>

    <div id="reviewedQuestionsContainer"></div>

    <div style="text-align: center; margin: 3rem 0; display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
      <button class="btn btn-submit" style="font-size: 1rem; padding: 0.75rem 2rem;" onclick="retakeExam()">
        🔄 Ulangi Sesi Ini
      </button>
      <button class="btn" id="resSwitchBtn" style="background:#2563eb; color:#fff; font-size:1rem; padding:0.75rem 2rem;" onclick="switchOtherSet()">
        📙 Cuba Set Seterusnya
      </button>
    </div>
  </section>

  <!-- CONFIRM SUBMISSION MODAL -->
  <div class="modal-overlay" id="confirmModal">
    <div class="modal-box">
      <h3>Pengesahan Penghantaran</h3>
      <p id="modalMsg">Adakah anda pasti ingin menamatkan latihan dan melihat slip keputusan penuh?</p>
      <div class="modal-buttons">
        <button class="btn" style="background: var(--slate-200); color: var(--slate-700);" onclick="closeModal()">Kembali Menjawab</button>
        <button class="btn btn-submit" onclick="submitExam()">Ya, Hantar Sekarang</button>
      </div>
    </div>
  </div>

  <script>
    const allSets = ${JSON.stringify(questionsData)};
    let activeSetKey = 'set1';
    let questionsData = allSets[activeSetKey];
    let userAnswers = {};
    let isLearningMode = true;
    let examSubmitted = false;
    let timerInterval = null;
    let timeLeft = 90 * 60;

    window.onload = function() {
      renderQuestions();
      renderNavGrid();
      startTimer();
    };

    function switchExamSet(targetSet) {
      if (targetSet === activeSetKey) return;

      const answeredCount = Object.keys(userAnswers).length;
      if (answeredCount > 0 && !examSubmitted) {
        const setLabel = targetSet === 'set1' ? 'Set 1' : 'Set 2';
        if (!confirm(\`Anda telah menjawab \${answeredCount} soalan. Adakah anda pasti mahu menukar ke \${setLabel}? Jawapan semasa akan ditetapkan semula.\`)) {
          return;
        }
      }

      activeSetKey = targetSet;
      questionsData = allSets[activeSetKey];
      userAnswers = {};
      examSubmitted = false;

      // Update Header Switcher Buttons
      document.getElementById('btnSet1').className = 'set-btn ' + (activeSetKey === 'set1' ? 'active-set' : '');
      document.getElementById('btnSet2').className = 'set-btn ' + (activeSetKey === 'set2' ? 'active-set' : '');

      // Update Titles & PDF Link
      const pdfBtn = document.getElementById('headerPdfBtn');
      const bannerTitle = document.getElementById('bannerTitle');
      const sideNavTitle = document.getElementById('sideNavTitle');
      const resSwitchBtn = document.getElementById('resSwitchBtn');

      if (activeSetKey === 'set1') {
        pdfBtn.href = 'Kertas_1_Matematik_Tingkatan_4.pdf';
        pdfBtn.innerText = '📄 Muat Turun PDF (Set 1)';
        bannerTitle.innerHTML = '🎓 Mod Belajar &amp; Bimbingan Interaktif Diaktifkan! (Set 1)';
        sideNavTitle.innerText = 'Peta Soalan (Set 1)';
        resSwitchBtn.innerText = '📙 Cuba Set 2 (40 Soalan)';
      } else {
        pdfBtn.href = 'Kertas_1_Matematik_Tingkatan_4_Set2.pdf';
        pdfBtn.innerText = '📄 Muat Turun PDF (Set 2)';
        bannerTitle.innerHTML = '🎓 Mod Belajar &amp; Bimbingan Interaktif Diaktifkan! (Set 2)';
        sideNavTitle.innerText = 'Peta Soalan (Set 2)';
        resSwitchBtn.innerText = '📘 Cuba Set 1 (40 Soalan)';
      }

      // Reset timer
      clearInterval(timerInterval);
      timeLeft = 90 * 60;
      startTimer();

      // View toggle
      document.getElementById('examView').style.display = '';
      document.getElementById('submitBtnHeader').style.display = '';
      document.getElementById('resultsView').style.display = 'none';

      // Re-render
      renderQuestions();
      renderNavGrid();
      updateProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchOtherSet() {
      switchExamSet(activeSetKey === 'set1' ? 'set2' : 'set1');
    }

    function toggleLearningMode() {
      isLearningMode = !isLearningMode;
      const btn = document.getElementById('modeToggleBtn');
      const icon = document.getElementById('modeIcon');
      const text = document.getElementById('modeText');
      const banner = document.getElementById('modeBanner');

      if (isLearningMode) {
        btn.classList.add('active-learn');
        icon.innerText = '🎓';
        text.innerText = 'Mod Belajar (Aktif)';
        banner.style.display = 'flex';
      } else {
        btn.classList.remove('active-learn');
        icon.innerText = '⏱️';
        text.innerText = 'Mod Peperiksaan Sahaja';
        banner.style.display = 'none';
      }

      // Refresh feedback state on all answered questions
      Object.keys(userAnswers).forEach(qNum => {
        applyQuestionFeedback(parseInt(qNum), userAnswers[qNum]);
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

          <!-- Educational Teaching Box -->
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

          if (navBtn) navBtn.className = 'nav-btn answered-correct';
        } else {
          card.classList.remove('state-correct');
          card.classList.add('state-wrong');
          selectedOptCard.classList.add('opt-wrong');

          const wrongTag = document.getElementById(\`optFeedback-\${qNum}-\${chosenKey}\`);
          wrongTag.innerText = '✗ Kurang Tepat';
          wrongTag.classList.add('tag-wrong');
          wrongTag.style.display = 'inline-block';

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

          if (navBtn) navBtn.className = 'nav-btn answered-wrong';
        }

        teachBox.style.display = 'block';
      } else {
        card.classList.remove('state-correct', 'state-wrong');
        teachBox.style.display = 'none';
        statusBadge.style.display = 'none';
        if (navBtn) navBtn.className = 'nav-btn answered-neutral';
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
          alert("Masa peperiksaan telah tamat! Jawapan anda dihantar secara automatik.");
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

      document.getElementById('examView').style.display = 'none';
      document.getElementById('submitBtnHeader').style.display = 'none';
      const resultsView = document.getElementById('resultsView');
      resultsView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const studentName = document.getElementById('studentName').value.trim() || 'Calon Pelajar';
      const studentClass = document.getElementById('studentClass').value.trim() || '-';
      document.getElementById('resStudentInfo').innerText = \`Calon: \${studentName} | Kelas: \${studentClass} | \${activeSetKey === 'set1' ? 'Set 1' : 'Set 2'}\`;

      document.getElementById('scoreDisplay').innerText = score;
      const percent = Math.round((score / 40) * 100);
      document.getElementById('resPercent').innerText = percent + '%';
      document.getElementById('resCorrect').innerText = score;
      document.getElementById('resWrong').innerText = 40 - score;

      const timeUsedSeconds = (90 * 60) - timeLeft;
      const mUsed = Math.floor(timeUsedSeconds / 60);
      const sUsed = timeUsedSeconds % 60;
      document.getElementById('resTimeUsed').innerText = \`\${mUsed}m \${sUsed}s\`;

      const badge = document.getElementById('gradeBadge');
      let grade = 'G';
      let status = 'PERLU ULANG KAJI';
      let gradeClass = 'grade-E';

      if (percent >= 85) { grade = 'A+ (Cemerlang Tertinggi)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A-plus'; }
      else if (percent >= 75) { grade = 'A (Cemerlang)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A'; }
      else if (percent >= 70) { grade = 'A- (Cemerlang)'; status = 'LULUS CEMERLANG'; gradeClass = 'grade-A'; }
      else if (percent >= 65) { grade = 'B+ (Kepujian Tertinggi)'; status = 'KEPUJIAN'; gradeClass = 'grade-B'; }
      else if (percent >= 60) { grade = 'B (Kepujian Tinggi)'; status = 'KEPUJIAN'; gradeClass = 'grade-B'; }
      else if (percent >= 55) { grade = 'C+ (Kepujian Atas)'; status = 'KEPUJIAN'; gradeClass = 'grade-B'; }
      else if (percent >= 50) { grade = 'C (Kepujian)'; status = 'LULUS'; gradeClass = 'grade-C'; }
      else if (percent >= 45) { grade = 'D (Lulus Atas)'; status = 'LULUS'; gradeClass = 'grade-C'; }
      else if (percent >= 40) { grade = 'E (Lulus)'; status = 'LULUS'; gradeClass = 'grade-C'; }
      else { grade = 'G (Gagal)'; status = 'BELUM MENCAPAI TAHAP'; gradeClass = 'grade-E'; }

      badge.innerText = 'GRED: ' + grade;
      badge.className = 'grade-badge ' + gradeClass;
      document.getElementById('resStatus').innerText = status;

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
      if (confirm("Adakah anda ingin mengulangi sesi latihan ini semula? Pilihan jawapan bagi set ini akan ditetapkan semula.")) {
        userAnswers = {};
        examSubmitted = false;
        clearInterval(timerInterval);
        timeLeft = 90 * 60;
        document.getElementById('examView').style.display = '';
        document.getElementById('submitBtnHeader').style.display = '';
        document.getElementById('resultsView').style.display = 'none';
        renderQuestions();
        renderNavGrid();
        updateProgress();
        startTimer();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');
console.log("Dual-Set index.html created successfully!");
