export const ScreenSizeCheck = () => {
  var w = window.innerWidth
  var h = window.innerHeight
  var s = window.screen.width
  var x = window.screen.height
  return { innerWidth: w, innerHeight: h, screenWidth: s, screenHeight: x }
}
