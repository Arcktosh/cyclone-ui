export const CelciusToFahrenheit = (celcius: number) => {
  return (celcius * 9) / 5 + 32
}
export const FahrenheitToCelcius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9
}
export const KelvinToCelcius = (kelvin: number) => {
  return kelvin - 273.15
}
export const KelvinToFahrenheit = (kelvin: number) => {
  return ((kelvin - 273.15) * 9) / 5 + 32
}
export const KelvinToRankine = (kelvin: number) => {
  return (kelvin * 9) / 5
}
export const RankineToCelcius = (rankine: number) => {
  return ((rankine - 491.67) * 5) / 9
}
export const RankineToFahrenheit = (rankine: number) => {
  return rankine - 459.67
}
export const RankineToKelvin = (rankine: number) => {
  return (rankine * 5) / 9
}
export const CelciusToKelvin = (celcius: number) => {
  return celcius + 273.15
}
export const CelciusToRankine = (celcius: number) => {
  return (celcius * 9) / 5 + 491.67
}
export const FahrenheitToKelvin = (fahrenheit: number) => {
  return ((fahrenheit + 459.67) * 5) / 9
}
export const FahrenheitToRankine = (fahrenheit: number) => {
  return fahrenheit + 459.67
}
