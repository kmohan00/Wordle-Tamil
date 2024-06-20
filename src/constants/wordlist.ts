import { CONFIG } from './config'

export const WORDS = [
  'தமிழ்நாடு',
  'கவிதைகள்',
  'அணுசக்தி',
  'சந்திரன்',
  'வீடுகளின்',
  'பதிவுகள்',
  'அணுகமுடி',
  'விண்ணியல்',
  'சந்தோஷம்',
  'விளையாட்டு',
  'புகழ்பெறு',
  'அரசியல்',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
