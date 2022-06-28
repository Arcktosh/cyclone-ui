export function CheckUrlStatus(url: string) {
  var request = new XMLHttpRequest()
  request.open("GET", url, true)
  request.send()
  request.onload = function () {
    return request.status
  }
}
