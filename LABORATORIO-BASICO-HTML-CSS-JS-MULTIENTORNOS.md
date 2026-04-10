# Laboratorio Básico

## HTML, CSS, JavaScript y manejo simple de versiones en multientornos

---

## Propósito del laboratorio

En este laboratorio construirás una página web básica con:

- HTML
- CSS
- JavaScript

Después la usarás para practicar una idea muy importante en desarrollo profesional:

- un mismo proyecto puede pasar por distintos entornos
- los cambios no deberían llegar directamente al entorno publicado
- una versión debe poder identificarse con claridad

Este laboratorio está pensado para estudiantes que apenas están comenzando con desarrollo web.

---

## Qué aprenderás

Al terminar, deberías poder:

- crear una página web simple con archivos estáticos
- usar Git y ramas básicas
- distinguir entre `develop` y `staging`
- mostrar una versión visible dentro de la interfaz
- publicar un entorno `staging` usando GitHub Pages

---

## Idea principal

En esta práctica usaremos dos ramas:

- `develop`: aquí haces cambios y pruebas
- `staging`: aquí publicas la versión que quieres mostrar

El concepto de promoción será simple:

1. haces cambios en `develop`
2. verificas que todo se vea bien
3. promueves esos cambios a `staging`
4. GitHub Pages publica lo que está en `staging`

---

## Qué vas a construir

Una página web sencilla que muestre:

- nombre del proyecto
- nombre del entorno actual
- versión actual
- fecha de actualización
- lista de cambios recientes

Eso te permitirá ver claramente cuándo una versión cambia y en qué entorno estás.

---

## Requisitos

Necesitas:

- Git
- una cuenta de GitHub
- Visual Studio Code o cualquier editor de texto
- un navegador

No necesitas:

- Node.js
- React
- base de datos
- backend

---

## Estructura esperada

Tu proyecto puede verse así:

```text
laboratorio-multientornos/
├─ index.html
├─ styles.css
├─ app.js
└─ config.js
```

---

## Parte A. Construcción de la página

### Paso 1. Crear la carpeta del proyecto

Crea una carpeta llamada:

```text
laboratorio-multientornos
```

Entra en ella y crea estos archivos:

- `index.html`
- `styles.css`
- `app.js`
- `config.js`

---

### Paso 2. Crear `index.html`

Usa este contenido:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Release Board Básico</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="container">
      <section class="hero">
        <p class="eyebrow">Laboratorio básico</p>
        <h1>Release Board</h1>
        <p class="subtitle">
          Práctica inicial de versiones y multientornos con HTML, CSS y JavaScript.
        </p>
      </section>

      <section class="grid">
        <article class="card highlight">
          <h2>Entorno</h2>
          <p id="environment" class="badge">cargando...</p>
        </article>

        <article class="card">
          <h2>Versión</h2>
          <p id="version" class="mono">cargando...</p>
        </article>

        <article class="card">
          <h2>Última actualización</h2>
          <p id="updatedAt">cargando...</p>
        </article>
      </section>

      <section class="card">
        <h2>Cambios de esta versión</h2>
        <ul id="changes"></ul>
      </section>
    </main>

    <script src="config.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

---

### Paso 3. Crear `styles.css`

Usa este contenido:

```css
:root {
  font-family: Arial, Helvetica, sans-serif;
  color: #f8fafc;
  background:
    linear-gradient(180deg, #1e3a5f 0%, #0f172a 60%, #020617 100%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}

.hero {
  margin-bottom: 24px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: #93c5fd;
}

.subtitle {
  max-width: 700px;
  color: #cbd5e1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 16px;
  padding: 18px;
}

.highlight {
  border-color: rgba(59, 130, 246, 0.5);
}

.badge {
  display: inline-block;
  background: #2563eb;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: bold;
  text-transform: uppercase;
}

.mono {
  font-family: Consolas, "Courier New", monospace;
  color: #fde68a;
}

ul {
  padding-left: 20px;
}
```

---

### Paso 4. Crear `config.js`

Usa este contenido inicial:

```js
window.APP_CONFIG = {
  environment: "develop",
  version: "v0.1.0-dev",
  updatedAt: "2026-04-09",
  changes: [
    "Se creó la primera versión del laboratorio",
    "Se agregó una vista de entorno y versión",
    "Se preparó la estructura para trabajar con ramas"
  ]
};
```

Este archivo es clave para el laboratorio.

Aquí controlarás:

- el entorno
- la versión
- la fecha
- los cambios visibles

---

### Paso 5. Crear `app.js`

Usa este contenido:

```js
const config = window.APP_CONFIG;

document.getElementById("environment").textContent = config.environment;
document.getElementById("version").textContent = config.version;
document.getElementById("updatedAt").textContent = config.updatedAt;

const changesList = document.getElementById("changes");

config.changes.forEach((change) => {
  const item = document.createElement("li");
  item.textContent = change;
  changesList.appendChild(item);
});
```

---

## Parte B. Prueba local

### Paso 6. Abrir el proyecto en el navegador

Puedes abrir `index.html` directamente en el navegador.

O, si usas VS Code, puedes usar una extensión como Live Server.

Verifica que aparezcan:

- entorno: `develop`
- versión: `v0.1.0-dev`
- fecha
- lista de cambios

---

## Parte C. Control de versiones

### Paso 7. Inicializar Git

En la carpeta del proyecto:

```powershell
git init
git add .
git commit -m "feat: initial basic multienvironment page"
```

---

### Paso 8. Crear el repositorio en GitHub

1. Crea un repositorio público en GitHub.
2. Conéctalo desde tu terminal.

Ejemplo:

```powershell
git remote add origin TU_URL_DEL_REPOSITORIO
git branch -M main
git push -u origin main
```

---

### Paso 9. Crear las ramas del laboratorio

Usaremos:

- `develop`
- `staging`

Créelas así:

```powershell
git checkout -b develop
git push -u origin develop
git checkout -b staging
git push -u origin staging
git checkout develop
```

---

## Parte D. Publicar el entorno `staging`

### Paso 10. Configurar GitHub Pages

En GitHub entra a:

`Settings -> Pages`

En `Build and deployment` configura:

- Source: `Deploy from a branch`
- Branch: `staging`
- Folder: `/ (root)`

Con esto, GitHub Pages publicará el contenido que exista en la rama `staging`.

---

### Paso 11. Entender el modelo de entornos del laboratorio

En este ejercicio:

- `develop` es tu entorno de trabajo
- `staging` es tu entorno publicado

Eso significa:

- si cambias `develop`, GitHub Pages no cambia todavía
- si promueves esos cambios a `staging`, entonces sí se publica la nueva versión

---

## Parte E. Manejo simple de versiones

### Paso 12. Hacer un cambio en `develop`

Edita `config.js` así:

```js
window.APP_CONFIG = {
  environment: "develop",
  version: "v0.2.0-dev",
  updatedAt: "2026-04-09",
  changes: [
    "Se actualizó la versión en develop",
    "Se agregó un cambio visible antes de promover",
    "Se mantiene staging sin cambios hasta la promoción"
  ]
};
```

Guarda y revisa en el navegador.

Debes ver:

- entorno `develop`
- versión `v0.2.0-dev`

---

### Paso 13. Subir el cambio a `develop`

```powershell
git add .
git commit -m "feat: update develop version to v0.2.0-dev"
git push origin develop
```

Observa:

- el cambio ya está en el repositorio
- pero todavía no está publicado en GitHub Pages

---

## Parte F. Promoción de `develop` a `staging`

### Paso 14. Cambiar a la rama `staging`

```powershell
git checkout staging
git pull origin staging
```

---

### Paso 15. Promover cambios desde `develop`

Haz el merge:

```powershell
git merge develop
```

Ahora edita `config.js` para reflejar que la versión ya está en `staging`:

```js
window.APP_CONFIG = {
  environment: "staging",
  version: "v0.2.0-staging",
  updatedAt: "2026-04-09",
  changes: [
    "Se promovió una versión desde develop a staging",
    "La versión ya está publicada en el entorno de validación",
    "La interfaz permite ver claramente el entorno actual"
  ]
};
```

Este paso es importante porque enseña que:

- el mismo proyecto puede comportarse distinto según el entorno
- la versión visible puede cambiar al promocionarse

---

### Paso 16. Subir `staging`

```powershell
git add .
git commit -m "chore: promote version v0.2.0 to staging"
git push origin staging
```

Ahora GitHub Pages publicará lo que está en `staging`.

---

### Paso 17. Verificar el sitio publicado

La URL suele verse así:

```text
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

Abre la página y verifica que aparezcan:

- entorno `staging`
- versión `v0.2.0-staging`
- cambios correspondientes a la versión promovida

---

## Qué significa “multientorno” en este laboratorio

Aquí lo estamos trabajando de manera básica:

- `develop` representa el entorno donde haces cambios
- `staging` representa el entorno publicado para validación

No estamos usando infraestructura compleja.
Solo estamos usando ramas para representar etapas distintas del ciclo de entrega.

Eso es suficiente para comenzar a entender la idea.

---

## Entregables

Debes entregar lo siguiente:

### Entregable 1. URL del repositorio

Comparte la URL pública de tu repositorio.

### Entregable 2. URL del sitio publicado

Comparte la URL de GitHub Pages.

### Entregable 3. Evidencia de `develop`

Incluye una captura donde se vea:

- el archivo `config.js` en `develop`
- la versión `v0.2.0-dev`

### Entregable 4. Evidencia de `staging`

Incluye una captura donde se vea:

- el sitio publicado
- entorno `staging`
- versión `v0.2.0-staging`

### Entregable 5. Reflexión breve

Responde en 4 a 6 líneas:

- qué diferencia hay entre `develop` y `staging`
- por qué el sitio público no cambia cuando solo modificas `develop`
- qué ventaja tiene mostrar la versión en la interfaz

---

## Criterios de evaluación

### Criterio 1. Estructura del proyecto

Se espera que existan y funcionen:

- `index.html`
- `styles.css`
- `app.js`
- `config.js`

Valor sugerido: 25%

### Criterio 2. Publicación en GitHub

Se espera que:

- el repositorio exista
- GitHub Pages esté configurado correctamente
- el sitio público funcione

Valor sugerido: 25%

### Criterio 3. Manejo básico de versiones

Se espera que:

- exista una versión visible en `develop`
- exista una versión visible en `staging`
- la interfaz muestre entorno y versión correctamente

Valor sugerido: 25%

### Criterio 4. Comprensión conceptual

Se espera que el estudiante pueda explicar:

- qué representa cada rama
- cómo ocurre la promoción
- por qué la versión visible ayuda a identificar el estado del proyecto

Valor sugerido: 25%

---

## Lista de verificación final

- [ ] la página funciona localmente
- [ ] `develop` y `staging` existen
- [ ] GitHub Pages publica desde `staging`
- [ ] el entorno visible cambia entre ramas
- [ ] la versión visible cambia entre ramas
- [ ] la reflexión final fue completada

---

## Errores comunes

### GitHub Pages no muestra nada

Revisa:

- que el repositorio sea público
- que Pages esté configurado desde la rama `staging`
- que la carpeta seleccionada sea `/ (root)`

### El sitio publicado no cambia

Revisa:

- que sí hiciste `push` a `staging`
- que GitHub Pages está leyendo la rama correcta

### El entorno sigue apareciendo como `develop`

Revisa:

- el contenido de `config.js` en la rama `staging`

### La versión no cambia entre ramas

Revisa:

- que editaste `config.js` después del merge
- que hiciste commit y push en `staging`

---

## Cierre

Con este laboratorio ya estás practicando una forma muy básica, pero útil, de trabajar con multientornos.

Todavía no hay backend, base de datos o pipeline avanzado.
Pero ya existe una idea importante:

- una rama puede representar un entorno
- una versión puede identificarse visualmente
- un cambio puede desarrollarse en una etapa y publicarse en otra

Esa base es suficiente para avanzar después hacia prácticas más profesionales.

