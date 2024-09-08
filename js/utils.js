const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function checkCollisions(object1, object2) {
  const isColliding =
    object1.hitbox.x + object1.hitbox.width >= object2.hitbox.x &&
    object1.hitbox.x <= object2.hitbox.x + object2.hitbox.width &&
    object1.hitbox.y <= object2.hitbox.y + object2.hitbox.height &&
    object1.hitbox.y + object1.hitbox.height >= object2.hitbox.y

  if (!isColliding) return null

  const xOverlap = Math.min(
    object1.x + object1.width - object2.x,
    object2.x + object2.width - object1.x,
  )

  const yOverlap = Math.min(
    object1.y + object1.height - object2.y,
    object2.y + object2.height - object1.y,
  )

  if (xOverlap < yOverlap) {
    return object1.x < object2.x ? 'right' : 'left'
  } else {
    return object1.y < object2.y ? 'bottom' : 'top'
  }
}
