/**
 * @file app.js
 * @description 
 * @author Valiente5tr: Juan V. Arenas
 * @copyright Abril 2026. Derechos de los good
 */

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