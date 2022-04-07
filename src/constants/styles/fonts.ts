type FontSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'xmedium' | 'large' | 'xlarge'

type FontSizeValues = {
  fontSize: number,
}

export const size: Record<FontSize, FontSizeValues> = {
  xsmall: { fontSize: 14 },
  small: { fontSize: 16 },
  normal: { fontSize: 18 },
  medium: { fontSize: 22 },
  xmedium: { fontSize: 24 },
  large: { fontSize: 28 },
  xlarge: { fontSize: 34 }
}