// Profile ID Generation System
// Format: PS25101 where PS = Panchal Samaj, 25 = Year (2025), 101 = Unique Number

interface ProfileIdConfig {
  prefix: string
  year: number
  startRange: number
  endRange: number
}

const DEFAULT_CONFIG: ProfileIdConfig = {
  prefix: "PS",
  year: new Date().getFullYear(),
  startRange: 2000,
  endRange: 9999,
}

// Generate unique profile ID
export function generateProfileId(config: Partial<ProfileIdConfig> = {}): string {
  const { prefix, year, startRange, endRange } = { ...DEFAULT_CONFIG, ...config }

  // Get last two digits of year
  const yearSuffix = year.toString().slice(-2)

  // Generate random number in range
  const uniqueNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange

  return `${prefix}${yearSuffix}${uniqueNumber}`
}

// Validate profile ID format
export function validateProfileId(profileId: string): boolean {
  const regex = /^PS\d{2}\d{3,4}$/
  return regex.test(profileId)
}

// Parse profile ID components
export function parseProfileId(profileId: string): {
  prefix: string
  year: number
  uniqueNumber: number
  isValid: boolean
} {
  if (!validateProfileId(profileId)) {
    return {
      prefix: "",
      year: 0,
      uniqueNumber: 0,
      isValid: false,
    }
  }

  const prefix = profileId.slice(0, 2)
  const yearDigits = profileId.slice(2, 4)
  const uniqueNumber = Number.parseInt(profileId.slice(4))

  // Convert 2-digit year to full year (assuming 2000s)
  const year = 2000 + Number.parseInt(yearDigits)

  return {
    prefix,
    year,
    uniqueNumber,
    isValid: true,
  }
}

// Get profile ID display format
export function formatProfileId(profileId: string): string {
  if (!validateProfileId(profileId)) {
    return profileId
  }

  const parsed = parseProfileId(profileId)
  return `${parsed.prefix}-${parsed.year.toString().slice(-2)}-${parsed.uniqueNumber.toString().padStart(4, "0")}`
}

// Generate batch of profile IDs
export function generateProfileIdBatch(count: number, config: Partial<ProfileIdConfig> = {}): string[] {
  const ids: string[] = []
  const usedNumbers = new Set<number>()

  const { prefix, year, startRange, endRange } = { ...DEFAULT_CONFIG, ...config }
  const yearSuffix = year.toString().slice(-2)

  for (let i = 0; i < count; i++) {
    let uniqueNumber: number
    do {
      uniqueNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange
    } while (usedNumbers.has(uniqueNumber))

    usedNumbers.add(uniqueNumber)
    ids.push(`${prefix}${yearSuffix}${uniqueNumber}`)
  }

  return ids
}

// Check if profile ID belongs to current year
export function isCurrentYearProfile(profileId: string): boolean {
  const parsed = parseProfileId(profileId)
  return parsed.isValid && parsed.year === new Date().getFullYear()
}

// Get profile creation year from ID
export function getProfileYear(profileId: string): number | null {
  const parsed = parseProfileId(profileId)
  return parsed.isValid ? parsed.year : null
}
