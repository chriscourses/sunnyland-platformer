window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      player.jump()
      keys.w.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'd':
      keys.d.pressed = true
      break
    case ' ':
      player.roll()
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      keys.a.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

// On return to game's tab, ensure delta time is reset
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    lastTime = performance.now()
  }
})
