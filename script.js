const generatorBtn = document.querySelector('.generate-btn')
const colorBoxes = document.querySelectorAll('.color-box')
const colors = 5
const hexGenerator = () => {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
  )
}

const displayColors = () => {
  Array.from({ length: colors }).forEach(() => {
    colorBoxes.forEach((node) => {
      const hexValue = hexGenerator()
      const copyHexValue = () => {
        navigator.clipboard
          .writeText(hexValue)
          .then(() => {
            const icon = node.querySelector('.fa-copy')
            icon.classList.remove('fa-copy')
            icon.classList.add('fa-check')
            setTimeout(
              () => {
                icon.classList.remove('fa-check')
                icon.classList.add('fa-copy')
              },
              500,
              icon
            )
          })
          .catch(console.log)
      }

      node.querySelector('.color').style.backgroundColor = hexValue
      node.querySelector('.color-name').textContent = hexValue
      node.querySelector('.copy-btn').addEventListener('click', copyHexValue)
    })
  })
}

generatorBtn.addEventListener('click', displayColors)
displayColors()
