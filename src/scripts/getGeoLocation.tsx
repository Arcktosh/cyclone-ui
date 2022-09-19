export const GetGeoLocation = () => {
    const handleError = (error: any) => {
        return `ERROR(${error.code}): ${error.message}`
    }
    const showPosition = (position: any) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        return {
            longitude: longitude,
            latitude: latitude,
            url: `https://www.google.com/maps/@${latitude},${longitude}`
        }
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError)
    } else {
        return 'Geolocation is not supported by this browser.'
    }
}
