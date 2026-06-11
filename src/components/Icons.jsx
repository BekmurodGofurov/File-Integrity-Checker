const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ShieldCheckIcon = ({ size = 24, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

export const UploadCloudIcon = ({ size = 24, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
)

export const DownloadCloudIcon = ({ size = 24, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <polyline points="8 17 12 21 16 17" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.11" />
  </svg>
)

export const FileTextIcon = ({ size = 24, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

export const CopyIcon = ({ size = 18, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
)

export const CheckIcon = ({ size = 18, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const ArrowLeftIcon = ({ size = 18, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

export const ArrowRightIcon = ({ size = 18, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const SunIcon = ({ size = 20, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

export const MoonIcon = ({ size = 20, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

export const HashIcon = ({ size = 24, style }) => (
  <svg {...base} width={size} height={size} style={style}>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
)

/* Big result icons with animation paths */
export const BigCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
       width="38" height="38">
    <polyline className="check-path" points="4 12 9 17 20 6" />
  </svg>
)

export const BigXIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
       width="38" height="38">
    <line className="x-path-1" x1="18" y1="6" x2="6" y2="18" />
    <line className="x-path-2" x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* Sender card hero icon */
export const SenderHeroIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" width="56" height="56">
    <rect width="56" height="56" rx="16" fill="url(#sg)" />
    <defs>
      <linearGradient id="sg" x1="0" y1="0" x2="56" y2="56">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <polyline points="36 24 28 16 20 24" stroke="white" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="28" y1="16" x2="28" y2="36" stroke="white" strokeWidth="2.2"
          strokeLinecap="round"/>
    <path d="M18 40h20" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

/* Receiver card hero icon */
export const ReceiverHeroIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" width="56" height="56">
    <rect width="56" height="56" rx="16" fill="url(#rg)" />
    <defs>
      <linearGradient id="rg" x1="0" y1="0" x2="56" y2="56">
        <stop stopColor="#a78bfa" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M28 14l10 5v8c0 6-4.5 9.5-10 11-5.5-1.5-10-5-10-11v-8l10-5z"
          stroke="white" strokeWidth="2.2" strokeLinecap="round"
          strokeLinejoin="round" fill="none"/>
    <polyline points="23 28 27 32 33 25" stroke="white" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)
