export const Font = (Vmax: string, Vmin: string, Fmax: string, Fmin: string) =>
  `font-size: calc( (100vw - ${Vmin}px)/(${Vmax} - ${Vmin}) * (${Fmax} - ${Fmin}) + ${Fmin}px)`
