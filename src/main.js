import { initSoundEffects, initWindowsSettings } from './js/init';
// const { invoke } = window.__TAURI__.tauri;

// let greetInputEl;
// let greetMsgEl;

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document
//     .querySelector("#greet-button")
//     .addEventListener("click", () => greet());
// });
(function init() {
	// let container = document.getElementById('roll-container');
	// let rollPage = document.createElement('roll-page');
	// rollPage.innerHTML = '<h1>This is dynamic content</h1>';
	// container.appendChild(rollPage);
	// includeHTML();
	window.addEventListener('DOMContentLoaded', function() {
		initSoundEffects();
		initWindowsSettings();
	});
})();
