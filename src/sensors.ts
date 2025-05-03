function isWebkit(userAgent: string): boolean {
  return userAgent.match(/(iPod|iPhone|iPad)/) !== null && userAgent.match(/AppleWebKit/) != null
}

export function setupOrientation(
  successCallback: (event: DeviceOrientationEvent) => void,
  failedCallback: (msg: string) => void,
) {
  if (isWebkit(window.navigator.userAgent)) {
    // cast to any because DeviceOrientationEvent has .requestPermission only on iOS
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    if (
      window.DeviceOrientationEvent &&
      typeof (window.DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      ;(window.DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            console.error('permission granted')
            window.addEventListener('deviceorientation', successCallback, true)
          } else {
            failedCallback('IOS device orientation was not granted')
          }
        })
        .catch(() => {
          failedCallback('IOS device orientation unavailable')
        })
    } else {
      failedCallback('IOS device orientation unavailable')
    }
  } else {
    if (!window.DeviceOrientationEvent) {
      failedCallback('Device orientation not supported')
    } else {
      window.addEventListener('deviceorientationabsolute', successCallback)
      console.debug('Orientation handling mounted')
    }
  }
}

export function cleanOrientation(handleOrientation: (event: DeviceOrientationEvent) => void) {
  if (isWebkit(window.navigator.userAgent)) {
    window.removeEventListener('deviceorientation', handleOrientation)
  } else {
    window.removeEventListener('deviceorientationabsolute', handleOrientation)
  }
}

export function setupLocation(
  successCallback: (event: GeolocationPosition) => void,
  errorCallback: (error: GeolocationPositionError) => void,
  failedCallback: () => void,
) {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 5000,
    })
  } else {
    failedCallback()
  }
}
