import { useEffect, useState } from "react"

export const CountUp = (targetDate: Date) => {
  const countUpDate = new Date(targetDate).getTime()

  const [countUp, setCountUp] = useState(countUpDate + 1000)

  useEffect(() => {
    console.log({ countUpDate })
    const interval = setInterval(() => {
      setCountUp(countUpDate + 1000)
    }, 10000)
    console.log(clearInterval(interval))
    return () => clearInterval(interval)
  }, [countUpDate])

  return countUp
}

export const CountDown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return countDown
}

export const convertDateToDaysHoursMinSec = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}
