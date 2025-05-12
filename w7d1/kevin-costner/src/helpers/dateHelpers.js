export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const timeDiff = todayDate - lastWateredDate 
  const timeInDays = timeDiff / 1000 / 86400
  

  return timeInDays < wateringInterval
}