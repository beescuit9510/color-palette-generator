const generatorBtn = document.querySelector('.generate-btn')
const colorsContainer = document.querySelector('.colors-container')
const colors = 5
const hexGenerator = () => {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
  )
}

const generatorColorNode = () => {
  const colorNode = document.createElement('div')
  const color = document.createElement('div')
  const colorBottom = document.createElement('div')
  const colorName = document.createElement('p')
  const colorCopyBtn = document.createElement('button')
  colorNode.classList.add('color-container')
  color.classList.add('color')
  colorBottom.classList.add('color-bottom')
  colorName.classList.add('color-name')
  colorCopyBtn.classList.add('color-copy-btn')

  colorNode.appendChild(color)
  colorNode.appendChild(colorBottom)
  colorBottom.appendChild(colorName)
  colorBottom.appendChild(colorCopyBtn)

  const colorHaxValue = hexGenerator()
  colorName.textContent = colorHaxValue
  color.style.backgroundColor = colorHaxValue
  colorCopyBtn.textContent = 'copy'
  colorBottom.addEventListener('click', () =>
    navigator.clipboard.writeText(colorHaxValue)
  )

  return colorNode
}
const displayColors = () => {
  colorsContainer.innerHTML = ''

  Array.from({ length: colors }).forEach(() => {
    colorsContainer.appendChild(generatorColorNode())
  })
}

generatorBtn.addEventListener('click', displayColors)
displayColors()
