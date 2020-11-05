function createAnalitycs() {
  let counetr = 0
  let isDestroyed = false

  const listener = () => counetr++

  document.addEventListener('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener)
      isDestroyed = true
    },
    getClick() {
      if (isDestroyed) {
        return 'analytics is destroyed'
      }
      return counetr
    }
  } 
}

window.analytics = createAnalitycs()