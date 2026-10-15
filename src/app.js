import { passwordGeneratorView } from './password/views/passwordView.js'

export function init(root) {
  const container_1 = document.createElement('section')

  container_1.classList.add('container-1')

  passwordGeneratorView(container_1)
  
  root.appendChild(container_1)
}