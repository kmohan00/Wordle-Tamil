import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
