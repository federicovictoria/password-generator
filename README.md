# 🔐 Password Generator

Generador de contraseñas aleatorias hecho con **JavaScript vanilla** (sin frameworks ni herramientas de build). Permite elegir la longitud y copiar el resultado al portapapeles con un solo clic.

🌐 **Demo:** [https://federicovictoria.github.io/password-generator/](https://federicovictoria.github.io/password-generator/)

## ✨ Características

- Genera contraseñas aleatorias con letras (mayúsculas y minúsculas) y números.
- Longitud configurable entre 4 y 32 caracteres (8 por defecto).
- Botón para copiar la contraseña al portapapeles.
- Filtro en tiempo real que solo permite ingresar números en el campo de longitud.
- Interfaz oscura responsive con tema estilo Tokyo Night.
- Tipografía **Inter** (variable font, incluida en el proyecto).

## 🛠️ Tecnologías

- **HTML5**
- **CSS3** — nesting nativo, variables y transiciones
- **JavaScript (ES Modules)** — sin dependencias externas

## 📁 Estructura del proyecto

```
password-generator/
├── index.html                  # Punto de entrada HTML
├── main.js                     # Monta la aplicación en el DOM
├── src/
│   ├── app.js                  # Inicializa la vista
│   └── password/
│       ├── utils/
│       │   └── password.js     # Lógica del generador de contraseñas
│       └── views/
│           ├── passwordView.js # Construye la interfaz con JS
│           └── assets/
│               └── copy.svg    # Icono de copiar
└── styles/
    ├── style.css               # Estilos generales
    └── fonts/                  # Fuente Inter variable
```

## 🚀 Cómo ejecutar el proyecto

Al usar módulos ES (`import`/`export`), el proyecto necesita servirse desde un servidor local (no funciona abriendo el `index.html` directamente con doble clic).

1. Clonar el repositorio:

   ```bash
   git clone git@github.com:federicovictoria/password-generator.git
   cd password-generator
   ```

2. Levantar un servidor local. Cualquiera de estas opciones funciona:

   ```bash
   # Con Node.js (sin instalar nada)
   npx serve

   # O con Python
   python3 -m http.server

   # O con la extensión Live Server de VS Code
   ```

3. Abrir en el navegador la dirección que indique la consola (por lo general `http://localhost:3000` o `http://localhost:8000`).

## 📖 Uso

1. Ingresá la longitud deseada para la contraseña (entre 4 y 32).
2. Hacé clic en **Generate** para crear una nueva contraseña.
3. Hacé clic en el icono de copiar 📋 para llevarla al portapapeles.

## 🧠 Cómo funciona

El corazón del proyecto es la función `passwordGenerator(characters, long)` en [`src/password/utils/password.js`](src/password/utils/password.js):

```js
export function passwordGenerator(characters = '', long = 8) {
  const text = characters ? characters : "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  let password = '';

  for (let i = 0; i < long; i++) {
    let random = Math.floor(Math.random() * text.length - 1)
    password += text.substring(random, random + 1);
  }
  return password
}
```

- Recibe el set de caracteres a usar (si está vacío, usa letras y números por defecto) y la longitud deseada.
- Itera `long` veces, eligiendo en cada vuelta un índice aleatorio del set de caracteres.
- La vista ([`src/password/views/passwordView.js`](src/password/views/passwordView.js)) se encarga de armar la interfaz y conectar los eventos de generar y copiar.
