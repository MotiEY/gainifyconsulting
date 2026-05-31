export const SITE = {
  name: 'מוטי שדות',
  tagline: 'ייעוץ עסקי אסטרטגי',
  email: 'motisdt@gmail.com',
  phone: '+972525523021',
  phoneDisplay: '052-552-3021',
  /** Live Calendly URL for free 15-min compatibility call. */
  calendlyUrl15min: 'https://calendly.com/motisdt/meet-with-me',
  /** TODO: if/when Moti creates a separate event type for the paid 2-hour diagnostic mapping, replace this. For now, all CTAs route to the 15-min compatibility call. */
  calendlyUrlDiagnostic: 'https://calendly.com/motisdt/meet-with-me',
  /** Legacy single URL, kept for backwards compatibility, points to 15-min by default. */
  calendlyUrl: 'https://calendly.com/motisdt/meet-with-me',
} as const;
