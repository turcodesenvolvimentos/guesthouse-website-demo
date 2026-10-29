export function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function AmenityIcon({ name }: { name: string }) {
  switch (name) {
    case 'pool':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M2 16c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
          <path d="M2 20c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
          <path d="M6 8V4h4v4" />
          <path d="M10 8c0 2-2 3-2 5" />
        </svg>
      )
    case 'breakfast':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M8 3v8a4 4 0 008 0V3" />
          <path d="M5 21h14" />
          <path d="M12 15v6" />
        </svg>
      )
    case 'wifi':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M5 12.55a11 11 0 0114.08 0" />
          <path d="M1.42 9a16 16 0 0121.16 0" />
          <path d="M8.53 16.11a6 6 0 016.95 0" />
          <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'parking':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 010 6H9" />
        </svg>
      )
    case 'spa':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
          <path d="M12 10v4M10 12h4" />
        </svg>
      )
    case 'bike':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6l-2.5 6H9l3-7h4.5L19 15" />
          <path d="M12 12l-3 5.5" />
        </svg>
      )
    case 'concierge':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M12 3l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" />
          <path d="M5 21h14" />
        </svg>
      )
    case 'pets':
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <circle cx="7" cy="8" r="1.5" />
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="17" cy="8" r="1.5" />
          <circle cx="9" cy="12" r="1.5" />
          <path d="M12 13c-3 0-5 2.5-4 5s5 2 5 2 4 .5 5-2-1-5-4-5z" />
        </svg>
      )
    default:
      return null
  }
}
