import { passwordGenerator } from '../utils/password.js';

export function passwordGeneratorView(container) {
  const passContainer = document.createElement('article');
  const title = document.createElement('h2');
  const inputContainer = document.createElement('div');
  const input = document.createElement('input');
  const inputNum = document.createElement('input');
  const copyBtn = document.createElement('button');
  const generateBtn = document.createElement('button');
  const passDiv = document.createElement('div');
  const img = document.createElement('img')

  passContainer.classList.add('passwordContainer');
  title.textContent = 'Password Generator';

  input.type = 'text';
  input.classList.add('input');
  input.placeholder = 'Password';
  input.readOnly = true;

  inputNum.type = 'text'
  inputNum.min = '4'
  inputNum.max = '32'
  inputNum.value = '8'
  inputNum.placeholder = 'long'
  inputNum.classList.add('inputNum');

  // img.src = '/src/password/views/assets/copy.svg'
  img.src = '/src/password/views/assets/copy.svg'

  copyBtn.classList.add("copy-btn");
  copyBtn.appendChild(img)
  // copyBtn.innerHTML = `<img src="./assets/copy.svg">`;

  generateBtn.classList.add('generate-btn');
  generateBtn.textContent = 'Generate'; // Corregido el typo "Gerenrate"

  inputContainer.classList.add('input-container');


  passDiv.appendChild(input)
  passDiv.appendChild(copyBtn)

  inputContainer.appendChild(inputNum)
  inputContainer.appendChild(passDiv)
  passContainer.appendChild(title);
  passContainer.appendChild(inputContainer);
  passContainer.appendChild(generateBtn);

  container.appendChild(passContainer);

  inputNum.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  })

  generateBtn.addEventListener('click', () => {
    input.value = passwordGenerator('',inputNum.value);
  });

  copyBtn.addEventListener('click', () => {
    input.select()
    input.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(input.value);
  })
}
