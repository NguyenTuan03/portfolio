export function HeroDevices() {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 pt-4">
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-hidden="true"
      >
        {/* Desk Base Gradient Line */}
        <line
          x1="20"
          y1="340"
          x2="880"
          y2="340"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Ambient Glow underneath laptop */}
        <ellipse
          cx="450"
          cy="335"
          rx="260"
          ry="18"
          fill="var(--accent)"
          fillOpacity="0.12"
        />

        {/* ================= LEFT: TABLET ================= */}
        <g transform="translate(100, 110)">
          {/* Tablet Body */}
          <rect
            x="0"
            y="0"
            width="170"
            height="225"
            rx="18"
            className="fill-surface stroke-border"
            strokeWidth="2.5"
          />
          {/* Tablet Screen */}
          <rect
            x="10"
            y="12"
            width="150"
            height="200"
            rx="10"
            className="fill-slate-900"
          />
          {/* Camera dot */}
          <circle cx="85" cy="6" r="2" fill="#64748b" />
          {/* App Wireframe on Tablet */}
          <rect x="22" y="24" width="65" height="10" rx="4" fill="#10b981" />
          <rect x="22" y="42" width="126" height="42" rx="6" fill="#1e293b" />
          <rect x="30" y="52" width="50" height="8" rx="3" fill="#38bdf8" />
          <rect x="30" y="65" width="80" height="6" rx="2" fill="#64748b" />

          {/* Cards Grid on Tablet */}
          <rect x="22" y="94" width="58" height="52" rx="6" fill="#1e293b" />
          <circle cx="40" cy="112" r="9" fill="#10b981" fillOpacity="0.25" />
          <rect x="32" y="128" width="38" height="5" rx="2" fill="#94a3b8" />

          <rect x="90" y="94" width="58" height="52" rx="6" fill="#1e293b" />
          <circle cx="108" cy="112" r="9" fill="#3b82f6" fillOpacity="0.25" />
          <rect x="100" y="128" width="38" height="5" rx="2" fill="#94a3b8" />

          {/* Stats Bar */}
          <rect x="22" y="156" width="126" height="34" rx="6" fill="#1e293b" />
          <rect x="32" y="168" width="45" height="10" rx="3" fill="#10b981" />
          <rect x="85" y="170" width="50" height="6" rx="2" fill="#475569" />
        </g>

        {/* ================= CENTER: LAPTOP ================= */}
        <g transform="translate(260, 20)">
          {/* Laptop Lid / Screen Body */}
          <rect
            x="30"
            y="10"
            width="320"
            height="215"
            rx="16"
            className="fill-slate-900 stroke-border"
            strokeWidth="3"
          />

          {/* Screen Inner */}
          <rect
            x="42"
            y="22"
            width="296"
            height="188"
            rx="8"
            fill="#090e17"
          />

          {/* Web Cam */}
          <circle cx="190" cy="16" r="2.5" fill="#334155" />

          {/* Editor Header Bar */}
          <rect x="42" y="22" width="296" height="24" rx="8" fill="#111827" />
          <circle cx="56" cy="34" r="3.5" fill="#ef4444" />
          <circle cx="68" cy="34" r="3.5" fill="#f59e0b" />
          <circle cx="80" cy="34" r="3.5" fill="#10b981" />
          {/* Tab */}
          <rect x="98" y="26" width="85" height="16" rx="4" fill="#1e293b" />
          <circle cx="108" cy="34" r="2.5" fill="#10b981" />
          <rect x="116" y="32" width="55" height="5" rx="2" fill="#e2e8f0" />

          {/* Code Window Sidebar */}
          <rect x="42" y="46" width="46" height="164" fill="#0c1322" />
          <rect x="50" y="56" width="28" height="4" rx="2" fill="#38bdf8" />
          <rect x="54" y="66" width="24" height="4" rx="2" fill="#64748b" />
          <rect x="54" y="75" width="20" height="4" rx="2" fill="#64748b" />
          <rect x="54" y="84" width="26" height="4" rx="2" fill="#64748b" />
          <rect x="50" y="98" width="28" height="4" rx="2" fill="#10b981" />
          <rect x="54" y="108" width="22" height="4" rx="2" fill="#64748b" />

          {/* Code Lines */}
          <g transform="translate(100, 56)">
            {/* import ... */}
            <rect x="0" y="0" width="36" height="6" rx="2" fill="#f43f5e" />
            <rect x="42" y="0" width="55" height="6" rx="2" fill="#38bdf8" />
            <rect x="103" y="0" width="28" height="6" rx="2" fill="#f43f5e" />
            <rect x="137" y="0" width="60" height="6" rx="2" fill="#a7f3d0" />

            {/* export function ... */}
            <rect x="0" y="14" width="42" height="6" rx="2" fill="#a855f7" />
            <rect x="48" y="14" width="52" height="6" rx="2" fill="#38bdf8" />
            <rect x="106" y="14" width="60" height="6" rx="2" fill="#fcd34d" />

            {/* return ( ... ) */}
            <rect x="12" y="28" width="32" height="6" rx="2" fill="#a855f7" />
            <rect x="50" y="28" width="8" height="6" rx="2" fill="#94a3b8" />

            {/* <Component ... */}
            <rect x="24" y="42" width="60" height="6" rx="2" fill="#10b981" />
            <rect x="90" y="42" width="34" height="6" rx="2" fill="#38bdf8" />
            <rect x="130" y="42" width="45" height="6" rx="2" fill="#fde047" />

            <rect x="36" y="56" width="70" height="6" rx="2" fill="#38bdf8" />
            <rect x="112" y="56" width="50" height="6" rx="2" fill="#10b981" />

            <rect x="36" y="70" width="95" height="6" rx="2" fill="#94a3b8" />
            <rect x="137" y="70" width="35" height="6" rx="2" fill="#38bdf8" />

            <rect x="24" y="84" width="45" height="6" rx="2" fill="#10b981" />

            {/* Cursor */}
            <rect x="74" y="83" width="3" height="8" rx="1.5" fill="#10b981" />
          </g>

          {/* Terminal Box inside Editor */}
          <rect x="94" y="156" width="234" height="46" rx="5" fill="#070b12" />
          <rect x="104" y="166" width="30" height="5" rx="2" fill="#10b981" />
          <rect x="140" y="166" width="85" height="5" rx="2" fill="#e2e8f0" />
          <rect x="104" y="177" width="130" height="5" rx="2" fill="#64748b" />
          <rect x="104" y="188" width="90" height="5" rx="2" fill="#38bdf8" />

          {/* Laptop Base */}
          <path
            d="M0 225 L380 225 L360 236 L20 236 Z"
            className="fill-slate-700 stroke-slate-600"
            strokeWidth="1"
          />
          {/* Laptop Trackpad Notch */}
          <rect x="165" y="225" width="50" height="4" rx="2" fill="#475569" />
          {/* Laptop Base Bottom Lip */}
          <rect
            x="10"
            y="235"
            width="360"
            height="5"
            rx="2.5"
            className="fill-slate-800"
          />
        </g>

        {/* ================= RIGHT: PHONE & COFFEE ================= */}
        <g transform="translate(640, 160)">
          {/* Phone Body */}
          <rect
            x="0"
            y="0"
            width="90"
            height="175"
            rx="18"
            className="fill-surface stroke-border"
            strokeWidth="2.5"
          />
          {/* Phone Screen */}
          <rect
            x="6"
            y="8"
            width="78"
            height="158"
            rx="12"
            fill="#090e17"
          />
          {/* Speaker / Dynamic Island */}
          <rect x="32" y="12" width="26" height="5" rx="2.5" fill="#1e293b" />

          {/* Phone Content */}
          <rect x="14" y="26" width="45" height="8" rx="3" fill="#10b981" />
          <rect x="14" y="40" width="62" height="28" rx="6" fill="#1e293b" />
          <circle cx="26" cy="54" r="7" fill="#38bdf8" />
          <rect x="38" y="50" width="30" height="4" rx="2" fill="#e2e8f0" />
          <rect x="38" y="57" width="22" height="3" rx="1.5" fill="#64748b" />

          <rect x="14" y="74" width="62" height="22" rx="5" fill="#1e293b" />
          <rect x="22" y="82" width="46" height="5" rx="2" fill="#10b981" />

          <rect x="14" y="102" width="62" height="22" rx="5" fill="#1e293b" />
          <rect x="22" y="110" width="38" height="5" rx="2" fill="#94a3b8" />

          <rect x="14" y="130" width="62" height="18" rx="9" fill="#10b981" />
          <rect x="28" y="137" width="34" height="4" rx="2" fill="#ffffff" />
        </g>

        {/* Ceramic Coffee Cup */}
        <g transform="translate(760, 240)">
          {/* Saucer */}
          <ellipse
            cx="40"
            cy="90"
            rx="36"
            ry="9"
            className="fill-slate-800"
          />
          {/* Cup Body */}
          <path
            d="M12 40 L68 40 L62 82 C62 86, 18 86, 18 82 Z"
            className="fill-surface stroke-border"
            strokeWidth="2"
          />
          {/* Coffee inside */}
          <ellipse cx="40" cy="42" rx="24" ry="6" fill="#58311d" />
          {/* Cup Handle */}
          <path
            d="M65 48 C76 48, 76 72, 63 74"
            fill="none"
            className="stroke-border"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Steam / Aroma curves */}
          <path
            d="M32 30 C30 22, 36 16, 33 8"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            d="M44 32 C42 20, 48 14, 45 6"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
